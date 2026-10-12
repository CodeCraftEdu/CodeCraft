const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const root = path.join(__dirname, '..');
const css = require('./helpers/style-source.cjs').readStyle(path.join(root, 'student-lowpoly.css'));

test('images CSS : chemins résolus depuis leur feuille de style, tous les fichiers existent', () => {
  let count = 0;
  function visit(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (entry.name.endsWith('.css')) {
        const source = fs.readFileSync(file, 'utf8');
        for (const match of source.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)) {
          const address = match[1];
          if (/^(?:[a-z]+:|\/\/|#)/i.test(address)) continue;
          const target = path.resolve(path.dirname(file), address.split(/[?#]/)[0]);
          assert.ok(
            fs.existsSync(target) && fs.statSync(target).isFile(),
            `${path.relative(root, file)}: ${address}`,
          );
          count++;
        }
      }
    }
  }
  visit(path.join(root, 'styles'));
  assert.ok(count > 0);
});

test('lecture neutre et accents conservés après rééquilibrage des parcours', () => {
  assert.match(css, /--lesson-ink: var\(--ink\);/);
  assert.match(css, /--lesson-muted: #56525c;/);
  assert.match(
    css,
    /--lesson-panel: color-mix\(in srgb, var\(--route-soft\) 18%, var\(--paper\)\);/,
  );
  assert.match(css, /\.route-card-title\s*\{\s*color: var\(--ink\); font-weight: 700;/);
  assert.match(css, /:not\(\[data-lesson-layout\]\) \.lesson-intro\s*\{\s*background: color-mix/);
  assert.match(css, /color: var\(--ink\); background: var\(--lesson-panel\);/);
  assert.match(css, /\.lesson-text-link[^}]*color: var\(--route-dark\)/);
  assert.doesNotMatch(css, /--lesson-ink: #283c60|--lesson-ink: #254657/);
});

test('fonds continus adaptés aux domaines et variantes Web, sans essai isolé RB01', () => {
  for (const [domain, color] of [
    ['robotique', '#eaf0ec'],
    ['python', '#edf1f7'],
    ['jeux-video', '#f3eee7'],
    ['web', '#edf1e9'],
  ]) {
    assert.ok(
      css
        .split('\n')
        .some(
          (line) =>
            line.includes(`data-domain="${domain}"`) && line.includes(`--domain-canvas: ${color}`),
        ),
      domain,
    );
  }
  for (const [route, color] of [
    ['fondations', '#edf1f7'],
    ['avances', '#f0ecf5'],
    ['rattrapage', '#f5eee7'],
  ]) {
    assert.ok(
      css.includes(`[data-domain="web"][data-route="${route}"] { --domain-canvas: ${color}; }`),
      route,
    );
  }
  assert.match(
    css,
    /body\.student-lowpoly\[data-domain\]:not\(\.student-home\)\s*\{[^}]*background: var\(--canvas\);/,
  );
  assert.doesNotMatch(css, /data-lesson-id|robotique-lesson-ambience/);
  assert.match(
    css,
    /@media print\s*\{\s*body\.student-lowpoly\[data-domain\]:not\(\.student-home\) \{ background: white;/,
  );
});
