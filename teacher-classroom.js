/* Interface pédagogique : mutations métier + signal de sauvegarde, aucun accès fichier. */
(function () {
  'use strict';
  window.CodeCraftTeacherClassroom = {
    create({ root, model, catalog, changed }) {
      let doc = null, classId = null, studentId = null, disabled = true;
      let view = 'students';
      const levelByClass = new Map();
      const states = [['not-started', 'À voir'], ['in-progress', 'En cours'], ['acquired', 'Acquis']];
      const stateLabel = new Map(states);
      const coverageLabels = {
        covered: 'Couverture CodeCraft : couverte',
        partial: 'Couverture CodeCraft : partiellement couverte',
        none: 'Couverture CodeCraft : non couverte'
      };
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
      function showError(message) { error.textContent = message; error.hidden = false; }
      function edit(action, immediate = false) {
        if (!doc || disabled) return false;
        try {
          const result = action();
          error.hidden = true;
          if (result !== false) changed(immediate);
          return true;
        } catch (e) {
          showError(e.message); return false;
        }
      }
      const sessionsRoot = make('div');
      const sessions = window.CodeCraftTeacherSessions.create({ root: sessionsRoot, model, catalog, edit });
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
      function frameworkForClass() {
        const currentClass = doc.classes.find(item => item.id === classId);
        return doc.frameworks.find(item => item.id === currentClass?.frameworkId);
      }
      function refreshMappedSkills(student, skillId) {
        for (const node of fieldset.querySelectorAll('[data-mapped-skill-id]')) {
          if (node.dataset.mappedSkillId === skillId) node.textContent = stateLabel.get(model.getProgress(doc, student.id, skillId).status);
        }
      }
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
      function mappedSkills(objective, student) {
        const block = make('div', 'teacher-framework-mapping');
        const mapping = objective.mapping;
        block.append(make('p', 'teacher-coverage teacher-coverage--' + mapping.coverage, coverageLabels[mapping.coverage]));
        if (mapping.note) block.append(make('p', 'teacher-caption', mapping.note));
        if (!mapping.skillIds.length) {
          block.append(make('p', 'teacher-caption', 'Aucune compétence CodeCraft actuelle n’est associée à cet objectif.'));
          return block;
        }
        const list = make('ul', 'teacher-mapped-skills');
        for (const skillId of mapping.skillIds) {
          const skill = catalog.skills[skillId];
          const item = make('li');
          item.append(document.createTextNode((skill?.title || skillId) + ' — '));
          const value = make('strong', '', stateLabel.get(model.getProgress(doc, student.id, skillId).status));
          value.dataset.mappedSkillId = skillId;
          item.append(value); list.append(item);
        }
        block.append(list); return block;
      }
      function renderFrameworkObjective(parent, framework, objective, student) {
        const row = make('section', 'teacher-framework-objective'); row.dataset.frameworkObjectiveId = objective.id;
        const heading = make('h6');
        heading.append(make('span', 'teacher-objective-code', objective.code), document.createTextNode(' ' + objective.title));
        row.append(heading, mappedSkills(objective, student));
        const controls = make('div', 'teacher-status-buttons'); controls.setAttribute('role', 'group');
        controls.setAttribute('aria-label', 'Statut officiel — ' + objective.code + ' ' + objective.title);
        const date = make('p', 'teacher-acquired-date'); date.setAttribute('aria-live', 'polite');
        function refresh() {
          const progress = model.getFrameworkProgress(doc, student.id, framework.id, objective.id);
          for (const node of controls.children) node.setAttribute('aria-pressed', String(node.dataset.status === progress.status));
          date.textContent = progress.acquiredOn ? 'Acquis le ' + progress.acquiredOn.split('-').reverse().join('/') : '';
          date.hidden = !progress.acquiredOn;
        }
        for (const [status, label] of states) {
          const node = button(label, () => {
            if (edit(() => model.updateFrameworkProgress(doc, student.id, framework.id, objective.id, { status }), true)) refresh();
          });
          node.dataset.status = status; controls.append(node);
        }
        const comment = make('details', 'teacher-skill-note');
        comment.append(make('summary', '', 'Remarque d’évaluation officielle (facultative)'));
        const progress = model.getFrameworkProgress(doc, student.id, framework.id, objective.id);
        comment.open = !!progress.note;
        const note = input(comment, 'Remarque — ' + objective.code, 'framework-note-' + framework.id + '-' + objective.id, progress.note || '', true);
        note.addEventListener('input', () => edit(() => model.updateFrameworkProgress(doc, student.id, framework.id, objective.id, { note: note.value })));
        row.append(controls, date, comment); refresh(); parent.append(row);
      }
      function preferredLevel(framework) {
        const selected = levelByClass.get(classId);
        if (framework.levels.some(level => level.id === selected)) return selected;
        const scored = framework.levels.map((level, index) => ({
          id: level.id, index,
          score: level.stages.flatMap(stage => stage.objectives).reduce((sum, objective) => sum + objective.mapping.skillIds.length, 0)
        })).sort((a, b) => b.score - a.score || a.index - b.index);
        return scored[0]?.id;
      }
      function renderFramework(container, framework, student) {
        if (!framework?.levels?.length) return;
        const panel = make('details', 'teacher-framework-panel'); panel.open = true;
        panel.append(make('summary', 'section-title', 'Référentiel externe — ' + framework.name));
        panel.append(
          make('p', 'teacher-caption', framework.version + (framework.source ? ' · ' + framework.source : '')),
          make('p', 'teacher-framework-warning', 'Le statut officiel est décidé manuellement par le professeur. Les compétences CodeCraft correspondantes n’entraînent aucune validation automatique.')
        );
        const label = make('label', '', 'Niveau affiché'); label.htmlFor = 'framework-level';
        const select = make('select'); select.id = 'framework-level';
        for (const level of framework.levels.slice().sort((a, b) => a.order - b.order)) {
          const option = make('option', '', level.code + ' — ' + level.name + (level.ageRange ? ' (' + level.ageRange + ')' : ''));
          option.value = level.id; select.append(option);
        }
        select.value = preferredLevel(framework); levelByClass.set(classId, select.value);
        select.addEventListener('change', () => {
          levelByClass.set(classId, select.value); renderProfile(container); container.querySelector('#framework-level')?.focus();
        });
        panel.append(label, select);
        const level = framework.levels.find(item => item.id === select.value);
        level.stages.slice().sort((a, b) => a.order - b.order).forEach((stage, index) => {
          const section = make('details', 'teacher-framework-stage'); section.open = index === 0;
          section.append(make('summary', '', stage.code + ' — ' + stage.name));
          for (const objective of stage.objectives) renderFrameworkObjective(section, framework, objective, student);
          panel.append(section);
        });
        if (framework.commonObjectives?.length) {
          const common = make('details', 'teacher-framework-stage');
          common.append(make('summary', '', 'Objectifs communs à tous les niveaux'));
          for (const objective of framework.commonObjectives) renderFrameworkObjective(common, framework, objective, student);
          panel.append(common);
        }
        container.append(panel);
      }
      function renderProfile(container) {
        container.replaceChildren();
        const student = doc.students.find(s => s.id === studentId);
        if (!student) { container.append(make('p', '', 'Sélectionne un élève pour ouvrir sa fiche.')); return; }
        const title = make('h3', 'section-title', student.name); title.tabIndex = -1;
        container.append(title);
        const membership = doc.memberships.find(item => item.classId === classId && item.studentId === student.id);
        if (membership) {
          const pathwayField = make('div', 'teacher-field');
          const pathwayLabel = make('label', '', 'Parcours actuel dans cette classe'); pathwayLabel.htmlFor = 'student-pathway';
          const pathwaySelect = make('select'); pathwaySelect.id = 'student-pathway';
          const unset = make('option', '', 'Non renseigné'); unset.value = ''; pathwaySelect.append(unset);
          for (const [id, pathway] of Object.entries(catalog.pathways)) {
            const option = make('option', '', pathway.title); option.value = id; pathwaySelect.append(option);
          }
          pathwaySelect.value = membership.pathwayId || '';
          pathwaySelect.addEventListener('change', () => {
            if (!edit(() => model.setMembershipPathway(doc, classId, student.id, pathwaySelect.value, catalog), true)) {
              pathwaySelect.value = membership.pathwayId || '';
            }
          });
          pathwayField.append(pathwayLabel, pathwaySelect); container.append(pathwayField);
        } else {
          container.append(make('p', 'teacher-caption', 'Cet élève a été retiré de cette classe. Sa fiche globale et ses progressions sont encore conservées.'));
        }
        const details = make('details', 'teacher-student-details');
        details.append(make('summary', '', 'Modifier le nom, la remarque ou gérer l’élève'));
        details.append(make('p', 'teacher-caption', 'Le nom est enregistré en quittant le champ. La remarque est enregistrée après une courte pause.'));
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
        const actions = make('div', 'teacher-student-actions');
        if (membership) {
          const remove = button('Retirer de cette classe', () => {
            const classroom = doc.classes.find(item => item.id === classId);
            if (!window.confirm('Retirer ' + student.name + ' de « ' + classroom.name + ' » ?\n\nLa fiche, les progressions et les anciennes séances seront conservées.')) return;
            if (edit(() => model.removeStudentFromClass(doc, classId, student.id), true)) {
              render(); fieldset.querySelector('.teacher-profile h3')?.focus();
            }
          });
          remove.id = 'remove-student-from-class'; actions.append(remove);
        }
        const danger = button('Supprimer définitivement l’élève', () => {
          const otherClasses = doc.memberships
            .filter(item => item.studentId === student.id && item.classId !== classId)
            .map(item => doc.classes.find(entry => entry.id === item.classId)?.name || item.classId);
          if (otherClasses.length) {
            showError('Cet élève appartient encore à : ' + otherClasses.join(', ') +
              '. Retirez-le d’abord de ces classes avant de le supprimer définitivement.');
            return;
          }
          if (!window.confirm('Supprimer définitivement ' + student.name + ' ?\n\nSa fiche et ses progressions actuelles seront supprimées. Les anciennes séances resteront intactes. Cette action est irréversible.')) return;
          const nextStudentId = doc.memberships.find(item => item.classId === classId && item.studentId !== student.id)?.studentId || null;
          if (edit(() => model.deleteStudent(doc, student.id, classId), true)) {
            studentId = nextStudentId; render();
            (fieldset.querySelector('.teacher-profile h3') || fieldset.querySelector('.teacher-roster h3'))?.focus();
          }
        });
        danger.id = 'delete-student-permanently'; danger.classList.add('button--danger'); actions.append(danger);
        details.append(actions);
        container.append(details, make('p', 'teacher-caption', 'Décision manuelle du professeur. Une case cochée côté élève ne valide aucune compétence.'));
        renderFramework(container, frameworkForClass(), student);
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
                if (edit(() => model.updateProgress(doc, student.id, skillId, { status }), true)) {
                  refresh(); refreshMappedSkills(student, skillId);
                }
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
      function renderFrameworkTools(top) {
        const details = make('details', 'teacher-framework-import');
        details.append(make('summary', '', 'Référentiels externes privés'));
        details.append(make('p', 'teacher-caption', 'Importe un fichier JSON privé fourni séparément. Son contenu sera copié dans cet Espace CodeCraft et ne sera envoyé nulle part.'));
        if (doc.frameworks.length) {
          const list = make('ul');
          for (const framework of doc.frameworks) list.append(make('li', '', framework.name + ' — ' + framework.version));
          details.append(list);
        } else details.append(make('p', '', 'Aucun référentiel externe importé.'));
        const label = make('label', '', 'Fichier de référentiel privé (.json)'); label.htmlFor = 'framework-import';
        const file = make('input'); file.id = 'framework-import'; file.type = 'file'; file.accept = '.json,application/json';
        file.addEventListener('change', async () => {
          const selected = file.files?.[0];
          if (!selected) return;
          try {
            const text = await selected.text();
            if (edit(() => model.importFramework(doc, text, catalog), true)) {
              render(); fieldset.querySelector('#framework-import')?.focus();
            }
          } catch (e) { showError(e.message); file.value = ''; }
        });
        details.append(label, file); top.append(details);
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
            classId = item.id; studentId = null; view = 'students';
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
          const deleteClass = button('Supprimer cette classe', () => {
            const sessionCount = doc.sessions.filter(item => item.classId === c.id).length;
            if (sessionCount) {
              showError('La classe « ' + c.name + ' » possède ' + sessionCount + ' séance' +
                (sessionCount > 1 ? 's' : '') + ' historique' + (sessionCount > 1 ? 's' : '') +
                '. Sa suppression est bloquée pour préserver cet historique.');
              return;
            }
            const membershipCount = doc.memberships.filter(item => item.classId === c.id).length;
            const membershipText = membershipCount === 0 ? 'Aucun rattachement élève ne sera supprimé.' :
              membershipCount === 1 ? '1 rattachement élève sera retiré.' :
                membershipCount + ' rattachements élèves seront retirés.';
            if (!window.confirm('Supprimer la classe « ' + c.name + ' » ?\n\n' +
              membershipText + ' Les fiches élèves et leurs progressions seront conservées. Cette action est irréversible.')) return;
            const nextClassId = doc.classes.find(item => item.id !== c.id)?.id || null;
            if (edit(() => model.deleteClass(doc, c.id), true)) {
              classId = nextClassId; studentId = null; view = 'students'; render();
              fieldset.querySelector('#class-select')?.focus();
            }
          });
          deleteClass.id = 'delete-class'; deleteClass.classList.add('button--danger'); editClass.append(deleteClass);
          top.append(editClass);
          const frameworkLabel = make('label', '', 'Référentiel externe de la classe (facultatif)'); frameworkLabel.htmlFor = 'class-framework';
          const frameworkSelect = make('select'); frameworkSelect.id = 'class-framework';
          const noFramework = make('option', '', 'Aucun — compétences CodeCraft uniquement'); noFramework.value = ''; frameworkSelect.append(noFramework);
          for (const framework of doc.frameworks) {
            const option = make('option', '', framework.name + ' — ' + framework.version);
            option.value = framework.id; frameworkSelect.append(option);
          }
          frameworkSelect.value = c.frameworkId || '';
          frameworkSelect.addEventListener('change', () => {
            if (edit(() => model.setClassFramework(doc, c.id, frameworkSelect.value), true)) {
              render(); fieldset.querySelector('#class-framework')?.focus();
            }
          });
          top.append(frameworkLabel, frameworkSelect);
        }
        renderFrameworkTools(top);
        fieldset.append(top);
        if (!c) return;
        const navigation = make('nav', 'teacher-actions'); navigation.setAttribute('aria-label', 'Vue de la classe');
        for (const [key, label] of [['students', 'Élèves'], ['sessions', 'Séances']]) {
          const node = button(label, () => { view = key; render(); fieldset.querySelector('#view-' + key).focus(); });
          node.id = 'view-' + key; node.setAttribute('aria-pressed', String(view === key)); navigation.append(node);
        }
        fieldset.append(navigation);
        if (view === 'sessions') {
          fieldset.append(sessionsRoot); sessions.load(doc, classId); return;
        }
        const layout = make('div', 'teacher-classroom-layout');
        const sidebar = make('section', 'content-card teacher-roster');
        const heading = make('h3', 'section-title'); sidebar.append(heading);
        const list = make('div', 'teacher-student-list'); sidebar.append(list);
        const newStudent = make('details', 'teacher-add-student-panel');
        newStudent.append(make('summary', '', 'Ajouter un nouvel élève'));
        const add = make('form', 'teacher-add-student');
        const studentName = input(add, 'Prénom ou nom d’affichage', 'new-student-name'); studentName.required = true;
        const duplicateWarning = make('div', 'teacher-duplicate-warning');
        duplicateWarning.setAttribute('role', 'alert'); duplicateWarning.hidden = true;
        const addButton = make('button', 'button button--primary', 'Créer le nouvel élève'); addButton.type = 'submit'; add.append(duplicateWarning, addButton);
        newStudent.append(add);
        const existingStudent = make('details', 'teacher-add-student-panel');
        existingStudent.append(make('summary', '', 'Ajouter un élève existant'));
        const existingForm = make('form', 'teacher-add-existing');
        const existingField = make('div', 'teacher-field');
        const existingLabel = make('label', '', 'Élève à rattacher'); existingLabel.htmlFor = 'existing-student-select';
        const existingSelect = make('select'); existingSelect.id = 'existing-student-select';
        const available = model.studentsOutsideClass(doc, classId);
        if (available.length) {
          const placeholder = make('option', '', 'Choisir un élève'); placeholder.value = ''; existingSelect.append(placeholder);
          for (const student of available) {
            const option = make('option', '', student.name); option.value = student.id; existingSelect.append(option);
          }
          existingSelect.required = true;
        } else {
          const none = make('option', '', 'Aucun élève disponible'); none.value = ''; existingSelect.append(none);
          existingSelect.disabled = true;
        }
        existingField.append(existingLabel, existingSelect); existingForm.append(existingField);
        const attachButton = make('button', 'button button--secondary', 'Rattacher à cette classe');
        attachButton.type = 'submit'; attachButton.disabled = !available.length; existingForm.append(attachButton);
        existingStudent.append(existingForm);
        const profile = make('section', 'content-card teacher-profile');
        function attachAndOpen(selectedId) {
          if (edit(() => model.attachStudent(doc, classId, selectedId), true)) {
            studentId = selectedId; render();
            fieldset.querySelector('.teacher-profile h3')?.focus();
          }
        }
        existingForm.addEventListener('submit', e => {
          e.preventDefault();
          if (existingSelect.value) attachAndOpen(existingSelect.value);
        });
        let duplicateConfirmed = false;
        add.addEventListener('submit', e => {
          e.preventDefault();
          const cleanName = studentName.value.trim();
          const matches = doc.students.filter(student => student.name === cleanName);
          if (matches.length && !duplicateConfirmed) {
            duplicateWarning.replaceChildren(
              make('strong', '', 'Un élève porte déjà exactement ce nom.'),
              make('p', 'teacher-caption', 'Tu peux rattacher sa fiche existante et conserver ses progressions, ou créer quand même un homonyme distinct.')
            );
            for (const match of matches) {
              const isMember = doc.memberships.some(item => item.classId === classId && item.studentId === match.id);
              const action = button(isMember ? 'Ouvrir la fiche existante' : 'Rattacher la fiche existante', () => {
                if (isMember) {
                  studentId = match.id; renderStudents(profile, list, heading); renderProfile(profile);
                  profile.querySelector('h3')?.focus();
                } else attachAndOpen(match.id);
              });
              action.dataset.existingStudentId = match.id; duplicateWarning.append(action);
            }
            const createAnyway = button('Créer quand même un homonyme', () => {
              duplicateConfirmed = true; add.requestSubmit();
            });
            createAnyway.id = 'create-homonym-anyway'; duplicateWarning.append(createAnyway);
            duplicateWarning.hidden = false;
            return;
          }
          if (edit(() => { studentId = model.addStudent(doc, { id: uid(), classId, name: studentName.value }).id; }, true)) {
            duplicateConfirmed = false; studentName.value = ''; duplicateWarning.hidden = true;
            render(); fieldset.querySelector('.teacher-profile h3')?.focus();
          }
        });
        studentName.addEventListener('input', () => { duplicateConfirmed = false; duplicateWarning.hidden = true; });
        sidebar.append(newStudent, existingStudent); layout.append(sidebar, profile); fieldset.append(layout);
        renderStudents(profile, list, heading); renderProfile(profile);
      }
      return {
        load(document) {
          doc = document; classId = doc.classes[0]?.id || null; studentId = null; view = 'students';
          error.hidden = true; render();
        },
        setDisabled(value) { disabled = value; fieldset.disabled = value; }
      };
    }
  };
})();
