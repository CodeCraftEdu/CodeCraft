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
    ['index.html#module/scratch-reactions?parcours=scratch-debutants', 'Faire réagir le jeu', dom => {
      assert(dom.includes('Sauvegarde ton projet actuel avant de commencer'));
      assert(dom.includes('Taille sous la scène à 100'));
      assert(dom.includes('y = 120'));
      assert(!dom.includes('y = 60 puis rejoins'));
    }],
    ['prof.html#guide/scratch-reactions', 'Guide professeur — Faire réagir le jeu', dom => {
      assert(dom.includes('suspend cette pile'));
      assert(dom.includes('cible (80, 120)'));
      assert(!dom.includes('Retirer les anciennes commandes'));
    }],
    ['index.html#module/scratch-variables?parcours=scratch-debutants', 'Compter et mémoriser', dom => {
      assert(dom.includes('sans créer un projet vide'));
      assert(dom.includes('Reviens ensuite dans Compter et mémoriser'));
      assert(!dom.includes('Ouvrir le projet de départ'));
    }],
    ['prof.html#guide/scratch-variables', 'Guide professeur — Compter et mémoriser', dom => {
      assert(dom.includes('deuxième contact → 2'));
      assert(dom.includes('depuis 5, un contact donne 7'));
    }],
    ['index.html#module/scratch-actions?parcours=scratch-debutants', 'Déclencher et enchaîner des actions', dom => {
      assert(dom.includes('Fichier → Nouveau'));
      assert(dom.includes('Détache d’abord la suite'));
      assert(!dom.includes('Retire ton ancienne pile'));
    }],
    ['prof.html#guide/scratch-actions', 'Guide professeur — Déclencher et enchaîner des actions', dom => {
      assert(dom.includes('Quels blocs font attendre'));
      assert(dom.includes('insérer le message'));
    }],
    ['index.html#module/scratch-pilotage?parcours=scratch-debutants', 'Piloter un personnage', dom => {
      assert(dom.includes('Fichier → Nouveau'));
      assert(dom.includes('https://scratch.mit.edu/projects/1388027652/'));
      assert(dom.includes('Quatre piles séparées'));
    }],
    ['prof.html#guide/scratch-pilotage', 'Guide professeur — Piloter un personnage', dom => {
      assert(dom.includes('Garder ensuite ce projet'));
      assert(dom.includes('cinq piles de base'));
    }],
    ['index.html#module/scratch-boucles?parcours=scratch-debutants', 'Répéter des actions', dom => {
      assert(dom.includes('aucune ancienne boucle ne tournera en même temps'));
      assert(!dom.includes('retire les autres piles'));
    }],
    ['prof.html#guide/scratch-boucles', 'Guide professeur — Répéter des actions', dom => {
      assert(dom.includes('quatre pauses de 0.3'));
      assert(dom.includes('quatre puis deux tours'));
    }],
    ['index.html#module/scratch-projet-personnel?parcours=scratch-debutants', 'Mon projet personnel', dom => {
      assert(dom.includes('https://scratch.mit.edu/projects/1388027652/'));
      assert(!dom.includes('https://scratch.mit.edu/projects/1388025424/'));
      assert(dom.includes('#module/scratch-debogage?parcours=scratch-debutants'));
      assert(dom.includes('Une seule extension') || dom.includes('une seule extension'));
      assert(dom.includes('Deux parties complètes'));
    }],
    ['prof.html#guide/scratch-projet-personnel', 'Guide professeur — Mon projet personnel', dom => {
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('https://scratch.mit.edu/projects/1388025424/'));
      assert(dom.includes('Faut-il utiliser des clones et des messages'));
    }],
    ['index.html#module/scratch-debogage?parcours=scratch-debutants', 'Déboguer son jeu', dom => {
      assert(dom.includes('À réparer — ordre volontairement incorrect'));
      assert(dom.includes('Un score qui reste à un'));
      assert(dom.includes('scratch-script__condition--operator'));
      assert(dom.includes('#module/scratch-temps-difficulte?parcours=scratch-debutants'));
      assert(dom.includes('Sans solution — deux enquêtes'));
    }],
    ['prof.html#guide/scratch-debogage', 'Guide professeur — Déboguer son jeu', dom => {
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('Le message arrive encore au quatrième point'));
      assert(dom.includes('Une position effacée'));
    }],
    ['index.html#module/scratch-clones?parcours=scratch-debutants', 'Créer plusieurs personnages avec des clones', dom => {
      assert(dom.includes('quand je commence comme un clone'));
      assert(dom.includes('supprimer ce clone'));
      assert(dom.includes('#module/scratch-temps-difficulte?parcours=scratch-debutants'));
      assert(dom.includes('#module/scratch-blocs-personnalises?parcours=scratch-debutants'));
      assert(dom.includes('scratch-script__block--looks'));
    }],
    ['index.html#module/scratch-temps-difficulte?parcours=scratch-debutants', 'Gérer le temps et la difficulté', dom => {
      assert(dom.includes('réinitialiser le chronomètre'));
      assert(dom.includes('scratch-script__block--sensing'));
      assert.equal((dom.match(/class="scratch-script__condition scratch-script__condition--operator"/g) || []).length, 2);
      assert(dom.includes('#module/scratch-clones?parcours=scratch-debutants'));
    }],
    ['prof.html#guide/scratch-clones', 'Guide professeur — Créer plusieurs personnages avec des clones', dom => {
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('Les copies se multiplient sans contrôle'));
    }],
    ['prof.html#guide/scratch-temps-difficulte', 'Guide professeur — Gérer le temps et la difficulté', dom => {
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('dix secondes exactement'));
    }],
    ['index.html#module/scratch-fin-partie?parcours=scratch-debutants', 'Gagner, perdre et recommencer', dom => {
      assert(dom.includes('abscisse x'));
      assert(!dom.includes('position x'));
      assert.equal((dom.match(/class="scratch-script__condition scratch-script__condition--operator"/g) || []).length, 2);
      assert(dom.includes('#module/scratch-mini-jeu?parcours=scratch-debutants'));
      assert(!dom.includes('Scratch est en anglais ?'));
    }],
    ['index.html#module/scratch-mini-jeu?parcours=scratch-debutants', 'Mon premier mini-jeu', dom => {
      assert(dom.includes('3, 4 ou 5 contacts'));
      assert(dom.includes('change seulement ce seuil'));
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
      assert(dom.includes('abscisse x'));
      assert(dom.includes('Questions et réponses attendues'));
      assert(dom.includes('À -180 exactement'));
    }]
  ];
  cases.push(['prof.html#guide/scratch-mini-jeu', 'Guide professeur — Mon premier mini-jeu', dom => {
    assert(dom.includes('seuil entier'));
    assert(dom.includes('tester séparément la limite'));
  }]);
  try {
    const filter = process.argv[2];
    const selected = filter ? cases.filter(([route]) => route.includes(filter)) : cases;
    assert(selected.length > 0, 'Aucune vue ne correspond au filtre');
    for (const [route, title, verify] of selected) {
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
