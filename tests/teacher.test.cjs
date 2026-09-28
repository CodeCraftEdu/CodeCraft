const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const model = require('../teacher-model.js');
const { createFileAccess } = require('../teacher-file-access.js');
const root = path.join(__dirname, '..');
const NOW = '2026-09-28T12:00:00.000Z';
const fresh = () => model.create('test-workspace', NOW);
const tick = () => new Promise(resolve => setImmediate(resolve));
const deferred = () => { let resolve; const promise = new Promise(r => { resolve = r; }); return { promise, resolve }; };

test('document vide V1 : collections privées, aller-retour JSON et aucune ancienne valeur de statut', () => {
  const doc = fresh();
  assert.deepEqual(model.parse(model.serialize(doc)).document, doc);
  for (const key of ['contexts', 'frameworks', 'classes', 'students', 'memberships', 'progress', 'sessions']) assert.deepEqual(doc[key], []);
  assert.equal(doc.schemaVersion, 1);
});
test('JSON invalide / version inconnue / champs manquants ou inconnus refusés', () => {
  assert.throws(() => model.parse('{'), /JSON illisible/);
  assert.throws(() => model.parse('null'), /Document invalide/);
  assert.throws(() => model.validate({ ...fresh(), schemaVersion: 2 }), /Version/);
  const missing = fresh(); delete missing.frameworks;
  assert.throws(() => model.validate(missing), /frameworks/);
  assert.throws(() => model.validate({ ...fresh(), secret: 'unknown' }), /champ inconnu/);
});
test('dates et identifiants internes invalides refusés', () => {
  assert.throws(() => model.validate({ ...fresh(), createdAt: '2026-02-30T12:00:00.000Z' }), /horodatage/);
  assert.throws(() => model.validate({ ...fresh(), revision: -1 }), /entier/);
  const doc = fresh();
  doc.classes.push({ id: 'c', name: 'Classe fictive', frameworkId: 'absent' });
  assert.throws(() => model.validate(doc), /référence interne/);
  doc.classes = [];
  doc.students.push({ id: 's', name: 'Exemple fictif' }, { id: 's', name: 'Doublon fictif' });
  assert.throws(() => model.validate(doc), /double/);
});
function futureDocument() {
  const doc = fresh();
  doc.contexts.push({ id: 'ctx', name: 'Contexte fictif' });
  doc.frameworks.push({ id: 'f', name: 'Référentiel fictif', version: '1', objectives: [{ id: 'o', code: 'DEMO', title: 'Objectif fictif', skillIds: ['html.lists'] }] });
  doc.classes.push({ id: 'c', name: 'Classe fictive', contextId: 'ctx', frameworkId: 'f' });
  doc.students.push({ id: 's', name: 'Exemple fictif' });
  doc.memberships.push({ classId: 'c', studentId: 's' });
  doc.progress.push({ studentId: 's', skillId: 'html.lists', status: 'acquired', acquiredOn: '2026-09-28', updatedAt: NOW, note: '' });
  doc.sessions.push({ id: 'se', classId: 'c', date: '2026-09-28', status: 'draft', skillIds: ['html.lists'], attendance: [{ studentId: 's', status: 'present' }], notes: '', conductor: { title: 'Exemple', reminders: [], slots: [{ id: 'slot', startMinute: 0, durationMinutes: 10, title: 'Exemple', instructions: '', moduleIds: ['html-listes'], skillIds: ['html.lists'], studentIds: ['s'], pathwayId: 'web-fondations' }] } });
  return doc;
}
test('structures futures privées valides, snapshot indépendant des rattachements actuels', () => {
  const doc = futureDocument();
  assert.deepEqual(model.validate(doc), []);
  const before = JSON.stringify(doc.sessions);
  doc.memberships = [];
  doc.progress = [];
  model.validate(doc);
  assert.equal(JSON.stringify(doc.sessions), before);
});
test('trois statuts uniquement, cohérence de date et unicité de progression', () => {
  const doc = futureDocument();
  const p = doc.progress[0];
  p.status = 'to-review';
  assert.throws(() => model.validate(doc), /status/);
  for (const status of ['not-started', 'in-progress']) {
    p.status = status; p.acquiredOn = null; model.validate(doc);
  }
  p.status = 'acquired';
  assert.throws(() => model.validate(doc), /date requise/);
  p.acquiredOn = '2026-02-30';
  assert.throws(() => model.validate(doc), /date/);
  p.acquiredOn = '2026-09-28';
  doc.progress.push({ ...p });
  assert.throws(() => model.validate(doc), /double/);
});
test('références catalogue absentes : avertissement et conservation, pas de perte', () => {
  const doc = futureDocument();
  const original = JSON.stringify(doc);
  assert(model.validate(doc, { skills: {}, modules: {}, pathways: {} }).length >= 3);
  assert.equal(JSON.stringify(doc), original);
});
test('révision préparée sur copie, sans modifier le document en mémoire', () => {
  const doc = fresh(); const next = model.prepareSave(doc, '2026-09-28T12:01:00.000Z');
  assert.equal(next.revision, 1); assert.equal(doc.revision, 0);
  assert.equal(next.updatedAt, '2026-09-28T12:01:00.000Z');
});

function fakeHandle(initial = '') {
  let content = initial;
  const stats = { opens: 0, closes: 0, aborts: 0, requests: 0 };
  const config = { permission: 'granted', request: 'granted', failWrite: false, failClose: false, gate: null };
  const handle = {
    kind: 'file', name: 'espace-codecraft.json',
    queryPermission: async () => config.permission,
    requestPermission: async () => { stats.requests++; return config.request; },
    getFile: async () => ({ text: async () => content }),
    createWritable: async () => {
      stats.opens++;
      let pending;
      return {
        write: async text => { if (config.failWrite) throw new Error('write failed'); pending = text; },
        close: async () => { if (config.gate) await config.gate.promise; if (config.failClose) throw new Error('close failed'); content = pending; stats.closes++; },
        abort: async () => { stats.aborts++; }
      };
    }
  };
  const env = { isSecureContext: true, showOpenFilePicker: async () => [handle], showSaveFilePicker: async () => handle };
  return { handle, env, config, stats, content: () => content, external: value => { content = value; } };
}
test('création vide, écriture, relecture et réouverture du même handle', async () => {
  const f = fakeHandle(); const files = createFileAccess(f.env); assert(files.supported());
  const connection = await files.create();
  const text = model.serialize(fresh()); await connection.write(text);
  assert.equal(await connection.read(), text);
  assert.equal((await files.reconnect(f.handle)).text, text);
  assert.equal(f.stats.closes, 1);
});
test('création sur fichier non vide refusée sans écriture', async () => {
  const f = fakeHandle('important'); await assert.rejects(createFileAccess(f.env).create(), /déjà des données/);
  assert.equal(f.content(), 'important'); assert.equal(f.stats.opens, 0);
});
test('permission refusée et annulation : aucun flux ouvert', async () => {
  const f = fakeHandle(); f.config.permission = 'prompt'; f.config.request = 'denied';
  await assert.rejects(createFileAccess(f.env).open(), /Permission/); assert.equal(f.stats.opens, 0);
  f.env.showOpenFilePicker = async () => { throw Object.assign(new Error('cancel'), { name: 'AbortError' }); };
  await assert.rejects(createFileAccess(f.env).open(), { name: 'AbortError' });
});
test('le résultat de sauvegarde attend close et la relecture', async () => {
  const f = fakeHandle(); const connection = await createFileAccess(f.env).open();
  f.config.gate = deferred(); let done = false;
  const saving = connection.write('new').then(() => { done = true; });
  await tick(); assert.equal(done, false); assert.equal(f.content(), '');
  f.config.gate.resolve(); await saving; assert.equal(done, true); assert.equal(f.content(), 'new');
});
test('écritures concurrentes mises en file dans l’adaptateur', async () => {
  const f = fakeHandle(); const connection = await createFileAccess(f.env).open();
  await Promise.all([connection.write('first'), connection.write('second')]);
  assert.equal(f.content(), 'second'); assert.equal(f.stats.closes, 2);
});
test('conflit externe détecté avant écrasement', async () => {
  const f = fakeHandle('initial'); const connection = await createFileAccess(f.env).open();
  f.external('external'); await assert.rejects(connection.write('mine'), /Conflit/);
  assert.equal(f.content(), 'external'); assert.equal(f.stats.opens, 0);
});
for (const failure of ['failWrite', 'failClose']) {
  test(failure + ' : erreur remontée, abandon puis réessai possible', async () => {
    const f = fakeHandle('initial'); const connection = await createFileAccess(f.env).open();
    f.config[failure] = true; await assert.rejects(connection.write('new'));
    assert.equal(f.content(), 'initial'); assert.equal(f.stats.aborts, 1);
    f.config[failure] = false; await connection.write('retry'); assert.equal(f.content(), 'retry');
  });
}
test('IndexedDB : la seule valeur écrite est le handle', async () => {
  const f = fakeHandle(); const records = new Map();
  f.env.indexedDB = { open() {
    const request = {};
    queueMicrotask(() => {
      request.result = { close() {}, transaction(name, mode) {
        assert.equal(name, 'handles');
        const tx = { objectStore() { return {
          put(value, key) { assert.equal(value, f.handle); records.set(key, value); return {}; },
          get(key) { return { result: records.get(key) }; }
        }; } };
        queueMicrotask(() => tx.oncomplete()); return tx;
      } };
      request.onsuccess();
    }); return request;
  } };
  const files = createFileAccess(f.env); await files.remember(f.handle);
  assert.equal(await files.recall(), f.handle); assert.equal(records.size, 1);
});
test('IndexedDB absent : erreur distincte, accès fichier toujours utilisable', async () => {
  const f = fakeHandle(); const files = createFileAccess(f.env);
  await assert.rejects(files.remember(f.handle)); const c = await files.open(); await c.write('ok');
  assert.equal(f.content(), 'ok');
});
test('copie de secours : blob JSON sans écrire le fichier principal', () => {
  const f = fakeHandle('original'); let downloaded, clicked = false;
  Object.assign(f.env, {
    Blob, URL: { createObjectURL(blob) { downloaded = blob; return 'blob:test'; }, revokeObjectURL() {} },
    setTimeout() {}, document: { body: { append() {} }, createElement() { return { click() { clicked = true; }, remove() {} }; } }
  });
  createFileAccess(f.env).download(model.serialize(fresh()));
  assert(clicked); assert(downloaded instanceof Blob); assert.equal(f.content(), 'original');
});

function appHarness(options = {}) {
  const elements = new Map(), timers = new Map(), events = {};
  let timerId = 0;
  class Element {
    constructor() { this.events = {}; this.dataset = {}; this.children = []; this.value = ''; }
    addEventListener(type, cb) { this.events[type] = cb; }
    append(child) { this.children.push(child); }
    replaceChildren() { this.children = []; }
    focus() { document.activeElement = this; }
  }
  const document = { getElementById(id) { if (!elements.has(id)) elements.set(id, new Element()); return elements.get(id); }, createElement: () => new Element(), querySelector: () => document.getElementById('skip') };
  const f = fakeHandle(model.serialize(fresh())); const actualFiles = createFileAccess(f.env);
  let downloaded = null;
  const files = {
    ...actualFiles, recall: async () => options.remembered ? f.handle : null,
    remember: async () => { if (options.idbFailure) throw new Error('idb'); },
    download: text => { downloaded = text; }
  };
  const window = { CodeCraftTeacherModel: model, CodeCraftTeacherFiles: { createFileAccess: () => files }, confirm: () => true, addEventListener: (name, cb) => { events[name] = cb; } };
  const context = { window, document, crypto: { randomUUID: () => 'test-created' }, setTimeout: cb => { timers.set(++timerId, cb); return timerId; }, clearTimeout: id => timers.delete(id), console };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'teacher-app.js'), 'utf8'), context);
  const el = id => document.getElementById(id);
  return { f, el, files, events, downloaded: () => downloaded,
    click: id => el(id).events.click(),
    input(value) { el('workspace-label').value = value; el('workspace-label').events.input(); },
    async flush() { const pending = [...timers.values()]; timers.clear(); await Promise.all(pending.map(fn => fn())); }
  };
}
test('interface : aucun espace, ouverture sans écriture, métadonnée sale puis enregistrée', async () => {
  const h = appHarness(); assert.equal(h.el('save-state').textContent, 'Aucun Espace CodeCraft ouvert');
  await h.click('open-space'); assert.equal(h.f.stats.opens, 0);
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
  h.input('test'); assert.equal(h.el('save-state').textContent, 'Modifications non enregistrées');
  await h.flush(); assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
  assert.equal(JSON.parse(h.f.content()).metadata.label, 'test');
  await h.click('reload-space'); assert.equal(h.el('workspace-label').value, 'test');
});
test('interface : Enregistrement reste visible jusqu’à close ; saisie pendant écriture conservée', async () => {
  const h = appHarness(); await h.click('open-space'); h.input('first'); h.f.config.gate = deferred();
  const saving = h.click('save-space'); await tick();
  assert.equal(h.el('save-state').textContent, 'Enregistrement…'); h.input('latest');
  h.f.config.gate.resolve(); await saving;
  assert.equal(JSON.parse(h.f.content()).metadata.label, 'latest');
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
});
test('interface : erreur, copie de secours sans faux état enregistré, réessai', async () => {
  const h = appHarness(); await h.click('open-space'); h.input('unsaved'); h.f.config.failClose = true;
  await h.click('save-space'); assert.equal(h.el('save-state').textContent, 'Erreur de sauvegarde');
  h.click('download-space'); assert.equal(JSON.parse(h.downloaded()).metadata.label, 'unsaved');
  assert.equal(h.el('save-state').textContent, 'Erreur de sauvegarde');
  let blocked = false; h.events.beforeunload({ preventDefault() { blocked = true; } }); assert(blocked);
  h.f.config.failClose = false; await h.click('save-space');
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
});
test('interface : invalidité ou version inconnue préserve le document courant', async () => {
  const h = appHarness(); await h.click('open-space');
  for (const text of ['{', '{"schemaVersion":999}']) {
    h.f.external(text); await h.click('open-space'); assert.equal(h.f.content(), text);
    assert.equal(h.el('workspace-label').value, ''); assert.equal(h.el('operation-error').hidden, false);
  }
  assert.equal(h.f.stats.opens, 0);
});
test('interface : handle rouvert explicitement et échec IndexedDB sans faux échec de sauvegarde', async () => {
  const h = appHarness({ remembered: true, idbFailure: true }); await tick();
  assert.equal(h.el('reopen-space').disabled, false); await h.click('reopen-space');
  h.input('saved'); await h.flush();
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
  assert.equal(h.el('storage-notice').hidden, false);
});
test('interface : conflit conserve les modifications et ne remplace pas le fichier externe', async () => {
  const h = appHarness(); await h.click('open-space'); h.input('mine');
  const external = fresh(); external.metadata.label = 'external'; const text = model.serialize(external); h.f.external(text);
  await h.click('save-space'); assert.equal(h.f.content(), text);
  assert.equal(h.el('save-state').textContent, 'Erreur de sauvegarde');
  h.click('download-space'); assert.equal(JSON.parse(h.downloaded()).metadata.label, 'mine');
  await h.click('reload-space'); assert.equal(h.el('workspace-label').value, 'external');
});
test('interface : création échouée ne prétend pas avoir une révision enregistrée', async () => {
  const h = appHarness(); h.f.external(''); h.f.config.failClose = true;
  await h.click('create-space');
  assert.equal(h.el('save-state').textContent, 'Erreur de sauvegarde');
  assert(h.el('file-details').textContent.includes('aucune écriture confirmée'));
  assert.equal(h.f.content(), '');
  h.f.config.failClose = false; await h.click('save-space');
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
  assert.equal(JSON.parse(h.f.content()).revision, 1);
});
test('interface : annuler un sélecteur conserve les changements en mémoire', async () => {
  const h = appHarness(); await h.click('open-space'); h.input('à conserver');
  h.files.open = async () => { throw Object.assign(new Error('cancel'), { name: 'AbortError' }); };
  await h.click('open-space'); assert.equal(h.el('workspace-label').value, 'à conserver');
  assert.equal(h.el('save-state').textContent, 'Modifications non enregistrées');
  await h.flush(); assert.equal(JSON.parse(h.f.content()).metadata.label, 'à conserver');
});
test('archive autonome : contenu teacher identique, styles embarqués, pas de script distant', () => {
  const archive = fs.readFileSync(path.join(root, 'prof-conducteur-historique.html'), 'utf8');
  const data = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), data);
  const inline = [...archive.matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1];
  const copy = { window: {} }; vm.runInNewContext(inline, copy);
  assert.equal(JSON.stringify(copy.window.CODECRAFT_DATA.teacher), JSON.stringify(data.window.CODECRAFT_DATA.teacher));
  assert(!/<script[^>]+src=/.test(archive)); assert(!/<link[^>]+stylesheet/.test(archive));
  assert(archive.includes(fs.readFileSync(path.join(root, 'styles.css'), 'utf8')));
});
