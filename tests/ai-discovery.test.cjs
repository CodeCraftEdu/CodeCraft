const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const {
  restoreDiscovery,
  discoveryResult,
  DISCOVERY_STORAGE_KEY,
} = require('../src/student/ai-discovery.mjs');
const data = loadCatalog();
const moduleData = data.modules['ia-decouvrir'];
const config = moduleData.blocks[0].aiDiscovery;

test('découverte IA : quatre étapes, réponses cohérentes et raccord au chapitre des règles', () => {
  assert.deepEqual(data.pathways['ia-experience'].moduleIds, [
    'ia-decouvrir',
    'ia-regles-donnees',
    'ia-classification',
    'ia-entrainement',
  ]);
  assert.equal(config.steps.length, 4);
  const ids = new Set();
  for (const step of config.steps)
    for (const group of step.groups) {
      const correct = {};
      for (const field of group.fields) {
        assert(!ids.has(field.id));
        ids.add(field.id);
        assert.equal(field.choices.filter((choice) => choice.id === field.answer).length, 1);
        correct[field.id] = field.answer;
      }
      assert.equal(discoveryResult(group, {}), 'missing');
      assert.equal(discoveryResult(group, correct), 'correct');
      const field = group.fields[0];
      correct[field.id] = field.choices.find((choice) => choice.id !== field.answer).id;
      assert.equal(discoveryResult(group, correct), 'review');
      assert.ok(group.feedback.length > 45);
    }
  assert.equal(config.steps[2].groups.at(-1).fields[0].answer, 'indeducible');
  assert.equal(config.steps[2].groups[2].fields[0].answer, 'absent');
  const image = fs.readFileSync(path.resolve(__dirname, '..', config.steps[2].image.src));
  assert.equal(image.toString('ascii', 0, 4), 'RIFF');
  assert.equal(image.toString('ascii', 8, 12), 'WEBP');
  assert.ok(image.length < 500000);
});

test('découverte IA : reprise bornée et choix inconnus ignorés', () => {
  const state = restoreDiscovery(
    {
      version: 1,
      step: 99,
      choices: { 'usage-videos': 'recommander', 'usage-photos': 'inventee' },
      checked: ['usages', 'inconnu'],
      freeText: 'x'.repeat(2000),
      criteria: true,
    },
    config,
  );
  assert.equal(state.step, 0);
  assert.deepEqual(state.choices, { 'usage-videos': 'recommander' });
  assert.deepEqual(state.checked, ['usages']);
  assert.equal(state.freeText.length, 1000);
  assert.equal(state.criteria, true);
  assert.deepEqual(restoreDiscovery({ version: 1, checked: 'usages' }, config).checked, []);
  assert.deepEqual(
    restoreDiscovery({ version: 2, step: 2 }, config),
    restoreDiscovery(null, config),
  );
});

test('découverte IA : correction, réessai et reprise réels dans le DOM', () => {
  const dom = studentDom(data);
  try {
    dom.navigate('#module/ia-decouvrir?parcours=ia-experience');
    const doc = dom.window.document;
    assert.equal(dom.window.localStorage.length, 0);
    const choose = (id, value) => {
      const field = doc.getElementById(id);
      field.value = value;
      field.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
    };
    const click = (id) => doc.querySelector('[data-discovery-focus="' + id + '"]').click();
    click('check');
    assert.equal(doc.querySelectorAll('.ai-lab__feedback--review').length, 4);
    choose('usage-videos', 'generer');
    click('check');
    assert.match(
      doc.querySelector('[data-discovery-group=videos] .ai-lab__feedback').textContent,
      /recommande des vidéos existantes/,
    );
    choose('usage-videos', 'recommander');
    click('check');
    assert.equal(
      doc.querySelector('[data-discovery-group=videos] .ai-lab__feedback--review'),
      null,
    );
    click('step-3');
    const answer = doc.getElementById('ai-discovery-answer');
    answer.value = 'Je compare le texte à l’enregistrement.';
    answer.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
    click('criteria');
    assert.equal(doc.querySelectorAll('.ai-lab__criteria li').length, 3);
    dom.navigate('#module/ia-decouvrir?parcours=ia-experience');
    assert.equal(doc.getElementById('ai-discovery-answer').value, answer.value);
    assert.equal(doc.querySelector('.ai-discovery [aria-current=step]').textContent, 'Bilan');
    dom.window.localStorage.setItem('other-chapter', 'keep');
    click('reset');
    click('cancel-reset');
    assert.equal(doc.getElementById('ai-discovery-answer').value, answer.value);
    click('reset');
    click('confirm-reset');
    assert.equal(dom.window.localStorage.getItem(DISCOVERY_STORAGE_KEY), null);
    assert.equal(dom.window.localStorage.getItem('other-chapter'), 'keep');
    assert.equal(doc.querySelector('.ai-discovery [aria-current=step]').textContent, 'Les usages');
  } finally {
    dom.close();
  }
});

test('découverte IA : sauvegarde corrompue ou stockage interdit ne bloquent pas le cours', () => {
  const dom = studentDom(data);
  try {
    dom.window.localStorage.setItem(DISCOVERY_STORAGE_KEY, '{invalid');
    dom.navigate('#module/ia-decouvrir?parcours=ia-experience');
    assert.equal(dom.window.document.querySelectorAll('.ai-discovery select').length, 4);
    Object.defineProperty(dom.window, 'localStorage', {
      get() {
        throw new Error('denied');
      },
      configurable: true,
    });
    dom.navigate('#module/ia-decouvrir?parcours=ia-experience');
    const doc = dom.window.document;
    doc.querySelector('[data-discovery-focus=next]').click();
    assert.equal(doc.querySelectorAll('.ai-discovery select').length, 6);
    assert.match(doc.querySelector('.ai-discovery .ai-lab__status').textContent, /indisponible/);
  } finally {
    dom.close();
  }
});
