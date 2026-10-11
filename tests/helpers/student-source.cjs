const fs = require('node:fs');
const path = require('node:path');
// Compatibility adapter for focused VM tests during the migration to module APIs.
// Browser tests exercise the actual imports and dependency injection.
const read = name => {
  const source = fs.readFileSync(path.resolve(__dirname, '../../src/student/', name + '.mjs'), 'utf8');
  return source.slice(source.indexOf('\n') + 1, source.lastIndexOf('\n  return {'));
};
const blocks = read('blocks');
module.exports = read('text') + read('code') +
  blocks.slice(blocks.indexOf('  function createHint'), blocks.indexOf('  function createLesson')) +
  read('demonstrations') + blocks.slice(blocks.indexOf('  function createLesson')) + read('routes') + read('router');
