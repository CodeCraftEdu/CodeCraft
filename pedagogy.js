/* Rendu informatif du catalogue public. Aucun accès au suivi ni au fichier privé. */
(function () {
  'use strict';
  const data = window.CODECRAFT_DATA;
  const node = (tag, text, cls) => {
    const el = document.createElement(tag);
    if (text !== undefined) el.textContent = text;
    if (cls) el.className = cls;
    return el;
  };
  function blocks(items) { return items.flatMap(block => [block, ...blocks(block.blocks || [])]); }
  function target(ref) {
    const module = data.modules[ref.moduleId];
    const block = ref.blockId && module ? blocks(module.blocks).find(b => b.id === ref.blockId) : null;
    const item = ref.itemId && block ? (block.items || []).find(i => i.id === ref.itemId) : null;
    return module && (!ref.blockId || block) && (!ref.itemId || item) ? { module, block, item } : null;
  }
  function url(ref, pathwayId) {
    const params = new URLSearchParams();
    if (data.pathways[pathwayId]?.moduleIds.includes(ref.moduleId)) params.set('parcours', pathwayId);
    if (ref.blockId) params.set('activite', ref.blockId);
    if (ref.itemId) params.set('tache', ref.itemId);
    return '#module/' + encodeURIComponent(ref.moduleId) + (params.size ? '?' + params : '');
  }
  function list(texts, ordered = false) {
    const el = node(ordered ? 'ol' : 'ul');
    texts.forEach(text => el.append(node('li', text)));
    return el;
  }
  function panel(title, tag = 'section') {
    const el = node(tag, undefined, 'content-card pedagogy-panel');
    el.append(node(tag === 'details' ? 'summary' : 'h2', title, 'section-title'));
    return el;
  }
  function prerequisites(module) {
    const el = panel('Avant de commencer — repères');
    if (module.prerequisiteSkills === undefined) {
      el.append(node('p', 'Les prérequis ne sont pas encore détaillés pour ce module. Cela ne signifie pas qu’ils sont acquis.'));
    } else {
      el.append(list(module.prerequisiteSkills.map(p => data.skills[p.skillId].title + ' : ' + p.expectation)));
    }
    el.append(node('p', 'Ces repères aident à choisir ton activité. Le module reste accessible ; aucune compétence n’est validée par son ouverture ou par une case cochée.', 'section-intro'));
    return el;
  }
  function criteria(module) {
    if (!module.masteryCriteria?.length) return null;
    const el = panel('Ce que tu dois pouvoir montrer et expliquer', 'details');
    el.append(list(module.masteryCriteria));
    return el;
  }
  function relationList(refs, pathwayId, teacher = false) {
    const el = node('ul', undefined, 'pedagogy-links');
    refs.forEach(ref => {
      const row = node('li');
      const resolved = target(ref);
      if (!resolved) { row.append(node('span', 'Ressource momentanément indisponible.')); el.append(row); return; }
      const anchor = node('a', ref.label || resolved.item?.text || resolved.block?.title || resolved.module.title);
      anchor.href = (teacher ? 'index.html' : '') + url(ref, pathwayId);
      if (teacher) { anchor.target = '_blank'; anchor.rel = 'noopener'; }
      row.append(anchor);
      if (ref.prerequisiteSkills?.length) row.append(node('p', 'Pour cette activité seulement : ' + ref.prerequisiteSkills.map(p => p.expectation).join(' ')));
      el.append(row);
    });
    return el;
  }
  function orientations(module, pathwayId, teacher = false) {
    const entries = [['consolidation', 'Pour consolider'], ['bonusActivities', 'Bonus possibles'], ['nextSteps', 'Suites conseillées']];
    if (!entries.some(([key]) => module[key]?.length)) return null;
    const el = panel('Choisir la suite');
    el.append(node('p', 'Reprends une activité si tu hésites ; choisis un bonus ou une suite lorsque tu sais expliquer ton travail. Ces propositions ne fixent ni durée ni rythme.'));
    for (const [key, title] of entries) if (module[key]?.length) {
      el.append(node('h3', title), relationList(module[key], pathwayId, teacher));
    }
    return el;
  }
  function resource(module, resourceId) {
    const entry = module.resources?.find(r => r.id === resourceId);
    if (!entry) return node('p', 'Ressource indisponible.');
    const el = panel(entry.title);
    const image = node('img'); image.src = entry.path; image.alt = entry.alt;
    image.width = 160; image.height = 120;
    const status = node('p', 'Chargement de la ressource…'); status.setAttribute('role', 'status');
    image.addEventListener('load', () => { status.textContent = 'Ressource disponible.'; });
    image.addEventListener('error', () => { status.textContent = 'Le fichier n’est pas disponible ici. Essaie la version CodePen ci-dessous ; cette indisponibilité n’est pas une faute dans ton exercice.'; });
    const download = node('a', 'Télécharger pour un projet local'); download.href = entry.path; download.download = entry.id + '.svg';
    const source = node('section', undefined, 'image-source');
    source.append(node('h3', '1 — La source à copier dans src'), node('p', 'Copie la source entière, puis colle-la entre les guillemets de src="". Ne la retape pas et ne la modifie pas.'));
    const details = node('details');
    details.append(node('summary', 'Voir la source encodée — copie manuelle'));
    const pre = node('pre', undefined, 'code-block'); pre.append(node('code', entry.codepenSrc));
    details.append(pre);
    const copy = node('button', 'Copier uniquement la source', 'button button--secondary'); copy.type = 'button';
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(entry.codepenSrc); status.textContent = 'Source copiée. Colle-la entière entre les guillemets de src, puis rédige toi-même alt.'; }
      catch { details.open = true; status.textContent = 'Copie manuelle : sélectionne toute la source ci-dessous, copie-la puis colle-la entre les guillemets de src.'; }
    });
    source.append(copy, details);
    const alternative = node('section', undefined, 'image-alternative');
    alternative.append(node('h3', '2 — Le texte alternatif à écrire dans alt'), node('p', 'Observe l’image. Rédige toi-même une courte description entre les guillemets de alt="". Ce texte n’est pas inclus dans la source copiée.'));
    el.append(image, status, download, source, alternative);
    return el;
  }
  window.CodeCraftPedagogy = { node, blocks, target, url, list, panel, prerequisites, criteria, relationList, orientations, resource };
})();
