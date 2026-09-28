/* Modèle privé V1 : aucune API navigateur, aucun stockage, aucune donnée réelle. */
(function (root) {
  'use strict';
  const str = { type: 'string' };
  const id = { type: 'string', nonempty: true };
  const integer = { type: 'integer' };
  const date = { type: 'date' };
  const timestamp = { type: 'timestamp' };
  const optional = rule => ({ ...rule, optional: true });
  const nullable = rule => ({ ...rule, nullable: true });
  const array = item => ({ type: 'array', item });
  const object = fields => ({ type: 'object', fields });
  const choice = (...values) => ({ type: 'choice', values });
  const ids = array(id);
  const slot = object({
    id, startMinute: integer, durationMinutes: integer, title: str,
    instructions: str, moduleIds: ids, skillIds: ids,
    studentIds: optional(ids), pathwayId: optional(id)
  });
  // Le schéma réserve les structures futures sans fournir leurs interfaces de gestion.
  const schema = object({
    schemaVersion: choice(1), workspaceId: id, revision: integer,
    createdAt: timestamp, updatedAt: timestamp,
    metadata: object({ label: str }),
    contexts: array(object({ id, name: id })),
    frameworks: array(object({
      id, name: id, version: id, source: optional(str),
      objectives: array(object({ id, code: id, title: id, skillIds: ids }))
    })),
    classes: array(object({ id, name: id, contextId: optional(id), frameworkId: optional(id) })),
    students: array(object({ id, name: id, note: optional(str) })),
    memberships: array(object({ classId: id, studentId: id })),
    progress: array(object({
      studentId: id, skillId: id,
      status: choice('not-started', 'in-progress', 'acquired'),
      acquiredOn: nullable(date), note: optional(str), updatedAt: timestamp
    })),
    sessions: array(object({
      id, classId: id, date, status: choice('draft', 'completed', 'archived'),
      skillIds: ids,
      attendance: optional(array(object({ studentId: id, status: choice('present', 'absent', 'unknown') }))),
      conductor: object({ title: str, slots: array(slot), reminders: array(str) }),
      notes: str
    }))
  });

  function fail(path, message) {
    throw new Error('Document invalide — ' + path + ' : ' + message);
  }
  function check(value, rule, path) {
    if (value === undefined && rule.optional) return;
    if (value === null && rule.nullable) return;
    switch (rule.type) {
      case 'object':
        if (!value || typeof value !== 'object' || Array.isArray(value)) fail(path, 'objet attendu');
        for (const key of Object.keys(value)) {
          if (!Object.hasOwn(rule.fields, key)) fail(path + '.' + key, 'champ inconnu (aucune donnée ne sera supprimée)');
        }
        for (const [key, child] of Object.entries(rule.fields)) check(value[key], child, path + '.' + key);
        break;
      case 'array':
        if (!Array.isArray(value)) fail(path, 'liste attendue');
        value.forEach((item, i) => check(item, rule.item, path + '[' + i + ']'));
        if (rule.item === id && new Set(value).size !== value.length) fail(path, 'identifiants en double');
        break;
      case 'string':
        if (typeof value !== 'string' || (rule.nonempty && !value.trim())) fail(path, 'texte attendu' + (rule.nonempty ? ' (non vide)' : ''));
        break;
      case 'integer':
        if (!Number.isSafeInteger(value) || value < 0) fail(path, 'entier positif ou nul attendu');
        break;
      case 'choice':
        if (!rule.values.includes(value)) fail(path, 'valeur non reconnue');
        break;
      case 'date':
        if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value) fail(path, 'date YYYY-MM-DD valide attendue');
        break;
      case 'timestamp':
        if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString() !== value) fail(path, 'horodatage ISO UTC attendu');
        break;
    }
  }
  function unique(items, key, path) {
    const seen = new Set();
    for (const item of items) {
      const value = key(item);
      if (seen.has(value)) fail(path, 'entrée en double');
      seen.add(value);
    }
    return seen;
  }
  function validate(doc, catalog) {
    if (doc && Object.hasOwn(doc, 'schemaVersion') && doc.schemaVersion !== 1) {
      throw new Error('Version de schéma non prise en charge. Le fichier reste intact.');
    }
    check(doc, schema, 'espace');
    if (doc.updatedAt < doc.createdAt) fail('updatedAt', 'antérieur à createdAt');
    const sets = {};
    for (const key of ['contexts', 'frameworks', 'classes', 'students', 'sessions']) {
      sets[key] = unique(doc[key], item => item.id, key);
    }
    const ref = (set, value, path) => {
      if (value !== undefined && !sets[set].has(value)) fail(path, 'référence interne introuvable');
    };
    const warnings = new Set();
    const publicRef = (collection, value) => {
      if (catalog && !Object.hasOwn(catalog[collection] || {}, value)) warnings.add('Référence pédagogique absente du catalogue actuel : ' + value + '. Conservée sans modification.');
    };
    doc.frameworks.forEach(f => {
      unique(f.objectives, o => o.id, 'frameworks.objectives');
      unique(f.objectives, o => o.code, 'frameworks.objectives.code');
      f.objectives.forEach(o => o.skillIds.forEach(s => publicRef('skills', s)));
    });
    doc.classes.forEach(c => {
      ref('contexts', c.contextId, 'classes.contextId');
      ref('frameworks', c.frameworkId, 'classes.frameworkId');
    });
    unique(doc.memberships, m => JSON.stringify([m.classId, m.studentId]), 'memberships');
    doc.memberships.forEach(m => {
      ref('classes', m.classId, 'memberships.classId');
      ref('students', m.studentId, 'memberships.studentId');
    });
    unique(doc.progress, p => JSON.stringify([p.studentId, p.skillId]), 'progress');
    doc.progress.forEach(p => {
      ref('students', p.studentId, 'progress.studentId');
      publicRef('skills', p.skillId);
      if ((p.status === 'acquired') !== (p.acquiredOn !== null)) fail('progress.acquiredOn', 'date requise uniquement pour Acquis');
    });
    doc.sessions.forEach(s => {
      ref('classes', s.classId, 'sessions.classId');
      s.skillIds.forEach(skill => publicRef('skills', skill));
      unique(s.attendance || [], a => a.studentId, 'sessions.attendance');
      (s.attendance || []).forEach(a => ref('students', a.studentId, 'sessions.attendance.studentId'));
      unique(s.conductor.slots, slot => slot.id, 'conductor.slots');
      s.conductor.slots.forEach(slot => {
        if (!slot.durationMinutes) fail('conductor.slots.durationMinutes', 'durée supérieure à zéro attendue');
        // Snapshot : pas de comparaison avec les rattachements ou parcours actuels.
        (slot.studentIds || []).forEach(id => ref('students', id, 'conductor.slots.studentIds'));
        if (slot.pathwayId) publicRef('pathways', slot.pathwayId);
        slot.moduleIds.forEach(id => publicRef('modules', id));
        slot.skillIds.forEach(id => publicRef('skills', id));
      });
    });
    return [...warnings];
  }
  function parse(text, catalog) {
    let document;
    try { document = JSON.parse(text.replace(/^\uFEFF/, '')); }
    catch { throw new Error('JSON illisible. Aucun fichier n’a été modifié.'); }
    return { document, warnings: validate(document, catalog) };
  }
  function create(workspaceId, now = new Date().toISOString()) {
    const doc = {
      schemaVersion: 1, workspaceId, revision: 0, createdAt: now, updatedAt: now,
      metadata: { label: '' }, contexts: [], frameworks: [], classes: [], students: [],
      memberships: [], progress: [], sessions: []
    };
    validate(doc);
    return doc;
  }
  function prepareSave(document, now = new Date().toISOString()) {
    const copy = JSON.parse(JSON.stringify(document));
    copy.revision += 1;
    copy.updatedAt = now < copy.createdAt ? copy.createdAt : now;
    validate(copy);
    return copy;
  }
  function serialize(document) {
    validate(document);
    return JSON.stringify(document, null, 2) + '\n';
  }
  function requiredName(value) {
    check(value, id, 'nom');
    return value.trim();
  }
  function find(items, itemId, label) {
    const item = items.find(item => item.id === itemId);
    if (!item) throw new Error(label + ' introuvable.');
    return item;
  }
  function newId(items, value) {
    check(value, id, 'id');
    if (items.some(item => item.id === value)) throw new Error('Identifiant déjà utilisé.');
  }
  function contextFor(doc, name, contextId) {
    check(name, str, 'contexte');
    const trimmed = name.trim();
    if (!trimmed) return undefined;
    const existing = doc.contexts.find(item => item.name === trimmed);
    if (existing) return existing.id;
    newId(doc.contexts, contextId);
    doc.contexts.push({ id: contextId, name: trimmed });
    return contextId;
  }
  function addClass(doc, { id: classId, name, contextName = '', contextId }) {
    const cleanName = requiredName(name);
    newId(doc.classes, classId);
    const linkedContext = contextFor(doc, contextName, contextId);
    const item = { id: classId, name: cleanName };
    if (linkedContext) item.contextId = linkedContext;
    doc.classes.push(item);
    return item;
  }
  function updateClass(doc, classId, { name, contextName, contextId }) {
    const item = find(doc.classes, classId, 'Classe');
    const cleanName = requiredName(name);
    const linkedContext = contextFor(doc, contextName, contextId);
    if (item.name === cleanName && item.contextId === linkedContext) return false;
    item.name = cleanName;
    if (linkedContext) item.contextId = linkedContext;
    else delete item.contextId;
    return true;
  }
  function attachStudent(doc, classId, studentId) {
    find(doc.classes, classId, 'Classe'); find(doc.students, studentId, 'Élève');
    if (doc.memberships.some(m => m.classId === classId && m.studentId === studentId)) return false;
    doc.memberships.push({ classId, studentId });
    return true;
  }
  function addStudent(doc, { id: studentId, name, classId }) {
    const cleanName = requiredName(name);
    find(doc.classes, classId, 'Classe'); newId(doc.students, studentId);
    const item = { id: studentId, name: cleanName };
    doc.students.push(item);
    attachStudent(doc, classId, studentId);
    return item;
  }
  function updateStudent(doc, studentId, patch) {
    const item = find(doc.students, studentId, 'Élève');
    const name = patch.name === undefined ? item.name : requiredName(patch.name);
    const note = patch.note === undefined ? (item.note || '') : patch.note;
    check(note, str, 'remarque');
    if (name === item.name && note === (item.note || '')) return false;
    item.name = name; item.note = note;
    return true;
  }
  function localDate(now) {
    return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
  }
  function getProgress(doc, studentId, skillId) {
    return doc.progress.find(p => p.studentId === studentId && p.skillId === skillId) ||
      { studentId, skillId, status: 'not-started', acquiredOn: null, note: '' };
  }
  function updateProgress(doc, studentId, skillId, patch, now = new Date()) {
    find(doc.students, studentId, 'Élève'); check(skillId, id, 'compétence');
    const existing = doc.progress.find(p => p.studentId === studentId && p.skillId === skillId);
    const before = getProgress(doc, studentId, skillId);
    const status = patch.status === undefined ? before.status : patch.status;
    const note = patch.note === undefined ? (before.note || '') : patch.note;
    check(status, choice('not-started', 'in-progress', 'acquired'), 'statut');
    check(note, str, 'remarque');
    if (status === before.status && note === (before.note || '')) return false;
    const entry = {
      ...before, status, note, updatedAt: now.toISOString(),
      acquiredOn: status === 'acquired' ? (before.status === 'acquired' ? before.acquiredOn : localDate(now)) : null
    };
    if (existing) Object.assign(existing, entry);
    else doc.progress.push(entry);
    return true;
  }
  const api = { schema, validate, parse, create, prepareSave, serialize,
    addClass, updateClass, addStudent, attachStudent, updateStudent, getProgress, updateProgress };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CodeCraftTeacherModel = api;
})(globalThis);
