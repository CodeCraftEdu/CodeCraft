const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { startDevServer } = require('../scripts/dev.cjs');
const { publicFile } = require('../scripts/lib/public-files.cjs');
const { writeFailureReport, writeRunSummary } = require('../scripts/lib/browser-report.cjs');
const { plan } = require('../scripts/check-target.cjs');
const { profiles } = require('../scripts/lib/test-targets.cjs');
const { studentScope } = require('./helpers/student-scope.cjs');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-dev-test-'));
  assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  for (const dir of ['content', 'generated', 'resources', '.git'])
    fs.mkdirSync(path.join(root, dir));
  fs.writeFileSync(path.join(root, 'index.html'), '<html><body>Preview</body></html>');
  fs.writeFileSync(path.join(root, 'content/example.json'), '{"value":1}');
  fs.writeFileSync(path.join(root, 'espace-codecraft-test.json'), 'private');
  fs.writeFileSync(path.join(root, '.git/config'), 'private');
  return root;
}
async function until(predicate) {
  for (let i = 0; i < 100; i++) {
    if (predicate()) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error('Timed out waiting for development event');
}
async function subscribe(origin) {
  const controller = new AbortController();
  const response = await fetch(origin + '/__dev/events', { signal: controller.signal });
  assert.equal(response.headers.get('content-type'), 'text/event-stream');
  const events = [];
  const complete = (async () => {
    let buffer = '';
    const decoder = new TextDecoder();
    for await (const chunk of response.body) {
      buffer += decoder.decode(chunk, { stream: true });
      let separator;
      while ((separator = buffer.indexOf('\n\n')) >= 0) {
        const message = buffer.slice(0, separator);
        buffer = buffer.slice(separator + 2);
        if (message.startsWith('data: ')) events.push(JSON.parse(message.slice(6)));
      }
    }
  })().catch((error) => {
    if (error.name !== 'AbortError') throw error;
  });
  return {
    events,
    async close() {
      controller.abort();
      await complete;
    },
  };
}

test('serveur dev : aperçu injecté uniquement à la réponse, fichiers privés et traversées refusés', async (t) => {
  const root = fixture(t);
  const app = await startDevServer({
    root,
    port: 0,
    watch: false,
    build() {},
    log: { log() {}, error() {} },
  });
  try {
    const response = await fetch(app.origin);
    const html = await response.text();
    assert.match(html, /EventSource/);
    new vm.Script(html.match(/<script>([\s\S]+)<\/script>/)[1]);
    assert.equal(
      fs.readFileSync(path.join(root, 'index.html'), 'utf8'),
      '<html><body>Preview</body></html>',
    );
    assert.equal(response.headers.get('cache-control'), 'no-store');
    for (const name of [
      '/espace-codecraft-test.json',
      '/.git/config',
      '/content/example.json',
      '/node_modules/test.js',
      '/resources/%2e%2e%2fespace-codecraft-test.json',
    ])
      assert.equal((await fetch(app.origin + name)).status, 404, name);
    assert.equal(publicFile(root, '/resources/../index.html'), null);
    assert.equal((await fetch(app.origin, { method: 'POST' })).status, 405);
    assert.equal(await (await fetch(app.origin, { method: 'HEAD' })).text(), '');
  } finally {
    await app.close();
  }
});

test('serveur dev : régénération surveillée, JSON invalide signalé et reprise après correction', async (t) => {
  const root = fixture(t);
  let builds = 0;
  const output = path.join(root, 'generated/catalog.js');
  const app = await startDevServer({
    root,
    port: 0,
    debounce: 30,
    build() {
      builds++;
      const value = JSON.parse(fs.readFileSync(path.join(root, 'content/example.json'), 'utf8'));
      fs.writeFileSync(output, JSON.stringify(value));
    },
    log: { log() {}, error() {} },
  });
  const stream = await subscribe(app.origin);
  try {
    fs.writeFileSync(path.join(root, 'content/example.json'), '{"value":2}');
    await until(() => stream.events.some((event) => event.type === 'reload'));
    assert.equal(fs.readFileSync(output, 'utf8'), '{"value":2}');
    stream.events.length = 0;
    fs.writeFileSync(path.join(root, 'content/example.json'), '{');
    await until(() => stream.events.some((event) => event.type === 'error'));
    assert.equal(fs.readFileSync(output, 'utf8'), '{"value":2}');
    const newStream = await subscribe(app.origin);
    try {
      await until(() => newStream.events.some((event) => event.type === 'error'));
    } finally {
      await newStream.close();
    }
    stream.events.length = 0;
    fs.writeFileSync(path.join(root, 'content/example.json'), '{"value":3}');
    await until(() => stream.events.some((event) => event.type === 'reload'));
    assert.equal(fs.readFileSync(output, 'utf8'), '{"value":3}');
    stream.events.length = 0;
    const before = builds;
    fs.writeFileSync(path.join(root, 'styles.css'), 'body { color: red; }');
    await until(() => stream.events.some((event) => event.type === 'reload'));
    assert.equal(builds, before);
  } finally {
    await stream.close();
    await app.close();
  }
});

test('rapports : erreur et URL échappées, liens vers les captures, aucun profil ou fichier fictif exposé', (t) => {
  const root = fixture(t);
  const run = path.join(root, 'run-test');
  const suite = path.join(run, 'student-browser');
  const profile = path.join(suite, 'codecraft-catalog-qa-test');
  fs.mkdirSync(profile, { recursive: true });
  fs.writeFileSync(path.join(profile, 'failure.png'), 'fake test bytes');
  fs.writeFileSync(
    path.join(profile, 'private-fixture.html'),
    '<html>Fictitious private data</html>',
  );
  fs.mkdirSync(path.join(profile, 'profile'));
  fs.writeFileSync(path.join(profile, 'profile/private.png'), 'not a screenshot');
  const error = '<script>alert(1)</script>';
  const report = writeFailureReport(profile, {
    suite: 'student-browser',
    url: 'http://localhost/#module/html-images',
    error,
    screenshot: 'failure.png',
  });
  assert.equal(JSON.parse(fs.readFileSync(path.join(profile, 'failure.json'))).error, error);
  const html = fs.readFileSync(report, 'utf8');
  assert(!html.includes(error));
  assert(html.includes('&lt;script&gt;'));
  const index = writeRunSummary(run, [{ suite: 'student-browser', status: 1 }], {
    scope: 'web',
    planned: ['student-browser', 'web-examples-browser'],
  });
  const contents = fs.readFileSync(index, 'utf8');
  assert(contents.includes('failure.html') && contents.includes('failure.png'));
  assert(
    contents.includes('Périmètre : web') &&
      contents.includes('Non exécutées : web-examples-browser'),
  );
  assert(!contents.includes('private-fixture') && !contents.includes('private.png'));
  const archive = fs.readFileSync(path.join(run, 'index.html'), 'utf8');
  assert(archive.includes('href="student-browser/'));
});

test('profils : chaque test existe, arguments inconnus rejetés et domaine réellement filtré', () => {
  for (const name of Object.keys(profiles)) {
    const target = plan([name]);
    assert(target.node.length && target.browser.length);
    for (const file of target.node) assert(fs.existsSync(file), file);
    for (const suite of target.browser)
      assert(fs.existsSync(path.resolve(__dirname, suite + '.cjs')), suite);
    assert.deepEqual(plan([name, '--node-only']).browser, []);
  }
  for (const args of [[], ['unknown'], ['web', '--skip'], ['web', '--node-only', '--node-only']])
    assert.throws(() => plan(args), /Usage/);
  const data = loadCatalog();
  for (const name of ['web', 'python', 'scratch', 'robotique', 'gdevelop']) {
    const selected = studentScope(data, name);
    assert(
      selected.modules.length > 0 && selected.modules.length < Object.keys(data.modules).length,
    );
    assert(
      selected.modules.every((id) =>
        ['scratch', 'gdevelop'].includes(name)
          ? id.startsWith(name + '-')
          : data.modules[id].domainId === name,
      ),
    );
  }
  assert.equal(studentScope(data, 'student').modules.length, Object.keys(data.modules).length);
  assert.throws(() => studentScope(data, 'unknown'), /Unknown/);
});
