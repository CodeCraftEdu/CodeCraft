const { test } = require('node:test');
const assert = require('node:assert/strict');
const model = require('../teacher-model.js');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../lesson-data.js'), 'utf8'), context);
const catalog = context.window.CODECRAFT_DATA;
function setup() {
  const doc = model.create('test');
  model.addClass(doc, { id: 'c', name: 'Classe test' });
  model.addClass(doc, { id: 'other', name: 'Autre classe' });
  for (const id of ['a', 'b', 'c']) model.addStudent(doc, { id, name: 'Fictif ' + id, classId: 'c' });
  doc.frameworks.push({ id: 'f', name: 'Externe fictif', version: '1', objectives: [{ id: 'o', code: 'TEST', title: 'Fictif', skillIds: ['html.text'] }] });
  model.setClassFramework(doc, 'c', 'f');
  return doc;
}
test('création : composition figée, présences inconnues, classe et référentiel propres à la séance', () => {
  const doc = setup(), session = model.addSession(doc, { id: 's', classId: 'c', date: '2026-09-29' });
  assert.equal(session.status, 'draft'); assert.equal(session.frameworkId, 'f');
  assert.equal(session.roster.length, 3);
  assert(session.attendance.every(item => item.status === 'unknown'));
  const before = JSON.stringify(session);
  model.updateStudent(doc, 'a', { name: 'Nouveau nom', note: 'Confidentiel' });
  model.setClassFramework(doc, 'c', '');
  doc.memberships = []; doc.classes[0].name = 'Renommée';
  model.validate(doc);
  assert.equal(JSON.stringify(session), before);
  assert.equal(model.sessionRoster(doc, session)[0].name, 'Fictif a');
});
test('objectifs, absences, fin et archive ne valident aucune progression', () => {
  const doc = setup(); model.addSession(doc, { id: 's', classId: 'c', date: '2026-09-29' });
  model.updateProgress(doc, 'a', 'html.text', { status: 'in-progress' });
  const progress = JSON.stringify(doc.progress), official = JSON.stringify(doc.frameworkProgress);
  model.setAttendance(doc, 's', 'a', 'absent');
  model.updateSession(doc, 's', { skillIds: ['html.text'], moduleIds: ['module-test'], objectiveIds: ['o'], status: 'completed' });
  model.updateSession(doc, 's', { status: 'archived', notes: 'Note de séance' });
  assert.equal(JSON.stringify(doc.progress), progress); assert.equal(JSON.stringify(doc.frameworkProgress), official);
  assert.equal(doc.sessions[0].attendance[1].status, 'unknown');
  model.updateSession(doc, 's', { title: 'Encore modifiable' });
  assert.equal(doc.sessions[0].title, 'Encore modifiable');
});
test('créneaux : cibles indépendantes, ordre explicite, suppression sans effet sur les autres données', () => {
  const doc = setup(); const s = model.addSession(doc, { id: 's', classId: 'c', date: '2026-09-29' });
  for (const id of ['one', 'two', 'three']) model.addSlot(doc, 's', id);
  model.updateSlot(doc, 's', 'one', { studentIds: ['a'], pathwayId: 'p1', title: 'Premier' });
  model.updateSlot(doc, 's', 'two', { studentIds: ['b'], title: 'Deuxième' });
  model.updateSlot(doc, 's', 'three', { studentIds: ['c'], title: 'Troisième' });
  model.moveSlot(doc, 's', 'three', -1);
  assert.deepEqual(s.conductor.slots.map(item => [item.id, item.startMinute]), [['one', 0], ['three', 20], ['two', 10]]);
  model.removeSlot(doc, 's', 'two');
  assert.equal(s.conductor.slots.length, 2); assert.equal(doc.students.length, 3);
  model.setReminders(doc, 's', ['Rappel fictif']);
  assert.deepEqual(model.parse(model.serialize(doc)).document, doc);
});
test('mutations refusées atomiquement : dates, durées, objectifs, identifiants et présences invalides', () => {
  const doc = setup(); model.addSession(doc, { id: 's', classId: 'c', date: '2026-09-29' }); model.addSlot(doc, 's', 'slot');
  const before = model.serialize(doc);
  for (const action of [
    () => model.addSession(doc, { id: 'bad', classId: 'c', date: '2026-02-30' }),
    () => model.updateSession(doc, 's', { objectiveIds: ['missing'] }),
    () => model.updateSession(doc, 's', { startTime: '29:00' }),
    () => model.updateSlot(doc, 's', 'slot', { durationMinutes: 0 }),
    () => model.updateSlot(doc, 's', 'slot', { studentIds: ['missing'] }),
    () => model.setAttendance(doc, 's', 'a', 'maybe'),
    () => model.setAttendance(doc, 's', 'missing', 'present'),
    () => model.updateSession(doc, 's', { classId: 'other' })
  ]) { assert.throws(action); assert.equal(model.serialize(doc), before); }
});
test('ancien document V1 : aucune mutation à la lecture et références facultatives conservées', () => {
  const doc = setup();
  doc.sessions.push({ id: 'old', classId: 'c', date: '2026-09-01', status: 'draft', skillIds: [], notes: '',
    attendance: [{ studentId: 'a', status: 'present' }], conductor: { title: 'Ancien titre', reminders: [], slots: [
      { id: 'slot', startMinute: 0, durationMinutes: 5, title: 'Ancien', instructions: '', studentIds: ['a'] }
    ] } });
  const before = JSON.stringify(doc);
  const parsed = model.parse(before).document;
  assert.equal(JSON.stringify(parsed), before);
  assert.deepEqual(model.sessionRoster(doc, doc.sessions[0]), [{ studentId: 'a', name: 'Fictif a' }]);
  model.updateSession(doc, 'old', { notes: 'Complément' });
  assert.equal(doc.sessions[0].conductor.title, 'Ancien titre');
});
test('parcours par rattachement : deux classes indépendantes, retrait et ancien JSON compatibles', () => {
  const doc = setup(); model.attachStudent(doc, 'other', 'a');
  const old = JSON.stringify(doc);
  assert.equal(JSON.stringify(model.parse(old, catalog).document), old);
  const students = JSON.stringify(doc.students);
  model.setMembershipPathway(doc, 'c', 'a', 'web-fondations', catalog);
  model.setMembershipPathway(doc, 'other', 'a', 'web-avances', catalog);
  assert.equal(doc.memberships.find(item => item.classId === 'c' && item.studentId === 'a').pathwayId, 'web-fondations');
  assert.equal(doc.memberships.find(item => item.classId === 'other').pathwayId, 'web-avances');
  assert.equal(JSON.stringify(doc.students), students);
  assert.equal(model.setMembershipPathway(doc, 'c', 'a', 'web-fondations', catalog), false);
  model.setMembershipPathway(doc, 'c', 'a', '', catalog);
  assert(!Object.hasOwn(doc.memberships[0], 'pathwayId'));
  assert.equal(doc.memberships.find(item => item.classId === 'other').pathwayId, 'web-avances');
  assert.deepEqual(model.parse(model.serialize(doc), catalog).document, doc);
});
test('parcours : références invalides refusées sans mutation', () => {
  const doc = setup(), before = model.serialize(doc);
  assert.throws(() => model.setMembershipPathway(doc, 'c', 'a', 'missing', catalog), /introuvable/);
  assert.throws(() => model.setMembershipPathway(doc, 'other', 'a', 'web-debutants', catalog), /Rattachement/);
  assert.throws(() => model.setMembershipPathway(doc, 'c', 'a', null, catalog));
  assert.equal(model.serialize(doc), before);
  doc.memberships[0].pathwayId = 'missing';
  assert.throws(() => model.validate(doc, catalog), /parcours CodeCraft introuvable/);
});
test('parcours courant : aucun effet sur les snapshots ni les progressions', () => {
  const doc = setup();
  model.setMembershipPathway(doc, 'c', 'a', 'web-debutants', catalog);
  const session = model.addSession(doc, { id: 's', classId: 'c', date: '2026-09-29' });
  model.addSlot(doc, 's', 'targeted'); model.addSlot(doc, 's', 'unset');
  model.updateSlot(doc, 's', 'targeted', { studentIds: ['a'], pathwayId: 'web-fondations' });
  model.updateSlot(doc, 's', 'unset', { studentIds: ['a'] });
  const snapshot = JSON.stringify(session);
  model.setMembershipPathway(doc, 'c', 'a', 'web-avances', catalog);
  assert.equal(JSON.stringify(session), snapshot);
  assert.equal(session.conductor.slots[1].pathwayId, undefined);
  assert.deepEqual(doc.progress, []); assert.deepEqual(doc.frameworkProgress, []);
  model.validate(doc, catalog);
});
