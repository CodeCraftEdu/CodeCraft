const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { profiles } = require('./lib/test-targets.cjs');
const root = path.resolve(__dirname, '..');
function plan(args) {
  const [name, ...flags] = args;
  if (
    !Object.hasOwn(profiles, name) ||
    flags.some((flag) => flag !== '--node-only') ||
    new Set(flags).size !== flags.length
  )
    throw new Error(
      'Usage: npm run check:target -- <' + Object.keys(profiles).join('|') + '> [--node-only]',
    );
  const profile = profiles[name];
  return {
    name,
    node: profile.node.map((test) => path.join(root, 'tests', test + '.test.cjs')),
    browser: flags.includes('--node-only') ? [] : profile.browser,
  };
}
function run(target) {
  const commands = [
    [
      path.join(root, 'node_modules/prettier/bin/prettier.cjs'),
      '**/*.{js,mjs,cjs,json,css,yml,yaml}',
      '--check',
    ],
    [path.join(root, 'node_modules/eslint/bin/eslint.js'), '.', '--max-warnings', '0'],
    [path.join(root, 'scripts/build-catalog.cjs'), '--check'],
    ['--test', ...target.node],
  ];
  if (target.browser.length)
    commands.push([path.join(root, 'scripts/test-browser.cjs'), ...target.browser]);
  console.log(
    'Vérification ciblée : ' + target.name + (target.browser.length ? '' : ' (Node uniquement)'),
  );
  for (const file of target.node)
    if (!fs.existsSync(file)) throw new Error('Missing test: ' + file);
  for (const args of commands) {
    const result = spawnSync(process.execPath, args, {
      cwd: root,
      windowsHide: true,
      stdio: 'inherit',
      env: { ...process.env, CODECRAFT_TEST_SCOPE: target.name },
    });
    if (result.error) throw result.error;
    if (result.status !== 0) return result.status || 1;
  }
  console.log('Contrôles ciblés réussis. Avant livraison : npm run check.');
  return 0;
}
if (require.main === module) {
  try {
    process.exitCode = run(plan(process.argv.slice(2)));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
module.exports = { plan };
