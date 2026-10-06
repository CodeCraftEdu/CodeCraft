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
  const objective = document.querySelector('.lesson-intro .objective');
  const tool = document.querySelector('.lesson-intro > .button');
  if (objective && tool) {
    const a = objective.getBoundingClientRect(), b = tool.getBoundingClientRect();
    document.body.dataset.testToolOverlap = a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  }
  if (document.body.dataset.page === 'student') {
    document.body.dataset.testLowpoly = document.body.classList.contains('student-lowpoly') && getComputedStyle(document.body).backgroundSize !== '32px 32px';
    const routeBefore = location.href;
    document.querySelector('.skip-link').click();
    document.body.dataset.testSkip = location.href === routeBefore && document.activeElement.id === 'main-content';
    document.body.dataset.testRouteColor = getComputedStyle(document.body).getPropertyValue('--route').trim();
    const hint = document.querySelector('.hint');
    if (hint) { hint.open = true; document.body.dataset.testHint = hint.open; hint.open = false; }
    const checkbox = document.querySelector('.task-label input');
    if (checkbox) { checkbox.click(); document.body.dataset.testCheckbox = checkbox.checked; checkbox.click(); }
  }
});</script>`;
(async () => {
  const server = http.createServer((req, res) => {
    const name = new URL(req.url, 'http://localhost').pathname.slice(1);
    if (!/^(?:[a-z-]+\.(?:html|js|css)|assets\/(?:python|exercices)\/[a-z-]+\.svg|images\/[a-zA-Z0-9_.-]+)$/.test(name)) { res.writeHead(404); res.end(); return; }
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
    ['index.html', ['#domaine/python', '>Thonny<', 'images/home-python.svg', 'images/home-game.svg', 'images/home-web.svg'], 1200],
    ['index.html#domaine/python', ['#parcours/python-debutants', 'Premiers pas avec Python'], 1200],
    ['index.html#domaine/python', ['domain-banner', '#parcours/python-debutants'], 540],
    ['index.html#domaine/jeux-video', ['domain-banner', '#parcours/scratch-debutants', 'data-test-route-color="#a55d27"'], 1200],
    ['index.html#domaine/jeux-video', ['domain-banner', '#parcours/scratch-debutants'], 540],
    ['index.html#parcours/scratch-debutants', ['data-test-route-color="#a55d27"', '#module/scratch-reactions?parcours=scratch-debutants'], 1200],
    ['index.html#parcours/python-debutants', ids.map(id => '#module/' + id + '?parcours=python-debutants'), 1200],
    ...ids.map((id, i) => ['index.html#module/' + id + '?parcours=python-debutants', [
      '#parcours/python-debutants', 'https://thonny.org/',
      ...(i > 0 ? ['#module/' + ids[i - 1] + '?parcours=python-debutants'] : []),
      ...(i < ids.length - 1 ? ['#module/' + ids[i + 1] + '?parcours=python-debutants'] : [])
    ], 1200]),
    ...ids.map(id => ['prof.html#guide/' + id, ['Guide professeur', 'Questions et réponses attendues', 'Erreurs fréquentes et aides graduées', 'index.html#module/' + id], 1200]),
    ['index.html#module/python-saisie', ['Poser une question', 'href="#domaine/python"', 'la virgule sépare'], 1200],
    ['index.html#module/python-thonny?parcours=python-debutants&activite=reperes', ['code-diagram__editor', 'Après une modification du code'], 540],
    ['index.html', ['home-domain--python', '#domaine/web'], 540],
    ['index.html#domaine/web', ['#parcours/web-fondations', '#parcours/web-debutants', '#parcours/web-avances'], 1200],
    ['index.html#domaine/web', ['domain-banner', '#parcours/web-avances'], 540],
    ['index.html#parcours/web-debutants', ['#module/html-images?parcours=web-debutants'], 540],
    ['index.html#module/html-titres-paragraphes?parcours=web-fondations', ['data-test-route-color="#3f69c6"', 'data-test-checkbox="true"'], 1200],
    ['index.html#module/html-images?parcours=web-debutants', ['data-test-route-color="#4f8045"', 'Images HTML'], 540],
    ['index.html#module/css-flexbox?parcours=web-avances', ['data-test-route-color="#7653a5"', 'Flexbox'], 1200],
    ['index.html#module/diagnostic-web', ['data-test-route-color="#b7652c"', 'Ne cherche pas la réponse.'], 540],
    ['index.html#module/scratch-reactions', ['Faire réagir le jeu', 'data-test-route-color="#a55d27"'], 540],
    ['index.html#fondations', ['#module/html-titres-paragraphes?parcours=web-fondations'], 1200],
    ['index.html#main-content', ['#domaine/python'], 540]
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
        assert(!stdout.includes('Du code au résultat'));
        assert(!stdout.includes('code-diagram__arrow'));
        assert(!stdout.includes('code-diagram__execution'));
        assert(!stdout.includes('assets/python/thonny-reperes.svg'));
        assert.equal((stdout.match(/class="lesson-action"/g) || []).length, 3);
        assert(stdout.includes('Résultat dans la console'));
        assert(stdout.includes('pedagogy-choices__grid'));
        assert(!stdout.includes('pedagogy-choice--bonusActivities'));
        assert(stdout.includes('Bonus - garder deux essais'));
        assert.equal((stdout.match(/href="#module\/python-affichage\?parcours=python-debutants"/g) || []).length, 1, 'Une seule action Continuer');
        assert(!stdout.includes('visual-trial-card-preview'));
      }
      assert(stdout.includes('data-test-overflow="false"'), `${route}: débordement horizontal`);
      if (stdout.includes('data-test-tool-overlap=')) assert(stdout.includes('data-test-tool-overlap="false"'), `${route}: bouton outil superposé à l’objectif`);
      if (stdout.includes('data-test-hint=')) assert(stdout.includes('data-test-hint="true"'));
      if (stdout.includes('data-test-checkbox=')) assert(stdout.includes('data-test-checkbox="true"'));
      if (!route.startsWith('prof')) {
        if (route.startsWith('index.html#domaine/')) {
          assert(!stdout.includes('back-button'), 'Pas de bouton Accueil redondant sur les domaines');
          assert(/<a\b(?=[^>]*\bclass="brand")(?=[^>]*\bhref="#")[^>]*>/.test(stdout), 'Le mot-symbole conserve le retour à l’accueil');
        }
        if (route.startsWith('index.html#module/')) {
          assert(!stdout.includes('back-button'), 'Pas de retour Accueil redondant en bas du cours');
          assert(/<a\b(?=[^>]*\bclass="brand")(?=[^>]*\bhref="#")[^>]*>/.test(stdout), 'Retour Accueil conservé dans le mot-symbole');
        }
        assert(!stdout.includes('class="eyebrow"'), 'Pas de libellé Espace de cours dans les en-têtes');
        const home = route === 'index.html' || route === 'index.html#main-content';
        assert.equal(/class="student-lowpoly student-home"/.test(stdout), home, `${route}: fond d’accueil limité à l’accueil`);
        if (home) {
          assert(!stdout.includes('class="home-logo"'), 'Pas de logo isolé dans la bannière');
          assert(!stdout.includes('class="home-eyebrow"'), 'Pas de libellé superflu dans la bannière');
        }
        assert(stdout.includes('data-test-lowpoly="true"'));
        assert(stdout.includes('data-test-skip="true"'));
        assert(!stdout.includes('visual-trial-controls'));
        assert(stdout.includes('data-test-h1="1"'), `${route}: titre principal`);
        assert(stdout.includes('data-test-images="true"'), `${route}: image indisponible`);
      } else {
        assert(!stdout.includes('href="student-lowpoly.css"'));
        assert(!stdout.includes('class="student-lowpoly"'));
      }
      if (route.includes('python') || route === 'index.html') assert(!stdout.includes('href="https://codepen.io/pen"'), `${route}: mauvais outil`);
      console.log('OK : ' + route + ' (viewport ' + stdout.match(/data-test-viewport="(\d+)"/)[1] + 'px)');
    }
    console.log('Captures temporaires : ' + temp);
  } finally { await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode = 1; });
