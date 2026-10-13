const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { validateSource } = require('../scripts/catalog/validate-schema.cjs');
const data = loadCatalog();

test('schémas : guides imbriqués, illustrations et étapes rejettent fautes et types incorrects', () => {
  for (const [field, value] of [
    ['illustration', { src: 'image.png', alt: '', capton: 'Typo' }],
    [
      'codeDiagram',
      { filename: 'test.py', codeParts: [{ text: 'print(1)', kind: 'unknown' }], output: '1' },
    ],
    ['actionSteps', [{ title: 'Observer', paragraphIndex: -1 }]],
    ['actionSteps', [{ title: 'Observer', paragraphIndex: 0, showCode: 'yes' }]],
    ['coordinateDiagram', { caption: 'Axes', center: '0', left: '-1', right: '1', up: '1' }],
  ]) {
    const module = structuredClone(data.modules['html-images']);
    module.blocks[0][field] = value;
    assert.throws(
      () => validateSource('module', module, 'bad-visual.json'),
      /bad-visual.json.*invalid module structure/,
    );
  }
  const module = structuredClone(data.modules['html-images']);
  module.teacherGuide.questions[0].anwser = 'Typo';
  assert.throws(() => validateSource('module', module, 'bad-guide.json'), /anwser/);
  delete module.teacherGuide.questions[0].anwser;
  module.teacherGuide.example.target.moduleId = 42;
  assert.throws(
    () => validateSource('module', module, 'bad-guide.json'),
    /example\/target\/moduleId must be string/,
  );
});

test('schémas : scripts Scratch récursifs et variantes de pièces validés', () => {
  const valid = structuredClone(data.modules['scratch-pilotage']);
  valid.blocks[0].visualScript = {
    caption: 'Script',
    blocks: [
      {
        category: 'control',
        label: 'Test',
        parts: [
          {
            condition: [{ reporter: 'abscisse x', category: 'motion' }, ' > ', { value: '200' }],
            operator: true,
          },
        ],
        children: [{ category: 'motion', label: 'Avancer', parts: ['avancer ', { value: '10' }] }],
      },
    ],
  };
  validateSource('module', valid, 'scratch.json');
  const invalid = structuredClone(valid);
  invalid.blocks[0].visualScript.blocks[0].children[0].parts[1].vaule = '10';
  assert.throws(() => validateSource('module', invalid, 'scratch.json'), /vaule/);
  const mixed = structuredClone(valid);
  mixed.blocks[0].visualScript.blocks[0].parts = [{ value: '10', choice: 'espace' }];
  assert.throws(() => validateSource('module', mixed, 'scratch.json'), /oneOf/);
  const ambiguous = structuredClone(valid);
  ambiguous.blocks[0].visualScript.stacks = [];
  assert.throws(() => validateSource('module', ambiguous, 'scratch.json'), /additional properties/);
  for (const part of [
    { reporter: 'score' },
    { reporter: 'score', category: 'unknown' },
    { reporter: 'score', category: 'variables', value: 'score' },
  ]) {
    const badReporter = structuredClone(valid);
    badReporter.blocks[0].visualScript.blocks[0].parts = [part];
    assert.throws(
      () => validateSource('module', badReporter, 'scratch.json'),
      /invalid module structure/,
    );
  }
});

test('schémas : registres dédiés et conducteur historique entièrement validés', () => {
  for (const [kind, value] of [
    ['domains', data.domains],
    ['skills', data.skills],
    ['scratch-projects', data.scratchProjects],
    ['teacher', data.teacher],
  ])
    validateSource(kind, value, kind + '.json');
  assert.throws(
    () => validateSource('skills', { test: { title: 'Titre', extra: true } }, 'skills.json'),
    /extra/,
  );
  assert.throws(
    () =>
      validateSource('domains', { test: { title: 'Titre', pathwayIds: 'wrong' } }, 'domains.json'),
    /pathwayIds must be array/,
  );
  assert.throws(
    () =>
      validateSource(
        'scratch-projects',
        { test: { title: 'Projet', starterUrl: 42 } },
        'projects.json',
      ),
    /starterUrl/,
  );
  validateSource(
    'scratch-projects',
    { test: { title: 'Projet', starterUrl: null } },
    'projects.json',
  );
  const teacher = structuredClone(data.teacher);
  teacher.schedule[0].itmes = [];
  assert.throws(() => validateSource('teacher', teacher, 'teacher.json'), /itmes/);
  delete teacher.schedule[0].itmes;
  teacher.connection.chatExamples = [42];
  assert.throws(
    () => validateSource('teacher', teacher, 'teacher.json'),
    /chatExamples\/0 must be string/,
  );
});
test('schémas : tous les modules et parcours actuels sont valides', () => {
  for (const [id, value] of Object.entries(data.modules)) validateSource('module', value, id);
  for (const [id, value] of Object.entries(data.pathways)) validateSource('pathway', value, id);
});
test('schémas : fautes de champ et types incorrects identifiés dans le fichier', () => {
  const module = structuredClone(data.modules['html-images']);
  module.objectve = module.objective;
  assert.throws(
    () => validateSource('module', module, 'html-images.json'),
    /html-images.json.*objectve/,
  );
  delete module.objectve;
  module.blocks[0].paragraphs = 'Wrong type';
  assert.throws(
    () => validateSource('module', module, 'html-images.json'),
    /\/blocks\/0\/paragraphs must be array/,
  );
});
test('schémas : une démonstration ne peut omettre son aperçu réel', () => {
  const module = structuredClone(data.modules['html-images']);
  delete module.blocks[0].demonstration.variants[0].html;
  assert.throws(
    () => validateSource('module', module, 'html-images.json'),
    /required property 'html'/,
  );
  module.blocks[0].demonstration.type = 'unknown';
  assert.throws(() => validateSource('module', module, 'html-images.json'), /allowed values/);
});
test('schémas : tâches nulles, ressources incomplètes et parcours vides rejetés', () => {
  const module = structuredClone(data.modules['html-images']);
  module.blocks.find((block) => block.type === 'tasks').items[0] = null;
  assert.throws(() => validateSource('module', module, 'html-images.json'), /must be object/);
  const resourceModule = structuredClone(data.modules['html-images']);
  delete resourceModule.resources[0].path;
  assert.throws(
    () => validateSource('module', resourceModule, 'html-images.json'),
    /required property 'path'/,
  );
  const pathway = structuredClone(data.pathways['web-debutants']);
  pathway.moduleIds = [];
  assert.throws(
    () => validateSource('pathway', pathway, 'web-debutants.json'),
    /must NOT have fewer than 1 items/,
  );
});
test('éditeur : associations de schémas locales et références résolubles hors ligne', () => {
  const root = path.resolve(__dirname, '..');
  const settings = JSON.parse(fs.readFileSync(path.join(root, '.vscode/settings.json'), 'utf8'));
  for (const mapping of settings['json.schemas'])
    assert(fs.existsSync(path.resolve(root, '.vscode', mapping.url)));
  for (const kind of ['module', 'pathway']) {
    const schema = JSON.parse(
      fs.readFileSync(path.join(root, 'schemas', kind + '.schema.json'), 'utf8'),
    );
    assert(fs.existsSync(path.resolve(root, 'schemas', schema.$ref.split('#')[0])));
  }
});
