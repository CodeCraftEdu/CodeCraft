'use strict';
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const suites = ['catalog-browser', 'student-browser', 'web-examples-browser', 'web-collection-browser', 'scratch-lot3-browser', 'teacher-browser'];
const requested = process.argv.slice(2);
if (requested.some(name => !suites.includes(name))) {
  console.error('Unknown suite. Choose: ' + suites.join(', '));
  process.exit(1);
}
for (const name of requested.length ? requested : suites) {
  console.log('\nBrowser suite: ' + name);
  const result = spawnSync(process.execPath, [path.resolve(__dirname, '../tests', name + '.cjs')], { stdio: 'inherit', windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
