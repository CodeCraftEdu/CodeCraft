const { test } = require('node:test');
const assert = require('node:assert/strict');
const model = require('../teacher-model.js');

function setup() {
  const doc = model.create('workspace-test', '2026-09-29T10:00:00.000Z');
  model.addClass(doc, { id: 'c1', name: 'Classe une' });
  model.addClass(doc, { id: 'c2', name: 'Classe deux' });
  model.addStudent(doc, { id: 's', name: 'Nom initial', classId: 'c1' });
  model.attachStudent(doc, 'c2', 's');
  doc.frameworks.push({ id: 'f', name: 'Référentiel fictif', version: '1', objectives: [
    { id: 'o', code: 'TEST', title: 'Objectif fictif', skillIds: ['html.text'] }
  ] });
  model.updateProgress(doc, 's', 'html.text', { status: 'acquired', note: 'Progression actuelle' }, new Date(2026, 8, 29));
  model.updateFrameworkProgress(doc, 's', 'f', 'o', { status: 'in-progress', note: 'Progression officielle' }, new Date(2026, 8, 29));
  const session = model.addSession(doc, { id: 'session', classId: 'c1', date: '2026-09-29', title: 'Historique' });
  model.addSlot(doc, 'session', 'slot');
  model.updateSlot(doc, 'session', 'slot', { title: 'Créneau historique', studentIds: ['s'], pathwayId: 'web-fondations' });
  return { doc, session };
}

test('modification explicite du nom conserve le reste de la fiche', () => {
  const { doc } = setup();
  model.updateStudent(doc, 's', { name: 'Nom modifié' });
  assert.equal(doc.students[0].name, 'Nom modifié');
  assert.equal(doc.progress[0].note, 'Progression actuelle');
  assert.equal(doc.frameworkProgress[0].note, 'Progression officielle');
});

test('retirer d’une classe supprime uniquement le membership correspondant', () => {
  const { doc, session } = setup(), snapshot = JSON.stringify(session);
  model.removeStudentFromClass(doc, 'c1', 's');
  assert.deepEqual(doc.memberships, [{ classId: 'c2', studentId: 's' }]);
  assert.equal(doc.students.length, 1); assert.equal(doc.progress.length, 1); assert.equal(doc.frameworkProgress.length, 1);
  assert.equal(JSON.stringify(session), snapshot);
});

test('un élève retiré reste disponible et peut être rattaché sans doublon ni perte de progression', () => {
  const { doc } = setup();
  const students = JSON.stringify(doc.students), progress = JSON.stringify(doc.progress);
  const frameworkProgress = JSON.stringify(doc.frameworkProgress);
  model.removeStudentFromClass(doc, 'c1', 's');
  assert.deepEqual(model.studentsOutsideClass(doc, 'c1').map(item => item.id), ['s']);
  assert.equal(model.attachStudent(doc, 'c1', 's'), true);
  assert.equal(model.attachStudent(doc, 'c1', 's'), false);
  assert.equal(JSON.stringify(doc.students), students);
  assert.equal(JSON.stringify(doc.progress), progress);
  assert.equal(JSON.stringify(doc.frameworkProgress), frameworkProgress);
  assert.equal(doc.memberships.filter(item => item.classId === 'c1' && item.studentId === 's').length, 1);
  assert.equal(doc.memberships.find(item => item.classId === 'c1' && item.studentId === 's').pathwayId, undefined);
  assert.deepEqual(model.parse(model.serialize(doc)).document, doc);
});

test('une séance affiche le nom actuel sans réécrire le snapshot puis utilise le nom snapshot après suppression', () => {
  const { doc, session } = setup(), snapshot = JSON.stringify(session);
  model.updateStudent(doc, 's', { name: 'Nom actuel' });
  assert.equal(model.sessionRoster(doc, session)[0].name, 'Nom actuel');
  assert.equal(JSON.stringify(session), snapshot);
  model.removeStudentFromClass(doc, 'c1', 's'); model.removeStudentFromClass(doc, 'c2', 's');
  model.deleteStudent(doc, 's');
  assert.equal(model.sessionRoster(doc, session)[0].name, 'Nom initial');
  assert.equal(JSON.stringify(session), snapshot);
});

test('suppression définitive depuis la seule classe restante supprime les données actuelles et conserve le snapshot', () => {
  const { doc, session } = setup(), snapshot = JSON.stringify(session);
  model.removeStudentFromClass(doc, 'c2', 's');
  model.deleteStudent(doc, 's', 'c1');
  assert.deepEqual(doc.students, []); assert.deepEqual(doc.memberships, []);
  assert.deepEqual(doc.progress, []); assert.deepEqual(doc.frameworkProgress, []);
  assert.equal(JSON.stringify(session), snapshot);
  assert.equal(model.sessionRoster(doc, session)[0].name, 'Nom initial');
  const reloaded = model.parse(model.serialize(model.prepareSave(doc, '2026-09-29T11:00:00.000Z'))).document;
  assert.deepEqual(reloaded.students, []); assert.deepEqual(reloaded.memberships, []);
  assert.deepEqual(reloaded.progress, []); assert.deepEqual(reloaded.frameworkProgress, []);
  assert.equal(JSON.stringify(reloaded.sessions[0]), snapshot);
  assert.equal(model.sessionRoster(reloaded, reloaded.sessions[0])[0].name, 'Nom initial');
});

test('suppression définitive bloquée uniquement par les autres classes avec un message explicite', () => {
  const { doc } = setup();
  const before = model.serialize(doc);
  assert.throws(() => model.deleteStudent(doc, 's', 'c1'), error => {
    assert.match(error.message, /Cet élève appartient encore à : Classe deux/);
    assert.match(error.message, /Retirez-le d’abord de ces classes/);
    assert.doesNotMatch(error.message, /Classe une/);
    return true;
  });
  assert.equal(model.serialize(doc), before);
});

test('suppression définitive après tous les retraits conserve les snapshots', () => {
  const { doc, session } = setup(), snapshot = JSON.stringify(session);
  model.removeStudentFromClass(doc, 'c1', 's'); model.removeStudentFromClass(doc, 'c2', 's');
  model.deleteStudent(doc, 's');
  assert.deepEqual(doc.students, []); assert.deepEqual(doc.memberships, []);
  assert.deepEqual(doc.progress, []); assert.deepEqual(doc.frameworkProgress, []);
  assert.equal(JSON.stringify(session), snapshot);
  assert.equal(model.sessionRoster(doc, session)[0].name, 'Nom initial');
  model.validate(doc);
});

test('suppression, snapshots et absence de données actuelles survivent à la sauvegarde/relecture', () => {
  const { doc, session } = setup(), snapshot = JSON.stringify(session);
  model.removeStudentFromClass(doc, 'c1', 's'); model.removeStudentFromClass(doc, 'c2', 's'); model.deleteStudent(doc, 's');
  const reloaded = model.parse(model.serialize(model.prepareSave(doc, '2026-09-29T11:00:00.000Z'))).document;
  assert.deepEqual(reloaded.students, []); assert.deepEqual(reloaded.progress, []); assert.deepEqual(reloaded.frameworkProgress, []);
  assert.equal(JSON.stringify(reloaded.sessions[0]), snapshot);
});
