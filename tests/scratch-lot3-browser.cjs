// Vérification courte du rendu : aucun accès aux fichiers privés ni compte Scratch.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const run = promisify(execFile);
const root = path.join(__dirname, '..');
(async () => {
  const server = http.createServer((request, response) => {
    const name = new URL(request.url, 'http://localhost').pathname.slice(1);
    if (!/^[a-z-]+\.(html|js|css)$/.test(name) || !fs.existsSync(path.join(root, name))) {
      response.writeHead(404); response.end(); return;
    }
    response.setHeader('Content-Type', name.endsWith('.js') ? 'text/javascript; charset=utf-8' : name.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/html; charset=utf-8');
    response.end(fs.readFileSync(path.join(root, name)));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port + '/';
  const cases = [
    ['index.html#module/scratch-fin-partie?parcours=scratch-debutants', 'Gagner, perdre et recommencer', dom => {
      assert.equal((dom.match(/class="scratch-script__condition scratch-script__condition--operator"/g) || []).length, 2);
      assert(dom.includes('#module/scratch-mini-jeu?parcours=scratch-debutants'));
      assert(!dom.includes('Scratch est en anglais ?'));
    }],
    ['index.html#module/scratch-mini-jeu?parcours=scratch-debutants', 'Mon premier mini-jeu', dom => {
      assert(dom.includes('Vérifie ton travail'));
      assert(dom.includes('#module/scratch-fin-partie?parcours=scratch-debutants'));
    }],
    ['index.html#module/scratch-coordination?parcours=scratch-debutants', 'Coordonner plusieurs personnages', dom => {
      assert(dom.includes('https://scratch.mit.edu/projects/1388027889/'));
      assert(dom.includes('Pico — lance le dialogue'));
      assert(dom.includes('Tera — répond au signal'));
      assert(dom.includes('#module/scratch-blocs-personnalises?parcours=scratch-debutants'));
      assert(!dom.includes('Scratch est en anglais ?'));
    }],
    ['index.html#module/scratch-blocs-personnalises?parcours=scratch-debutants', 'Créer ses propres blocs', dom => {
      assert(dom.includes('scratch-script__block--custom'));
      assert(dom.includes('définir retour au départ'));
      assert(dom.includes('#module/scratch-coordination?parcours=scratch-debutants'));
      assert(!dom.includes('Scratch est en anglais ?'));
    }],
    ['prof.html#guide/scratch-coordination', 'Guide professeur — Coordonner plusieurs personnages', dom => {
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('https://scratch.mit.edu/projects/1388025602/'));
    }],
    ['prof.html#guide/scratch-blocs-personnalises', 'Guide professeur — Créer ses propres blocs', dom => {
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('Deux appels demandent-ils deux définitions'));
    }],
    ['prof.html#guide/scratch-fin-partie', 'Guide professeur — Gagner, perdre et recommencer', dom => {
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('À -180 exactement'));
    }]
  ];
  try {
    for (const [route, title, verify] of cases) {
      const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-scratch-lot3-'));
      const { stdout } = await run(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        ['--headless=new', '--disable-gpu', '--no-first-run', '--disable-background-networking', '--user-data-dir=' + profile,
          '--virtual-time-budget=1500', '--dump-dom', base + route], { windowsHide: true, timeout: 20000, maxBuffer: 8 * 1024 * 1024 });
      assert(stdout.includes(title), title);
      verify(stdout);
      console.log('OK : ' + title);
    }
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
