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
  const api = { schema, validate, parse, create, prepareSave, serialize };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CodeCraftTeacherModel = api;
})(globalThis);
