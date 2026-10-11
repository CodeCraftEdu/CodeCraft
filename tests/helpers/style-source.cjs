const fs = require('node:fs');
const path = require('node:path');
function readStyle(file) {
  const source = fs.readFileSync(file, 'utf8');
  return source.replace(/@import url\("([^"\n]+)"\);/g, (_, name) => readStyle(path.resolve(path.dirname(file), name)));
}
module.exports = { readStyle };
