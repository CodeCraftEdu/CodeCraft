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
  const status = choice('not-started', 'in-progress', 'acquired');
  const frameworkMapping = object({
    skillIds: ids,
    coverage: choice('covered', 'partial', 'none'),
    note: optional(str)
  });
  const frameworkObjective = object({
    id, code: id, title: id,
    kind: optional(choice('objective', 'project')),
    // skillIds reste accepté pour les fichiers V1 expérimentaux créés avant l’interface.
    skillIds: optional(ids),
    mapping: optional(frameworkMapping)
  });
  const framework = object({
    id, name: id, version: id, source: optional(str),
    objectives: optional(array(frameworkObjective)),
    commonObjectives: optional(array(frameworkObjective)),
    levels: optional(array(object({
      id, code: id, name: id, ageRange: optional(str), order: integer,
      stages: array(object({
        id, code: id, name: id, order: integer,
        objectives: array(frameworkObjective)
      }))
    })))
  });
  const slot = object({
    id, startMinute: integer, durationMinutes: integer, title: str,
    instructions: str, moduleIds: optional(ids), skillIds: optional(ids),
    studentIds: optional(ids), pathwayId: optional(id)
  });
  // Extensions facultatives : les fichiers du socle V1 restent lisibles sans réécriture.
  const schema = object({
    schemaVersion: choice(1), workspaceId: id, revision: integer,
    createdAt: timestamp, updatedAt: timestamp,
    metadata: object({ label: str }),
    contexts: array(object({ id, name: id })),
    frameworks: array(framework),
    classes: array(object({ id, name: id, contextId: optional(id), frameworkId: optional(id) })),
    students: array(object({ id, name: id, note: optional(str) })),
    memberships: array(object({ classId: id, studentId: id, pathwayId: optional(id) })),
    progress: array(object({
      studentId: id, skillId: id,
      status,
      acquiredOn: nullable(date), note: optional(str), updatedAt: timestamp
    })),
    frameworkProgress: optional(array(object({
      studentId: id, frameworkId: id, objectiveId: id,
      status, acquiredOn: nullable(date), note: optional(str), updatedAt: timestamp
    }))),
    sessions: array(object({
      id, classId: id, date, status: choice('draft', 'completed', 'archived'),
      title: optional(str), className: optional(str), startTime: optional(str),
      roster: optional(array(object({ studentId: id, name: id }))),
      skillIds: ids, moduleIds: optional(ids),
      frameworkId: optional(id), objectiveIds: optional(ids),
      attendance: optional(array(object({ studentId: id, status: choice('present', 'absent', 'unknown') }))),
      conductor: object({ title: str, slots: array(slot), reminders: array(str) }),
      notes: str
    }))
  });
  const frameworkPackage = object({
    fileType: choice('codecraft-external-framework'),
    formatVersion: choice(1),
    framework
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
  function objectivesOf(frameworkItem) {
    if (frameworkItem.levels === undefined && frameworkItem.commonObjectives === undefined) return frameworkItem.objectives || [];
    const result = [...(frameworkItem.commonObjectives || [])];
    for (const level of frameworkItem.levels || []) {
      for (const stage of level.stages) result.push(...stage.objectives);
    }
    return result;
  }
  function objectiveSkills(objective) {
    return objective.mapping ? objective.mapping.skillIds : (objective.skillIds || []);
  }
  function validateFramework(frameworkItem, catalog, warnings = new Set()) {
    const publicRef = value => {
      if (catalog && !Object.hasOwn(catalog.skills || {}, value)) warnings.add('Référence pédagogique absente du catalogue actuel : ' + value + '. Conservée sans modification.');
    };
    const modern = frameworkItem.levels !== undefined || frameworkItem.commonObjectives !== undefined;
    if (modern && !frameworkItem.levels) fail('frameworks.levels', 'liste des niveaux attendue');
    if (!modern && !frameworkItem.objectives) fail('frameworks.objectives', 'objectifs ou niveaux attendus');
    unique(frameworkItem.levels || [], level => level.id, 'frameworks.levels');
    unique(frameworkItem.levels || [], level => level.order, 'frameworks.levels.order');
    for (const level of frameworkItem.levels || []) {
      unique(level.stages, stage => stage.id, 'frameworks.levels.stages');
      unique(level.stages, stage => stage.order, 'frameworks.levels.stages.order');
    }
    const objectives = modern ? objectivesOf(frameworkItem) : frameworkItem.objectives;
    unique(objectives, objective => objective.id, 'frameworks.objectives');
    unique(objectives, objective => objective.code, 'frameworks.objectives.code');
    for (const objective of objectives) {
      if (modern && !objective.mapping) fail('frameworks.objectives.mapping', 'correspondance CodeCraft attendue');
      if (objective.mapping && objective.skillIds) fail('frameworks.objectives', 'utiliser mapping ou skillIds, pas les deux');
      if (objective.mapping?.coverage === 'none' && objective.mapping.skillIds.length) fail('frameworks.objectives.mapping', 'une couverture absente ne peut pas référencer de compétence');
      if (objective.mapping?.coverage === 'covered' && !objective.mapping.skillIds.length) fail('frameworks.objectives.mapping', 'une couverture complète doit référencer une compétence');
      objectiveSkills(objective).forEach(publicRef);
    }
    return objectives;
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
    const frameworkObjectives = new Map();
    doc.frameworks.forEach(f => frameworkObjectives.set(f.id, new Set(validateFramework(f, catalog, warnings).map(o => o.id))));
    doc.classes.forEach(c => {
      ref('contexts', c.contextId, 'classes.contextId');
      ref('frameworks', c.frameworkId, 'classes.frameworkId');
    });
    unique(doc.memberships, m => JSON.stringify([m.classId, m.studentId]), 'memberships');
    doc.memberships.forEach(m => {
      ref('classes', m.classId, 'memberships.classId');
      ref('students', m.studentId, 'memberships.studentId');
      if (m.pathwayId && catalog && !Object.hasOwn(catalog.pathways || {}, m.pathwayId)) {
        fail('memberships.pathwayId', 'parcours CodeCraft introuvable');
      }
    });
    unique(doc.progress, p => JSON.stringify([p.studentId, p.skillId]), 'progress');
    doc.progress.forEach(p => {
      ref('students', p.studentId, 'progress.studentId');
      publicRef('skills', p.skillId);
      if ((p.status === 'acquired') !== (p.acquiredOn !== null)) fail('progress.acquiredOn', 'date requise uniquement pour Acquis');
    });
    const frameworkProgress = doc.frameworkProgress || [];
    unique(frameworkProgress, p => JSON.stringify([p.studentId, p.frameworkId, p.objectiveId]), 'frameworkProgress');
    frameworkProgress.forEach(p => {
      ref('students', p.studentId, 'frameworkProgress.studentId');
      ref('frameworks', p.frameworkId, 'frameworkProgress.frameworkId');
      if (!frameworkObjectives.get(p.frameworkId)?.has(p.objectiveId)) fail('frameworkProgress.objectiveId', 'objectif externe introuvable');
      if ((p.status === 'acquired') !== (p.acquiredOn !== null)) fail('frameworkProgress.acquiredOn', 'date requise uniquement pour Acquis');
    });
    doc.sessions.forEach(s => {
      ref('classes', s.classId, 'sessions.classId');
      if (s.startTime && !/^([01]\d|2[0-3]):[0-5]\d$/.test(s.startTime)) fail('sessions.startTime', 'heure HH:mm attendue');
      unique(s.roster || [], item => item.studentId, 'sessions.roster');
      // Composition, présences et cibles sont historiques : elles restent valides
      // même si la fiche globale d'un élève est supprimée plus tard.
      ref('frameworks', s.frameworkId, 'sessions.frameworkId');
      (s.objectiveIds || []).forEach(objectiveId => {
        if (!frameworkObjectives.get(s.frameworkId)?.has(objectiveId)) fail('sessions.objectiveIds', 'objectif du référentiel de séance introuvable');
      });
      s.skillIds.forEach(skill => publicRef('skills', skill));
      (s.moduleIds || []).forEach(item => publicRef('modules', item));
      unique(s.attendance || [], a => a.studentId, 'sessions.attendance');
      unique(s.conductor.slots, slot => slot.id, 'conductor.slots');
      s.conductor.slots.forEach(slot => {
        if (!slot.durationMinutes) fail('conductor.slots.durationMinutes', 'durée supérieure à zéro attendue');
        // Snapshot : pas de comparaison avec les rattachements ou parcours actuels.
        if (slot.pathwayId) publicRef('pathways', slot.pathwayId);
        (slot.moduleIds || []).forEach(id => publicRef('modules', id));
        (slot.skillIds || []).forEach(id => publicRef('skills', id));
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
      memberships: [], progress: [], frameworkProgress: [], sessions: []
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
  function setClassFramework(doc, classId, frameworkId) {
    const item = find(doc.classes, classId, 'Classe');
    if (frameworkId) find(doc.frameworks, frameworkId, 'Référentiel');
    if ((item.frameworkId || '') === (frameworkId || '')) return false;
    if (frameworkId) item.frameworkId = frameworkId;
    else delete item.frameworkId;
    return true;
  }
  function attachStudent(doc, classId, studentId) {
    find(doc.classes, classId, 'Classe'); find(doc.students, studentId, 'Élève');
    if (doc.memberships.some(m => m.classId === classId && m.studentId === studentId)) return false;
    doc.memberships.push({ classId, studentId });
    return true;
  }
  function studentsOutsideClass(doc, classId) {
    find(doc.classes, classId, 'Classe');
    const memberIds = new Set(doc.memberships.filter(item => item.classId === classId).map(item => item.studentId));
    return doc.students.filter(item => !memberIds.has(item.id));
  }
  function setMembershipPathway(doc, classId, studentId, pathwayId, catalog) {
    const membership = doc.memberships.find(item => item.classId === classId && item.studentId === studentId);
    if (!membership) throw new Error('Rattachement élève–classe introuvable.');
    if (pathwayId !== '') {
      check(pathwayId, id, 'parcours');
      if (!catalog || !Object.hasOwn(catalog.pathways || {}, pathwayId)) throw new Error('Parcours CodeCraft introuvable.');
    }
    if ((membership.pathwayId || '') === pathwayId) return false;
    if (pathwayId) membership.pathwayId = pathwayId;
    else delete membership.pathwayId;
    return true;
  }
  function removeStudentFromClass(doc, classId, studentId) {
    find(doc.classes, classId, 'Classe'); find(doc.students, studentId, 'Élève');
    const index = doc.memberships.findIndex(item => item.classId === classId && item.studentId === studentId);
    if (index < 0) throw new Error('Rattachement élève–classe introuvable.');
    doc.memberships.splice(index, 1);
    return true;
  }
  function deleteStudent(doc, studentId, currentClassId = '') {
    const student = find(doc.students, studentId, 'Élève');
    if (currentClassId) find(doc.classes, currentClassId, 'Classe');
    const blockingMemberships = doc.memberships.filter(item =>
      item.studentId === studentId && item.classId !== currentClassId
    );
    if (blockingMemberships.length) {
      const classes = blockingMemberships.map(item => doc.classes.find(entry => entry.id === item.classId)?.name || item.classId);
      throw new Error('Cet élève appartient encore à : ' + classes.join(', ') +
        '. Retirez-le d’abord de ces classes avant de le supprimer définitivement.');
    }
    doc.students = doc.students.filter(item => item.id !== studentId);
    doc.memberships = doc.memberships.filter(item => item.studentId !== studentId);
    doc.progress = doc.progress.filter(item => item.studentId !== studentId);
    if (doc.frameworkProgress) doc.frameworkProgress = doc.frameworkProgress.filter(item => item.studentId !== studentId);
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
  function getFrameworkProgress(doc, studentId, frameworkId, objectiveId) {
    return (doc.frameworkProgress || []).find(p => p.studentId === studentId && p.frameworkId === frameworkId && p.objectiveId === objectiveId) ||
      { studentId, frameworkId, objectiveId, status: 'not-started', acquiredOn: null, note: '' };
  }
  function updateFrameworkProgress(doc, studentId, frameworkId, objectiveId, patch, now = new Date()) {
    find(doc.students, studentId, 'Élève');
    const frameworkItem = find(doc.frameworks, frameworkId, 'Référentiel');
    if (!objectivesOf(frameworkItem).some(objective => objective.id === objectiveId)) throw new Error('Objectif externe introuvable.');
    if (!doc.frameworkProgress) doc.frameworkProgress = [];
    const existing = doc.frameworkProgress.find(p => p.studentId === studentId && p.frameworkId === frameworkId && p.objectiveId === objectiveId);
    const before = getFrameworkProgress(doc, studentId, frameworkId, objectiveId);
    const nextStatus = patch.status === undefined ? before.status : patch.status;
    const note = patch.note === undefined ? (before.note || '') : patch.note;
    check(nextStatus, status, 'statut'); check(note, str, 'remarque');
    if (nextStatus === before.status && note === (before.note || '')) return false;
    const entry = {
      ...before, status: nextStatus, note, updatedAt: now.toISOString(),
      acquiredOn: nextStatus === 'acquired' ? (before.status === 'acquired' ? before.acquiredOn : localDate(now)) : null
    };
    if (existing) Object.assign(existing, entry);
    else doc.frameworkProgress.push(entry);
    return true;
  }
  function parseFrameworkPackage(text, catalog) {
    let data;
    try { data = JSON.parse(text.replace(/^\uFEFF/, '')); }
    catch { throw new Error('Fichier de référentiel JSON illisible.'); }
    check(data, frameworkPackage, 'référentiel');
    validateFramework(data.framework, catalog);
    return data.framework;
  }
  function importFramework(doc, text, catalog) {
    const item = parseFrameworkPackage(text, catalog);
    newId(doc.frameworks, item.id);
    const copy = JSON.parse(JSON.stringify(item));
    doc.frameworks.push(copy);
    return copy;
  }
  function sessionRoster(doc, session) {
    const displayName = (studentId, snapshotName) =>
      doc.students.find(item => item.id === studentId)?.name || snapshotName || studentId;
    if (session.roster) return session.roster.map(item => ({
      ...item, name: displayName(item.studentId, item.name)
    }));
    // Ancien fichier : déduire les participants des références historiques disponibles.
    const ids = new Set([...(session.attendance || []).map(item => item.studentId),
      ...session.conductor.slots.flatMap(item => item.studentIds || [])]);
    return [...ids].map(studentId => ({ studentId, name: displayName(studentId) }));
  }
  function addSession(doc, { id: sessionId, classId, date: day, title = '' }) {
    const classroom = find(doc.classes, classId, 'Classe');
    newId(doc.sessions, sessionId);
    const roster = doc.memberships.filter(item => item.classId === classId).map(item => ({
      studentId: item.studentId, name: find(doc.students, item.studentId, 'Élève').name
    }));
    const session = {
      id: sessionId, classId, className: classroom.name, date: day, title,
      status: 'draft', startTime: '', roster, skillIds: [], moduleIds: [], objectiveIds: [],
      attendance: roster.map(item => ({ studentId: item.studentId, status: 'unknown' })),
      conductor: { title: '', slots: [], reminders: [] }, notes: ''
    };
    if (classroom.frameworkId) session.frameworkId = classroom.frameworkId;
    validate({ ...doc, sessions: [...doc.sessions, session] });
    doc.sessions.push(session);
    return session;
  }
  function changeSession(doc, sessionId, action) {
    const session = find(doc.sessions, sessionId, 'Séance');
    const copy = JSON.parse(JSON.stringify(session));
    action(copy);
    if (JSON.stringify(copy) === JSON.stringify(session)) return false;
    validate({ ...doc, sessions: doc.sessions.map(item => item.id === sessionId ? copy : item) });
    Object.assign(session, copy);
    return true;
  }
  function updateSession(doc, sessionId, patch) {
    const allowed = ['date', 'title', 'startTime', 'status', 'skillIds', 'moduleIds', 'objectiveIds', 'notes'];
    if (Object.keys(patch).some(key => !allowed.includes(key))) throw new Error('Champ de séance non modifiable.');
    return changeSession(doc, sessionId, copy => Object.assign(copy, JSON.parse(JSON.stringify(patch))));
  }
  function setAttendance(doc, sessionId, studentId, status) {
    return changeSession(doc, sessionId, copy => {
      if (!sessionRoster(doc, copy).some(item => item.studentId === studentId)) throw new Error('Élève absent de la composition de cette séance.');
      copy.attendance ||= [];
      const item = copy.attendance.find(item => item.studentId === studentId);
      if (item) item.status = status;
      else copy.attendance.push({ studentId, status });
    });
  }
  function addSlot(doc, sessionId, slotId) {
    return changeSession(doc, sessionId, copy => {
      newId(copy.conductor.slots, slotId);
      const last = copy.conductor.slots.at(-1);
      copy.conductor.slots.push({ id: slotId, startMinute: last ? last.startMinute + last.durationMinutes : 0,
        durationMinutes: 10, title: '', instructions: '', moduleIds: [], skillIds: [], studentIds: [] });
    });
  }
  function updateSlot(doc, sessionId, slotId, patch) {
    const allowed = ['startMinute', 'durationMinutes', 'title', 'instructions', 'moduleIds', 'skillIds', 'studentIds', 'pathwayId'];
    if (Object.keys(patch).some(key => !allowed.includes(key))) throw new Error('Champ de créneau non modifiable.');
    const session = find(doc.sessions, sessionId, 'Séance');
    if (patch.studentIds) {
      const roster = new Set(sessionRoster(doc, session).map(item => item.studentId));
      if (patch.studentIds.some(studentId => !roster.has(studentId))) throw new Error('Élève absent de la composition de cette séance.');
    }
    return changeSession(doc, sessionId, copy => {
      const slot = find(copy.conductor.slots, slotId, 'Créneau');
      const updates = JSON.parse(JSON.stringify(patch));
      if (updates.pathwayId === '') { delete slot.pathwayId; delete updates.pathwayId; }
      Object.assign(slot, updates);
    });
  }
  function moveSlot(doc, sessionId, slotId, direction) {
    if (direction !== -1 && direction !== 1) throw new Error('Déplacement invalide.');
    return changeSession(doc, sessionId, copy => {
      find(copy.conductor.slots, slotId, 'Créneau');
      const index = copy.conductor.slots.findIndex(item => item.id === slotId), target = index + direction;
      if (target < 0 || target >= copy.conductor.slots.length) return;
      [copy.conductor.slots[index], copy.conductor.slots[target]] = [copy.conductor.slots[target], copy.conductor.slots[index]];
    });
  }
  function removeSlot(doc, sessionId, slotId) {
    return changeSession(doc, sessionId, copy => {
      find(copy.conductor.slots, slotId, 'Créneau');
      copy.conductor.slots = copy.conductor.slots.filter(item => item.id !== slotId);
    });
  }
  function setReminders(doc, sessionId, reminders) {
    return changeSession(doc, sessionId, copy => { copy.conductor.reminders = [...reminders]; });
  }
  const api = { schema, validate, parse, create, prepareSave, serialize,
    addSession, updateSession, sessionRoster, setAttendance, addSlot, updateSlot, moveSlot, removeSlot, setReminders,
    addClass, updateClass, setClassFramework, addStudent, attachStudent, studentsOutsideClass, setMembershipPathway,
    removeStudentFromClass, deleteStudent, updateStudent,
    getProgress, updateProgress, getFrameworkProgress, updateFrameworkProgress,
    parseFrameworkPackage, importFramework, objectivesOf };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CodeCraftTeacherModel = api;
})(globalThis);
