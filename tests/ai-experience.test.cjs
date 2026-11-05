const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const {
  programDecision,
  gameOutcome,
  replayMoves,
  predictMessage,
  initialProgress,
  restoreProgress,
  STORAGE_KEY,
} = require('../src/student/ai-rules.mjs');
const data = loadCatalog();
const moduleData = data.modules['ia-regles-donnees'];
const config = moduleData.blocks[0].aiExperience;

test('IA : un chapitre fonctionnel dans un parcours indépendant, sans pages futures vides', () => {
  assert.deepEqual(data.pathways['ia-experience'].moduleIds, [
    'ia-decouvrir',
    'ia-regles-donnees',
    'ia-classification',
    'ia-entrainement',
  ]);
  assert.equal(data.domains.ia.pathwayIds[0], 'ia-experience');
  assert.equal(moduleData.title, 'Des règles aux données');
  assert.equal(
    moduleData.blocks.some((block) => block.id === 'enseignant'),
    false,
  );
  assert.equal(moduleData.blocks[0].paragraphs, undefined);
  assert.ok(
    moduleData.teacherGuide.questions.some((item) => item.question.includes('Qui a écrit')),
  );
  assert.equal(config.corpus.length, 15);
  assert.equal(config.tests.length, 4);
  for (const category of ['joie', 'tristesse', 'colere'])
    assert.equal(config.corpus.filter((row) => row.category === category).length, 5);
  for (const question of [...config.gameQuestions, ...config.reviewQuestions]) {
    assert.equal(question.options.filter((option) => option.correct).length, 1);
    assert(question.options.every((option) => option.feedback.length > 30));
  }
});

test('morpion : priorités, coins opposés, réponses multiples et dernière case', () => {
  assert.deepEqual(programDecision(Array(9).fill('')), {
    ruleId: 'first-corner',
    cells: [0, 2, 6, 8],
  });
  assert.deepEqual(programDecision(['X', '', '', '', 'O', '', '', '', '']).cells, [8]);
  assert.deepEqual(programDecision(['X', '', '', '', '', '', '', '', 'O']).cells, [2, 6]);
  assert.deepEqual(programDecision(['X', 'X', '', 'O', 'O', '', '', '', '']), {
    ruleId: 'complete-line',
    cells: [2],
  });
  assert.deepEqual(programDecision(['X', '', 'X', '', 'O', 'O', 'X', 'O', '']), {
    ruleId: 'complete-line',
    cells: [1, 3],
  });
  assert.deepEqual(programDecision(['X', '', '', '', 'O', 'O', '', '', 'X']), {
    ruleId: 'block-line',
    cells: [3],
  });
  const almostFull = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', ''];
  assert.equal(programDecision(almostFull).ruleId, 'last-cell');
  assert.deepEqual(programDecision(almostFull).cells, [8]);
  assert.equal(gameOutcome([...almostFull.slice(0, 8), 'X']), 'draw');
  assert.equal(gameOutcome(['O', 'O', 'O', 'X', 'X', '', '', '', 'X']), 'O');
  assert.equal(programDecision(['X', 'X', 'X', 'O', 'O', '', '', '', '']), null);
});

test('morpion : toutes les parties possibles respectent la fiche et arrêtent les coups après une fin', () => {
  const visited = new Set();
  const endings = { X: 0, O: 0, draw: 0 };
  function walk(moves) {
    const current = replayMoves(moves);
    assert(current);
    const key = current.board.join('-');
    if (visited.has(key)) return;
    visited.add(key);
    if (current.outcome) {
      endings[current.outcome]++;
      const empty = current.board.findIndex((mark) => !mark);
      if (empty >= 0) assert.equal(replayMoves([...moves, empty]), null);
      return;
    }
    const decision = programDecision(current.board);
    if (moves.length % 2 === 0) {
      assert(decision?.cells.length, JSON.stringify(moves));
      assert(config.rules.some((rule) => rule.id === decision.ruleId));
      for (const cell of decision.cells) {
        assert.equal(current.board[cell], '');
        walk([...moves, cell]);
      }
    } else {
      assert.equal(decision, null);
      current.board.forEach((mark, cell) => {
        if (!mark) walk([...moves, cell]);
      });
    }
  }
  walk([]);
  assert(visited.size > 100);
  assert(endings.X > 0 && endings.draw > 0);
  assert.equal(replayMoves([4]), null);
  assert.equal(replayMoves([0, 0]), null);
  console.log('Morpion, états accessibles et fins:', visited.size, endings);
});

test('émojis : prédictions déterministes, priorité, mots entiers et ambiguïtés conservées', () => {
  const baseline = config.hypotheses.find((rule) => rule.id === 'prefix-et');
  assert.deepEqual(
    config.tests.map((row) => predictMessage(row.text, baseline).category),
    ['joie', 'tristesse', 'colere', 'joie'],
  );
  assert.equal(
    predictMessage('  ' + config.tests[3].text.toLowerCase(), baseline).category,
    'joie',
  );
  assert.equal(predictMessage(config.corpus[4].text, baseline).category, 'indeterminee');
  assert.equal(predictMessage(config.corpus[10].text, baseline).category, 'colere');
  const words = config.hypotheses.find((rule) => rule.id === 'words');
  assert.deepEqual(
    config.corpus.map((row) => predictMessage(row.text, words).category),
    config.corpus.map((row) => row.category),
  );
  const mixed = {
    policy: words.policy,
    conditions: [
      { kind: 'word', term: 'enchantés', category: 'joie' },
      { kind: 'word', term: 'chagrin', category: 'tristesse' },
    ],
  };
  assert.equal(
    predictMessage(
      'Sophie et Paul étaient enchantés: leur seul chagrin était de voir pleurer leurs mamans.',
      mixed,
    ).conflict,
    true,
  );
  assert(config.tests.find((row) => row.id === 'attente').interpretation.includes('ambigu'));
  assert.equal(config.tests.find((row) => row.id === 'projet').interpretation, 'Tristesse');
  assert(config.extraExamples.find((item) => item.id === 'copies').useful === false);
});

test('reprise : validation des choix, des coups, des limites et des anciennes versions', () => {
  const invalid = restoreProgress(
    {
      version: 1,
      step: 99,
      moves: [4],
      order: ['data', 'data'],
      lockedRule: 'inconnue',
      revealed: 999,
      freeText: 'a'.repeat(1500),
    },
    config,
  );
  assert.equal(invalid.step, 0);
  assert.deepEqual(invalid.moves, []);
  assert.deepEqual(invalid.order, config.flow.initialOrder);
  assert.equal(invalid.lockedRule, null);
  assert.equal(invalid.revealed, 0);
  assert.equal(invalid.freeText.length, 1000);
  assert.deepEqual(restoreProgress({ version: 9 }, config), initialProgress(config));
  const saved = {
    ...initialProgress(config),
    step: 2,
    moves: [8, 4],
    lockedRule: 'prefix-et',
    revealed: 2,
  };
  const restored = restoreProgress(saved, config);
  assert.deepEqual(restored.moves, [8, 4]);
  assert.equal(restored.revealed, 2);
  assert.equal(restored.candidate, 'prefix-et');
});

test('interface : prévision valide, coups interdits, séparation corpus/test et reprise sans perte', () => {
  const dom = studentDom(data);
  try {
    dom.navigate('#module/ia-regles-donnees?parcours=ia-experience');
    const doc = dom.window.document;
    const click = (focus) => doc.querySelector('[data-focus="' + focus + '"]').click();
    assert.equal(dom.window.localStorage.length, 0);
    click('cell-8');
    click('reveal-x');
    assert.deepEqual(JSON.parse(dom.window.localStorage.getItem(STORAGE_KEY)).moves, [8]);
    click('cell-8');
    assert.deepEqual(JSON.parse(dom.window.localStorage.getItem(STORAGE_KEY)).moves, [8]);
    click('cell-4');
    click('step-2');
    assert.equal(doc.querySelectorAll('.ai-lab__corpus-column li').length, 15);
    assert.equal(doc.querySelectorAll('.ai-lab__test').length, 0);
    assert(!doc.querySelector('.ai-lab').textContent.includes(config.tests[0].text));
    click('lock-rule');
    assert.equal(doc.querySelectorAll('.ai-lab__fixed-rule').length, 0);
    click('hypothesis-prefix-et');
    click('lock-rule');
    assert.equal(doc.querySelectorAll('input[name=ai-hypothesis]').length, 0);
    click('reveal-message');
    assert.equal(doc.querySelectorAll('.ai-lab__test').length, 0);
    assert(
      !doc.querySelector('.ai-lab__content').textContent.includes(config.tests[0].interpretation),
    );
    click('emoji-guess-colere');
    dom.navigate('#module/python-affichage');
    dom.navigate('#module/ia-regles-donnees?parcours=ia-experience');
    assert(doc.querySelector('[data-focus=emoji-guess-colere]').checked);
    click('reveal-message');
    assert.equal(doc.querySelectorAll('.ai-lab__test').length, 1);
    assert(doc.querySelector('.ai-lab__test').textContent.includes('Tu avais prévu « Colère »'));
    assert(doc.querySelector('.ai-lab__test').textContent.includes('😃 Joie'));
    dom.navigate('#module/python-affichage');
    dom.navigate('#module/ia-regles-donnees?parcours=ia-experience');
    assert.equal(doc.querySelector('[aria-current=step]').dataset.step, '2');
    assert.equal(doc.querySelectorAll('.ai-lab__test').length, 1);
    assert(doc.querySelector('.ai-lab__test').textContent.includes(config.tests[0].interpretation));
    dom.window.localStorage.setItem('another-course', 'keep');
    click('reset-chapter');
    click('cancel-reset');
    assert.equal(doc.querySelectorAll('.ai-lab__test').length, 1);
    click('reset-chapter');
    click('confirm-reset');
    assert.equal(dom.window.localStorage.getItem(STORAGE_KEY), null);
    assert.equal(dom.window.localStorage.getItem('another-course'), 'keep');
    assert.equal(doc.querySelector('[aria-current=step]').dataset.step, '0');
  } finally {
    dom.close();
  }
});

test('bilan : correction expliquée, réponses libres autoévaluées et sauvegarde corrompue récupérable', () => {
  const dom = studentDom(data);
  try {
    dom.window.localStorage.setItem(STORAGE_KEY, '{invalide');
    dom.navigate('#module/ia-regles-donnees?parcours=ia-experience');
    const doc = dom.window.document;
    const click = (focus) => doc.querySelector('[data-focus="' + focus + '"]').click();
    click('step-3');
    const wrong = doc.querySelector('[data-focus=explicit-clever]');
    wrong.checked = true;
    wrong.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
    click('check-explicit');
    assert(doc.querySelector('.ai-lab__feedback--review').textContent.includes('ni les cases'));
    const input = doc.querySelector('#ai-free-answer');
    input.value = 'Je cherche un contre-exemple.';
    input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
    click('show-criteria');
    assert.equal(doc.querySelectorAll('.ai-lab__criteria li').length, 3);
    assert(doc.querySelector('.ai-lab__criteria').textContent.includes('Une réponse possible'));
    click('retry-review');
    assert.equal(doc.querySelector('.ai-lab__feedback'), null);
    assert.equal(doc.querySelector('#ai-free-answer').value, 'Je cherche un contre-exemple.');
    assert.doesNotThrow(() => JSON.parse(dom.window.localStorage.getItem(STORAGE_KEY)));
  } finally {
    dom.close();
  }
});

test('morpion : prévision incorrecte expliquée et mode direct fonctionnel', () => {
  const dom = studentDom(data);
  try {
    dom.navigate('#module/ia-regles-donnees?parcours=ia-experience');
    const doc = dom.window.document;
    const click = (id) => doc.querySelector('[data-focus="' + id + '"]').click();
    click('cell-4');
    click('reveal-x');
    assert(doc.querySelector('.ai-lab__feedback--review').textContent.includes('ne respecte pas'));
    assert.deepEqual(JSON.parse(dom.window.localStorage.getItem(STORAGE_KEY)).moves, [0]);
    click('restart-game');
    click('step-mode');
    assert.deepEqual(JSON.parse(dom.window.localStorage.getItem(STORAGE_KEY)).moves, [0]);
    click('cell-4');
    assert.deepEqual(JSON.parse(dom.window.localStorage.getItem(STORAGE_KEY)).moves, [0, 4, 8]);
  } finally {
    dom.close();
  }
});
