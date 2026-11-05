export function createAiSources(block, { element, createBlock, routeId }) {
  const sources = element('details', 'ai-sources');
  sources.dataset.activityId = block.id;
  sources.tabIndex = -1;
  sources.append(element('summary', '', block.title));
  const body = element('div', 'ai-sources__body');
  for (const child of block.blocks) body.append(createBlock(child, routeId));
  sources.append(body);
  return sources;
}
