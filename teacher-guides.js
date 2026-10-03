/* Guides génériques publics, indépendants du fichier de suivi professeur. */
(function () {
  'use strict';
  const data = window.CODECRAFT_DATA, ui = window.CodeCraftPedagogy;
  const panel = document.getElementById('teacher-guides');
  if (!panel) return;
  const navigation = panel.querySelector('nav'), view = panel.querySelector('[data-guide-view]');
  const entries = Object.entries(data.modules).filter(([, module]) => module.teacherGuide);
  for (const [id, module] of entries) {
    const link = ui.node('a', module.title, 'button button--secondary');
    link.href = '#guide/' + encodeURIComponent(id); navigation.append(link);
  }
  function section(title, texts, ordered = false) {
    const el = ui.node('section', undefined, 'teacher-guide-section');
    el.append(ui.node('h3', title));
    el.append(Array.isArray(texts) ? ui.list(texts, ordered) : ui.node('p', texts));
    return el;
  }
  function activity(title, ref) {
    const el = section(title, 'Ouvrir la consigne élève dans un nouvel onglet :');
    el.append(ui.relationList([ref], null, true)); return el;
  }
  function render() {
    if (location.hash === '#guides') {
      panel.open = true;
      panel.querySelector('summary').focus();
      panel.scrollIntoView({ block: 'start' });
      return;
    }
    if (!location.hash.startsWith('#guide/')) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(7)); } catch { id = ''; }
    panel.open = true; view.replaceChildren();
    const module = data.modules[id], guide = module?.teacherGuide;
    if (!guide) { view.append(ui.node('p', 'Ce guide n’est pas disponible. Choisis un module dans la liste.')); return; }
    const title = ui.node('h2', 'Guide professeur — ' + module.title); title.tabIndex = -1;
    view.append(title, section('Objectif pédagogique', guide.objective), ui.prerequisites(module),
      section('Diagnostic d’entrée', guide.entryDiagnosis), section('À préparer', guide.preparation),
      section('Pourquoi cette notion ?', guide.why), section('Speech de découverte', guide.discoverySpeech));
    const example = activity('Exemple commenté', guide.example.target);
    const source = ui.target(guide.example.target);
    if (source?.block?.code) {
      const pre = ui.node('pre', undefined, 'code-block'); pre.append(ui.node('code', source.block.code)); example.append(pre);
    }
    example.append(ui.list(guide.example.comments)); view.append(example);
    const questions = section('Questions et réponses attendues', 'Poser les questions avant de proposer une correction.');
    for (const item of guide.questions) {
      const details = ui.node('details', undefined, 'hint');
      details.append(ui.node('summary', item.question), ui.node('p', item.answer)); questions.append(details);
    }
    view.append(questions, activity('Exercice accompagné', guide.accompaniedActivity), activity('Mission autonome', guide.independentActivity), section('Adapter l’accompagnement', guide.differentiation));
    const errors = section('Erreurs fréquentes et aides graduées', 'Orienter l’attention → cibler → comparer → accompagner une correction. Laisser un essai entre les aides.');
    for (const error of guide.commonErrors) errors.append(ui.node('h4', error.symptom), ui.list(error.helps, true));
    const criteria = ui.criteria(module); if (criteria) criteria.open = true;
    view.append(errors);
    if (criteria) view.append(criteria);
    const orientations = ui.orientations(module, null, true); if (orientations) view.append(orientations);
    view.append(section('Notes professeur', guide.notes), section('Conducteur rapide — sans horaires imposés', guide.quickConductor, true));
    const references = section('Références techniques', 'Pour vérifier ou approfondir les explications :');
    const list = ui.node('ul');
    for (const ref of guide.references) {
      const row = ui.node('li'), link = ui.node('a', ref.title);
      link.href = ref.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; row.append(link); list.append(row);
    }
    references.append(list); view.append(references);
    title.focus({ preventScroll: true }); title.scrollIntoView({ block: 'start' });
  }
  window.addEventListener('hashchange', render); render();
})();
