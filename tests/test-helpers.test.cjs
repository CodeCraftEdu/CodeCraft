const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { runScripts } = require('./helpers/script-context.cjs');
const { temporaryDirectory, bindGlobals } = require('./helpers/fixtures.cjs');
const { waitForChromePort } = require('./helpers/chrome-startup.cjs');

test('démarrage Chrome : fichier absent, verrouillé ou incomplet puis port lisible', async () => {
  const busy = Object.assign(new Error('File locked'), { code: 'EBUSY' });
  const values = [
    Object.assign(new Error('Not created'), { code: 'ENOENT' }),
    busy,
    '',
    '49',
    '49123\r\n/devtools/browser/test',
  ];
  let waits = 0;
  const port = await waitForChromePort('fixture', {
    readFile() {
      const value = values.shift();
      if (value instanceof Error) throw value;
      return value;
    },
    wait: async () => {
      waits++;
    },
  });
  assert.equal(port, 49123);
  assert.equal(waits, 4);
});

test('démarrage Chrome : attente bornée et erreurs réelles conservées', async () => {
  const busy = Object.assign(new Error('File locked'), { code: 'EBUSY' });
  let reads = 0;
  await assert.rejects(
    waitForChromePort('fixture', {
      attempts: 3,
      readFile() {
        reads++;
        throw busy;
      },
      wait: async () => {},
    }),
    (error) => error.cause === busy && /did not become readable/.test(error.message),
  );
  assert.equal(reads, 3);
  const fatal = Object.assign(new Error('Broken filesystem'), { code: 'EIO' });
  await assert.rejects(
    waitForChromePort('fixture', {
      readFile() {
        throw fatal;
      },
    }),
    (error) => error === fatal,
  );
  await assert.rejects(
    waitForChromePort('fixture', { launchError: () => fatal }),
    (error) => error === fatal,
  );
  await assert.rejects(waitForChromePort('fixture', { hasExited: () => true }), /Chrome exited/);
});

test('catalogues simulés indépendants : une mutation ne contamine pas le scénario suivant', () => {
  const first = runScripts(['generated/catalog.js', 'pedagogy.js'], {
    window: {},
    URLSearchParams,
  });
  const before = JSON.stringify(first.window.CODECRAFT_DATA);
  first.window.CODECRAFT_DATA.modules['html-images'].title = 'Modified fixture';
  const second = runScripts(['generated/catalog.js', 'pedagogy.js'], {
    window: {},
    URLSearchParams,
  });
  assert.equal(JSON.stringify(second.window.CODECRAFT_DATA), before);
  assert.notEqual(first.window.CodeCraftPedagogy, second.window.CodeCraftPedagogy);
});

test('variables simulées : restauration des accesseurs et nettoyage après une exception', () => {
  const key = '__codecraftFixtureGlobal';
  const original = Object.getOwnPropertyDescriptor(globalThis, key);
  Object.defineProperty(globalThis, key, { configurable: true, get: () => 'original' });
  try {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, key);
    assert.throws(() => {
      const restore = bindGlobals({ [key]: 'fixture', __codecraftFixtureMissing: true });
      try {
        assert.equal(globalThis[key], 'fixture');
        const restoreNested = bindGlobals({ [key]: 'nested' });
        try {
          assert.equal(globalThis[key], 'nested');
        } finally {
          restoreNested();
        }
        assert.equal(globalThis[key], 'fixture');
        throw new Error('Scenario failed');
      } finally {
        restore();
        restore();
      }
    }, /Scenario failed/);
    assert.deepEqual(Object.getOwnPropertyDescriptor(globalThis, key), descriptor);
    assert.equal(Object.hasOwn(globalThis, '__codecraftFixtureMissing'), false);
  } finally {
    if (original) Object.defineProperty(globalThis, key, original);
    else delete globalThis[key];
  }
});

test('dossiers fictifs : nettoyage automatique complet et scénarios isolés', async (t) => {
  let first;
  await t.test('premier scénario', (child) => {
    first = temporaryDirectory(child);
    fs.mkdirSync(path.join(first, 'nested'));
    fs.writeFileSync(path.join(first, 'nested', 'private.json'), '{}');
    const other = temporaryDirectory(child);
    assert.notEqual(first, other);
    assert.deepEqual(fs.readdirSync(other), []);
    assert.throws(() => temporaryDirectory(child, '../outside-'), /Invalid test directory prefix/);
  });
  assert.equal(fs.existsSync(first), false);
});
