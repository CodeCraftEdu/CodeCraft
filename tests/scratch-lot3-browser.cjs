const assert = require('node:assert/strict');
const { withBrowser } = require('./helpers/browser.cjs');
withBrowser(async ({ call, evaluate, wait, origin, screenshot }) => {
  async function captureActivity(id, name) {
    await evaluate(
      'document.querySelector(' +
        JSON.stringify('[data-activity-id="' + id + '"]') +
        ').scrollIntoView({behavior:"instant",block:"start"})',
    );
    await evaluate(
      'new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))',
    );
    await screenshot(name);
  }
  const cases = [
    [
      'index.html#module/scratch-reactions?parcours=scratch-debutants',
      'Faire réagir le jeu',
      (dom) => {
        assert(dom.includes('Sauvegarde ton projet actuel avant de commencer'));
        assert(dom.includes('Taille sous la scène à 100'));
        assert(dom.includes('y = 120'));
        assert(!dom.includes('y = 60 puis rejoins'));
      },
    ],
    [
      'prof.html#guide/scratch-reactions',
      'Guide professeur : Faire réagir le jeu',
      (dom) => {
        assert(dom.includes('suspend cette pile'));
        assert(dom.includes('cible (80, 120)'));
        assert(!dom.includes('Retirer les anciennes commandes'));
      },
    ],
    [
      'index.html#module/scratch-variables?parcours=scratch-debutants',
      'Compter et mémoriser',
      (dom) => {
        assert(dom.includes('sans créer un projet vide'));
        assert(dom.includes('Reviens ensuite dans Compter et mémoriser'));
        assert(!dom.includes('Ouvrir le projet de départ'));
      },
    ],
    [
      'prof.html#guide/scratch-variables',
      'Guide professeur : Compter et mémoriser',
      (dom) => {
        assert(dom.includes('deuxième contact → 2'));
        assert(dom.includes('depuis 5, un contact donne 7'));
      },
    ],
    [
      'index.html#module/scratch-actions?parcours=scratch-debutants',
      'Déclencher et enchaîner des actions',
      (dom) => {
        assert(dom.includes('Fichier → Nouveau'));
        assert(dom.includes('Détache d’abord la suite'));
        assert(!dom.includes('Retire ton ancienne pile'));
      },
    ],
    [
      'prof.html#guide/scratch-actions',
      'Guide professeur : Déclencher et enchaîner des actions',
      (dom) => {
        assert(dom.includes('Quels blocs font attendre'));
        assert(dom.includes('insérer le message'));
      },
    ],
    [
      'index.html#module/scratch-pilotage?parcours=scratch-debutants',
      'Piloter un personnage',
      (dom) => {
        assert(dom.includes('Fichier → Nouveau'));
        assert(dom.includes('https://scratch.mit.edu/projects/1388027652/'));
        assert(dom.includes('Quatre piles séparées'));
      },
    ],
    [
      'prof.html#guide/scratch-pilotage',
      'Guide professeur : Piloter un personnage',
      (dom) => {
        assert(dom.includes('Garder ensuite ce projet'));
        assert(dom.includes('cinq piles de base'));
      },
    ],
    [
      'index.html#module/scratch-boucles?parcours=scratch-debutants',
      'Répéter des actions',
      (dom) => {
        assert(dom.includes('aucune ancienne boucle ne tournera en même temps'));
        assert(!dom.includes('retire les autres piles'));
      },
    ],
    [
      'prof.html#guide/scratch-boucles',
      'Guide professeur : Répéter des actions',
      (dom) => {
        assert(dom.includes('quatre pauses de 0.3'));
        assert(dom.includes('quatre puis deux tours'));
      },
    ],
    [
      'index.html#module/scratch-projet-personnel?parcours=scratch-debutants',
      'Mon projet personnel',
      (dom) => {
        assert(dom.includes('https://scratch.mit.edu/projects/1388027652/'));
        assert(!dom.includes('https://scratch.mit.edu/projects/1388025424/'));
        assert(dom.includes('#module/scratch-debogage?parcours=scratch-debutants'));
        assert(dom.includes('Une seule extension') || dom.includes('une seule extension'));
        assert(dom.includes('Deux parties complètes'));
      },
    ],
    [
      'prof.html#guide/scratch-projet-personnel',
      'Guide professeur : Mon projet personnel',
      (dom) => {
        assert(dom.includes('Questions et réponses attendues'));
        assert(dom.includes('https://scratch.mit.edu/projects/1388025424/'));
        assert(dom.includes('Faut-il utiliser des clones et des messages'));
      },
    ],
    [
      'index.html#module/scratch-debogage?parcours=scratch-debutants',
      'Déboguer son jeu',
      (dom) => {
        assert(dom.includes('À réparer : ordre volontairement incorrect'));
        assert(dom.includes('Un score qui reste à un'));
        assert(dom.includes('scratch-script__condition--operator'));
        assert(dom.includes('#module/scratch-temps-difficulte?parcours=scratch-debutants'));
        assert(dom.includes('Sans solution : deux enquêtes'));
      },
    ],
    [
      'prof.html#guide/scratch-debogage',
      'Guide professeur : Déboguer son jeu',
      (dom) => {
        assert(dom.includes('Questions et réponses attendues'));
        assert(dom.includes('Le message arrive encore au quatrième point'));
        assert(dom.includes('Une position effacée'));
      },
    ],
    [
      'index.html#module/scratch-clones?parcours=scratch-debutants',
      'Créer plusieurs personnages avec des clones',
      (dom) => {
        assert(dom.includes('quand je commence comme un clone'));
        assert(dom.includes('supprimer ce clone'));
        assert(dom.includes('#module/scratch-temps-difficulte?parcours=scratch-debutants'));
        assert(dom.includes('#module/scratch-blocs-personnalises?parcours=scratch-debutants'));
        assert(dom.includes('scratch-script__block--looks'));
      },
    ],
    [
      'index.html#module/scratch-temps-difficulte?parcours=scratch-debutants',
      'Gérer le temps et la difficulté',
      (dom) => {
        assert(dom.includes('réinitialiser le chronomètre'));
        assert(dom.includes('scratch-script__block--sensing'));
        assert.equal(
          (
            dom.match(/class="scratch-script__condition scratch-script__condition--operator"/g) ||
            []
          ).length,
          2,
        );
        assert(dom.includes('#module/scratch-clones?parcours=scratch-debutants'));
      },
    ],
    [
      'prof.html#guide/scratch-clones',
      'Guide professeur : Créer plusieurs personnages avec des clones',
      (dom) => {
        assert(dom.includes('Questions et réponses attendues'));
        assert(dom.includes('Les copies se multiplient sans contrôle'));
      },
    ],
    [
      'prof.html#guide/scratch-temps-difficulte',
      'Guide professeur : Gérer le temps et la difficulté',
      (dom) => {
        assert(dom.includes('Questions et réponses attendues'));
        assert(dom.includes('dix secondes exactement'));
      },
    ],
    [
      'index.html#module/scratch-fin-partie?parcours=scratch-debutants',
      'Gagner, perdre et recommencer',
      (dom) => {
        assert(dom.includes('abscisse x'));
        assert(!dom.includes('position x'));
        assert.equal(
          (
            dom.match(/class="scratch-script__condition scratch-script__condition--operator"/g) ||
            []
          ).length,
          2,
        );
        assert(dom.includes('#module/scratch-mini-jeu?parcours=scratch-debutants'));
        assert(!dom.includes('Scratch est en anglais ?'));
      },
    ],
    [
      'index.html#module/scratch-mini-jeu?parcours=scratch-debutants',
      'Mon premier mini-jeu',
      (dom) => {
        assert(dom.includes('3, 4 ou 5 contacts'));
        assert(dom.includes('change seulement ce seuil'));
        assert(dom.includes('Vérifie ton travail'));
        assert(dom.includes('#module/scratch-fin-partie?parcours=scratch-debutants'));
      },
    ],
    [
      'index.html#module/scratch-coordination?parcours=scratch-debutants',
      'Coordonner plusieurs personnages',
      (dom) => {
        assert(dom.includes('https://scratch.mit.edu/projects/1388027889/'));
        assert(dom.includes('Pico : lance le dialogue'));
        assert(dom.includes('Tera : répond au signal'));
        assert(dom.includes('#module/scratch-blocs-personnalises?parcours=scratch-debutants'));
        assert(!dom.includes('Scratch est en anglais ?'));
      },
    ],
    [
      'index.html#module/scratch-blocs-personnalises?parcours=scratch-debutants',
      'Créer ses propres blocs',
      (dom) => {
        assert(dom.includes('scratch-script__block--custom'));
        assert(dom.includes('définir retour au départ'));
        assert(dom.includes('#module/scratch-coordination?parcours=scratch-debutants'));
        assert(!dom.includes('Scratch est en anglais ?'));
      },
    ],
    [
      'prof.html#guide/scratch-coordination',
      'Guide professeur : Coordonner plusieurs personnages',
      (dom) => {
        assert(dom.includes('Questions et réponses attendues'));
        assert(dom.includes('https://scratch.mit.edu/projects/1388025602/'));
      },
    ],
    [
      'prof.html#guide/scratch-blocs-personnalises',
      'Guide professeur : Créer ses propres blocs',
      (dom) => {
        assert(dom.includes('Questions et réponses attendues'));
        assert(dom.includes('Deux appels demandent-ils deux définitions'));
      },
    ],
    [
      'prof.html#guide/scratch-fin-partie',
      'Guide professeur : Gagner, perdre et recommencer',
      (dom) => {
        assert(dom.includes('abscisse x'));
        assert(dom.includes('Questions et réponses attendues'));
        assert(dom.includes('À -180 exactement'));
      },
    ],
  ];
  cases.push([
    'prof.html#guide/scratch-mini-jeu',
    'Guide professeur : Mon premier mini-jeu',
    (dom) => {
      assert(dom.includes('seuil entier'));
      assert(dom.includes('tester séparément la limite'));
    },
  ]);

  for (const [route, title, verify] of cases) {
    await call('Page.navigate', { url: origin + route });
    await wait(
      'document.readyState === "complete" && document.body.textContent.includes(' +
        JSON.stringify(title) +
        ')',
    );
    verify(await evaluate('document.documentElement.outerHTML'));
  }
  for (const resource of [
    {
      id: 'scratch-vies-contacts',
      starterId: '1391213130',
      demoId: '1391211682',
      activity: 'solution',
      practice: 'modele',
      title: 'Gérer les vies et les contacts',
    },
    {
      id: 'scratch-clones-mobiles',
      starterId: '1391213631',
      demoId: '1391213388',
      activity: 'mouvement',
      practice: 'preparer',
      title: 'Faire avancer des clones',
    },
    {
      id: 'scratch-niveaux-etats',
      starterId: '1391213849',
      demoId: '1391213735',
      activity: 'victoire',
      practice: 'modele',
      title: 'Changer de niveau et terminer la partie',
    },
  ]) {
    for (const width of [1280, 390, 320]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false,
      });
      await call('Page.navigate', {
        url:
          origin +
          'index.html#module/' +
          resource.id +
          '?parcours=scratch-debutants&activite=' +
          resource.activity,
      });
      await wait(
        'document.querySelector("[data-activity-id=' +
          resource.activity +
          '] .scratch-script") !== null',
      );
      assert.equal(
        await evaluate('document.querySelector("[data-activity-id=atelier]").open'),
        false,
      );
      assert.equal(
        await evaluate('document.querySelector("[data-activity-id=depannage]").open'),
        false,
      );
      if (width === 1280) {
        const projectLinks = await evaluate(`({
          starter: document.querySelector('a[href="https://scratch.mit.edu/projects/${resource.starterId}/"]')?.textContent,
          demo: document.querySelector('.lesson-tool-link')?.href
        })`);
        assert.equal(projectLinks.starter, 'Ouvrir le projet de départ');
        assert.equal(projectLinks.demo, `https://scratch.mit.edu/projects/${resource.demoId}/`);
        await evaluate('window.scrollTo({top:0,behavior:"instant"})');
        await screenshot(resource.id + '-projets-en-ligne');
        const downloads =
          await evaluate(`Promise.all([...document.querySelectorAll('[data-activity-id=preparer] a[download]')].map(async a => {
        const r = await fetch(a.href);
        const bytes = new Uint8Array(await r.arrayBuffer());
        return {status:r.status,type:r.headers.get('content-type'),signature:Array.from(bytes.slice(0,4))};
      }))`);
        assert.equal(downloads.length, 2);
        for (const download of downloads) {
          assert.equal(download.status, 200);
          assert.equal(download.type, 'application/zip');
          assert.deepEqual(download.signature, [80, 75, 3, 4]);
        }
      }
      assert(await evaluate('document.documentElement.scrollWidth <= innerWidth + 1'));
      await captureActivity(resource.activity, resource.id + '-' + resource.activity + '-' + width);
      assert(
        await evaluate(`
        [...document.querySelectorAll('.scratch-script__explanations li')]
          .every(item => item.querySelector('p')?.textContent.trim())
      `),
      );
      if (resource.id !== 'scratch-vies-contacts') {
        assert(
          await evaluate(`(() => {
          const reporter = document.querySelector('[data-activity-id=${resource.activity}] .scratch-script__reporter');
          const value = document.querySelector('[data-activity-id=${resource.activity}] .scratch-script__value');
          return reporter && value && getComputedStyle(reporter).backgroundColor !== getComputedStyle(value).backgroundColor;
        })()`),
        );
        await evaluate(
          `document.querySelector('[data-activity-id=${resource.activity}] .scratch-script').scrollIntoView({behavior:'instant',block:'start'})`,
        );
        await screenshot(resource.id + '-blocs-' + width);
      }
      if (resource.id === 'scratch-clones-mobiles') {
        assert(
          await evaluate(
            'document.querySelector("[data-activity-id=fabrique] .scratch-script") !== null',
          ),
        );
        await captureActivity('fabrique', resource.id + '-fabrique-' + width);
      }
      if (resource.id === 'scratch-niveaux-etats') {
        await evaluate(
          'document.querySelector("[data-activity-id=victoire] a.lesson-text-link").click()',
        );
        await wait(
          'new URLSearchParams(location.hash.split("?")[1]).get("activite") === "actions"',
        );
        assert.equal(
          await evaluate('new URLSearchParams(location.hash.split("?")[1]).get("parcours")'),
          'scratch-debutants',
        );
        for (const id of ['niveau', 'actions']) {
          assert(
            await evaluate(
              'document.querySelector("[data-activity-id=' + id + '] .scratch-script") !== null',
            ),
          );
          await captureActivity(id, resource.id + '-' + id + '-' + width);
        }
      }
      await call('Page.navigate', {
        url:
          origin +
          'index.html#module/' +
          resource.id +
          '?parcours=scratch-debutants&activite=' +
          resource.practice,
      });
      await wait('document.querySelector("[data-activity-id=atelier]").open');
      assert(await evaluate('document.documentElement.scrollWidth <= innerWidth + 1'));
      await captureActivity(resource.practice, resource.id + '-' + resource.practice + '-' + width);
    }
    await call('Page.navigate', { url: origin + 'prof.html#guide/' + resource.id });
    await wait(
      'document.body.textContent.includes(' +
        JSON.stringify('Guide professeur : ' + resource.title) +
        ')',
    );
    assert(
      (await evaluate('document.body.textContent')).includes('L’activité repliée est indépendante'),
    );
    for (const projectId of [resource.starterId, resource.demoId]) {
      assert(
        await evaluate(
          `document.querySelector('a[href="https://scratch.mit.edu/projects/${projectId}/"]') !== null`,
        ),
      );
    }
  }
  console.log('Scratch checks passed: targeted modules and guides.');
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
