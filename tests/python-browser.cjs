// Rendu réel dans Chrome headless ; aucun compte ou fichier privé sélectionné.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { execFile, spawn } = require('node:child_process');
const { promisify } = require('node:util');
const run = promisify(execFile);
const root = path.join(__dirname, '..');
const vm = require('node:vm');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), sandbox);
const catalog = sandbox.window.CODECRAFT_DATA;
const ids = ['python-thonny', 'python-affichage', 'python-variables', 'python-saisie', 'python-conversation', 'python-calculs', 'python-erreurs', 'python-conditions', 'python-elif', 'python-aventure', 'python-for', 'python-while', 'python-compteurs', 'python-hasard', 'python-nombre-mystere', 'python-listes', 'python-texte', 'python-fonctions', 'python-retour', 'python-quiz'];
// Chrome impose parfois une largeur minimale de fenêtre de 500 px.
// L'émulation CDP garantit un vrai viewport CSS de 390 px, pas un faux mobile.
async function narrowBrowser(chrome, profile, url, width, screenshot) {
  const child = spawn(chrome, ['--headless=new', '--disable-gpu', '--no-first-run',
    '--no-default-browser-check', '--remote-debugging-port=0', '--user-data-dir=' + profile,
    'about:blank'], { windowsHide: true, stdio: 'ignore' });
  let socket;
  try {
    const activePort = path.join(profile, 'DevToolsActivePort'), deadline = Date.now() + 15000;
    while (!fs.existsSync(activePort)) {
      if (Date.now() > deadline) throw new Error('Chrome CDP indisponible');
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    const port = fs.readFileSync(activePort, 'utf8').split('\n')[0];
    const targets = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json();
    socket = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
    let requestId = 0, loaded;
    const pending = new Map();
    socket.addEventListener('message', event => {
      const message = JSON.parse(event.data);
      if (message.id && pending.has(message.id)) {
        const { resolve, reject, timer } = pending.get(message.id);
        clearTimeout(timer); pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message)); else resolve(message.result);
      }
      if (message.method === 'Page.loadEventFired') loaded?.();
    });
    const call = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++requestId;
      const timer = setTimeout(() => { pending.delete(id); reject(new Error('Délai CDP : ' + method)); }, 15000);
      pending.set(id, { resolve, reject, timer }); socket.send(JSON.stringify({ id, method, params }));
    });
    await call('Page.enable');
    await call('Emulation.setDeviceMetricsOverride', { width, height: 1100, deviceScaleFactor: 1, mobile: false });
    const pageLoaded = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Chargement mobile incomplet')), 15000);
      loaded = () => { clearTimeout(timer); resolve(); };
    });
    await call('Page.navigate', { url });
    await pageLoaded;
    await new Promise(resolve => setTimeout(resolve, 200));
    if (screenshot) {
      const capture = await call('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(screenshot, Buffer.from(capture.data, 'base64'));
      const footer = await call('Runtime.evaluate', { expression: "const footer = document.querySelector('.module-navigation--lesson'); if (footer) footer.scrollIntoView({ block: 'end', behavior: 'instant' }); !!footer", returnByValue: true });
      if (footer.result.value) {
        await new Promise(resolve => setTimeout(resolve, 200));
        const captureFooter = await call('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(screenshot.replace('.png', '-footer.png'), Buffer.from(captureFooter.data, 'base64'));
        await call('Runtime.evaluate', { expression: "const footerBox = footer.getBoundingClientRect(); document.body.dataset.testFooterVisible = footerBox.top >= 0 && footerBox.bottom <= innerHeight + 1" });
      }
    }
    const dom = await call('Runtime.evaluate', { expression: 'document.documentElement.outerHTML', returnByValue: true });
    await call('Browser.close');
    return dom.result.value;
  } finally {
    socket?.close();
    if (child.exitCode === null) {
      await new Promise(resolve => {
        const timer = setTimeout(() => { child.kill(); resolve(); }, 3000);
        child.once('exit', () => { clearTimeout(timer); resolve(); });
      });
    }
  }
}
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
    const intro = document.querySelector('.lesson-intro');
    if (intro) document.body.dataset.testScene = getComputedStyle(intro, '::before').backgroundImage.match(/banner-[a-z]+\.svg/)?.[0] || '';

    const hint = document.querySelector('.hint');
    if (hint) { hint.open = true; document.body.dataset.testHint = hint.open; hint.open = false; }
    const checkbox = document.querySelector('.task-label input');
    if (checkbox) { checkbox.click(); document.body.dataset.testCheckbox = checkbox.checked; checkbox.click(); }
  const navigationButtons = [...document.querySelectorAll('.module-navigation--lesson > .button')];
    if (document.body.dataset.lessonLayout) {
      document.body.dataset.testNavigationUnified = !!document.querySelector('.page-header--compact > .lesson-breadcrumbs');
    }
    if (innerWidth > 600 && navigationButtons.length === 2) {
      document.body.dataset.testNavigationEqual = Math.abs(navigationButtons[0].getBoundingClientRect().height - navigationButtons[1].getBoundingClientRect().height) < 1;
    }
  }
});</script>`;
(async () => {
  const server = http.createServer((req, res) => {
    const name = new URL(req.url, 'http://localhost').pathname.slice(1);
    if (!/^(?:[a-z-]+\.(?:html|js|css)|assets\/(?:python|exercices)\/[a-z-]+\.svg|images\/[a-zA-Z0-9_.-]+|resources\/gdevelop\/(?:kit-depart\.zip|kit\/(?:NOTICE|LICENCE)\.txt|kit\/images\/[a-z-]+\.png))$/.test(name)) { res.writeHead(404); res.end(); return; }
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
    ['index.html#parcours/gdevelop-debutants', ['#module/gdevelop-projet?parcours=gdevelop-debutants', '#module/gdevelop-deplacement?parcours=gdevelop-debutants', '#module/gdevelop-objets?parcours=gdevelop-debutants', '#module/gdevelop-evenements?parcours=gdevelop-debutants'], 1200],
    ['index.html#parcours/gdevelop-debutants', ['pathway-stage__title', 'Prendre les commandes', 'Explorer et ramasser — à venir'], 390],
    ['index.html#module/gdevelop-deplacement?parcours=python-debutants', ['Étape 1 · Prendre les commandes — Module 2 sur 4'], 1200],
    ...['gdevelop-projet', 'gdevelop-deplacement', 'gdevelop-objets', 'gdevelop-evenements'].flatMap(id => [
      ['index.html#module/' + id + '?parcours=gdevelop-debutants', ['lesson-checkpoint', 'aria-current="page"', 'data-test-scene="banner-game.svg"'], 1200],
      ['index.html#module/' + id + '?parcours=gdevelop-debutants', ['lesson-checkpoint', 'data-test-checkbox="true"'], 390],
      ['prof.html#guide/' + id, ['Guide professeur', 'Questions et réponses attendues', 'Erreurs fréquentes et aides graduées', 'index.html#module/' + id], 1200]
    ]),
    ['index.html', ['#domaine/python', '>Thonny<', 'images/home-python.svg', 'images/home-game.svg', 'images/home-web.svg'], 1200],
    ['index.html#domaine/python', ['#parcours/python-debutants', 'Premiers pas avec Python'], 1200],
    ['index.html#domaine/python', ['domain-banner', '#parcours/python-debutants'], 540],
    ['index.html#domaine/jeux-video', ['domain-banner', '#parcours/scratch-debutants', 'data-test-route-color="#a55d27"'], 1200],
    ['index.html#domaine/jeux-video', ['domain-banner', '#parcours/scratch-debutants'], 540],
    ['index.html#parcours/scratch-debutants', ['data-test-route-color="#a55d27"', '#module/scratch-reactions?parcours=scratch-debutants'], 1200],
    ['index.html#parcours/python-debutants', ids.map(id => '#module/' + id + '?parcours=python-debutants'), 1200],
    ...ids.map((id, i) => ['index.html#module/' + id + '?parcours=python-debutants', [
      '#parcours/python-debutants', ...(id === 'python-thonny' ? ['https://thonny.org/'] : []),
      ...(i > 0 ? ['#module/' + ids[i - 1] + '?parcours=python-debutants'] : []),
      ...(i < ids.length - 1 ? ['#module/' + ids[i + 1] + '?parcours=python-debutants'] : [])
    ], 1200]),
    ...ids.map(id => ['prof.html#guide/' + id, ['Guide professeur', 'Questions et réponses attendues', 'Erreurs fréquentes et aides graduées', 'index.html#module/' + id], 1200]),
    ...ids.slice(5).map(id => ['index.html#module/' + id + '?parcours=python-debutants', ['data-test-checkbox="true"', '#parcours/python-debutants'], 540]),
    ['index.html#module/python-saisie', ['Poser une question', 'href="#domaine/python"', 'la virgule sépare'], 1200],
    ['index.html#module/python-saisie?parcours=python-debutants', ['lesson-breadcrumbs', 'module-navigation--lesson', 'Bonus - deux questions'], 540],
    ['index.html#module/python-saisie', ['lesson-breadcrumbs', 'module-navigation--lesson', 'Bonus - deux questions'], 540],
    ['index.html#module/python-thonny?parcours=python-debutants&activite=reperes', ['code-diagram__editor', 'Après une modification du code'], 540],
    ['index.html', ['home-domain--python', '#domaine/web'], 540],
    ['index.html#domaine/web', ['#parcours/web-fondations', '#parcours/web-debutants', '#parcours/web-avances'], 1200],
    ['index.html#domaine/web', ['domain-banner', '#parcours/web-avances'], 540],
    ['index.html#parcours/web-debutants', ['#module/html-images?parcours=web-debutants'], 540],
    ['index.html#module/html-titres-paragraphes?parcours=web-fondations', ['data-test-route-color="#3f69c6"', 'data-test-checkbox="true"'], 1200],
    ['index.html#module/html-images?parcours=web-debutants', ['data-test-route-color="#4f8045"', 'Images HTML'], 540],
    ['index.html#module/css-flexbox?parcours=web-avances', ['data-test-route-color="#7653a5"', 'Flexbox'], 1200],
    ...['index.html#module/diagnostic-web', 'index.html#module/diagnostic-web?activite=diagnostic-1', 'index.html#rattrapage'].map(route =>
      [route, ['domain-banner', '#parcours/web-fondations', '#parcours/web-debutants', '#parcours/web-avances'], 540]),
    ['index.html#module/scratch-reactions', ['Faire réagir le jeu', 'data-test-route-color="#a55d27"'], 540],
    ...Object.entries(catalog.pathways).flatMap(([pathwayId, pathway]) =>
      pathway.moduleIds.filter(id => !ids.includes(id)).map(id =>
        ['index.html#module/' + id + '?parcours=' + pathwayId, ['data-lesson-layout="standard"'], 1200])),
    ['index.html#module/scratch-decouverte?parcours=scratch-debutants', ['lesson-checkpoint', 'Ouvrir Scratch'], 390],
    ...['html-titres-paragraphes', 'html-listes', 'html-liens'].flatMap(id => [
      ['index.html#module/' + id + '?parcours=web-fondations', ['lesson-checkpoint', 'data-test-checkbox="true"'], 390],
      ['index.html#module/' + id + '?parcours=web-debutants', ['lesson-checkpoint', 'data-test-checkbox="true"'], 390],
      ['prof.html#guide/' + id, ['Guide professeur', 'Questions et réponses attendues', 'Erreurs fréquentes et aides graduées', 'index.html#module/' + id], 1200]
    ]),
    ...[['html-mini-page-fondations', 'web-fondations'], ['html-revision', 'web-debutants'], ['web-projet-cartes', 'web-avances'], ['web-collection-cartes', 'web-avances']].flatMap(([id, pathway]) => [
      ['index.html#module/' + id + '?parcours=' + pathway, ['lesson-checkpoint', 'data-test-checkbox="true"'], 390],
      ['index.html#module/' + id, ['lesson-checkpoint', 'aria-current="page"'], 390],
      ['prof.html#guide/' + id, ['Guide professeur', 'Questions et réponses attendues', 'Erreurs fréquentes et aides graduées', 'index.html#module/' + id], 1200]
    ]),
    ['index.html#module/python-thonny?parcours=python-debutants', ['lesson-checkpoint', 'Télécharger Thonny'], 390],
    ['index.html#module/python-thonny', ['lesson-checkpoint', 'Télécharger Thonny'], 390],
    ['index.html#module/python-texte?parcours=python-debutants', ['lesson-checkpoint'], 390],
    ...['python-fonctions', 'python-retour', 'python-quiz'].flatMap(id => [
      ['index.html#module/' + id + '?parcours=python-debutants', ['lesson-checkpoint', 'aria-current="page"'], 390],
      ['index.html#module/' + id, ['lesson-checkpoint', 'aria-current="page"'], 390]
    ]),
    ['index.html#module/scratch-pilotage?parcours=scratch-debutants', ['lesson-checkpoint'], 390],
    ['index.html#module/scratch-mini-jeu?parcours=scratch-debutants', ['lesson-checkpoint'], 390],
    ['index.html#module/web-mini-site?parcours=web-debutants', ['lesson-checkpoint'], 390],
    ['index.html#module/css-flexbox?parcours=web-avances', ['lesson-checkpoint'], 390],
    ['index.html#module/html-titres-paragraphes', ['aria-current="page"'], 390],
    ['index.html#module/html-images?parcours=python-debutants', ['aria-current="page"'], 1200],
    ['index.html#fondations', ['#module/html-titres-paragraphes?parcours=web-fondations'], 1200],
    ['index.html#main-content', ['#domaine/python'], 540]
  ];
  try {
    const filter = process.argv[2];
    const selected = filter ? cases.filter(([route, , width]) => filter.split('|').some(part => (route + ':' + width).includes(part))) : cases;
    assert(selected.length, 'Aucune vue sélectionnée');
    for (const [route, expected, width] of selected) {
      const profile = fs.mkdtempSync(path.join(temp, 'profile-'));
      try {
      const captureId = route.startsWith('index.html#module/') ? route.split('#module/')[1].split('?')[0] : route === 'index.html#parcours/gdevelop-debutants' ? 'gdevelop-parcours' : null;
      const screenshot = captureId ? path.join(temp, captureId + '-' + (new URL(base + route).hash.match(/parcours=([^&]+)/)?.[1] || 'direct') + '-' + width + '.png') : null;
      const args = ['--headless=new', '--disable-gpu', '--force-device-scale-factor=1', '--no-first-run', '--no-default-browser-check', '--user-data-dir=' + profile,
        '--window-size=' + width + ',1100', '--virtual-time-budget=1500', '--dump-dom', ...(screenshot ? ['--screenshot=' + screenshot] : []), base + route];
      const stdout = width < 500
        ? await narrowBrowser(chrome, profile, base + route, width, screenshot)
        : (await run(chrome, args, { windowsHide: true, timeout: 20000, maxBuffer: 8 * 1024 * 1024 })).stdout;
      if (width < 500) assert(stdout.includes('data-test-viewport="' + width + '"'), 'Viewport mobile réellement émulé');
      for (const text of expected) assert(stdout.includes(text), `${route}: ${text}`);
      if (route.startsWith('index.html#module/python-saisie')) {
        assert(stdout.includes('data-lesson-layout="standard"'));
        assert.equal((stdout.match(/>Avant de commencer<\/h2>/g) || []).length, 1);
        assert(!stdout.includes('Avant de commencer — repères'));
        assert(!stdout.includes('Retour à l’accueil'));
        assert(!stdout.includes('Retour à l&#39;accueil'));
        assert(!stdout.includes('href="https://thonny.org/"'));
        assert(stdout.includes('data-test-navigation-unified="true"'));
        assert(stdout.includes('aria-current="page"'));
        assert(!stdout.includes('Suites conseillées'));
        assert(!stdout.includes('Pour consolider'));
        assert(!stdout.includes('Pour aller plus loin'));
        assert(!stdout.includes('Avant de continuer'));
        assert(!stdout.includes('Voir le parcours'));
        assert(!stdout.includes('Voir le domaine'));
        assert(!stdout.includes('lesson-options'));
        assert(stdout.includes('Bonus - deux questions'));
        assert(!stdout.includes('Ce que tu dois pouvoir montrer et expliquer'));
        assert(stdout.includes('lesson-checkpoint__list'));
        assert.equal((stdout.match(/lesson-card--reading/g) || []).length, 2, 'Deux cartes de découverte allégées');
        assert.equal((stdout.match(/lesson-card--practice/g) || []).length, 3, 'Guidé, autonomie et bonus distingués');
        assert(stdout.includes('Les essentiels'));
        assert(stdout.includes('Créer une autre question puis utiliser sa réponse, sans recopier tout le modèle.'));
        if (route.includes('parcours=python-debutants')) {
          assert.equal((stdout.match(/href="#module\/python-conversation\?parcours=python-debutants"/g) || []).length, 1, 'Lien suivant non répété');
          if (width > 600) assert(stdout.includes('data-test-navigation-equal="true"'), 'Boutons de même hauteur');
        }
      }
      if (route.startsWith('index.html#module/python-') && !route.startsWith('index.html#module/python-thonny')) {
        assert(!stdout.includes('href="https://thonny.org/"'), 'Lien Thonny limité à la première leçon');
      }
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
        assert(!stdout.includes('pedagogy-choices__grid'));
        assert(!stdout.includes('pedagogy-choice--bonusActivities'));
        assert(stdout.includes('Bonus - garder deux essais'));
        const nextHref = route.includes('parcours=python-debutants')
          ? '#module/python-affichage?parcours=python-debutants'
          : '#module/python-affichage';
        assert.equal((stdout.match(/href="[^"]*"/g) || []).filter(link => link === 'href="' + nextHref + '"').length, 1, 'Une seule action Continuer avec le contexte attendu');
        assert(!stdout.includes('visual-trial-card-preview'));
        assert(stdout.includes('À toi - créer et retrouver un fichier'));
        assert(stdout.includes('Crée accueil.py'));
      }
      if (ids.slice(1, 4).some(id => route.startsWith('index.html#module/' + id))) {
        assert.equal((stdout.match(/>Avant de commencer<\/h2>/g) || []).length, 1);
        assert(!stdout.includes('Avant de commencer — repères'));
        assert(!stdout.includes('Stop/Restart'));
      }
      if (ids.slice(5).some(id => route.startsWith('index.html#module/' + id))) {
        assert.equal((stdout.match(/>Avant de commencer<\/h2>/g) || []).length, 1);
        assert(!stdout.includes('Avant de commencer — repères'), 'Préparation et prérequis fusionnés');
      }
      if (route.startsWith('index.html#module/python-conversation')) {
        assert(!stdout.includes('Avant de commencer — repères'));
        assert(stdout.includes('conversation_modifiee.py'));
      }
      if (route.startsWith('index.html#module/python-calculs')) {
        assert(stdout.includes('Pour explorer - autres opérations et écritures'));
        assert(/<details\b[^>]*data-activity-id="exploration"/.test(stdout));
      }
      if (route.startsWith('index.html#module/python-erreurs')) {
        assert(stdout.includes('Un programme à diagnostiquer'));
        assert(stdout.includes('diagnostic_conversion.py'));
      }
      if (route.startsWith('index.html#module/python-for')) {
        assert(stdout.includes('range(1, 1)'));
        assert(stdout.includes('parcours_vide.py'));
      }
      if (route.startsWith('index.html#module/python-while')) {
        assert(stdout.includes('borne_personnelle.py'));
        assert(stdout.includes('Sans exécuter une version incorrecte'));
      }
      if (route.startsWith('index.html#module/python-compteurs')) {
        assert(stdout.includes('collecte_score.py'));
        assert(stdout.includes('Deux variables suffisent'));
        assert(stdout.includes('Une décision dans chaque tour'));
      }
      if (route.startsWith('index.html#module/python-hasard')) {
        assert(stdout.includes('Ne nomme pas ton fichier random.py'));
        assert(stdout.includes('valeur_conservee.py'));
        assert(stdout.includes('nouveaux_tirages.py'));
      }
      if (route.startsWith('index.html#module/python-nombre-mystere')) {
        assert(stdout.includes('Retire la branche Trouvé'));
        assert(stdout.includes('Choisis toi-même une proposition'));
        assert(stdout.includes('test_nombre_mystere.py'));
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
        if (route.startsWith('index.html#module/diagnostic-web') || route === 'index.html#rattrapage' || route === 'index.html#domaine/web') {
          assert(!stdout.includes('Diagnostic Web'), 'Module retiré du domaine Web');
          assert(!stdout.includes('href="#module/diagnostic-web'), 'Aucun lien vers le module retiré');
          assert.equal((stdout.match(/class="route-card /g) || []).length, 3, 'Trois parcours Web seulement');
          assert(!stdout.includes('data-lesson-layout="standard"'), 'Ancienne adresse redirigée vers le domaine');
        }
        if (route.startsWith('index.html#module/') && !route.startsWith('index.html#module/diagnostic-web')) {
          const params = new URLSearchParams(route.split('?')[1] || '');
          const id = route.split('#module/')[1].split('?')[0], module = catalog.modules[id];
          const candidate = catalog.pathways[params.get('parcours')];
          const valid = candidate?.domainId === module.domainId && candidate.moduleIds.includes(id);
          const containing = Object.values(catalog.pathways).filter(p => p.domainId === module.domainId && p.moduleIds.includes(id));
          const sequence = valid ? candidate : containing.length === 1 ? containing[0] : null;
          const context = valid ? '?parcours=' + params.get('parcours') : '';
          const neighbors = sequence ? [sequence.moduleIds[sequence.moduleIds.indexOf(id) - 1], sequence.moduleIds[sequence.moduleIds.indexOf(id) + 1]].filter(Boolean) : [];
          assert(stdout.includes('data-lesson-layout="standard"'));
          assert(stdout.includes('data-test-navigation-unified="true"'));
          assert(stdout.includes('aria-current="page"'));
          assert(!stdout.includes('Choisir la suite'), 'Pas de liens d’orientation redondants');
          assert(!stdout.includes('Voir le parcours'));
          const nav = stdout.match(/<nav class="module-navigation module-navigation--lesson"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || '';
          assert.equal((nav.match(/<a\b/g) || []).length, neighbors.length, 'Voisins réels du parcours');
          for (const neighbor of neighbors) assert(nav.includes('href="#module/' + neighbor + context + '"'), 'Contexte de navigation valide');
          if (width > 600 && neighbors.length === 2) assert(stdout.includes('data-test-navigation-equal="true"'));
          if (width < 500 && neighbors.length) assert(stdout.includes('data-test-footer-visible="true"'), 'Fin de leçon visible sur la capture mobile');
          const essentials = stdout.match(/<ul class="lesson-checkpoint__list">([\s\S]*?)<\/ul>/)?.[1] || '';
          assert.equal((essentials.match(/<li\b/g) || []).length, module.masteryCriteria?.length || 0, 'Critères propres à chaque leçon');
          for (const point of module.masteryCriteria || []) {
            const encoded = point.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
            assert(essentials.includes(encoded), 'Critère pédagogique conservé : ' + point);
          }
          const scene = module.domainId === 'python' ? 'banner-python.svg' : module.domainId === 'jeux-video' ? 'banner-game.svg' : 'banner-web.svg';
          assert(stdout.includes('data-test-scene="' + scene + '"'), 'Paysage du domaine');
          const theme = valid ? candidate.theme : module.theme;
          const color = module.domainId === 'python' ? '#3f69c6' : module.domainId === 'jeux-video' ? '#a55d27' : { fondations: '#3f69c6', debutants: '#4f8045', avances: '#7653a5', rattrapage: '#b7652c' }[theme];
          assert(stdout.includes('data-test-route-color="' + color + '"'), 'Palette du contexte');
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
      if (route.startsWith('index.html#module/python-') || route.startsWith('index.html#domaine/python') || route.startsWith('index.html#parcours/python-') || route.startsWith('prof.html#guide/python-') || route === 'index.html') assert(!stdout.includes('href="https://codepen.io/pen"'), `${route}: mauvais outil`);
      if (route.startsWith('index.html#module/gdevelop-')) {
        assert(!stdout.includes('href="https://codepen.io/pen"'), 'Pas de faux outil CodePen');
        const id = route.split('#module/')[1].split('?')[0];
        const stage = catalog.pathways['gdevelop-debutants'].stages[0];
        const position = stage.moduleIds.indexOf(id) + 1;
        assert(stdout.includes('Étape 1 · Prendre les commandes — Module ' + position + ' sur 4'), 'Position dans l’étape, sans acquis automatique');
        assert.equal(stdout.includes('class="lesson-stage-pause"'), position === 4, 'Pause seulement dans la dernière leçon');
        assert.equal(stdout.includes('Projet d’étape 1 — Ma scène explorable'), position === 4, 'Mini-projet uniquement en fin d’étape');
        if (position === 4) assert(stdout.includes('Repères pour le projet d’étape'), 'Critères du mini-projet visibles');
        assert(!stdout.includes('role="progressbar"'), 'Pas de jauge de maîtrise');
        assert.equal(stdout.includes('href="https://gdevelop.io/download"'), id === 'gdevelop-projet', 'Téléchargement du moteur uniquement dans la première leçon');
        for (const resource of catalog.modules[id].blocks.flatMap(block => block.downloads || [])) {
          assert(stdout.includes('download="' + resource.filename + '"'), 'Attribut téléchargement conservé');
          const response = await fetch(base + resource.path);
          assert.equal(response.status, 200, 'Ressource téléchargeable via HTTP');
          const bytes = Buffer.from(await response.arrayBuffer());
          assert.deepEqual(bytes, fs.readFileSync(path.join(root, resource.path)), 'Téléchargement non altéré');
        }
      }
      if (route === 'index.html#parcours/gdevelop-debutants') {
        assert.equal((stdout.match(/class="pathway-stage"/g) || []).length, 1);
        assert(stdout.includes('aria-labelledby="pathway-stage-prendre-commandes"'));
        assert(stdout.includes('Projet de fin d’étape : Ma scène explorable'));
        assert(stdout.includes('Explorer et ramasser — à venir'));
        assert.equal((stdout.match(/class="route-card /g) || []).length, 4, 'Pas de carte vide ou bloquée');
        const offsets = catalog.pathways['gdevelop-debutants'].moduleIds.map(id => stdout.indexOf('href="#module/' + id + '?parcours=gdevelop-debutants"'));
        assert(offsets.every((offset, i) => offset >= 0 && (i === 0 || offset > offsets[i - 1])), 'Ordre du parcours inchangé');
        assert(!stdout.includes('role="progressbar"'));
      }
      if ((route.startsWith('index.html#module/') || route.startsWith('index.html#parcours/')) && !route.includes('gdevelop-')) {
        assert(!stdout.includes('lesson-stage-location'));
        assert(!stdout.includes('class="pathway-stage"'));
      }
      console.log('OK : ' + route + ' (viewport ' + stdout.match(/data-test-viewport="(\d+)"/)[1] + 'px)');
      } finally {
        // Le répertoire vient de mkdtemp et doit rester un enfant direct de
        // notre dossier temporaire ; ne jamais supprimer les captures parentes.
        assert.equal(path.dirname(path.resolve(profile)), path.resolve(temp));
        assert(/^profile-[a-zA-Z0-9]+$/.test(path.basename(profile)));
        await new Promise(resolve => setTimeout(resolve, 150));
        try {
          fs.rmSync(profile, { recursive: true, force: true, maxRetries: 20, retryDelay: 100 });
        } catch (error) {
          if (process.platform !== 'win32' || !['EPERM', 'EBUSY'].includes(error.code)) throw error;
          // Windows peut conserver les attributs protégés de Chrome ; le chemin
          // absolu a été vérifié ci-dessus et n'est pas interpolé dans une commande.
          await run('powershell.exe', ['-NoProfile', '-Command',
            'Remove-Item -LiteralPath $env:CODECRAFT_TEST_PROFILE -Recurse -Force -ErrorAction Stop'],
          { windowsHide: true, timeout: 15000, env: { ...process.env, CODECRAFT_TEST_PROFILE: profile } });
        }
      }
    }
    console.log('Vues vérifiées : ' + selected.length);
    console.log('Captures temporaires : ' + temp);
  } finally { await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode = 1; });
