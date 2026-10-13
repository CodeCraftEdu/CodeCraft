const test = require('node:test');
const assert = require('node:assert/strict');
const { studentDom } = require('./helpers/student-dom.cjs');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');

test('support niveaux : sections accessibles et activité indépendante repliée', () => {
  const dom = studentDom();
  try {
    dom.window.HTMLElement.prototype.scrollIntoView = () => {};
    dom.navigate('#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=victoire');
    const main = dom.window.document.querySelector('main');
    for (const id of ['niveau', 'victoire', 'actions']) {
      const section = main.querySelector('[data-activity-id="' + id + '"]');
      assert(section.querySelector('.scratch-script'));
      assert.equal(section.closest('details'), null);
    }
    assert.equal(main.querySelector('[data-activity-id="atelier"]').open, false);
    assert.equal(main.querySelector('[data-activity-id="depannage"]').open, false);
    const victory = main.querySelector('[data-activity-id="victoire"]');
    const actionLink = victory.querySelector('a.lesson-text-link');
    assert.equal(actionLink.closest('details'), null);
    assert.equal(
      actionLink.hash,
      '#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=actions',
    );
    assert(victory.querySelector('.scratch-quick-steps').textContent.includes('avant la boucle'));
    assert(victory.querySelector('.scratch-quick-steps').textContent.includes('déplacements'));
    dom.navigate(actionLink.hash);
    assert(main.querySelector('[data-activity-id="actions"] .scratch-script__reporter--variables'));
    dom.navigate('#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=autonomie');
    assert.equal(main.querySelector('[data-activity-id="atelier"]').open, true);
  } finally {
    dom.close();
  }
});

test('support niveaux : reprise des messages et accès professeur aux transitions', () => {
  const data = loadCatalog();
  const module = data.modules['scratch-niveaux-etats'];
  assert(module.consolidation.some((link) => link.moduleId === 'scratch-coordination'));
  assert.equal(module.teacherGuide.accompaniedActivity.blockId, 'victoire');
  assert.equal(module.teacherGuide.independentActivity.blockId, 'autonomie');
  const ids = data.pathways['scratch-debutants'].moduleIds;
  assert.equal(ids.indexOf('scratch-niveaux-etats'), ids.indexOf('scratch-temps-difficulte') + 1);
});
