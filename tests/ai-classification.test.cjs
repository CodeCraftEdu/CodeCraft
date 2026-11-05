const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const { DISCOVERY_STORAGE_KEY, discoveryResult } = require('../src/student/ai-discovery.mjs');
const data = loadCatalog();
const config = data.modules['ia-classification'].blocks[0].aiDiscovery;

test('classification : exemples cohérents et score distinct du taux mesuré', () => {
  const table = config.steps[2].table;
  assert.equal(table.rows.filter((row) => row[1] === row[2]).length, 4);
  assert.equal(table.rows.length, 5);
  for (const step of config.steps) {
    for (const group of step.groups) {
      const choices = Object.fromEntries(group.fields.map((field) => [field.id, field.answer]));
      assert.equal(discoveryResult(group, choices), 'correct');
      assert(group.feedback.length > 50);
    }
  }
});

test('classification : choix, table accessible, reprise et reset isolés des autres chapitres', () => {
  const dom = studentDom(data);
  try {
    const previous = { version: 1, step: 1, choices: {}, checked: [] };
    dom.window.localStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(previous));
    dom.navigate('#module/ia-classification?parcours=ia-experience');
    const doc = dom.window.document;
    const click = (id) => doc.querySelector('[data-discovery-focus="' + id + '"]').click();
    assert.equal(doc.querySelector('.ai-discovery [aria-current=step]').textContent, 'Essayer');
    assert(doc.querySelector('.ai-discovery a').href.includes('locale=fr'));
    const select = doc.querySelector('#dessin-entree');
    select.value = 'traits';
    select.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
    click('check');
    click('step-2');
    assert.equal(doc.querySelectorAll('.ai-discovery__table th[scope=col]').length, 3);
    assert.equal(doc.querySelectorAll('.ai-discovery__table tbody tr').length, 5);
    dom.navigate('#module/ia-decouvrir?parcours=ia-experience');
    assert.equal(
      doc.querySelector('.ai-discovery [aria-current=step]').textContent,
      'Entrée et résultat',
    );
    dom.navigate('#module/ia-classification?parcours=ia-experience');
    assert.equal(
      doc.querySelector('.ai-discovery [aria-current=step]').textContent,
      'Lire un score',
    );
    click('step-0');
    assert.equal(doc.querySelector('#dessin-entree').value, 'traits');
    click('reset');
    click('confirm-reset');
    assert.equal(dom.window.localStorage.getItem(config.storageKey), null);
    assert.deepEqual(JSON.parse(dom.window.localStorage.getItem(DISCOVERY_STORAGE_KEY)), previous);
  } finally {
    dom.close();
  }
});
