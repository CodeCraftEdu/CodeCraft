// Rendu réel dans Chrome headless ; aucun compte ou fichier privé sélectionné.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const run = promisify(execFile);
const root = path.join(__dirname, '..');
const ids = ['python-thonny', 'python-affichage', 'python-variables', 'python-saisie', 'python-conversation'];
const probe = `<script>addEventListener('load', () => {
  document.body.dataset.testH1 = document.querySelectorAll('h1').length;
  document.body.dataset.testViewport = innerWidth;
  document.body.dataset.testOverflow = document.documentElement.scrollWidth > innerWidth;
  document.body.dataset.testImages = Array.from(document.images).every(i => i.complete && i.naturalWidth > 0);
  const original = document.querySelector('[data-visual-style="original"]');
  const adventure = document.querySelector('[data-visual-style="adventure"]');
  const blocks = document.querySelector('[data-visual-style="blocks"]');
  if (original && adventure && blocks) {
    const editor = document.querySelector('.code-diagram__editor');
    adventure.click();
    const trialColor = getComputedStyle(editor).backgroundColor;
    original.click();
    const originalColor = getComputedStyle(editor).backgroundColor;
    const restored = original.getAttribute('aria-pressed') === 'true' && !document.querySelector('.visual-trial--adventure');
    adventure.click();
    document.body.dataset.testStyleSwitch = restored && trialColor !== originalColor && getComputedStyle(editor).backgroundColor === trialColor;
    blocks.click();
    const blockColor = getComputedStyle(editor).backgroundColor;
    document.body.dataset.testBlockStyle = blocks.getAttribute('aria-pressed') === 'true' && !document.querySelector('.visual-trial--adventure') && blockColor !== trialColor && blockColor !== originalColor && document.documentElement.scrollWidth <= innerWidth;
    original.click();
    document.body.dataset.testBlockRestore = getComputedStyle(editor).backgroundColor === originalColor && !document.querySelector('.visual-trial--blocks');
    const preview = document.querySelector('.visual-trial-card-preview');
    const hidden = preview && getComputedStyle(preview).display === 'none';
    adventure.click();
    document.body.dataset.testCardPreview = hidden && getComputedStyle(preview).display !== 'none' && document.documentElement.scrollWidth <= innerWidth;
  }
});</script>`;
(async () => {
  const server = http.createServer((req, res) => {
    const name = new URL(req.url, 'http://localhost').pathname.slice(1);
    if (!/^(?:[a-z-]+\.(?:html|js|css)|assets\/python\/[a-z-]+\.svg|images\/[a-zA-Z0-9_.-]+)$/.test(name)) { res.writeHead(404); res.end(); return; }
    const file = path.join(root, name);
    if (!fs.existsSync(file)) { res.writeHead(404); res.end(); return; }
    const ext = path.extname(name);
    const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' }[ext];
    res.setHeader('Content-Type', (mime || 'application/octet-stream') + (['.html', '.js', '.css'].includes(ext) ? '; charset=utf-8' : ''));
    if (ext === '.html') res.end(fs.readFileSync(file, 'utf8').replace('</body>', probe + '</body>'));
    else res.end(fs.readFileSync(file));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port + '/';
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-python-browser-'));
  const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const cases = [
    ['index.html', ['#domaine/python', 'PYTHON · THONNY'], 1200],
    ['index.html#domaine/python', ['#parcours/python-debutants', 'Premiers pas avec Python'], 1200],
    ['index.html#parcours/python-debutants', ids.map(id => '#module/' + id + '?parcours=python-debutants'), 1200],
    ...ids.map((id, i) => ['index.html#module/' + id + '?parcours=python-debutants', [
      '#parcours/python-debutants', 'https://thonny.org/',
      ...(i > 0 ? ['#module/' + ids[i - 1] + '?parcours=python-debutants'] : []),
      ...(i < ids.length - 1 ? ['#module/' + ids[i + 1] + '?parcours=python-debutants'] : [])
    ], 1200]),
    ...ids.map(id => ['prof.html#guide/' + id, ['Guide professeur', 'Questions et réponses attendues', 'Erreurs fréquentes et aides graduées', 'index.html#module/' + id], 1200]),
    ['index.html#module/python-saisie', ['Poser une question', 'href="#domaine/python"', 'la virgule sépare'], 1200],
    ['index.html#module/python-thonny?parcours=python-debutants&activite=reperes', ['code-diagram__editor', 'Après une modification du code'], 540]
  ];
  try {
    const filter = process.argv[2];
    const selected = filter ? cases.filter(([route, , width]) => (route + ':' + width).includes(filter)) : cases;
    assert(selected.length, 'Aucune vue sélectionnée');
    for (const [route, expected, width] of selected) {
      const profile = fs.mkdtempSync(path.join(temp, 'profile-'));
      const screenshot = route.includes('python-thonny?') ? path.join(temp, width < 700 ? 'thonny-mobile.png' : 'thonny-desktop.png') : null;
      const args = ['--headless=new', '--disable-gpu', '--force-device-scale-factor=1', '--no-first-run', '--no-default-browser-check', '--user-data-dir=' + profile,
        '--window-size=' + width + ',1100', '--virtual-time-budget=1500', '--dump-dom', ...(screenshot ? ['--screenshot=' + screenshot] : []), base + route];
      const { stdout } = await run(chrome, args, { windowsHide: true, timeout: 20000, maxBuffer: 8 * 1024 * 1024 });
      for (const text of expected) assert(stdout.includes(text), `${route}: ${text}`);
      if (route.startsWith('index.html#module/python-thonny')) {
        assert.equal((stdout.match(/>Avant de commencer<\/h2>/g) || []).length, 1, 'Un seul encart de démarrage');
        assert(!stdout.includes('Avant de commencer — repères'));
        assert(!stdout.includes('avec un adulte'));
        assert(stdout.includes('cela signifie que Python attend une instruction'));
        assert(stdout.includes('lesson-page--workshop'));
        assert(stdout.includes('code-diagram__console'));
        assert(stdout.includes('code-diagram__tools'));
        assert(stdout.includes('data-test-style-switch="true"'), 'Retour au style original et réactivation de l’essai');
        assert(stdout.includes('data-test-block-style="true"'));
        assert(stdout.includes('data-test-block-restore="true"'));
        assert(!stdout.includes('Du code au résultat'));
        assert(!stdout.includes('code-diagram__arrow'));
        assert(!stdout.includes('code-diagram__execution'));
        assert(!stdout.includes('assets/python/thonny-reperes.svg'));
        assert.equal((stdout.match(/class="lesson-action"/g) || []).length, 3);
        assert(stdout.includes('Résultat dans la console'));
        assert(stdout.includes('pedagogy-choices__grid'));
        assert(!stdout.includes('pedagogy-choice--bonusActivities'));
        assert(stdout.includes('Bonus - garder deux essais'));
        assert.equal((stdout.match(/href="#module\/python-affichage\?parcours=python-debutants"/g) || []).length, 2, 'Une action Continuer et un lien dans l’aperçu exploratoire');
        assert(stdout.includes('adventure-module-card__access'));
        assert(stdout.includes('data-test-card-preview="true"'));
        assert(stdout.includes('aria-label="Ouvrir le module Afficher des messages"'));
        assert(stdout.includes('class="adventure-gem" aria-hidden="true"'));
      }
      assert(stdout.includes('data-test-overflow="false"'), `${route}: débordement horizontal`);
      if (!route.startsWith('prof')) {
        assert(stdout.includes('data-test-h1="1"'), `${route}: titre principal`);
        assert(stdout.includes('data-test-images="true"'), `${route}: image indisponible`);
      }
      assert(!stdout.includes('href="https://codepen.io/pen"'), `${route}: mauvais outil`);
      console.log('OK : ' + route + ' (viewport ' + stdout.match(/data-test-viewport="(\d+)"/)[1] + 'px)');
    }
    console.log('Captures temporaires : ' + temp);
  } finally { await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode = 1; });
