const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { spawn, execFileSync } = require('node:child_process');
const { writeFailureReport } = require('../../scripts/lib/browser-report.cjs');
const { waitForChromePort } = require('./chrome-startup.cjs');
const pause = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
function removeChromeProfile(chromeProfile, directory) {
  if (
    path.dirname(path.resolve(chromeProfile)) !== path.resolve(directory) ||
    path.basename(chromeProfile) !== 'profile'
  ) {
    throw new Error('Unexpected Chrome profile cleanup path');
  }
  try {
    fs.rmSync(chromeProfile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  } catch (error) {
    if (process.platform === 'win32' && ['EPERM', 'EBUSY'].includes(error.code)) {
      execFileSync(
        'powershell.exe',
        [
          '-NoProfile',
          '-Command',
          'Remove-Item -LiteralPath $env:CODECRAFT_TEST_PROFILE -Recurse -Force -ErrorAction Stop',
        ],
        {
          windowsHide: true,
          timeout: 15000,
          env: { ...process.env, CODECRAFT_TEST_PROFILE: chromeProfile },
        },
      );
    } else throw error;
  }
}
async function withBrowser(run, { fixtures = {} } = {}) {
  const root = path.resolve(__dirname, '../..');
  const allowed =
    /^(?:index\.html|prof(?:-conducteur-historique)?\.html|generated\/catalog\.js|[a-z][a-z-]*\.(?:js|css)|src\/student\/[a-z-]+\.mjs|styles\/[a-z/-]+\.css|images\/[a-zA-Z0-9_.-]+\.(?:png|svg)|assets\/[a-z/-]+\.(?:png|svg))$/;
  const server = http.createServer((request, response) => {
    const name = new URL(request.url, 'http://localhost').pathname.slice(1);
    if (Object.hasOwn(fixtures, name)) {
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end(fixtures[name]);
      return;
    }
    const file = path.join(root, name);
    if (!allowed.test(name) || !fs.existsSync(file)) {
      response.writeHead(404);
      response.end();
      return;
    }
    const mime = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.mjs': 'text/javascript',
      '.css': 'text/css',
      '.png': 'image/png',
      '.svg': 'image/svg+xml',
    }[path.extname(name)];
    response.setHeader('Content-Type', mime);
    response.setHeader('Cache-Control', 'no-store');
    response.end(fs.readFileSync(file));
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port + '/';
  const artifactRoot = process.env.CODECRAFT_BROWSER_ARTIFACTS
    ? path.resolve(process.env.CODECRAFT_BROWSER_ARTIFACTS)
    : path.join(root, 'browser-artifacts');
  fs.mkdirSync(artifactRoot, { recursive: true });
  const profile = fs.mkdtempSync(path.join(artifactRoot, 'codecraft-catalog-qa-'));
  const chromeProfile = path.join(profile, 'profile');
  const chrome = spawn(
    process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    [
      '--headless=new',
      '--disable-gpu',
      '--force-device-scale-factor=1',
      '--no-first-run',
      '--disable-background-networking',
      '--remote-debugging-port=0',
      '--user-data-dir=' + chromeProfile,
      'about:blank',
    ],
    { windowsHide: true, stdio: 'ignore' },
  );
  let launchError;
  chrome.on('error', (error) => {
    launchError = error;
  });
  let socket;
  let closeBrowser;
  let captureFailure;
  let readContext;
  let lastUrl = 'about:blank';
  let failure;
  const errors = [];
  try {
    const portFile = path.join(chromeProfile, 'DevToolsActivePort');
    const port = await waitForChromePort(portFile, {
      launchError: () => launchError,
      hasExited: () => chrome.exitCode !== null || chrome.signalCode !== null,
    });
    const targets = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json();
    socket = new WebSocket(targets.find((target) => target.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      socket.addEventListener('open', resolve, { once: true });
      socket.addEventListener('error', reject, { once: true });
    });
    let sequence = 0;
    const pending = new Map();
    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const request = pending.get(message.id);
        if (!request) return;
        pending.delete(message.id);
        clearTimeout(request.timer);
        if (message.error) request.reject(new Error(JSON.stringify(message.error)));
        else request.resolve(message.result);
      } else if (
        message.method === 'Runtime.exceptionThrown' ||
        (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error')
      )
        errors.push(message.params);
    });
    socket.addEventListener('close', () => {
      for (const request of pending.values()) {
        clearTimeout(request.timer);
        request.reject(new Error('Chrome connection closed'));
      }
      pending.clear();
    });
    const call = (method, params = {}) =>
      new Promise((resolve, reject) => {
        if (method === 'Page.navigate') lastUrl = params.url;
        const id = ++sequence;
        const timer = setTimeout(() => {
          pending.delete(id);
          reject(new Error('Chrome command timed out: ' + method));
        }, 15000);
        timer.unref();
        pending.set(id, { resolve, reject, timer });
        socket.send(JSON.stringify({ id, method, params }));
      });
    closeBrowser = () => call('Browser.close');
    const evaluate = async (expression) => {
      const result = await call('Runtime.evaluate', {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    };
    const wait = async (expression, { transient = [] } = {}) => {
      for (let i = 0; i < 150; i++) {
        try {
          if (await evaluate(expression)) return;
        } catch (error) {
          if (!transient.some((name) => String(error).includes(name))) throw error;
        }
        await pause(50);
      }
      throw new Error('Timed out: ' + expression);
    };
    const navigate = async (page, route, title) => {
      await call('Page.navigate', { url: origin + page + route });
      await wait(
        'document.readyState === "complete" && document.querySelector("main h1")?.textContent === ' +
          JSON.stringify(title),
      );
    };
    await call('Runtime.enable');
    await call('Page.enable');
    const screenshot = async (name) => {
      if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Invalid screenshot name');
      const shot = await call('Page.captureScreenshot', { format: 'png' });
      const file = path.join(profile, name + '.png');
      fs.writeFileSync(file, Buffer.from(shot.data, 'base64'));
      return file;
    };
    captureFailure = () => screenshot('failure');
    readContext = () =>
      evaluate(
        '({url:location.href,title:document.title,viewport:{width:innerWidth,height:innerHeight}})',
      );
    await run({ call, evaluate, wait, navigate, screenshot, origin, profile, errors, pause });
    if (errors.length) throw new Error('Browser runtime errors: ' + JSON.stringify(errors));
    console.log('Screenshots: ' + profile);
  } catch (error) {
    failure = error;
    let context = { url: lastUrl };
    let screenshot;
    if (captureFailure && socket.readyState === WebSocket.OPEN) {
      context = await Promise.race([
        readContext().catch(() => context),
        pause(2000).then(() => context),
      ]);
      screenshot = await Promise.race([
        captureFailure().catch(() => null),
        pause(2000).then(() => null),
      ]);
    }
    try {
      const report = writeFailureReport(profile, {
        suite: process.env.CODECRAFT_BROWSER_SUITE || 'direct-browser-test',
        ...context,
        screenshot: screenshot ? 'failure.png' : null,
        error: error.stack || String(error),
        runtimeErrors: errors,
      });
      console.error('Rapport d’échec : ' + report);
    } catch (reportError) {
      console.error('Could not write failure report:', reportError.message);
    }
  } finally {
    try {
      if (closeBrowser && socket.readyState === WebSocket.OPEN) {
        await Promise.race([closeBrowser().catch(() => {}), pause(2000)]);
      }
      if (socket) socket.close();
      chrome.kill();
      await new Promise((resolve) => server.close(resolve));
      removeChromeProfile(chromeProfile, profile);
    } catch (cleanupError) {
      if (failure) console.error('Browser cleanup also failed:', cleanupError);
      else failure = cleanupError;
    }
  }
  if (failure) {
    if (!fs.existsSync(path.join(profile, 'failure.json'))) {
      try {
        writeFailureReport(profile, {
          suite: process.env.CODECRAFT_BROWSER_SUITE || 'direct-browser-test',
          url: lastUrl,
          error: failure.stack || String(failure),
          screenshot: null,
          runtimeErrors: errors,
        });
      } catch (reportError) {
        console.error('Could not write failure report:', reportError.message);
      }
    }
    throw failure;
  }
}
module.exports = { withBrowser };
