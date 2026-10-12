export function createSupportPanel(item, element) {
  // Aucun encart générique : conserver uniquement les consignes propres au module.
  if (!item.stuck && !item.bonus) return null;
  const grid = element('section', 'support-grid');
  if (item.stuck) {
    const stuck = element('div', 'support-card support-card--stuck');
    stuck.append(element('h2', 'section-title', item.stuck.title));
    const routine = element('ol', 'routine-list');
    item.stuck.steps.forEach((step) => routine.append(element('li', '', step)));
    stuck.append(routine);
    grid.append(stuck);
  }
  if (item.bonus) {
    const done = element('details', 'support-card support-card--done');
    done.append(element('summary', '', 'Pour aller plus loin'));
    done.append(element('p', '', item.bonus));
    grid.append(done);
  }
  return grid;
}
