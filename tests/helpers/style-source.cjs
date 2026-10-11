const fs = require('node:fs');
const path = require('node:path');
function readStyle(file) {
  const source = fs.readFileSync(file, 'utf8');
  const expanded = source.replace(/@import url\(["']([^"'\n]+)["']\);/g, (_, name) =>
    readStyle(path.resolve(path.dirname(file), name)),
  );
  // Assertions concern CSS rules, independently of the formatter's line wrapping.
  return expanded
    .replace(/\s+/g, ' ')
    .replace(/'/g, '"')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/}\s*/g, '}\n');
}
module.exports = { readStyle };
