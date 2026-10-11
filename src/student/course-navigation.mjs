export function createCourseNavigation(
  sequence,
  sequenceId,
  currentId,
  { data, element, link, moduleUrl, studentTitle },
) {
  const sidebar = element('aside', 'course-sidebar');
  const toggle = element('button', 'course-sidebar__toggle', 'Dans ce parcours');
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', 'course-contents');
  const contents = element('nav', 'course-sidebar__contents');
  contents.id = 'course-contents';
  contents.setAttribute('aria-label', 'Sommaire du parcours');
  const overview = element('details', 'course-sidebar__overview');
  overview.append(
    element('summary', '', 'Objectif du parcours'),
    element('p', '', sequence.objective),
  );
  contents.append(overview);
  const grouped = new Set();
  function addModules(ids, title) {
    if (!ids.length) return;
    const group = element('div', 'course-sidebar__group');
    if (title) group.append(element('h2', 'course-sidebar__group-title', title));
    const list = element('ol', 'course-sidebar__list');
    ids.forEach((moduleId) => {
      grouped.add(moduleId);
      const row = element('li');
      const entry = link('', moduleUrl(moduleId, sequenceId), 'course-sidebar__link');
      entry.append(element('span', '', studentTitle(data.modules[moduleId].title)));
      if (moduleId === currentId) entry.setAttribute('aria-current', 'page');
      row.append(entry);
      list.append(row);
    });
    group.append(list);
    contents.append(group);
  }
  (sequence.chapters || sequence.stages || []).forEach((stage, index) => {
    addModules(
      sequence.moduleIds.filter(
        (moduleId) => stage.moduleIds.includes(moduleId) && !grouped.has(moduleId),
      ),
      (sequence.chapters ? 'Partie ' + (index + 1) + ' · ' : '') + stage.title,
    );
  });
  addModules(sequence.moduleIds.filter((moduleId) => !grouped.has(moduleId)));
  sidebar.append(toggle, contents);
  const desktop = window.matchMedia('(min-width: 1200px)');
  let expanded = false;
  function sync() {
    contents.hidden = !desktop.matches && !expanded;
    toggle.setAttribute('aria-expanded', String(!contents.hidden));
  }
  toggle.addEventListener('click', () => {
    expanded = !expanded;
    sync();
  });
  desktop.addEventListener('change', sync);
  const dispose = () => desktop.removeEventListener('change', sync);
  sync();
  // Garder la leçon active dans la fenêtre du sommaire sans déplacer le cours.
  if (desktop.matches)
    requestAnimationFrame(() => {
      if (!contents.isConnected) return;
      const active = contents.querySelector('[aria-current="page"]');
      if (active) {
        const bounds = contents.getBoundingClientRect();
        const current = active.getBoundingClientRect();
        if (current.bottom > bounds.bottom || current.top < bounds.top) {
          contents.scrollTop += current.top - bounds.top - contents.clientHeight / 2;
        }
      }
    });
  return { node: sidebar, dispose };
}
