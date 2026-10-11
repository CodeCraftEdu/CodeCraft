const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { validateSource } = require('../scripts/catalog/validate-schema.cjs');
const data = loadCatalog();
test('schémas : tous les modules et parcours actuels sont valides', () => {
  for (const [id, value] of Object.entries(data.modules)) validateSource('module', value, id);
  for (const [id, value] of Object.entries(data.pathways)) validateSource('pathway', value, id);
});
test('schémas : fautes de champ et types incorrects identifiés dans le fichier', () => {
  const module = structuredClone(data.modules['html-images']);
  module.objectve = module.objective;
  assert.throws(() => validateSource('module', module, 'html-images.json'), /html-images.json.*objectve/);
  delete module.objectve;
  module.blocks[0].paragraphs = 'Wrong type';
  assert.throws(() => validateSource('module', module, 'html-images.json'), /\/blocks\/0\/paragraphs must be array/);
});
test('schémas : une démonstration ne peut omettre son aperçu réel', () => {
  const module = structuredClone(data.modules['html-images']);
  delete module.blocks[0].demonstration.variants[0].html;
  assert.throws(() => validateSource('module', module, 'html-images.json'), /required property 'html'/);
  module.blocks[0].demonstration.type = 'unknown';
  assert.throws(() => validateSource('module', module, 'html-images.json'), /allowed values/);
});
test('schémas : tâches nulles, ressources incomplètes et parcours vides rejetés', () => {
  const module = structuredClone(data.modules['html-images']);
  module.blocks.find(block => block.type === 'tasks').items[0] = null;
  assert.throws(() => validateSource('module', module, 'html-images.json'), /must be object/);
  const resourceModule = structuredClone(data.modules['html-images']);
  delete resourceModule.resources[0].path;
  assert.throws(() => validateSource('module', resourceModule, 'html-images.json'), /required property 'path'/);
  const pathway = structuredClone(data.pathways['web-debutants']);
  pathway.moduleIds = [];
  assert.throws(() => validateSource('pathway', pathway, 'web-debutants.json'), /must NOT have fewer than 1 items/);
});
test('éditeur : associations de schémas locales et références résolubles hors ligne', () => {
  const root = path.resolve(__dirname, '..');
  const settings = JSON.parse(fs.readFileSync(path.join(root, '.vscode/settings.json'), 'utf8'));
  for (const mapping of settings['json.schemas']) assert(fs.existsSync(path.resolve(root, '.vscode', mapping.url)));
  for (const kind of ['module', 'pathway']) {
    const schema = JSON.parse(fs.readFileSync(path.join(root, 'schemas', kind + '.schema.json'), 'utf8'));
    assert(fs.existsSync(path.resolve(root, 'schemas', schema.$ref.split('#')[0])));
  }
});
