const fs = require('node:fs');
const path = require('node:path');

const publicPath =
  /^(?:index\.html|prof(?:-conducteur-historique)?\.html|[a-z][a-z-]*\.(?:js|css)|generated\/catalog\.js|src\/student\/[a-z-]+\.mjs|styles\/[a-z/-]+\.css|(?:images|assets|resources)\/[a-zA-Z0-9_./-]+\.(?:png|svg|jpg|jpeg|webp|gif|zip|txt|py))$/;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.zip': 'application/zip',
  '.txt': 'text/plain; charset=utf-8',
  '.py': 'text/plain; charset=utf-8',
};

function publicFile(root, pathname) {
  let name;
  try {
    name = decodeURIComponent(pathname).replace(/^\//, '') || 'index.html';
  } catch {
    return null;
  }
  if (
    !publicPath.test(name) ||
    name.split('/').some((part) => part === '..' || part.startsWith('.'))
  )
    return null;
  try {
    const base = fs.realpathSync(root);
    const file = fs.realpathSync(path.join(base, name));
    if (!file.startsWith(base + path.sep) || !fs.statSync(file).isFile()) return null;
    return { file, type: mimeTypes[path.extname(file)] };
  } catch {
    return null;
  }
}
module.exports = { publicFile };
