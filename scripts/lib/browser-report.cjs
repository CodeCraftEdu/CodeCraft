const fs = require('node:fs');
const path = require('node:path');
const escape = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );
const shell = (title, body) =>
  `<!doctype html><html lang="fr"><meta charset="utf-8"><title>${escape(title)}</title><style>body{font:16px system-ui;margin:32px;max-width:1100px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f3f3f3;padding:16px}img{max-width:100%;border:1px solid #aaa}li{margin:12px 0}a{color:#2447a0}</style><h1>${escape(title)}</h1>${body}</html>`;
function writeFailureReport(directory, details) {
  fs.mkdirSync(directory, { recursive: true });
  const report = { schemaVersion: 1, time: new Date().toISOString(), ...details };
  fs.writeFileSync(path.join(directory, 'failure.json'), JSON.stringify(report, null, 2) + '\n');
  const image = report.screenshot
    ? `<p><a href="failure.png">Capture au moment de l’échec</a></p><img src="failure.png" alt="Page au moment de l’échec">`
    : '<p>Capture indisponible : le navigateur n’était pas accessible.</p>';
  fs.writeFileSync(
    path.join(directory, 'failure.html'),
    shell(
      'Échec : ' + report.suite,
      `<p>Page : <code>${escape(report.url || 'Inconnue')}</code></p><p>Titre : ${escape(report.title)} — Fenêtre : ${escape(JSON.stringify(report.viewport))}</p><pre>${escape(report.error)}</pre>${image}<h2>Erreurs du navigateur</h2><pre>${escape(JSON.stringify(report.runtimeErrors || [], null, 2))}</pre>`,
    ),
  );
  return path.join(directory, 'failure.html');
}
function artifacts(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return entry.name === 'profile' ? [] : artifacts(file);
    return entry.name === 'failure.html' ||
      entry.name === 'output.log' ||
      entry.name.endsWith('.png')
      ? [file]
      : [];
  });
}
function writeRunSummary(
  directory,
  results,
  { scope = 'suites sélectionnées', planned = results.map((result) => result.suite) } = {},
) {
  const root = path.dirname(directory);
  const relative = (file) =>
    path.relative(root, file).split(path.sep).map(encodeURIComponent).join('/');
  fs.writeFileSync(
    path.join(directory, 'summary.json'),
    JSON.stringify({ schemaVersion: 1, scope, planned, results }, null, 2) + '\n',
  );
  const remaining = planned.filter((suite) => !results.some((result) => result.suite === suite));
  const body =
    `<p>Périmètre : ${escape(scope)}</p><p>Exécution : ${escape(path.basename(directory))}</p>${remaining.length ? '<p>Non exécutées : ' + escape(remaining.join(', ')) + '</p>' : ''}<ul>` +
    results
      .map(
        (result) =>
          `<li><strong>${escape(result.suite)} : ${result.status === 0 ? 'réussi' : 'échec'}</strong><ul>${artifacts(
            path.join(directory, result.suite),
          )
            .map(
              (file) => `<li><a href="${relative(file)}">${escape(path.basename(file))}</a></li>`,
            )
            .join('')}</ul></li>`,
      )
      .join('') +
    '</ul>';
  fs.writeFileSync(path.join(root, 'index.html'), shell('Vérifications CodeCraft', body));
  // Keep a self-contained entry point with each archived run as well.
  const archivedBody = body.replaceAll(
    'href="' + encodeURIComponent(path.basename(directory)) + '/',
    'href="',
  );
  fs.writeFileSync(
    path.join(directory, 'index.html'),
    shell('Vérifications CodeCraft', archivedBody),
  );
  return path.join(root, 'index.html');
}
module.exports = { writeFailureReport, writeRunSummary, artifacts };
