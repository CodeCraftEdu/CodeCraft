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
  for (const key of ['contexts', 'frameworks', 'classes', 'students', 'memberships', 'progress', 'frameworkProgress', 'sessions']) assert.deepEqual(doc[key], []);
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
test('classes : création, renommage, contexte facultatif sans modifier les autres classes', () => {
  const doc = fresh();
  model.addClass(doc, { id: 'c1', name: ' Dimanche ', contextName: 'Association fictive', contextId: 'ctx1' });
  model.addClass(doc, { id: 'c2', name: 'Lundi', contextName: 'Association fictive', contextId: 'ctx2' });
  assert.equal(doc.contexts.length, 1);
  assert.equal(doc.classes[0].name, 'Dimanche');
  model.updateClass(doc, 'c1', { name: 'Dimanche matin', contextName: 'Indépendant fictif', contextId: 'ctx3' });
  assert.equal(doc.classes[1].contextId, 'ctx1');
  assert.equal(doc.contexts[0].name, 'Association fictive');
  model.updateClass(doc, 'c1', { name: 'Dimanche matin', contextName: '' });
  assert.equal(doc.classes[0].contextId, undefined);
  model.validate(doc);
});
test('suppression de classe sans séance : rattachements retirés, fiches et progressions conservées', () => {
  const doc = fresh();
  model.addClass(doc, { id: 'c1', name: 'Classe à supprimer' });
  model.addClass(doc, { id: 'c2', name: 'Classe conservée' });
  model.addStudent(doc, { id: 's', name: 'Élève fictif', classId: 'c1' });
  model.attachStudent(doc, 'c2', 's');
  model.updateProgress(doc, 's', 'html.text', { status: 'in-progress' });
  model.deleteClass(doc, 'c1');
  assert.deepEqual(doc.classes.map(item => item.id), ['c2']);
  assert.deepEqual(doc.memberships, [{ classId: 'c2', studentId: 's' }]);
  assert.equal(doc.students[0].name, 'Élève fictif');
  assert.equal(doc.progress[0].status, 'in-progress');
  model.validate(doc);
});
test('suppression de classe avec séances bloquée sans mutation', () => {
  const doc = fresh(); model.addClass(doc, { id: 'c', name: 'Classe historique' });
  model.addSession(doc, { id: 'session', classId: 'c', date: '2026-09-29' });
  const before = model.serialize(doc);
  assert.throws(() => model.deleteClass(doc, 'c'), /possède 1 séance historique.*préserver cet historique/);
  assert.equal(model.serialize(doc), before);
});
test('élève indépendant, rattachements multiples sans duplication de fiche ou progression', () => {
  const doc = fresh();
  model.addClass(doc, { id: 'c1', name: 'Classe fictive 1' });
  model.addClass(doc, { id: 'c2', name: 'Classe fictive 2' });
  model.addStudent(doc, { id: 's', name: ' Élève fictif ', classId: 'c1' });
  assert.equal(model.attachStudent(doc, 'c2', 's'), true);
  assert.equal(model.attachStudent(doc, 'c2', 's'), false);
  model.updateStudent(doc, 's', { name: 'Nom modifié', note: 'Note fictive' });
  assert.equal(doc.students.length, 1); assert.equal(doc.memberships.length, 2);
  assert.equal(doc.students[0].note, 'Note fictive');
  assert.equal(doc.progress.length, 0);
  model.validate(doc);
});
test('mutations invalides ne créent pas de données partielles', () => {
  const doc = fresh();
  const before = model.serialize(doc);
  assert.throws(() => model.addClass(doc, { id: 'c', name: ' ', contextName: 'x', contextId: 'ctx' }));
  assert.throws(() => model.addStudent(doc, { id: 's', name: 'Fictif', classId: 'absent' }));
  assert.equal(model.serialize(doc), before);
});
test('progression : À voir implicite, transition manuelle, date locale et note sans changement de date', () => {
  const doc = futureDocument(); doc.progress = [];
  const first = new Date(2026, 8, 28, 23, 30);
  const later = new Date(2026, 8, 29, 1, 30);
  assert.equal(model.getProgress(doc, 's', 'html.lists').status, 'not-started');
  assert.equal(doc.progress.length, 0);
  assert.equal(model.updateProgress(doc, 's', 'html.lists', { status: 'not-started' }, first), false);
  model.updateProgress(doc, 's', 'html.lists', { status: 'in-progress' }, first);
  assert.equal(doc.progress[0].acquiredOn, null);
  model.updateProgress(doc, 's', 'html.lists', { status: 'acquired' }, first);
  assert.equal(doc.progress[0].acquiredOn, '2026-09-28');
  assert.equal(model.updateProgress(doc, 's', 'html.lists', { status: 'acquired' }, later), false);
  model.updateProgress(doc, 's', 'html.lists', { note: 'Observation fictive' }, later);
  assert.equal(doc.progress[0].acquiredOn, '2026-09-28');
  assert.equal(doc.progress[0].status, 'acquired');
  assert.equal(doc.progress.length, 1);
  model.validate(doc);
});
function frameworkPackage() {
  return JSON.stringify({
    fileType: 'codecraft-external-framework', formatVersion: 1,
    framework: {
      id: 'framework-demo', name: 'Référentiel privé fictif', version: 'Version test',
      commonObjectives: [{ id: 'common-demo', code: 'COMMON.TEST', title: 'Objectif commun fictif', kind: 'objective', mapping: { skillIds: [], coverage: 'none' } }],
      levels: [{ id: 'level-demo', code: 'Niveau test', name: 'Niveau fictif', order: 1, stages: [{
        id: 'stage-demo', code: 'Étape test', name: 'Étape fictive', order: 1,
        objectives: [{ id: 'objective-demo', code: 'D1.1', title: 'Objectif fictif', kind: 'objective', mapping: { skillIds: ['html.lists'], coverage: 'covered' } }]
      }]}]
    }
  });
}
test('référentiel privé : import, rattachement facultatif et refus des doublons', () => {
  const doc = fresh();
  const framework = model.importFramework(doc, frameworkPackage(), { skills: { 'html.lists': {} } });
  model.addClass(doc, { id: 'c', name: 'Classe fictive' });
  assert.equal(model.setClassFramework(doc, 'c', framework.id), true);
  assert.equal(model.setClassFramework(doc, 'c', framework.id), false);
  assert.equal(doc.classes[0].frameworkId, framework.id);
  assert.throws(() => model.importFramework(doc, frameworkPackage()), /déjà utilisé/);
  assert.equal(model.setClassFramework(doc, 'c', ''), true);
  assert.equal(doc.classes[0].frameworkId, undefined);
  model.validate(doc, { skills: { 'html.lists': {} } });
});
test('référentiel privé : couverture cohérente et aucune fausse compétence', () => {
  const doc = fresh();
  model.importFramework(doc, frameworkPackage(), { skills: { 'html.lists': {} } });
  const objective = doc.frameworks[0].levels[0].stages[0].objectives[0];
  objective.mapping.coverage = 'none';
  assert.throws(() => model.validate(doc), /couverture absente/);
  objective.mapping.coverage = 'covered'; objective.mapping.skillIds = [];
  assert.throws(() => model.validate(doc), /couverture complète/);
  assert.throws(() => model.parseFrameworkPackage('{'), /JSON illisible/);
});
test('validation officielle : À voir implicite, date manuelle et indépendance des compétences CodeCraft', () => {
  const doc = fresh(); model.importFramework(doc, frameworkPackage());
  model.addClass(doc, { id: 'c', name: 'Classe fictive' });
  model.addStudent(doc, { id: 's', name: 'Élève fictif', classId: 'c' });
  const first = new Date(2026, 8, 28, 23, 30), later = new Date(2026, 8, 29, 1, 30);
  assert.equal(model.getFrameworkProgress(doc, 's', 'framework-demo', 'objective-demo').status, 'not-started');
  model.updateProgress(doc, 's', 'html.lists', { status: 'acquired' }, first);
  assert.equal(doc.frameworkProgress.length, 0);
  model.updateFrameworkProgress(doc, 's', 'framework-demo', 'objective-demo', { status: 'in-progress' }, first);
  model.updateFrameworkProgress(doc, 's', 'framework-demo', 'objective-demo', { status: 'acquired' }, first);
  assert.equal(doc.frameworkProgress[0].acquiredOn, '2026-09-28');
  model.updateFrameworkProgress(doc, 's', 'framework-demo', 'objective-demo', { note: 'Décision fictive' }, later);
  assert.equal(doc.frameworkProgress[0].acquiredOn, '2026-09-28');
  model.updateFrameworkProgress(doc, 's', 'framework-demo', 'objective-demo', { status: 'in-progress' }, later);
  assert.equal(doc.frameworkProgress[0].acquiredOn, null);
  assert.equal(doc.frameworkProgress[0].note, 'Décision fictive');
  model.validate(doc);
});
test('retours à En cours et À voir effacent la date sans perdre les remarques', () => {
  const doc = futureDocument();
  for (const status of ['in-progress', 'not-started']) {
    model.updateProgress(doc, 's', 'html.lists', { status: 'acquired', note: 'À garder' });
    model.updateProgress(doc, 's', 'html.lists', { status });
    assert.equal(doc.progress[0].acquiredOn, null); assert.equal(doc.progress[0].note, 'À garder');
  }
  model.validate(doc);
});
test('remarque sur une compétence non commencée ne valide rien ; élèves isolés', () => {
  const doc = futureDocument(); doc.progress = [];
  model.addStudent(doc, { id: 's2', name: 'Deuxième fictif', classId: 'c' });
  model.updateProgress(doc, 's', 'html.lists', { note: 'À observer' });
  assert.equal(doc.progress[0].status, 'not-started'); assert.equal(doc.progress[0].acquiredOn, null);
  assert.equal(model.getProgress(doc, 's2', 'html.lists').note, '');
  assert.throws(() => model.updateProgress(doc, 's', 'html.lists', { status: 'invalid' }));
  assert.equal(doc.progress.length, 1);
  model.validate(doc);
});

function fakeHandle(initial = '') {
  let content = initial;
  const stats = { opens: 0, closes: 0, aborts: 0, requests: 0 };
  const config = { permission: 'granted', request: 'granted', failRead: false, failWrite: false, failClose: false, gate: null };
  const handle = {
    kind: 'file', name: 'espace-codecraft.json',
    queryPermission: async () => config.permission,
    requestPermission: async () => { stats.requests++; return config.request; },
    getFile: async () => {
      if (config.failRead) throw Object.assign(new Error('file unavailable'), { name: 'NotFoundError' });
      return { text: async () => content };
    },
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
test('réouverture automatique : permission valide sans demande utilisateur', async () => {
  const f = fakeHandle('saved');
  const connection = await createFileAccess(f.env).resume(f.handle);
  assert.equal(connection.text, 'saved'); assert.equal(f.stats.requests, 0);
});
test('réouverture automatique : permission requise signalée sans la demander', async () => {
  const f = fakeHandle('saved'); f.config.permission = 'prompt';
  await assert.rejects(createFileAccess(f.env).resume(f.handle), error => error.code === 'permission-required');
  assert.equal(f.stats.requests, 0);
});
test('réouverture automatique : fichier inaccessible signalé sans faux accès', async () => {
  const f = fakeHandle('saved'); f.config.failRead = true;
  await assert.rejects(createFileAccess(f.env).resume(f.handle), { name: 'NotFoundError' });
  assert.equal(f.stats.requests, 0); assert.equal(f.stats.opens, 0);
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
test('interface : handle rouvert automatiquement si la permission reste valide', async () => {
  const h = appHarness({ remembered: true, idbFailure: true }); await tick();
  await tick();
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
  assert.equal(h.f.stats.requests, 0);
  h.input('saved'); await h.flush();
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
  assert.equal(h.el('storage-notice').hidden, false);
});
test('interface : permission requise affiche une action explicite puis ouvre sur clic', async () => {
  const h = appHarness({ remembered: true }); h.f.config.permission = 'prompt';
  await tick(); await tick();
  assert.equal(h.el('save-state').textContent, 'Aucun Espace CodeCraft ouvert');
  assert.equal(h.el('reopen-space').textContent, 'Autoriser l’accès à l’Espace CodeCraft');
  assert.equal(h.f.stats.requests, 0);
  h.f.config.request = 'granted';
  await h.click('reopen-space');
  assert.equal(h.el('save-state').textContent, 'Enregistré dans le fichier local');
  assert.equal(h.f.stats.requests, 1);
});
test('interface : fichier mémorisé inaccessible laisse choisir un autre fichier', async () => {
  const h = appHarness({ remembered: true }); h.f.config.failRead = true;
  await tick(); await tick();
  assert.equal(h.el('save-state').textContent, 'Aucun Espace CodeCraft ouvert');
  assert.match(h.el('operation-error').textContent, /Réouverture automatique impossible/);
  assert.equal(h.el('open-space').disabled, false);
  assert.equal(h.el('reopen-space').disabled, false);
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
