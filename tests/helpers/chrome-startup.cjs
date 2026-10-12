const fs = require('node:fs');
const pause = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function waitForChromePort(
  filename,
  {
    readFile = () => fs.readFileSync(filename, 'utf8'),
    wait = pause,
    launchError = () => null,
    hasExited = () => false,
    attempts = 100,
  } = {},
) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    const error = launchError();
    if (error) throw error;
    if (hasExited()) throw new Error('Chrome exited before its debugging port was ready.');
    let contents;
    try {
      contents = readFile();
    } catch (error) {
      if (!['ENOENT', 'EBUSY', 'EPERM', 'EACCES'].includes(error.code)) throw error;
      lastError = error;
    }
    // Chrome can create the file before finishing its first line.
    const match = contents?.match(/^(\d+)\r?\n/);
    if (match && Number(match[1]) > 0 && Number(match[1]) <= 65535) return Number(match[1]);
    if (attempt + 1 < attempts) await wait(100);
  }
  throw new Error(
    'Chrome debugging port did not become readable. Set CHROME_PATH to its executable.',
    {
      cause: lastError,
    },
  );
}

module.exports = { waitForChromePort };
