export function createBlockRenderer({
  data,
  pedagogy,
  checks,
  element,
  appendInlineText,
  createCode,
  link,
  moduleUrl,
  demonstrations,
}) {
  const {
    createIllustration,
    createFlexDisplayDemo,
    createFlexPropertyDemo,
    createWebComparison,
    createScratchVisual,
    createCoordinateDiagram,
    createCodeDiagram,
  } = demonstrations;
  function createHint(item) {
    const details = element('details', 'hint');
    details.append(element('summary', '', 'Voir un indice'));
    if (item.hint) details.append(element('p', '', item.hint));
    (item.hints || []).forEach((text, index) => {
      const step = element('details', 'syntax');
      const labels = ['Où regarder', 'Cibler la difficulté', 'Comparer', 'Corriger pas à pas'];
      step.append(
        element('summary', '', labels[index] || 'Aide supplémentaire'),
        element('p', '', text),
      );
      details.append(step);
    });

    if (item.syntax) {
      const syntax = element('details', 'syntax');
      syntax.append(element('summary', '', 'Afficher la syntaxe complète'));
      syntax.append(createCode(item.syntax));
      details.append(syntax);
    }
    return details;
  }

  function createTasks(block, routeId) {
    const section = element('section', 'content-card');
    section.append(element('h2', 'section-title', block.title));
    if (block.intro) section.append(element('p', 'section-intro', block.intro));

    const list = element('ol', 'task-list');
    block.items.forEach((item) => {
      const row = element('li', 'task-item');
      row.dataset.taskId = item.id;
      const label = element('label', 'task-label');
      const checkbox = element('input');
      checkbox.type = 'checkbox';
      const key = `${routeId}:${item.id}`;
      checkbox.checked = checks.has(key);
      checkbox.addEventListener('change', () =>
        checkbox.checked ? checks.add(key) : checks.delete(key),
      );

      const text = element(item.code ? 'code' : 'span', 'task-text', item.text);
      label.append(checkbox, text);
      row.append(label);
      if (item.hint || item.hints) row.append(createHint(item));
      list.append(row);
    });
    section.append(list);
    return section;
  }

  function createChecklist(block, routeId) {
    const section = element('section', 'content-card');
    section.append(element('h2', 'section-title', block.title));
    const list = element('ul', 'check-list');
    block.items.forEach((item) => {
      const row = element('li', 'check-item');
      row.dataset.taskId = item.id;
      const label = element('label', 'task-label');
      const checkbox = element('input');
      checkbox.type = 'checkbox';
      const key = `${routeId}:${item.id}`;
      checkbox.checked = checks.has(key);
      checkbox.addEventListener('change', () =>
        checkbox.checked ? checks.add(key) : checks.delete(key),
      );
      label.append(checkbox, element('span', 'task-text', item.text));
      row.append(label);
      list.append(row);
    });
    section.append(list);
    return section;
  }

  function createCallout(block) {
    const section = element(
      'section',
      block.presentation === 'compact'
        ? 'lesson-note'
        : `callout callout--${block.tone || 'neutral'}`,
    );
    section.append(element('h2', 'section-title', block.title));
    const paragraph = element('p');
    const moduleLink = block.moduleLink;
    const position = moduleLink ? block.text.indexOf(moduleLink.text) : -1;
    if (position >= 0) {
      appendInlineText(paragraph, block.text.slice(0, position));
      const anchor = link(moduleLink.text, moduleUrl(moduleLink.moduleId), '');
      if (moduleLink.newTab) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }
      paragraph.append(anchor);
      appendInlineText(paragraph, block.text.slice(position + moduleLink.text.length));
    } else {
      appendInlineText(paragraph, block.text);
    }
    section.append(paragraph);
    if (block.illustration) section.append(createIllustration(block.illustration));
    return section;
  }

  function createLesson(block) {
    const section = element('section', 'content-card');
    section.append(element('h2', 'section-title', block.title));
    const visual = block.visualScript || block.coordinateDiagram;
    if (visual && block.shortSteps) {
      const steps = element('ol', 'scratch-quick-steps');
      block.shortSteps.forEach((text) => steps.append(element('li', '', text)));
      section.append(steps);
    } else if (block.actionSteps) {
      const steps = element('ol', 'lesson-actions');
      block.actionSteps.forEach((step) => {
        const action = element('li', 'lesson-action');
        const heading = element('h3', 'lesson-action__title');
        heading.append(document.createTextNode(step.title));
        action.append(heading, element('p', '', block.paragraphs[step.paragraphIndex]));
        if (step.showCode) {
          action.append(
            element('p', 'lesson-action__label', 'Dans l’éditeur'),
            createCode(block.code),
          );
        }
        if (step.output !== undefined) {
          action.append(
            element('p', 'lesson-action__label', 'Résultat dans la console'),
            element('pre', 'lesson-action__output', step.output),
          );
        }
        steps.append(action);
      });
      section.append(steps);
    } else
      (block.paragraphs || []).forEach((paragraph) => section.append(element('p', '', paragraph)));
    if (block.codeDiagram) section.append(createCodeDiagram(block.codeDiagram));
    if (block.illustration) {
      section.append(createIllustration(block.illustration));
    }
    if (block.downloads?.length) {
      const downloads = element('ul', 'value-list');
      block.downloads.forEach((resource) => {
        const item = element('li');
        const anchor = link(resource.label, resource.path, 'lesson-text-link');
        anchor.download = resource.filename;
        item.append(anchor);
        downloads.append(item);
      });
      section.append(downloads);
    }
    if (block.coordinateDiagram) section.append(createCoordinateDiagram(block.coordinateDiagram));
    if (block.visualScript) {
      section.append(createScratchVisual(block.visualScript));
    } else if (block.code && !block.actionSteps)
      section.append(
        createCode(
          block.code,
          block.filename || block.title?.match(/\b[\w-]+\.(?:html|css|js|py)\b/)?.[0],
        ),
      );
    if (block.activityLink) {
      const pathwayId = new URLSearchParams(window.location.hash.split('?')[1]).get('parcours');
      const paragraph = element('p');
      paragraph.append(
        link(
          block.activityLink.label,
          pedagogy.url(block.activityLink, pathwayId),
          'lesson-text-link',
        ),
      );
      section.append(paragraph);
    }
    if (visual && block.shortSteps && block.paragraphs?.length) {
      const details = element('details', 'hint scratch-explanations');
      details.append(element('summary', '', 'Explications et repères supplémentaires'));
      block.paragraphs.forEach((text) => details.append(element('p', '', text)));
      section.append(details);
    }
    if (block.values && block.values.length) {
      section.append(element('h3', 'subheading', block.valuesTitle));
      const values = element('ul', 'value-list');
      block.values.forEach((value) => values.append(element('li', '', value)));
      section.append(values);
    }
    if (block.demonstration?.type === 'flex-display') {
      section.append(createFlexDisplayDemo(block.demonstration));
    }
    if (block.demonstration?.type === 'flex-property') {
      section.append(createFlexPropertyDemo(block.demonstration));
    }
    if (block.demonstration?.type === 'web-comparison') {
      section.append(createWebComparison(block.demonstration));
    }
    return section;
  }

  function createDetails(block, routeId) {
    const details = element('details', 'content-card disclosure');
    details.append(element('summary', 'section-title', block.title));
    const body = element('div', 'disclosure-body');
    block.blocks.forEach((child) => body.append(createBlock(child, routeId)));
    details.append(body);
    return details;
  }

  function createBlock(block, routeId) {
    const result = renderBlock(block, routeId);
    if (block.type === 'lesson') result.classList.add('lesson-card--reading');
    if (block.type === 'tasks' || block.type === 'checklist')
      result.classList.add('lesson-card--practice');
    if (block.id) {
      result.dataset.activityId = block.id;
      result.tabIndex = -1;
    }
    return result;
  }

  function renderBlock(block, routeId) {
    if (block.type === 'reference') {
      const source = data.modules[block.moduleId];
      return createBlock(
        source.blocks.find((item) => item.id === block.blockId),
        block.moduleId,
      );
    }
    if (block.type === 'tasks') return createTasks(block, routeId);
    if (block.type === 'checklist') return createChecklist(block, routeId);
    if (block.type === 'callout') return createCallout(block);
    if (block.type === 'lesson') return createLesson(block);
    if (block.type === 'details') return createDetails(block, routeId);
    if (block.type === 'resource')
      return pedagogy.resource(data.modules[routeId], block.resourceId);
    return element('div');
  }

  return { createBlock };
}
