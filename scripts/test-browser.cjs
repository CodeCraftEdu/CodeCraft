'use strict';
const path = require('node:path');
const fs = require('node:fs');
const { spawnSync } = require('node:child_process');
const { writeRunSummary, writeFailureReport, artifacts } = require('./lib/browser-report.cjs');
const suites = [
  'catalog-browser',
  'student-browser',
  'web-examples-browser',
  'web-collection-browser',
  'scratch-lot3-browser',
  'teacher-browser',
];
const requested = process.argv.slice(2);
if (requested.some((name) => !suites.includes(name))) {
  console.error('Unknown suite. Choose: ' + suites.join(', '));
  process.exit(1);
}
const artifactRoot = path.resolve(
  process.env.CODECRAFT_BROWSER_ARTIFACTS || path.join(__dirname, '../browser-artifacts'),
);
fs.mkdirSync(artifactRoot, { recursive: true });
const directory = fs.mkdtempSync(path.join(artifactRoot, 'run-'));
const results = [];
const planned = requested.length ? requested : suites;
const scope =
  process.env.CODECRAFT_TEST_SCOPE ||
  (requested.length ? 'suites sélectionnées' : 'validation navigateur complète');
for (const name of planned) {
  console.log('\nBrowser suite: ' + name);
  const result = spawnSync(process.execPath, [path.resolve(__dirname, '../tests', name + '.cjs')], {
    stdio: ['ignore', 'pipe', 'pipe'],
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
    windowsHide: true,
    env: {
      ...process.env,
      CODECRAFT_BROWSER_ARTIFACTS: path.join(directory, name),
      CODECRAFT_BROWSER_SUITE: name,
    },
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  const suiteDirectory = path.join(directory, name);
  fs.mkdirSync(suiteDirectory, { recursive: true });
  fs.writeFileSync(
    path.join(suiteDirectory, 'output.log'),
    (result.stdout || '') + (result.stderr || ''),
  );
  if (
    result.status !== 0 &&
    !artifacts(suiteDirectory).some((file) => path.basename(file) === 'failure.html')
  ) {
    writeFailureReport(suiteDirectory, {
      suite: name,
      error: result.error?.stack || result.stderr || result.stdout || 'Browser process failed',
      screenshot: null,
      runtimeErrors: [],
    });
  }
  results.push({ suite: name, status: result.status ?? 1, error: result.error?.message });
  console.log('Rapport : ' + writeRunSummary(directory, results, { scope, planned }));
  if (result.error) console.error(result.error);
  if (result.status !== 0) {
    process.exitCode = result.status || 1;
    break;
  }
}
