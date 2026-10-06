const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const model = require('../teacher-model.js');
const root = path.join(__dirname, '..');
const context = { window: {}, URLSearchParams };
for (const file of ['lesson-data.js', 'pedagogy.js']) vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
const data = context.window.CODECRAFT_DATA, ui = context.window.CodeCraftPedagogy;
const ids = ['python-thonny', 'python-affichage', 'python-variables', 'python-saisie', 'python-conversation'];
const block = (id, name) => data.modules[id].blocks.find(b => b.id === name);

test('Thonny : présentation pilote, trois actions et consignes intégralement réutilisées', () => {
  assert.equal(data.modules['python-thonny'].presentation, 'workshop');
  assert.equal(Object.values(data.modules).filter(m => m.presentation === 'workshop').length, 1);
  const example = block('python-thonny', 'exemple');
  assert.deepEqual(Array.from(example.actionSteps, s => s.title), ['Écrire', 'Enregistrer', 'Exécuter']);
  assert.deepEqual(Array.from(example.actionSteps, s => s.paragraphIndex), [0, 1, 2]);
  assert.equal(example.actionSteps[0].showCode, true);
  assert.equal(example.actionSteps[2].output, 'Bonjour !');
  assert(example.paragraphs.every(p => p.length));
});

test('Python : cinq contenus réels dans un nouveau domaine, aucun module futur vide', () => {
  assert.deepEqual(Array.from(data.domains.python.pathwayIds), ['python-debutants']);
  assert.deepEqual(Array.from(data.pathways['python-debutants'].moduleIds), ids);
  assert.equal(Object.values(data.modules).filter(m => m.domainId === 'python').length, 5);
  assert.equal(data.modules['python-conversation'].type, 'project');
  const learned = new Set();
  for (const id of ids) {
    const m = data.modules[id];
    assert.equal(m.domainId, 'python');
    assert.equal(m.tool.url, 'https://thonny.org/');
    assert(m.blocks.length >= 5);
    assert(m.masteryCriteria.length >= 3);
    for (const prerequisite of m.prerequisiteSkills) {
      assert(learned.has(prerequisite.skillId), `${id}: prérequis non enseigné`);
      assert(prerequisite.expectation.trim());
    }
    for (const skill of m.skillIds) { assert(data.skills[skill]); learned.add(skill); }
    for (const key of ['consolidation', 'bonusActivities', 'nextSteps']) {
      for (const ref of m[key]) {
        assert(ui.target(ref));
        for (const p of ref.prerequisiteSkills || []) assert(data.skills[p.skillId]);
      }
    }
    const guide = m.teacherGuide;
    for (const ref of [guide.example.target, guide.accompaniedActivity, guide.independentActivity]) assert(ui.target(ref));
    assert(guide.questions.length >= 3);
    assert(guide.questions.every(q => q.question && q.answer));
    assert(guide.commonErrors.every(e => e.helps.length >= 4));
    assert(guide.discoverySpeech.length >= 3);
    assert(guide.preparation.length && guide.quickConductor.length && guide.references.length);
    assert(!/KIDnKOD|Startup|2026|04\/10|Lyna|Imran/.test(JSON.stringify(m)));
    const activities = ui.blocks(m.blocks);
    const taskIds = activities.flatMap(b => (b.items || []).map(i => i.id));
    assert.equal(new Set(taskIds).size, taskIds.length, 'Identifiants de cases uniques');
    assert(!activities.some(b => b.type === 'reference'), 'Aucun couplage entre exercices');
  }
  assert.equal(learned.size, 4);
  assert.equal(data.modules['python-thonny'].prerequisiteSkills.length, 0);
  assert.equal(data.modules['python-conversation'].nextSteps.length, 0);
});

test('Python : routes directes et contexte du parcours uniquement lorsqu’il est compatible', () => {
  for (const id of ids) {
    assert.equal(ui.url({ moduleId: id }), '#module/' + id);
    assert.equal(ui.url({ moduleId: id }, 'python-debutants'), '#module/' + id + '?parcours=python-debutants');
    assert.equal(ui.url({ moduleId: id }, 'web-debutants'), '#module/' + id);
  }
  assert.equal(data.aliases.debutants, 'parcours/web-debutants');
});

test('Python : exemples exécutés dans des processus propres, sorties et erreurs attendues', () => {
  function execute(code, input = '') {
    const result = spawnSync(process.env.PYTHON_PATH || 'python', ['-X', 'utf8', '-c', code], { input, encoding: 'utf8', timeout: 5000 });
    assert.ifError(result.error);
    return { ...result, stdout: result.stdout.replace(/\r\n/g, '\n') };
  }
  const cases = [
    ['python-thonny', 'exemple', '', 'Bonjour !\n'],
    ['python-affichage', 'exemple', '', 'Bienvenue !\nVoici mon premier programme.\n'],
    ['python-variables', 'exemple', '', 'Luna\npersonnage\n'],
    ['python-variables', 'changer', '', 'Luna\nMilo\n'],
    ['python-saisie', 'exemple', 'Nova\n', 'Quel pseudo choisis-tu ? Bienvenue Nova\n'],
    ['python-saisie', 'exemple', '12\n', 'Quel pseudo choisis-tu ? Bienvenue 12\n']
  ];
  for (const [id, name, input, expected] of cases) {
    const result = execute(block(id, name).code, input);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout, expected);
  }
  assert.match(execute(block('python-affichage', 'erreur').code).stderr, /SyntaxError/);
  assert.match(execute(block('python-variables', 'erreur').code).stderr, /NameError/);
  assert.equal(block('python-conversation', 'plan').code, undefined, 'Pas de solution complète dans le projet');
  // Solution de test originale : n'est pas affichée sur la page du projet.
  const conversation = 'print("Bienvenue !")\npseudo = input("Pseudo ? ")\nlieu = input("Lieu ? ")\nactivite = input("Activité ? ")\nprint("Bonjour", pseudo)\nprint("Destination", lieu)\nprint("Programme", activite)';
  for (const [input, ending] of [
    ['Nova\nLune\nDessiner\n', 'Bonjour Nova\nDestination Lune\nProgramme Dessiner\n'],
    ['Milo\nForêt\nExplorer\n', 'Bonjour Milo\nDestination Forêt\nProgramme Explorer\n']
  ]) {
    const result = execute(conversation, input);
    assert.equal(result.status, 0, result.stderr);
    assert(result.stdout.endsWith(ending));
  }
});

test('Python : manipulation explicite et aucune validation ni écriture privée automatique', () => {
  assert(block('python-thonny', 'reperes').paragraphs.some(p => p.includes('>>>')));
  const diagram = block('python-thonny', 'reperes').codeDiagram;
  assert(diagram.note);
  assert.equal(diagram.title, undefined);
  assert.equal(diagram.filename, 'bonjour.py');
  assert.equal(Array.from(diagram.codeParts, p => p.text).join(''), block('python-thonny', 'exemple').code);
  assert.equal(diagram.output, 'Bonjour !');
  const diagramRenderer = fs.readFileSync(path.join(root, 'app.js'), 'utf8').split('function createCodeDiagram(config) {')[1].split('function createLesson')[0];
  assert(!/innerHTML|createElement\(['"]button/.test(diagramRenderer));
  assert(!/File →|View →|This computer|Stop\/Restart|\(Shell\)|\(Run,/.test(JSON.stringify(data.modules['python-thonny'])));
  assert.equal(data.modules['python-thonny'].prerequisitesInContent, true);
  assert(!block('python-thonny', 'preparer').text.includes('adulte'));
  assert(data.modules['python-thonny'].blocks.every(b => !b.title.includes('—')));
  assert(block('python-saisie', 'exemple').paragraphs.some(p => p.includes('virgule')));
  assert(block('python-saisie', 'exemple').paragraphs.some(p => p.includes('même si tu réponds avec des chiffres')));
  assert(block('python-conversation', 'preparer').text.includes('ne les efface pas'));
  const doc = model.create('Test fictif');
  const before = model.serialize(doc);
  for (const id of ids) {
    ui.target({ moduleId: id });
    for (const skill of data.modules[id].skillIds) assert.equal(model.getProgress(doc, 'absent', skill).status, 'not-started');
  }
  assert.equal(model.serialize(doc), before);
  model.addClass(doc, { id: 'c', name: 'Classe fictive' });
  model.addStudent(doc, { id: 's', name: 'Élève fictif', classId: 'c' });
  model.updateProgress(doc, 's', 'python.input', { status: 'in-progress', note: 'Question créée avec aide' });
  const copy = model.parse(model.serialize(doc), data).document;
  assert.equal(model.getProgress(copy, 's', 'python.input').status, 'in-progress');
  assert.equal(model.getProgress(copy, 's', 'python.variables').status, 'not-started');
  assert.equal(copy.frameworkProgress.length, 0);
});
