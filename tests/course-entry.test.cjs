const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const context = { window: {}, history: { replaceState(...args) { context.redirect = args[2]; } },
  renderModule(...args) { context.rendered = args; } };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), context);
context.data = context.window.CODECRAFT_DATA;
vm.runInContext(app.slice(app.indexOf('  const moduleUrl ='), app.indexOf('  const domainUrl =')), context);
vm.runInContext(app.slice(app.indexOf('  function renderPathway('), app.indexOf('  function support(')), context);

test('accueil : domaines uniques directement au cours, domaines multiples au choix', () => {
  for (const [domain, pathway, first] of [['python', 'python-debutants', 'python-thonny'], ['robotique', 'robotique-debutants', 'robotique-lumiere']]) {
    assert.equal(vm.runInContext(`domainEntryUrl('${domain}')`, context), `#module/${first}?parcours=${pathway}`);
  }
  for (const domain of ['web', 'jeux-video']) assert.equal(vm.runInContext(`domainEntryUrl('${domain}')`, context), '#domaine/' + domain);
  assert.match(app, /if \(!home && singlePathway\(domain\)\) return renderPathway/);
});

test('anciennes routes de parcours : premier cours, contexte conservé et historique remplacé', () => {
  for (const [id, pathway] of Object.entries(context.data.pathways)) {
    context.renderPathway(id);
    assert.equal(context.redirect, '#module/' + pathway.moduleIds[0] + '?parcours=' + id);
    assert.deepEqual(context.rendered, [pathway.moduleIds[0], id]);
  }
  assert.match(app, /parent.append\(link\(pathway.title, pathwayStartUrl\(requestedPathway\)/);
  assert.match(app, /navigation.append\(card\(pathway.title, pathway.objective, pathwayStartUrl\(pathwayId\)/);
  assert.match(app, /Objectif du parcours/);
});
