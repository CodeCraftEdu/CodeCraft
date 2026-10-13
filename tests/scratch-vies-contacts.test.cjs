const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { inflateRawSync } = require('node:zlib');
const { createHash } = require('node:crypto');
const { JSDOM } = require('jsdom');
const { studentDom } = require('./helpers/student-dom.cjs');
const { publicFile } = require('../scripts/lib/public-files.cjs');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');

test('supports Scratch : départs et exemples en ligne accessibles, fichiers locaux conservés', () => {
  const data = loadCatalog();
  const dom = studentDom();
  try {
    dom.window.HTMLElement.prototype.scrollIntoView = () => {};
    for (const [id, starterId, demoId] of [
      ['scratch-vies-contacts', '1391213130', '1391211682'],
      ['scratch-clones-mobiles', '1391213631', '1391213388'],
      ['scratch-niveaux-etats', '1391213849', '1391213735'],
    ]) {
      const project = data.scratchProjects[data.modules[id].scratchProjectId];
      assert.equal(project.starterUrl, `https://scratch.mit.edu/projects/${starterId}/`);
      assert.equal(project.demoUrl, `https://scratch.mit.edu/projects/${demoId}/`);
      assert(project.studentInstructions.includes('Remix'));
      dom.navigate(`#module/${id}?parcours=scratch-debutants`);
      const main = dom.window.document.querySelector('main');
      const starter = main.querySelector(`a[href="${project.starterUrl}"]`);
      const demo = main.querySelector('.lesson-tool-link');
      assert.equal(starter.textContent, 'Ouvrir le projet de départ');
      assert.equal(demo.href, project.demoUrl);
      for (const anchor of [starter, demo]) {
        assert.equal(anchor.target, '_blank');
        assert(anchor.rel.includes('noopener'));
      }
      assert.equal(main.querySelectorAll('[data-activity-id="preparer"] a[download]').length, 2);
      assert.equal(main.querySelector('[data-activity-id="atelier"]').open, false);
    }
  } finally {
    dom.close();
  }
});

test('support vies : explication directe et activité repliée, liens internes utilisables', () => {
  const dom = studentDom();
  try {
    dom.window.HTMLElement.prototype.scrollIntoView = () => {};
    dom.navigate('#module/scratch-vies-contacts?parcours=scratch-debutants&activite=solution');
    const main = dom.window.document.querySelector('main');
    const solution = main.querySelector('[data-activity-id="solution"]');
    assert(solution.querySelector('.scratch-script'));
    assert.equal(solution.closest('details'), null);
    assert(solution.querySelector('.scratch-quick-steps').textContent.includes('une autre pile'));
    assert.equal(main.querySelector('[data-activity-id="atelier"]').open, false);
    assert.equal(main.querySelector('[data-activity-id="depannage"]').open, false);
    dom.navigate('#module/scratch-vies-contacts?parcours=scratch-debutants&activite=autonomie');
    assert.equal(main.querySelector('[data-activity-id="atelier"]').open, true);
    assert(main.querySelector('[data-activity-id="autonomie"]'));
  } finally {
    dom.close();
  }
});

test('projets Scratch locaux : archives servies avec le bon type, chemins privés refusés', () => {
  const root = path.join(__dirname, '..');
  for (const name of ['depart', 'reference']) {
    const file = publicFile(root, '/assets/scratch/vies-contacts-' + name + '.sb3');
    assert(file);
    assert.equal(file.type, 'application/zip');
    assert.equal(fs.readFileSync(file.file).readUInt32LE(0), 0x04034b50);
  }
  assert.equal(publicFile(root, '/assets/scratch/../../content/manifest.json'), null);
  assert.equal(publicFile(root, '/espace-codecraft-test.sb3'), null);
});

test('projets Scratch : costumes dimensionnés et empreintes cohérentes pour la sauvegarde en ligne', () => {
  const root = path.join(__dirname, '..', 'assets', 'scratch');
  for (const name of fs.readdirSync(root).filter((file) => file.endsWith('.sb3'))) {
    const archive = fs.readFileSync(path.join(root, name));
    const entries = new Map();
    let offset = 0;
    while (archive.readUInt32LE(offset) === 0x04034b50) {
      const method = archive.readUInt16LE(offset + 8);
      const size = archive.readUInt32LE(offset + 18);
      const nameLength = archive.readUInt16LE(offset + 26);
      const extraLength = archive.readUInt16LE(offset + 28);
      const entryName = archive.subarray(offset + 30, offset + 30 + nameLength).toString();
      const start = offset + 30 + nameLength + extraLength;
      const bytes = archive.subarray(start, start + size);
      assert([0, 8].includes(method), name);
      entries.set(entryName, method === 8 ? inflateRawSync(bytes) : bytes);
      offset = start + size;
    }
    const project = JSON.parse(entries.get('project.json').toString());
    for (const target of project.targets) {
      for (const costume of target.costumes) {
        const bytes = entries.get(costume.md5ext);
        assert(bytes, name + ': ' + costume.name);
        assert.equal(createHash('md5').update(bytes).digest('hex'), costume.assetId);
        const svg = new JSDOM(bytes.toString(), { contentType: 'image/svg+xml' });
        try {
          const element = svg.window.document.documentElement;
          const width = Number(element.getAttribute('width'));
          const height = Number(element.getAttribute('height'));
          assert(width > 0 && height > 0, name);
          assert.equal(element.getAttribute('viewBox'), `0 0 ${width} ${height}`, name);
        } finally {
          svg.window.close();
        }
      }
    }
  }
});
