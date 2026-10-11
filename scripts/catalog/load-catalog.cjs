'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { validateCatalog } = require('./validate-catalog.cjs');
const { validateSource } = require('./validate-schema.cjs');
const defaultContentRoot = path.resolve(__dirname, '../../content');

function loadCatalog(contentRoot = defaultContentRoot) {
  const base = fs.realpathSync(contentRoot);
  const used = new Set(['manifest.json']);
  function read(file, kind) {
    if (typeof file !== 'string' || !/^[a-z0-9/-]+\.json$/.test(file)) {
      throw new Error('Invalid content filename: ' + file);
    }
    if (used.has(file)) throw new Error('Content file listed twice: ' + file);
    used.add(file);
    const target = fs.realpathSync(path.resolve(base, file));
    if (!target.startsWith(base + path.sep))
      throw new Error('Content file outside content directory: ' + file);
    try {
      const value = JSON.parse(fs.readFileSync(target, 'utf8'));
      validateSource(kind, value, file);
      return value;
    } catch (error) {
      throw new Error(file + ': ' + error.message, { cause: error });
    }
  }
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(path.join(base, 'manifest.json'), 'utf8'));
  } catch (error) {
    throw new Error('manifest.json: ' + error.message, { cause: error });
  }
  if (manifest.schemaVersion !== 1) throw new Error('Unsupported catalogue schema version.');
  validateSource('manifest', manifest, 'manifest.json');
  const catalogKeys = [
    'site',
    'scratchProjects',
    'moduleTypes',
    'domains',
    'skills',
    'aliases',
    'teacher',
  ];
  if (
    !manifest.catalog ||
    Object.keys(manifest.catalog).length !== catalogKeys.length ||
    catalogKeys.some((key) => !Object.hasOwn(manifest.catalog, key))
  )
    throw new Error('Invalid catalogue file registry.');
  const common = Object.fromEntries(
    catalogKeys.map((key) => [
      key,
      read(
        manifest.catalog[key],
        { moduleTypes: 'module-types', scratchProjects: 'scratch-projects' }[key] || key,
      ),
    ]),
  );
  function collection(entries, folder) {
    if (!Array.isArray(entries)) throw new Error('Missing ' + folder + ' registry.');
    const result = {};
    for (const entry of entries) {
      if (!entry || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id))
        throw new Error('Invalid ' + folder + ' identifier.');
      if (Object.hasOwn(result, entry.id))
        throw new Error('Duplicate ' + folder + ' identifier: ' + entry.id);
      if (
        typeof entry.file !== 'string' ||
        !entry.file.startsWith(folder + '/') ||
        path.posix.basename(entry.file) !== entry.id + '.json'
      )
        throw new Error('Filename must match identifier: ' + entry.id);
      const value = read(entry.file, folder === 'modules' ? 'module' : 'pathway');
      if (
        folder === 'modules' &&
        entry.file !== 'modules/' + value.domainId + '/' + entry.id + '.json'
      ) {
        throw new Error('Module stored in the wrong domain: ' + entry.id);
      }
      result[entry.id] = value;
    }
    return result;
  }
  const data = {
    schemaVersion: manifest.schemaVersion,
    site: common.site,
    scratchProjects: common.scratchProjects,
    moduleTypes: common.moduleTypes,
    domains: common.domains,
    skills: common.skills,
    modules: collection(manifest.modules, 'modules'),
    pathways: collection(manifest.pathways, 'pathways'),
    aliases: common.aliases,
    teacher: common.teacher,
  };
  function checkInventory(folder, prefix = '') {
    for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
      const file = prefix + entry.name;
      if (entry.isDirectory()) checkInventory(path.join(folder, entry.name), file + '/');
      else if (entry.name.endsWith('.json') && !used.has(file))
        throw new Error('Unregistered content file: ' + file);
    }
  }
  checkInventory(base);
  validateCatalog(data);
  return data;
}

module.exports = { loadCatalog, defaultContentRoot };
