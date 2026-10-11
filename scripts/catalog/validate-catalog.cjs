'use strict';

function validateCatalog(data) {
  const fail = (location, message) => {
    throw new Error(location + ': ' + message);
  };
  const object = (value, location) => {
    if (!value || typeof value !== 'object' || Array.isArray(value))
      fail(location, 'expected an object');
  };
  const exists = (collection, id, location) => {
    if (typeof id !== 'string' || !Object.hasOwn(collection, id))
      fail(location, 'unknown identifier ' + id);
  };
  const array = (value, location) => {
    if (!Array.isArray(value)) fail(location, 'expected an array');
  };
  for (const key of [
    'site',
    'scratchProjects',
    'moduleTypes',
    'domains',
    'skills',
    'modules',
    'pathways',
    'aliases',
    'teacher',
  ]) {
    object(data[key], key);
  }
  const blockIndexes = {};
  for (const [id, module] of Object.entries(data.modules)) {
    const location = 'modules.' + id;
    object(module, location);
    if (typeof module.title !== 'string' || !module.title.trim()) fail(location, 'missing title');
    exists(data.domains, module.domainId, location + '.domainId');
    exists(data.moduleTypes, module.type, location + '.type');
    array(module.skillIds, location + '.skillIds');
    module.skillIds.forEach((skill) => exists(data.skills, skill, location + '.skillIds'));
    const index = new Map();
    function blocks(entries, scope) {
      array(entries, scope);
      for (const block of entries) {
        object(block, scope);
        if (typeof block.id !== 'string' || !block.id || index.has(block.id))
          fail(scope, 'missing or duplicate block identifier ' + block.id);
        if (typeof block.type !== 'string') fail(scope + '.' + block.id, 'missing block type');
        index.set(block.id, block);
        if (block.blocks) blocks(block.blocks, scope + '.' + block.id + '.blocks');
        if (block.items) {
          array(block.items, scope + '.' + block.id + '.items');
          const ids = new Set();
          for (const item of block.items) {
            if (block.type === 'tasks' && !item.id)
              fail(scope + '.' + block.id, 'missing task identifier');
            if (item.id && ids.has(item.id))
              fail(scope + '.' + block.id, 'duplicate item identifier ' + item.id);
            if (item.id) ids.add(item.id);
          }
        }
      }
    }
    blocks(module.blocks, location + '.blocks');
    blockIndexes[id] = index;
    if (module.scratchProjectId)
      exists(data.scratchProjects, module.scratchProjectId, location + '.scratchProjectId');
    const resources = new Set();
    for (const resource of module.resources || []) {
      if (!resource.id || resources.has(resource.id))
        fail(location, 'missing or duplicate resource identifier');
      resources.add(resource.id);
    }
    for (const block of index.values()) {
      if (block.type === 'resource' && !resources.has(block.resourceId))
        fail(location + '.' + block.id, 'unknown resource ' + block.resourceId);
    }
  }
  for (const [id, pathway] of Object.entries(data.pathways)) {
    const location = 'pathways.' + id;
    object(pathway, location);
    exists(data.domains, pathway.domainId, location + '.domainId');
    array(pathway.moduleIds, location + '.moduleIds');
    if (new Set(pathway.moduleIds).size !== pathway.moduleIds.length)
      fail(location, 'duplicate module');
    for (const moduleId of pathway.moduleIds) {
      exists(data.modules, moduleId, location + '.moduleIds');
      if (data.modules[moduleId].domainId !== pathway.domainId)
        fail(location, 'module belongs to a different domain: ' + moduleId);
    }
    for (const group of [...(pathway.chapters || []), ...(pathway.stages || [])]) {
      for (const moduleId of group.moduleIds || [])
        if (!pathway.moduleIds.includes(moduleId))
          fail(location, 'group references a module outside this pathway: ' + moduleId);
    }
  }
  for (const [id, domain] of Object.entries(data.domains)) {
    for (const pathwayId of domain.pathwayIds || []) {
      exists(data.pathways, pathwayId, 'domains.' + id);
      if (data.pathways[pathwayId].domainId !== id)
        fail('domains.' + id, 'pathway belongs to a different domain');
    }
    for (const moduleId of domain.diagnosticModuleIds || [])
      exists(data.modules, moduleId, 'domains.' + id);
  }
  function references(value, location) {
    if (!value || typeof value !== 'object') return;
    if (typeof value.skillId === 'string')
      exists(data.skills, value.skillId, location + '.skillId');
    if (typeof value.moduleId === 'string') {
      exists(data.modules, value.moduleId, location + '.moduleId');
      if (value.blockId) {
        const block = blockIndexes[value.moduleId].get(value.blockId);
        if (!block) fail(location, 'unknown block ' + value.blockId + ' in ' + value.moduleId);
        if (value.itemId && !block.items?.some((item) => item.id === value.itemId))
          fail(location, 'unknown item ' + value.itemId);
      } else if (value.itemId) fail(location, 'item reference requires a block identifier');
    }
    for (const [key, entry] of Object.entries(value)) references(entry, location + '.' + key);
  }
  references(data, 'catalogue');
  for (const [alias, route] of Object.entries(data.aliases)) {
    const match = typeof route === 'string' && route.match(/^(module|parcours|domaine)\/(.+)$/);
    if (!match) fail('aliases.' + alias, 'invalid route');
    exists(
      { module: data.modules, parcours: data.pathways, domaine: data.domains }[match[1]],
      match[2],
      'aliases.' + alias,
    );
  }
  return data;
}

module.exports = { validateCatalog };
