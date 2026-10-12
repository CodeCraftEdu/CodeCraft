const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { createRouteUrls } = require('../src/student/routes.mjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const data = loadCatalog();
const routes = createRouteUrls(data);

test('fin de cours : résumé avant le bonus replié et navigation contextualisée', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.navigate('#module/html-titres-paragraphes?parcours=web-debutants');
  const checkpoint = dom.main.querySelector('.lesson-checkpoint');
  const bonus = dom.main.querySelector('details.support-card--done');
  const next = dom.main.querySelector('.module-navigation__next');
  assert.equal(checkpoint.querySelector('h2').textContent, 'À retenir');
  assert.equal(bonus.querySelector('summary').textContent, 'Pour aller plus loin');
  assert.equal(bonus.open, false);
  assert.equal(bonus.querySelector('p').textContent, data.modules['html-titres-paragraphes'].bonus);
  assert.ok(
    checkpoint.compareDocumentPosition(bonus) & dom.window.Node.DOCUMENT_POSITION_FOLLOWING,
  );
  assert.ok(bonus.compareDocumentPosition(next) & dom.window.Node.DOCUMENT_POSITION_FOLLOWING);
  assert.match(next.textContent, /^Cours suivant : Listes HTML/);
  assert.equal(next.hash, '#module/html-listes?parcours=web-debutants');
});

test('accueil : domaines uniques directement au cours, domaines multiples au choix', () => {
  for (const [domain, pathway, first] of [
    ['python', 'python-debutants', 'python-thonny'],
    ['robotique', 'robotique-debutants', 'robotique-lumiere'],
  ]) {
    assert.equal(routes.domainEntryUrl(domain), `#module/${first}?parcours=${pathway}`);
  }
  for (const domain of ['web', 'jeux-video'])
    assert.equal(routes.domainEntryUrl(domain), '#domaine/' + domain);
  const dom = studentDom(data);
  try {
    dom.navigate('#domaine/python');
    assert.equal(dom.window.location.hash, routes.pathwayStartUrl('python-debutants'));
    assert.equal(
      dom.main.querySelector('.lesson-title').textContent,
      data.modules['python-thonny'].title,
    );
    dom.navigate('#domaine/web');
    assert.equal(
      dom.main.querySelectorAll('.route-card').length,
      data.domains.web.pathwayIds.length,
    );
    for (const link of dom.main.querySelectorAll('.route-card'))
      assert.match(link.hash, /^#module\/[^?]+\?parcours=/);
  } finally {
    dom.close();
  }
});

test('anciennes routes de parcours : premier cours, contexte conservé et historique remplacé', () => {
  const dom = studentDom(data);
  try {
    const before = dom.window.history.length;
    for (const [id, pathway] of Object.entries(data.pathways)) {
      dom.navigate('#parcours/' + id);
      assert.equal(dom.window.location.hash, routes.pathwayStartUrl(id));
      assert.equal(
        dom.main.querySelector('.lesson-title').textContent,
        data.modules[pathway.moduleIds[0]].title,
      );
      const parent = dom.main.querySelectorAll('.lesson-breadcrumbs a')[1];
      assert.equal(parent.hash, routes.pathwayStartUrl(id));
      assert.equal(dom.window.history.length, before);
      assert.equal(
        dom.main.querySelector('.course-sidebar__overview summary').textContent,
        'Objectif du parcours',
      );
      assert.equal(dom.mediaListeners.size, 1);
    }
    dom.navigate('');
    assert.equal(dom.mediaListeners.size, 0);
    assert.equal(dom.main.classList.contains('site-shell--course'), false);
    assert.equal(dom.window.document.body.dataset.domain, undefined);
    assert.equal(dom.window.document.body.dataset.route, undefined);
  } finally {
    dom.close();
  }
});

test('contexte invalide ou ambigu : aucun parcours choisi arbitrairement', () => {
  const dom = studentDom(data);
  try {
    dom.navigate('#module/html-titres-paragraphes?parcours=python-debutants');
    assert.equal(dom.main.querySelectorAll('.lesson-breadcrumbs a').length, 1);
    assert.equal(dom.main.querySelector('.course-sidebar'), null);
    assert.equal(dom.window.document.body.dataset.domain, 'web');
    dom.navigate('#module/python-affichage');
    assert(dom.main.querySelector('.course-sidebar'));
    dom.navigate('#module/inconnu');
    assert.equal(dom.main.querySelector('.course-sidebar'), null);
    assert.equal(dom.mediaListeners.size, 0);
    assert.equal(dom.window.document.body.dataset.domain, undefined);
  } finally {
    dom.close();
  }
});
