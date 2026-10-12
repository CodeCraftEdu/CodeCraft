const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '../..');

// Each call gets its own VM and mutable data. Never cache a catalogue between tests.
function runScripts(files, context = { window: {} }) {
  for (const file of files) {
    const filename = path.join(root, file);
    vm.runInNewContext(fs.readFileSync(filename, 'utf8'), context, { filename });
  }
  return context;
}

module.exports = { runScripts };
