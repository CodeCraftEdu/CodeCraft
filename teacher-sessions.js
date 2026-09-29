/* Séances privées : interface et impression, sauvegarde confiée à teacher-app. */
(function () {
  'use strict';
  const make = (tag, text, cls) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  };
  const statusNames = { draft: 'Brouillon', completed: 'Terminée', archived: 'Archivée' };
  const presenceNames = { unknown: 'Non renseigné', present: 'Présent', absent: 'Absent' };
  const progressNames = { 'in-progress': 'En cours', acquired: 'Acquis' };
  const frenchDate = date => date.split('-').reverse().join('/');
  const today = () => {
    const now = new Date();
    return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
  };
  function appendInlineMarkdown(parent, text) {
    const pattern = /(\*\*([^*]+)\*\*|`([^`\n]+)`)/g;
    let index = 0, match;
    while ((match = pattern.exec(text))) {
      if (match.index > index) parent.append(document.createTextNode(text.slice(index, match.index)));
      const node = make(match[2] !== undefined ? 'strong' : 'code', match[2] ?? match[3]);
      parent.append(node); index = pattern.lastIndex;
    }
    if (index < text.length) parent.append(document.createTextNode(text.slice(index)));
  }
  function markdownView(source) {
    const root = make('div', undefined, 'markdown-reader');
    const lines = String(source || '').replace(/\r\n?/g, '\n').split('\n');
    const special = line => /^\s*```/.test(line) || /^\s{0,3}#{1,6}\s+/.test(line) ||
      /^\s{0,3}(?:---+|\*\*\*+)\s*$/.test(line) || /^\s*(?:[-+*]|\d+\.)\s+/.test(line);
    let index = 0;
    while (index < lines.length) {
      const line = lines[index];
      if (!line.trim()) { index++; continue; }
      if (/^\s*```/.test(line)) {
        const content = []; index++;
        while (index < lines.length && !/^\s*```/.test(lines[index])) content.push(lines[index++]);
        if (index < lines.length) index++;
        const pre = make('pre'), code = make('code', content.join('\n')); pre.append(code); root.append(pre); continue;
      }
      const heading = line.match(/^\s{0,3}(#{1,6})\s+(.+)$/);
      if (heading) {
        const node = make('h' + Math.min(6, heading[1].length + 2)); appendInlineMarkdown(node, heading[2].trim());
        root.append(node); index++; continue;
      }
      if (/^\s{0,3}(?:---+|\*\*\*+)\s*$/.test(line)) { root.append(make('hr')); index++; continue; }
      const listMatch = line.match(/^\s*(?:([-+*])|(\d+)\.)\s+(.+)$/);
      if (listMatch) {
        const ordered = listMatch[2] !== undefined, list = make(ordered ? 'ol' : 'ul');
        while (index < lines.length) {
          const item = lines[index].match(/^\s*(?:([-+*])|(\d+)\.)\s+(.+)$/);
          if (!item || (item[2] !== undefined) !== ordered) break;
          const li = make('li'); appendInlineMarkdown(li, item[3]); list.append(li); index++;
        }
        root.append(list); continue;
      }
      const paragraph = [];
      while (index < lines.length && lines[index].trim() && !special(lines[index])) paragraph.push(lines[index++].trim());
      const p = make('p'); appendInlineMarkdown(p, paragraph.join(' ')); root.append(p);
    }
    if (!root.childNodes.length) root.append(make('p', 'Aucune préparation détaillée pour le moment.', 'teacher-caption'));
    return root;
  }
  function normalizedQuickSource(source) {
    const lines = String(source || '').replace(/\r\n?/g, '\n').split('\n');
    let start = 0, end = lines.length;
    while (start < end && !lines[start].trim()) start++;
    if (/^#{1,2}\s+conducteur rapide\s*$/i.test(lines[start] || '')) {
      start++;
      while (start < end && !lines[start].trim()) start++;
    }
    let last = end - 1;
    while (last >= start && !lines[last].trim()) last--;
    if (/^```(?:text)?\s*$/i.test(lines[start] || '') && /^```\s*$/.test(lines[last] || '') && last > start) {
      start++;
      end = last;
    }
    return lines.slice(start, end).join('\n');
  }
  function parseQuickConductor(source) {
    const items = [], loose = [];
    let current = null;
    const flushLoose = () => {
      if (loose.some(line => line.trim())) items.push({ type: 'text', lines: loose.splice(0) });
      else loose.length = 0;
    };
    for (const line of normalizedQuickSource(source).split('\n')) {
      const match = line.match(/^\s*(\d{1,2}:\d{2})\s*[–—-]\s*(\d{1,2}:\d{2})\s*(?:—|-)\s*(.*)$/);
      if (match) {
        flushLoose();
        const parts = match[3].split(/\s+(?:—|–|-)\s+/).map(item => item.trim()).filter(Boolean);
        current = {
          type: 'slot', time: match[1] + '–' + match[2],
          group: parts.length > 1 ? parts.shift() : '', title: parts.join(' — ') || match[3].trim(), lines: []
        };
        items.push(current);
      } else if (current) current.lines.push(line);
      else loose.push(line);
    }
    flushLoose();
    return items;
  }
  function quickConductorView(source, variant = 'preview') {
    const root = make('div', undefined, 'quick-render quick-render--' + variant);
    const items = parseQuickConductor(source);
    if (!items.length) {
      root.append(make('p', 'Aucun conducteur rapide pour le moment.', 'teacher-caption'));
      return root;
    }
    for (const item of items) {
      if (item.type === 'text') {
        const free = make('section', undefined, 'quick-free-text');
        for (const line of item.lines) {
          if (!line.trim()) continue;
          const p = make('p'); appendInlineMarkdown(p, line); free.append(p);
        }
        root.append(free); continue;
      }
      const block = make('section', undefined, 'quick-slot');
      const header = make('header', undefined, 'quick-slot-header');
      header.append(make('p', item.time, 'quick-time'));
      const identity = make('div', undefined, 'quick-slot-identity');
      if (item.group) { const group = make('p', undefined, 'quick-group'); appendInlineMarkdown(group, item.group); identity.append(group); }
      const title = make('h3'); appendInlineMarkdown(title, item.title || 'Créneau'); identity.append(title);
      header.append(identity); block.append(header);
      const instructions = make('div', undefined, 'quick-instructions');
      for (const line of item.lines) {
        if (!line.trim()) { instructions.append(make('div', undefined, 'quick-spacer')); continue; }
        const p = make('p'); appendInlineMarkdown(p, line); instructions.append(p);
      }
      block.append(instructions); root.append(block);
    }
    return root;
  }
  window.CodeCraftTeacherSessions = {
    create({ root, model, catalog, edit }) {
      let doc, classId, selectedId;
      let conductorMode = null, conductorReturnFocus = null, conductorReturnScroll = 0;
      let conductorReturnScrollBehavior = '', conductorKeyHandler = null;
      const remembered = new Map();
      const printRoot = document.getElementById('session-print');
      const current = () => doc?.sessions.find(item => item.id === selectedId && item.classId === classId);
      const titleOf = item => item.title || item.conductor.title || 'Séance sans titre';
      const collection = name => Object.entries(catalog[name]).map(([id, item]) => ({ id, title: item.title }));
      const moduleChoices = collection('modules'), skillChoices = collection('skills');
      function button(text, action, id) {
        const node = make('button', text, 'button button--secondary'); node.type = 'button';
        if (id) node.id = id;
        node.addEventListener('click', action); return node;
      }
      function field(parent, text, id, value, type, save) {
        const wrap = make('div', undefined, 'teacher-field');
        const label = make('label', text); label.htmlFor = id;
        const node = make(type === 'textarea' ? 'textarea' : 'input'); node.id = id;
        if (type === 'textarea') node.rows = 3;
        else node.type = type || 'text';
        if (type === 'number') { node.min = '0'; node.step = '1'; }
        node.value = value ?? '';
        if (save) node.addEventListener(type === 'textarea' || type === 'text' ? 'input' : 'change', () => {
          if (!node.checkValidity()) { node.reportValidity(); return; }
          if (!save(node.value)) node.value = value ?? '';
        });
        wrap.append(label, node); parent.append(wrap); return node;
      }
      function select(parent, labelText, id, options, value, save) {
        const wrap = make('div', undefined, 'teacher-field'), label = make('label', labelText);
        label.htmlFor = id;
        const node = make('select'); node.id = id;
        for (const [value, text] of options) { const option = make('option', text); option.value = value; node.append(option); }
        node.value = value;
        node.addEventListener('change', () => { if (!save(node.value)) node.value = value; });
        wrap.append(label, node); parent.append(wrap); return node;
      }
      function disclosure(parent, title, open = false) {
        const node = make('details', undefined, 'session-section'); node.open = open;
        node.append(make('summary', title)); parent.append(node); return node;
      }
      function choices(parent, title, items, selected, save, key) {
        const panel = disclosure(parent, title + ' (' + selected.length + ')');
        const values = new Set(selected);
        const all = [...items];
        for (const id of selected) if (!all.some(item => item.id === id)) all.push({ id, title: id + ' — référence conservée' });
        if (!all.length) panel.append(make('p', 'Aucun élément disponible.'));
        const list = make('div', undefined, 'session-choices');
        for (const item of all) {
          const label = make('label', undefined, 'session-choice');
          const box = make('input'); box.type = 'checkbox'; box.checked = values.has(item.id);
          box.dataset.choice = key; box.dataset.value = item.id;
          box.addEventListener('change', () => {
            const next = new Set(values); box.checked ? next.add(item.id) : next.delete(item.id);
            if (save([...next])) {
              values.clear(); for (const id of next) values.add(id);
              panel.querySelector('summary').textContent = title + ' (' + values.size + ')';
            } else box.checked = values.has(item.id);
          });
          label.append(box, make('span', item.title)); list.append(label);
        }
        panel.append(list); return panel;
      }
      const update = (patch, immediate = false) => edit(() => model.updateSession(doc, selectedId, patch), immediate);
      function range(session, slot) {
        function time(minute) {
          if (!session.startTime) return minute + ' min';
          const [hours, minutes] = session.startTime.split(':').map(Number);
          const total = hours * 60 + minutes + minute;
          return String(Math.floor(total / 60) % 24).padStart(2, '0') + ':' + String(total % 60).padStart(2, '0') +
            (total >= 1440 ? ' (J+' + Math.floor(total / 1440) + ')' : '');
        }
        return time(slot.startMinute) + '–' + time(slot.startMinute + slot.durationMinutes);
      }
      function participantName(session, id) {
        return model.sessionRoster(doc, session).find(item => item.studentId === id)?.name || doc.students.find(item => item.id === id)?.name || id;
      }
      function frameworkOf(session) { return doc.frameworks.find(item => item.id === session.frameworkId); }
      function objectiveChoices(session) {
        const framework = frameworkOf(session);
        return framework ? model.objectivesOf(framework).map(item => ({ id: item.id, title: item.code + ' — ' + item.title })) : [];
      }
      function printDocument(session) {
        const page = make('article', undefined, 'conductor-print');
        page.append(make('h1', 'CodeCraft'), make('h2', session.className || doc.classes.find(item => item.id === session.classId)?.name || 'Classe'));
        page.append(make('p', frenchDate(session.date) + ' · ' + statusNames[session.status] +
          (session.startTime ? ' · Départ ' + session.startTime : '')), make('h2', titleOf(session)));
        function list(parent, label, ids, options) {
          if (!ids?.length) return;
          parent.append(make('p', label, 'print-label'));
          const ul = make('ul');
          for (const id of ids) ul.append(make('li', options.find(item => item.id === id)?.title || id));
          parent.append(ul);
        }
        list(page, 'Compétences de la séance', session.skillIds, skillChoices);
        list(page, 'Modules de la séance', session.moduleIds, moduleChoices);
        list(page, frameworkOf(session)?.name || 'Objectifs externes', session.objectiveIds, objectiveChoices(session));
        if (session.quickConductor?.trim()) {
          page.append(make('h3', 'Conducteur rapide'));
          page.append(quickConductorView(session.quickConductor, 'print'));
        }
        if (session.conductor.slots.length || session.conductor.reminders.length) {
          page.append(make('h3', 'Conducteur structuré'));
        }
        for (const slot of session.conductor.slots) {
          const block = make('section', undefined, 'print-slot');
          block.append(make('h3', range(session, slot) + ' · ' + (slot.title || 'Créneau sans titre')));
          block.append(make('p', slot.studentIds?.length ? slot.studentIds.map(id => participantName(session, id)).join(', ') : 'Toute la classe'));
          if (slot.pathwayId) block.append(make('p', 'Parcours : ' + (catalog.pathways[slot.pathwayId]?.title || slot.pathwayId)));
          list(block, 'Modules', slot.moduleIds, moduleChoices);
          list(block, 'Compétences', slot.skillIds, skillChoices);
          if (slot.instructions) block.append(make('p', slot.instructions, 'print-instructions'));
          page.append(block);
        }
        if (!session.quickConductor?.trim() && !session.conductor.slots.length) page.append(make('p', 'Aucun conducteur renseigné.'));
        if (session.conductor.reminders.length) {
          page.append(make('h3', 'Rappels'));
          const list = make('ul'); session.conductor.reminders.forEach(text => list.append(make('li', text))); page.append(list);
        }
        return page;
      }
      function preparePrint() {
        printRoot.replaceChildren();
        const session = root.isConnected && current();
        printRoot.append(session ? printDocument(session) : make('p', 'Ouvre une séance dans « Séances » pour imprimer son conducteur.'));
      }
      function closeConductorMode(restoreFocus = true) {
        if (!conductorMode) return;
        conductorMode.remove(); conductorMode = null;
        document.body.classList.remove('teacher-conductor-mode');
        const main = document.getElementById('main-content'); if (main) main.inert = false;
        if (conductorKeyHandler) document.removeEventListener('keydown', conductorKeyHandler);
        conductorKeyHandler = null;
        window.scrollTo(0, conductorReturnScroll);
        document.documentElement.style.scrollBehavior = conductorReturnScrollBehavior;
        if (restoreFocus) conductorReturnFocus?.focus();
      }
      function openConductorMode(session, trigger) {
        closeConductorMode(false); conductorReturnFocus = trigger; conductorReturnScroll = window.scrollY;
        conductorReturnScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        const page = make('section', undefined, 'conductor-mode'); page.id = 'conductor-mode';
        page.setAttribute('role', 'dialog'); page.setAttribute('aria-modal', 'true'); page.setAttribute('aria-labelledby', 'conductor-mode-title');
        const shell = make('div', undefined, 'conductor-mode-shell');
        const toolbar = make('div', undefined, 'conductor-mode-toolbar');
        const back = button('Retour à la séance', () => closeConductorMode(), 'close-conductor-mode');
        const print = button('Imprimer / PDF', () => { preparePrint(); window.print(); }, 'print-conductor-mode');
        toolbar.append(make('strong', 'CodeCraft', 'conductor-mode-brand'), make('div', undefined, 'conductor-mode-toolbar-spacer'), back, print);
        const header = make('header', undefined, 'conductor-mode-header');
        const title = make('h1', titleOf(session)); title.id = 'conductor-mode-title';
        const classroom = session.className || doc.classes.find(item => item.id === session.classId)?.name || 'Classe';
        const meta = make('p', classroom + ' · ' + frenchDate(session.date) + (session.startTime ? ' · Départ ' + session.startTime : ''), 'conductor-mode-meta');
        header.append(title, meta);
        shell.append(toolbar, header, quickConductorView(session.quickConductor, 'mode'));
        page.append(shell); document.body.append(page); conductorMode = page;
        document.body.classList.add('teacher-conductor-mode');
        const main = document.getElementById('main-content'); if (main) main.inert = true;
        conductorKeyHandler = event => { if (event.key === 'Escape') closeConductorMode(); };
        document.addEventListener('keydown', conductorKeyHandler); window.scrollTo(0, 0); back.focus();
      }
      window.addEventListener('beforeprint', preparePrint);
      function preparation(parent, session) {
        const panel = disclosure(parent, 'Aide à la préparation — élèves et bibliothèque');
        panel.append(make('p', 'Les états ci-dessous sont les états actuels. Choisis toi-même les objectifs et les groupes de cette séance.', 'teacher-caption'));
        for (const member of model.sessionRoster(doc, session)) {
          const membership = doc.memberships.find(item => item.classId === session.classId && item.studentId === member.studentId);
          const pathway = catalog.pathways[membership?.pathwayId]?.title || 'Non renseigné';
          const row = disclosure(panel, member.name + ' — ' + pathway + ' · ' + presenceNames[session.attendance?.find(item => item.studentId === member.studentId)?.status || 'unknown']);
          row.dataset.preparationStudentId = member.studentId;
          row.append(make('p', 'Parcours actuel dans cette classe : ' + pathway));
          const entries = doc.progress.filter(item => item.studentId === member.studentId && progressNames[item.status]);
          if (!entries.length) row.append(make('p', 'Aucune compétence En cours ou Acquise renseignée.'));
          const list = make('ul');
          for (const entry of entries) list.append(make('li', (catalog.skills[entry.skillId]?.title || entry.skillId) + ' — ' + progressNames[entry.status]));
          row.append(list);
        }
        const modules = disclosure(panel, 'Modules CodeCraft disponibles');
        for (const item of moduleChoices) {
          const link = make('a', item.title); link.href = 'index.html#module/' + encodeURIComponent(item.id);
          link.target = '_blank'; link.rel = 'noopener';
          const p = make('p'); p.append(link); modules.append(p);
        }
        if (frameworkOf(session)) {
          const external = disclosure(panel, frameworkOf(session).name + ' — objectifs officiels');
          const list = make('ul'); objectiveChoices(session).forEach(item => list.append(make('li', item.title))); external.append(list);
        }
      }
      function renderEditor(parent, session) {
        const editor = make('section', undefined, 'content-card session-editor'); editor.id = 'session-editor';
        const heading = make('h3', titleOf(session), 'section-title'); heading.tabIndex = -1;
        editor.append(heading);
        const fields = make('div', undefined, 'session-grid'); editor.append(fields);
        const day = field(fields, 'Date de la séance', 'session-date', session.date, 'date', value => {
          const ok = update({ date: value }, true); if (ok) renderHistory(); return ok;
        }); day.required = true;
        field(fields, 'Titre (facultatif)', 'session-title', session.title ?? session.conductor.title, 'text', value => {
          const ok = update({ title: value }); if (ok) { heading.textContent = titleOf(session); renderHistory(); } return ok;
        });
        const quickPanel = make('section', undefined, 'session-quick-panel');
        quickPanel.append(make('h4', 'Conducteur rapide'));
        const quickPreview = make('div', undefined, 'session-reading-view');
        quickPreview.append(quickConductorView(session.quickConductor, 'preview'));
        const quickActions = make('div', undefined, 'teacher-actions');
        const quickEdit = make('div', undefined, 'session-editing-view'); quickEdit.hidden = true;
        const quick = field(quickEdit, 'Texte du conducteur rapide', 'session-quick-conductor', session.quickConductor || '', 'textarea', value => update({ quickConductor: value }));
        quick.rows = 10;
        const modifyQuick = button('Modifier', () => {
          quickPreview.hidden = true; quickEdit.hidden = false; modifyQuick.disabled = true; quick.focus();
        }, 'edit-quick-conductor');
        const finishQuick = button('Terminer l’édition', () => {
          quickPreview.replaceChildren(quickConductorView(session.quickConductor, 'preview'));
          quickPreview.hidden = false; quickEdit.hidden = true; modifyQuick.disabled = false; modifyQuick.focus();
        }, 'finish-quick-conductor');
        quickEdit.append(finishQuick);
        const openMode = button('Ouvrir le conducteur', () => openConductorMode(session, openMode), 'open-conductor-mode');
        quickActions.append(modifyQuick, openMode);
        quickPanel.append(quickPreview, quickActions, quickEdit);
        editor.append(quickPanel);
        const attendance = disclosure(editor, 'Présences — composition de cette séance', true);
        const members = model.sessionRoster(doc, session);
        if (!members.length) attendance.append(make('p', 'Aucun élève dans la composition de cette séance.'));
        if (members.length) attendance.append(button('Tout le monde présent', () => {
          if (edit(() => model.setAllAttendance(doc, session.id, 'present'), true)) {
            render(); root.querySelector('#mark-all-present')?.focus();
          }
        }, 'mark-all-present'));
        for (const member of members) {
          select(attendance, member.name, 'attendance-' + member.studentId, Object.entries(presenceNames),
            session.attendance?.find(item => item.studentId === member.studentId)?.status || 'unknown',
            value => {
              const ok = edit(() => model.setAttendance(doc, session.id, member.studentId, value), true);
              if (ok) { renderSlots(); preparationHost.replaceChildren(); preparation(preparationHost, session); }
              return ok;
            });
        }
        field(editor, 'Notes générales de séance (non imprimées)', 'session-notes', session.notes, 'textarea', value => update({ notes: value }));
        const finishActions = make('div', undefined, 'teacher-actions session-finish-actions');
        const finish = button(session.status === 'completed' ? 'Séance terminée' : session.status === 'archived' ? 'Séance archivée' : 'Terminer la séance', () => {
          if (update({ status: 'completed' }, true)) {
            render(); root.querySelector('#finish-session')?.focus();
          }
        }, 'finish-session');
        finish.classList.remove('button--secondary'); finish.classList.add('button--primary');
        finish.disabled = session.status !== 'draft'; finishActions.append(finish);
        finishActions.append(make('p', 'Terminer une séance ne valide aucune compétence. Elle restera modifiable.', 'teacher-caption'));
        editor.append(finishActions);
        const detailed = disclosure(editor, 'Préparation détaillée'); detailed.id = 'session-detailed-preparation';
        detailed.append(make('p', 'Préparation longue rédigée avant le cours. Elle reste distincte du conducteur rapide et des notes de séance, et n’est pas imprimée.', 'teacher-caption'));
        const detailedReader = make('div', undefined, 'session-reading-view'); detailedReader.append(markdownView(session.detailedPreparation));
        const detailedEdit = make('div', undefined, 'session-editing-view'); detailedEdit.hidden = true;
        const detailedText = field(detailedEdit, 'Préparation détaillée en Markdown', 'session-detailed-preparation-text', session.detailedPreparation || '', 'textarea', value => update({ detailedPreparation: value }));
        detailedText.rows = 12;
        const modifyDetailed = button('Modifier', () => {
          detailedReader.hidden = true; detailedEdit.hidden = false; modifyDetailed.disabled = true; detailedText.focus();
        }, 'edit-detailed-preparation');
        const finishDetailed = button('Terminer l’édition', () => {
          detailedReader.replaceChildren(markdownView(session.detailedPreparation));
          detailedReader.hidden = false; detailedEdit.hidden = true; modifyDetailed.disabled = false; modifyDetailed.focus();
        }, 'finish-detailed-preparation');
        detailedEdit.append(finishDetailed); detailed.append(detailedReader, modifyDetailed, detailedEdit);
        const advanced = disclosure(editor, 'Préparation avancée'); advanced.id = 'session-advanced';
        advanced.append(make('p', 'Ces réglages sont facultatifs. Une séance ordinaire peut rester sans objectif, ressource ou créneau structuré.', 'teacher-caption'));
        const advancedFields = make('div', undefined, 'session-grid'); advanced.append(advancedFields);
        select(advancedFields, 'Statut', 'session-status', Object.entries(statusNames), session.status, value => {
          const ok = update({ status: value }, true);
          if (ok) { render(); root.querySelector('#session-status')?.focus(); }
          return ok;
        });
        field(advancedFields, 'Heure de départ du conducteur structuré (facultative)', 'session-start-time', session.startTime, 'time', value => {
          const ok = update({ startTime: value }, true); if (ok) renderSlots(); return ok;
        });
        const targets = disclosure(advanced, 'Objectifs et modules de la séance');
        choices(targets, 'Compétences CodeCraft', skillChoices, session.skillIds, ids => update({ skillIds: ids }, true), 'session-skills');
        choices(targets, 'Modules CodeCraft', moduleChoices, session.moduleIds || [], ids => update({ moduleIds: ids }, true), 'session-modules');
        if (session.frameworkId) choices(targets, 'Objectifs — ' + (frameworkOf(session)?.name || 'référentiel conservé'), objectiveChoices(session), session.objectiveIds || [], ids => update({ objectiveIds: ids }, true), 'session-objectives');
        const preparationHost = make('div'); advanced.append(preparationHost); preparation(preparationHost, session);
        const conductor = make('section', undefined, 'session-conductor');
        conductor.append(make('h4', 'Conducteur'));
        conductor.append(make('p', 'Les minutes sont comptées depuis le début de la séance. Monter / Descendre change l’ordre, sans déplacer les horaires. Sans élève sélectionné, le créneau concerne toute la classe.', 'teacher-caption'));
        const slots = make('div'); slots.id = 'session-slots'; conductor.append(slots);
        function renderSlots(focusId) {
          slots.replaceChildren();
          const all = session.conductor.slots;
          all.forEach((slot, index) => {
            const card = make('details', undefined, 'session-slot'); card.dataset.slotId = slot.id;
            card.open = focusId ? slot.id === focusId : index === 0;
            const slotLabel = item => (index + 1) + ' · ' + range(session, item) + ' · ' + (item.title || 'Créneau sans titre') + ' — ' +
              (item.studentIds?.length ? item.studentIds.map(id => participantName(session, id)).join(', ') : 'Toute la classe');
            const title = make('summary', slotLabel(slot));
            title.tabIndex = 0; card.append(title);
            const tools = make('div', undefined, 'teacher-actions');
            for (const [direction, label] of [[-1, 'Monter'], [1, 'Descendre']]) {
              const b = button(label, () => { if (edit(() => model.moveSlot(doc, session.id, slot.id, direction), true)) renderSlots(slot.id); });
              b.dataset.move = String(direction); b.disabled = direction === -1 ? index === 0 : index === all.length - 1; tools.append(b);
            }
            const remove = button('Supprimer', () => {
              if (window.confirm('Supprimer ce créneau du conducteur ?')) {
                if (edit(() => model.removeSlot(doc, session.id, slot.id), true)) { renderSlots(); document.getElementById('add-slot').focus(); }
              }
            }); remove.dataset.removeSlot = slot.id; tools.append(remove); card.append(tools);
            const saveSlot = (patch, immediate = false) => {
              const ok = edit(() => model.updateSlot(doc, session.id, slot.id, patch), immediate);
              if (ok) {
                const latest = session.conductor.slots.find(item => item.id === slot.id);
                title.textContent = slotLabel(latest);
              }
              return ok;
            };
            const grid = make('div', undefined, 'session-grid'); card.append(grid);
            const minute = field(grid, 'Début (minute)', 'slot-start-' + slot.id, slot.startMinute, 'number', value => saveSlot({ startMinute: Number(value) }, true)); minute.required = true;
            const duration = field(grid, 'Durée (minutes)', 'slot-duration-' + slot.id, slot.durationMinutes, 'number', value => saveSlot({ durationMinutes: Number(value) }, true)); duration.min = '1'; duration.required = true;
            field(card, 'Titre du créneau', 'slot-title-' + slot.id, slot.title, 'text', value => saveSlot({ title: value }));
            field(card, 'Instructions / notes professeur', 'slot-instructions-' + slot.id, slot.instructions, 'textarea', value => saveSlot({ instructions: value }));
            const people = members.map(item => ({ id: item.studentId, title: item.name + ' — ' + presenceNames[session.attendance?.find(a => a.studentId === item.studentId)?.status || 'unknown'] }));
            choices(card, 'Élèves ciblés — aucun = toute la classe', people, slot.studentIds || [], ids => saveSlot({ studentIds: ids }, true), 'slot-students');
            const pathways = [['', 'Aucun parcours précisé'], ...Object.entries(catalog.pathways).map(([id, item]) => [id, item.title])];
            if (slot.pathwayId && !catalog.pathways[slot.pathwayId]) pathways.push([slot.pathwayId, slot.pathwayId + ' — référence conservée']);
            select(card, 'Parcours du créneau (facultatif)', 'slot-pathway-' + slot.id, pathways, slot.pathwayId || '', value => saveSlot({ pathwayId: value }, true));
            choices(card, 'Modules du créneau', moduleChoices, slot.moduleIds || [], ids => saveSlot({ moduleIds: ids }, true), 'slot-modules');
            choices(card, 'Compétences du créneau', skillChoices, slot.skillIds || [], ids => saveSlot({ skillIds: ids }, true), 'slot-skills');
            slots.append(card);
          });
          if (!all.length) slots.append(make('p', 'Ajoute ton premier créneau.'));
          if (focusId) [...slots.children].find(item => item.dataset.slotId === focusId)?.querySelector('summary').focus();
        }
        renderSlots();
        conductor.append(button('Ajouter un créneau', () => {
          const id = crypto.randomUUID(); if (edit(() => model.addSlot(doc, session.id, id), true)) renderSlots(id);
        }, 'add-slot'));
        field(conductor, 'Rappels à imprimer (un par ligne)', 'session-reminders', session.conductor.reminders.join('\n'), 'textarea', value => edit(() => model.setReminders(doc, session.id, value.split('\n').filter(text => text.trim()))));
        advanced.append(conductor);
        const preview = disclosure(editor, 'Aperçu du conducteur à imprimer');
        const previewContent = make('div'); preview.append(previewContent);
        preview.addEventListener('toggle', () => { if (preview.open) previewContent.replaceChildren(printDocument(session)); });
        for (const event of ['input', 'change', 'click']) editor.addEventListener(event, () => {
          if (preview.open) previewContent.replaceChildren(printDocument(session));
        });
        editor.append(button('Imprimer le conducteur / PDF', () => { preparePrint(); window.print(); }, 'print-session'));
        parent.append(editor);
      }
      function renderHistory() {
        const history = root.querySelector('#session-history'); if (!history) return;
        history.replaceChildren();
        const sessions = doc.sessions.filter(item => item.classId === classId).slice().sort((a, b) => b.date.localeCompare(a.date));
        if (!sessions.length) history.append(make('p', 'Aucune séance pour cette classe.'));
        for (const session of sessions) {
          const b = button(frenchDate(session.date) + ' · ' + titleOf(session) + ' · ' + statusNames[session.status], () => {
            selectedId = session.id; remembered.set(classId, selectedId); render(); root.querySelector('#session-editor h3').focus();
          }); b.dataset.sessionId = session.id; b.setAttribute('aria-pressed', String(session.id === selectedId)); history.append(b);
        }
      }
      function render() {
        closeConductorMode(false);
        root.replaceChildren();
        const top = make('section', undefined, 'content-card'); top.append(make('h2', 'Séances de la classe', 'section-title'));
        const create = disclosure(top, 'Nouvelle séance', !doc.sessions.some(item => item.classId === classId));
        const form = make('form'); form.id = 'new-session-form';
        const day = field(form, 'Date', 'new-session-date', today(), 'date'); day.required = true;
        const name = field(form, 'Titre (facultatif)', 'new-session-title', '', 'text');
        const members = doc.memberships.filter(item => item.classId === classId).map(item => doc.students.find(student => student.id === item.studentId)?.name);
        form.append(make('p', 'Élèves actuellement rattachés : ' + (members.join(', ') || 'aucun') + '. Présences initiales : Non renseigné.', 'teacher-caption'));
        const submit = make('button', 'Créer la séance', 'button button--primary'); submit.type = 'submit'; form.append(submit);
        form.addEventListener('submit', event => {
          event.preventDefault();
          if (edit(() => { selectedId = model.addSession(doc, { id: crypto.randomUUID(), classId, date: day.value, title: name.value }).id; }, true)) {
            remembered.set(classId, selectedId); render(); root.querySelector('#session-editor h3').focus();
          }
        });
        create.append(form);
        const history = make('div', undefined, 'session-history'); history.id = 'session-history'; top.append(history); root.append(top); renderHistory();
        const selected = current(); if (selected) renderEditor(root, selected);
      }
      return {
        load(document, selectedClass) {
          if (doc !== document) remembered.clear();
          doc = document; classId = selectedClass; selectedId = remembered.get(classId);
          render();
        }
      };
    }
  };
})();
