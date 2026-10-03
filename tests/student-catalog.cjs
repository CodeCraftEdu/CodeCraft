/* Tests élève sans dépendance : catalogue et navigation réelle dans Chrome isolé.
 * Exécuter : node tests/student-catalog.cjs (CHROME_PATH facultatif). */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const vm = require('node:vm');
const { spawn } = require('node:child_process');
const root = path.join(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), context);
const data = JSON.parse(JSON.stringify(context.window.CODECRAFT_DATA));
const orders = {
  'web-fondations': ['html-titres-paragraphes', 'html-listes', 'html-mini-page-fondations', 'html-liens', 'html-images'],
  'web-debutants': ['html-titres-paragraphes', 'html-listes', 'html-liens', 'html-revision', 'html-images', 'css-classes-couleurs', 'html-mini-page'],
  'web-avances': ['web-projet-cartes', 'html-parent-enfants', 'css-flexbox']
};
for (const [id, order] of Object.entries(orders)) assert.deepEqual(data.pathways[id].moduleIds, order);
for (const domain of Object.values(data.domains)) {
  for (const id of domain.pathwayIds) assert(data.pathways[id]);
  for (const id of domain.diagnosticModuleIds || []) assert.equal(data.modules[id].type, 'diagnostic');
}
for (const module of Object.values(data.modules)) {
  assert(data.domains[module.domainId]);
  assert(data.moduleTypes[module.type]);
  for (const skill of module.skillIds) assert(data.skills[skill], skill);
  const ids = module.blocks.flatMap(block => (block.items || []).map(item => item.id));
  assert.equal(new Set(ids).size, ids.length, module.title + ': identifiants de tâches uniques');
}
const css = data.modules['css-classes-couleurs'];
assert.deepEqual(css.skillIds, ['css.selectors', 'css.colors']);
assert(!/margin|padding|border|hover|flexbox/i.test(JSON.stringify(css)));
assert.equal(Object.values(data.modules).filter(module => module.title === css.title).length, 1);
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const moduleRoute = (id, pathway) => '#module/' + id + (pathway ? '?parcours=' + pathway : '');
(async () => {
  const allowed = new Set(['index.html', 'styles.css', 'app.js', 'lesson-data.js']);
  const server = http.createServer((req, res) => {
    const name = new URL(req.url, 'http://localhost').pathname.slice(1);
    if (!allowed.has(name)) { res.writeHead(404); res.end(); return; }
    res.setHeader('Content-Type', name.endsWith('.js') ? 'text/javascript; charset=utf-8' : name.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/html; charset=utf-8');
    res.end(fs.readFileSync(path.join(root, name)));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port + '/index.html';
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-student-qa-'));
  const chrome = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    ['--headless=new', '--disable-gpu', '--no-first-run', '--disable-background-networking', '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'],
    { windowsHide: true, stdio: 'ignore' });
  let ws, launchError;
  chrome.on('error', error => { launchError = error; });
  try {
    const portFile = path.join(profile, 'DevToolsActivePort');
    for (let i = 0; i < 100 && !fs.existsSync(portFile) && !launchError; i++) await pause(100);
    if (launchError) throw launchError;
    const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
    const targets = await (await fetch('http://127.0.0.1:' + port + '/json')).json();
    ws = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
    let seq = 0;
    const pending = new Map(), errors = [];
    ws.onmessage = event => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const request = pending.get(message.id); pending.delete(message.id);
        message.error ? request.reject(new Error(JSON.stringify(message.error))) : request.resolve(message.result);
      }
      if (message.method === 'Runtime.exceptionThrown') errors.push(message.params);
    };
    const call = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++seq; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = async expression => {
      const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    };
    const wait = async expression => {
      for (let i = 0; i < 100; i++) {
        if (await evaluate(expression)) return;
        await pause(50);
      }
      throw new Error('Timeout: ' + expression);
    };
    const readyTitle = title => wait('document.readyState === "complete" && document.querySelector("main h1")?.textContent === ' + JSON.stringify(title));
    const navigate = async (route, title) => {
      await call('Page.navigate', { url: base + route });
      await readyTitle(title);
    };
    const click = async (route, title) => {
      const selector = 'main a[href="' + route + '"]';
      assert(await evaluate('!!document.querySelector(' + JSON.stringify(selector) + ')'), route);
      await evaluate('document.querySelector(' + JSON.stringify(selector) + ').click()');
      await readyTitle(title);
    };
    await call('Runtime.enable'); await call('Page.enable');
    for (const [pathway, order] of Object.entries(orders)) {
      await navigate('', 'CodeCraft');
      await click('#parcours/' + pathway, data.pathways[pathway].title);
      const links = await evaluate(`Array.from(document.querySelectorAll('main a[href^="#module/"]'), a => a.getAttribute('href'))`);
      assert.deepEqual(links, order.map(id => moduleRoute(id, pathway)));
      await click(moduleRoute(order[0], pathway), data.modules[order[0]].title);
      for (let i = 0; i < order.length; i++) {
        const nav = await evaluate('Array.from(document.querySelectorAll(".module-navigation a"), a => a.getAttribute("href"))');
        assert(await evaluate('!!document.querySelector(' + JSON.stringify('main a[href="#parcours/' + pathway + '"]') + ')'));
        const neighbours = nav.filter(href => href.startsWith('#module/'));
        assert.deepEqual(neighbours, [order[i - 1], order[i + 1]].filter(Boolean).map(id => moduleRoute(id, pathway)));
        if (i + 1 < order.length) await click(moduleRoute(order[i + 1], pathway), data.modules[order[i + 1]].title);
      }
      for (let i = order.length - 2; i >= 0; i--) await click(moduleRoute(order[i], pathway), data.modules[order[i]].title);
      await click('#parcours/' + pathway, data.pathways[pathway].title);
    }
    for (const [id, module] of Object.entries(data.modules)) await navigate(moduleRoute(id), module.title);
    for (const [alias, route] of Object.entries(data.aliases)) {
      const id = route.split('/')[1];
      await navigate('#' + alias, (data.pathways[id] || data.modules[id]).title);
    }
    await navigate(moduleRoute('css-classes-couleurs', 'web-debutants'), css.title);
    assert.equal(await evaluate('document.querySelectorAll("main .code-block").length'), 2);
    assert.equal(await evaluate('document.querySelectorAll("main input[type=checkbox]").length'), 10);
    await evaluate('document.querySelector("main input[type=checkbox]").click()');
    assert.equal(await evaluate('document.querySelector("main input[type=checkbox]").checked'), true);
    await call('Page.reload'); await readyTitle(css.title);
    assert.equal(await evaluate('document.querySelector("main input[type=checkbox]").checked'), false);
    assert.equal(await evaluate('localStorage.length + sessionStorage.length'), 0);
    await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    assert(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), 'Pas de débordement horizontal mobile');
    assert.deepEqual(errors, []);
    console.log('OK : catalogue, parcours complets, précédent/suivant, retours, tous les modules directs, alias, CSS, cases temporaires, mobile et aucune exception JS.');
  } finally {
    if (ws) ws.close();
    chrome.kill();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
