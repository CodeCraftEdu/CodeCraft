/* Interface pédagogique : mutations métier + signal de sauvegarde, aucun accès fichier. */
(function () {
  'use strict';
  window.CodeCraftTeacherClassroom = {
    create({ root, model, catalog, changed }) {
      let doc = null, classId = null, studentId = null, disabled = true;
      const states = [['not-started', 'À voir'], ['in-progress', 'En cours'], ['acquired', 'Acquis']];
      const make = (tag, cls, text) => {
        const node = document.createElement(tag);
        if (cls) node.className = cls;
        if (text !== undefined) node.textContent = text;
        return node;
      };
      const fieldset = make('fieldset', 'classroom-fields');
      const error = make('p', 'teacher-error'); error.setAttribute('role', 'alert'); error.hidden = true;
      const empty = make('p', '', 'Ouvre un Espace CodeCraft pour accéder à tes classes.');
      root.append(empty, error, fieldset);
      const uid = () => crypto.randomUUID();
      function edit(action, immediate = false) {
        if (!doc || disabled) return false;
        try {
          const result = action();
          error.hidden = true;
          if (result !== false) changed(immediate);
          return true;
        } catch (e) {
          error.textContent = e.message; error.hidden = false; return false;
        }
      }
      function input(parent, label, id, value = '', multiline = false) {
        const wrapper = make('div', 'teacher-field');
        const title = make('label', '', label); title.htmlFor = id;
        const field = make(multiline ? 'textarea' : 'input'); field.id = id;
        if (multiline) field.rows = 2;
        else { field.type = 'text'; field.autocomplete = 'off'; }
        field.value = value;
        wrapper.append(title, field); parent.append(wrapper);
        return field;
      }
      function button(label, action, primary = false) {
        const node = make('button', 'button ' + (primary ? 'button--primary' : 'button--secondary'), label);
        node.type = 'button'; node.addEventListener('click', action); return node;
      }
      function contextName(item) { return doc.contexts.find(c => c.id === item.contextId)?.name || ''; }
      function renderStudents(container, list, heading) {
        list.replaceChildren();
        const members = new Set(doc.memberships.filter(m => m.classId === classId).map(m => m.studentId));
        const students = doc.students.filter(s => members.has(s.id));
        heading.textContent = 'Élèves (' + students.length + ')';
        if (!students.length) list.append(make('p', '', 'Ajoute le premier élève de cette classe.'));
        for (const student of students) {
          const node = button(student.name, () => {
            studentId = student.id;
            renderStudents(container, list, heading); renderProfile(container);
            container.querySelector('h3').focus();
          });
          node.dataset.studentId = student.id;
          node.setAttribute('aria-pressed', String(student.id === studentId));
          list.append(node);
        }
      }
      function renderProfile(container) {
        container.replaceChildren();
        const student = doc.students.find(s => s.id === studentId);
        if (!student) { container.append(make('p', '', 'Sélectionne un élève pour ouvrir sa fiche.')); return; }
        const title = make('h3', 'section-title', student.name); title.tabIndex = -1;
        container.append(title);
        const details = make('details', 'teacher-student-details');
        details.append(make('summary', '', 'Nom et remarque générale'));
        const name = input(details, 'Prénom ou nom d’affichage', 'student-name', student.name);
        name.required = true;
        name.addEventListener('change', () => {
          if (edit(() => model.updateStudent(doc, student.id, { name: name.value }), true)) {
            name.value = student.name; title.textContent = student.name;
            for (const b of fieldset.querySelectorAll('[data-student-id]')) {
              if (b.dataset.studentId === student.id) b.textContent = student.name;
            }
          } else name.value = student.name;
        });
        const note = input(details, 'Remarque générale (facultative)', 'student-note', student.note || '', true);
        note.addEventListener('input', () => edit(() => model.updateStudent(doc, student.id, { note: note.value })));
        container.append(details, make('p', 'teacher-caption', 'Décision manuelle du professeur. Une case cochée côté élève ne valide aucune compétence.'));
        const groups = new Map();
        for (const [skillId, skill] of Object.entries(catalog.skills)) {
          const group = skillId.startsWith('html.') ? 'HTML' : skillId.startsWith('css.') ? 'CSS' : 'Autres compétences';
          if (!groups.has(group)) groups.set(group, []);
          groups.get(group).push([skillId, skill]);
        }
        for (const [category, skills] of groups) {
          const group = make('section', 'teacher-skills');
          group.append(make('h4', '', category));
          for (const [skillId, skill] of skills) {
            const row = make('section', 'teacher-skill'); row.dataset.skillId = skillId;
            row.append(make('h5', '', skill.title));
            const controls = make('div', 'teacher-status-buttons'); controls.setAttribute('role', 'group');
            controls.setAttribute('aria-label', 'Statut — ' + skill.title);
            const date = make('p', 'teacher-acquired-date'); date.setAttribute('aria-live', 'polite');
            function refresh() {
              const p = model.getProgress(doc, student.id, skillId);
              for (const b of controls.children) b.setAttribute('aria-pressed', String(b.dataset.status === p.status));
              date.textContent = p.acquiredOn ? 'Acquis le ' + p.acquiredOn.split('-').reverse().join('/') : '';
              date.hidden = !p.acquiredOn;
            }
            for (const [status, label] of states) {
              const b = button(label, () => {
                if (edit(() => model.updateProgress(doc, student.id, skillId, { status }), true)) refresh();
              });
              b.dataset.status = status; controls.append(b);
            }
            const comment = make('details', 'teacher-skill-note');
            comment.append(make('summary', '', 'Remarque pédagogique (facultative)'));
            const p = model.getProgress(doc, student.id, skillId);
            comment.open = !!p.note;
            const text = input(comment, 'Remarque — ' + skill.title, 'skill-note-' + skillId, p.note || '', true);
            text.addEventListener('input', () => edit(() => model.updateProgress(doc, student.id, skillId, { note: text.value })));
            row.append(controls, date, comment); refresh(); group.append(row);
          }
          container.append(group);
        }
      }
      function render() {
        fieldset.replaceChildren(); empty.hidden = !!doc;
        if (!doc) return;
        const top = make('section', 'content-card'); top.append(make('h2', 'section-title', 'Mes classes'));
        const label = make('label', '', 'Classe sélectionnée'); label.htmlFor = 'class-select';
        const select = make('select'); select.id = 'class-select';
        if (!doc.classes.length) select.append(make('option', '', 'Aucune classe pour le moment'));
        for (const c of doc.classes) {
          const option = make('option', '', c.name + (contextName(c) ? ' — ' + contextName(c) : ''));
          option.value = c.id; select.append(option);
        }
        select.value = classId || '';
        select.addEventListener('change', () => { classId = select.value; studentId = null; render(); fieldset.querySelector('#class-select').focus(); });
        top.append(label, select);
        const create = make('details', 'teacher-class-details'); create.open = !doc.classes.length;
        create.append(make('summary', '', 'Créer une classe'));
        const form = make('form', 'teacher-inline-form');
        const name = input(form, 'Nom de la classe', 'new-class-name'); name.required = true;
        const context = input(form, 'Contexte / organisme (facultatif)', 'new-class-context');
        const submit = make('button', 'button button--primary', 'Créer la classe'); submit.type = 'submit'; form.append(submit);
        form.addEventListener('submit', e => {
          e.preventDefault();
          if (edit(() => {
            const item = model.addClass(doc, { id: uid(), name: name.value, contextName: context.value, contextId: uid() });
            classId = item.id; studentId = null;
          }, true)) { render(); fieldset.querySelector('#new-student-name').focus(); }
        });
        create.append(form); top.append(create);
        const c = doc.classes.find(c => c.id === classId);
        if (c) {
          const editClass = make('details', 'teacher-class-details'); editClass.append(make('summary', '', 'Renommer / modifier le contexte'));
          const name = input(editClass, 'Nom de la classe', 'class-name', c.name); name.required = true;
          const context = input(editClass, 'Contexte / organisme (facultatif)', 'class-context', contextName(c));
          function update() {
            if (edit(() => model.updateClass(doc, c.id, { name: name.value, contextName: context.value, contextId: uid() }), true)) {
              name.value = c.name;
              const option = [...select.options].find(o => o.value === c.id);
              option.textContent = c.name + (contextName(c) ? ' — ' + contextName(c) : '');
            } else { name.value = c.name; context.value = contextName(c); }
          }
          name.addEventListener('change', update); context.addEventListener('change', update);
          editClass.append(make('p', 'teacher-caption', 'Les changements sont enregistrés en quittant le champ.'));
          top.append(editClass);
        }
        fieldset.append(top);
        if (!c) return;
        const layout = make('div', 'teacher-classroom-layout');
        const sidebar = make('section', 'content-card teacher-roster');
        const heading = make('h3', 'section-title'); sidebar.append(heading);
        const list = make('div', 'teacher-student-list'); sidebar.append(list);
        const add = make('form', 'teacher-add-student');
        const studentName = input(add, 'Prénom ou nom d’affichage', 'new-student-name'); studentName.required = true;
        const addButton = make('button', 'button button--primary', 'Ajouter un élève'); addButton.type = 'submit'; add.append(addButton);
        const profile = make('section', 'content-card teacher-profile');
        add.addEventListener('submit', e => {
          e.preventDefault();
          if (edit(() => { studentId = model.addStudent(doc, { id: uid(), classId, name: studentName.value }).id; }, true)) {
            studentName.value = ''; renderStudents(profile, list, heading); renderProfile(profile); profile.querySelector('h3').focus();
          }
        });
        sidebar.append(add); layout.append(sidebar, profile); fieldset.append(layout);
        renderStudents(profile, list, heading); renderProfile(profile);
      }
      return {
        load(document) {
          doc = document; classId = doc.classes[0]?.id || null; studentId = null;
          error.hidden = true; render();
        },
        setDisabled(value) { disabled = value; fieldset.disabled = value; }
      };
    }
  };
})();
