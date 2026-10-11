const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const { publicFile } = require('./lib/public-files.cjs');
const execute = promisify(execFile);
const defaultRoot = path.resolve(__dirname, '..');

const client = String.raw`<script>
(() => {
  const stream = new EventSource('/__dev/events');
  let banner;
  stream.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.type === 'reload') location.reload();
    if (message.type === 'error') {
      if (!banner) {
        banner = document.createElement('pre');
        banner.setAttribute('role', 'alert');
        banner.style.cssText = 'position:fixed;z-index:100000;inset:0 0 auto;margin:0;padding:16px;background:#7b2020;color:white;white-space:pre-wrap;max-height:45vh;overflow:auto;font:14px monospace';
        document.body.append(banner);
      }
      banner.textContent = 'CodeCraft — erreur de développement\n' + message.error;
    }
  };
  addEventListener('pagehide', () => stream.close());
})();
</script>`;

async function startDevServer({
  root = defaultRoot,
  port = 8000,
  watch = true,
  debounce = 150,
  build,
  log = console,
} = {}) {
  const buildContent =
    build ||
    (() =>
      execute(process.execPath, [path.join(root, 'scripts/build-catalog.cjs')], {
        cwd: root,
        windowsHide: true,
      }));
  const clients = new Set();
  let lastError = null;
  let timer;
  let closed = false;
  let queued = false;
  let rebuilding = false;
  let buildRequested = false;
  const send = (message) => {
    for (const response of clients) response.write('data: ' + JSON.stringify(message) + '\n\n');
  };
  async function rebuild() {
    try {
      await buildContent();
      lastError = null;
      return true;
    } catch (error) {
      lastError = error.stderr?.trim() || error.message;
      log.error(lastError);
      send({ type: 'error', error: lastError });
      return false;
    }
  }
  await rebuild();
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://localhost');
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405);
      response.end();
      return;
    }
    if (url.pathname === '/__dev/events' && request.method === 'GET') {
      response.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-store',
        Connection: 'keep-alive',
      });
      response.write(': connected\n\n');
      clients.add(response);
      if (lastError)
        response.write('data: ' + JSON.stringify({ type: 'error', error: lastError }) + '\n\n');
      request.on('close', () => clients.delete(response));
      return;
    }
    const entry = publicFile(root, url.pathname);
    if (!entry) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }
    try {
      let body = fs.readFileSync(entry.file);
      if (entry.type.startsWith('text/html'))
        body = Buffer.from(body.toString('utf8').replace(/<\/body>/i, () => client + '\n</body>'));
      response.writeHead(200, { 'Content-Type': entry.type, 'Cache-Control': 'no-store' });
      response.end(request.method === 'HEAD' ? undefined : body);
    } catch {
      response.writeHead(404);
      response.end('Not found');
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });
  async function flush() {
    if (closed) return;
    if (rebuilding) {
      queued = true;
      return;
    }
    rebuilding = true;
    const needsBuild = buildRequested;
    buildRequested = false;
    try {
      if ((!needsBuild || (await rebuild())) && !closed) {
        send(lastError ? { type: 'error', error: lastError } : { type: 'reload' });
      }
    } finally {
      rebuilding = false;
      if (queued || buildRequested) {
        queued = false;
        schedule();
      }
    }
  }
  function schedule(name) {
    if (closed) return;
    if (name) {
      name = String(name).replace(/\\/g, '/');
      if (/^(?:content|schemas)\/.*\.json$/.test(name)) buildRequested = true;
      else if (
        !/\.(?:html|js|mjs|css|png|svg|jpg|jpeg|webp|gif|zip|txt|py)$/.test(name) ||
        /^(?:\.git|node_modules|generated|browser-artifacts|tests|docs|scripts)\//.test(name)
      )
        return;
    }
    clearTimeout(timer);
    timer = setTimeout(flush, debounce);
  }
  let watcher;
  try {
    if (watch) {
      watcher = fs.watch(root, { recursive: true }, (_, name) => {
        if (name) schedule(name);
      });
      watcher.on('error', (error) => {
        log.error(error.message);
        send({ type: 'error', error: error.message });
      });
    }
  } catch (error) {
    await new Promise((resolve) => server.close(resolve));
    throw error;
  }
  const heartbeat = setInterval(() => {
    for (const response of clients) response.write(': heartbeat\n\n');
  }, 20000);
  heartbeat.unref();
  const origin = 'http://127.0.0.1:' + server.address().port;
  const previewUrl = 'http://localhost:' + server.address().port;
  log.log(
    'CodeCraft : ' +
      previewUrl +
      '\nContenus surveillés, catalogue régénéré et aperçu rechargé. Ctrl+C pour arrêter.',
  );
  return {
    origin,
    previewUrl,
    async close() {
      closed = true;
      clearTimeout(timer);
      clearInterval(heartbeat);
      watcher?.close();
      for (const response of clients) response.end();
      clients.clear();
      await new Promise((resolve) => server.close(resolve));
    },
  };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const valid =
    args.length === 0 ||
    (args.length === 2 &&
      args[0] === '--port' &&
      /^\d+$/.test(args[1]) &&
      Number(args[1]) <= 65535);
  if (!valid) {
    console.error('Usage: npm run dev -- [--port 8000]');
    process.exitCode = 1;
  } else
    startDevServer({ port: args.length ? Number(args[1]) : 8000 })
      .then((app) => {
        for (const signal of ['SIGINT', 'SIGTERM'])
          process.once(signal, () => {
            app.close().catch(console.error);
          });
      })
      .catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
      });
}
module.exports = { startDevServer };
