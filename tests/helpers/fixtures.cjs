const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

function temporaryDirectory(t, prefix = 'codecraft-test-') {
  if (!/^codecraft-[a-z0-9-]+-$/.test(prefix)) throw new Error('Invalid test directory prefix');
  const parent = fs.realpathSync(os.tmpdir());
  const directory = fs.mkdtempSync(path.join(parent, prefix));
  t.after(() => {
    // Check the resolved target immediately before recursive deletion.
    if (!fs.existsSync(directory)) return;
    if (path.dirname(fs.realpathSync(directory)) !== parent)
      throw new Error('Test directory escaped its temporary parent');
    fs.rmSync(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  });
  return directory;
}

function bindGlobals(bindings) {
  const previous = new Map(
    Object.keys(bindings).map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]),
  );
  let restored = false;
  const restore = () => {
    if (restored) return;
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
    restored = true;
  };
  try {
    for (const [key, value] of Object.entries(bindings))
      Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  } catch (error) {
    restore();
    throw error;
  }
  return restore;
}

module.exports = { temporaryDirectory, bindGlobals };
