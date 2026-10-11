'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const { loadCatalog, defaultContentRoot } = require('../scripts/catalog/load-catalog.cjs');
const { validateCatalog } = require('../scripts/catalog/validate-catalog.cjs');
const { buildCatalog, browserSource } = require('../scripts/build-catalog.cjs');
const root = path.resolve(__dirname, '..');

test('catalogue : fichiers sources et sortie navigateur strictement identiques, ordre conservé', () => {
  const data = loadCatalog();
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'generated/catalog.js'), 'utf8'), sandbox);
  assert.deepStrictEqual(JSON.parse(JSON.stringify(sandbox.window.CODECRAFT_DATA)), data);
  assert.equal(Object.keys(data.modules).length, 72);
  assert.equal(Object.keys(data.pathways).length, 7);
  buildCatalog({ check: true });
});

test('génération : indépendante du dossier courant, sans exécution des exemples HTML', () => {
  const result = execFileSync(process.execPath, [path.join(root, 'scripts/build-catalog.cjs'), '--check'], {
    cwd: os.tmpdir(), encoding: 'utf8', windowsHide: true
  });
  assert.match(result, /Catalogue checked/);
  const source = browserSource({ sample: '</script>\u2028\u2029', code: '  <img src="image.png">\n' });
  assert(!source.includes('</script>'));
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox);
  assert.equal(sandbox.window.CODECRAFT_DATA.sample, '</script>\u2028\u2029');
  assert.equal(sandbox.window.CODECRAFT_DATA.code, '  <img src="image.png">\n');
});

test('validation : références de parcours, compétences, activités et ressources cassées refusées', () => {
  const mutations = [
    data => { data.pathways['web-debutants'].moduleIds.push('missing-module'); },
    data => { data.modules['html-images'].skillIds.push('missing.skill'); },
    data => { data.modules['html-images'].nextSteps.push({ moduleId: 'html-images', blockId: 'missing-block' }); },
    data => { data.modules['html-images'].nextSteps.push({ moduleId: 'html-images', blockId: 'exercices', itemId: 'missing-item' }); },
    data => { data.modules['html-images'].resources = []; },
    data => { data.aliases.broken = 'module/missing-module'; },
    data => { data.pathways['web-debutants'].moduleIds.push('python-thonny'); }
  ];
  for (const mutate of mutations) {
    const data = loadCatalog();
    mutate(data);
    assert.throws(() => validateCatalog(data), /unknown|different domain/);
  }
});

test('validation : identifiants d’activités et tâches dupliqués refusés', () => {
  const data = loadCatalog();
  const module = data.modules['html-images'];
  module.blocks.push(structuredClone(module.blocks[0]));
  assert.throws(() => validateCatalog(data), /duplicate block/);
  module.blocks.pop();
  const tasks = module.blocks.find(block => block.type === 'tasks');
  tasks.items.push(structuredClone(tasks.items[0]));
  assert.throws(() => validateCatalog(data), /duplicate item/);
});

test('chargement : doublons du manifeste, fichiers oubliés et chemins hors contenu refusés', t => {
  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-content-test-'));
  assert.equal(path.dirname(temporaryRoot), path.resolve(os.tmpdir()));
  t.after(() => fs.rmSync(temporaryRoot, { recursive: true, force: true }));
  fs.cpSync(defaultContentRoot, temporaryRoot, { recursive: true });
  const manifestFile = path.join(temporaryRoot, 'manifest.json');
  const original = fs.readFileSync(manifestFile, 'utf8');
  const manifest = JSON.parse(original);
  manifest.modules.push(manifest.modules[0]);
  fs.writeFileSync(manifestFile, JSON.stringify(manifest));
  assert.throws(() => loadCatalog(temporaryRoot), /Duplicate modules identifier/);
  fs.writeFileSync(manifestFile, original);
  fs.writeFileSync(path.join(temporaryRoot, 'forgotten.json'), '{}');
  assert.throws(() => loadCatalog(temporaryRoot), /Unregistered content file/);
  fs.unlinkSync(path.join(temporaryRoot, 'forgotten.json'));
  manifest.modules.pop();
  manifest.catalog.site = '../outside.json';
  fs.writeFileSync(manifestFile, JSON.stringify(manifest));
  assert.throws(() => loadCatalog(temporaryRoot), /Invalid content filename/);
  fs.writeFileSync(manifestFile, original);
  fs.writeFileSync(path.join(temporaryRoot, 'catalog/site.json'), '{');
  assert.throws(() => loadCatalog(temporaryRoot), /catalog\/site\.json/);
});

test('entrées HTML : catalogue généré chargé avant les renderers, archive autonome conservée', () => {
  for (const file of ['index.html', 'prof.html']) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    assert(html.includes('src="generated/catalog.js'));
    assert(html.indexOf('src="generated/catalog.js') < html.indexOf('src="pedagogy.js'));
    assert(!html.includes('src="lesson-data.js'));
  }
});
