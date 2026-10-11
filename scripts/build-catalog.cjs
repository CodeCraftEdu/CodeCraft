'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { loadCatalog } = require('./catalog/load-catalog.cjs');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'generated/catalog.js');

function browserSource(data) {
  // JSON remains inert content. Escape separators and closing tags for safe embedding.
  const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  return '// Generated from content/. Do not edit; run node scripts/build-catalog.cjs.\n' +
    'window.CODECRAFT_DATA = ' + json + ';\n';
}

function buildCatalog({ check = false } = {}) {
  const data = loadCatalog();
  const source = browserSource(data);
  if (check) {
    if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8').replace(/\r\n/g, '\n') !== source) {
      throw new Error('Generated catalogue is out of date. Run node scripts/build-catalog.cjs.');
    }
  } else {
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, source);
  }
  return data;
}

if (require.main === module) {
  try {
    const args = process.argv.slice(2);
    if (args.some(arg => arg !== '--check')) throw new Error('Usage: node scripts/build-catalog.cjs [--check]');
    const data = buildCatalog({ check: args.includes('--check') });
    console.log('Catalogue ' + (args.includes('--check') ? 'checked' : 'generated') + ': ' +
      Object.keys(data.modules).length + ' modules, ' + Object.keys(data.pathways).length + ' pathways.');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}

module.exports = { buildCatalog, browserSource };
