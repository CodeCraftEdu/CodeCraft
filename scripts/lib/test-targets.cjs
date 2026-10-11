const catalog = ['catalog-build', 'content-schema'];
const student = [
  'course-entry',
  'course-navigation',
  'inline-code',
  'syntax-highlighting',
  'pathway-backgrounds',
];
const profiles = {
  web: {
    node: [
      ...catalog,
      ...student,
      'pedagogy',
      'web-foundations',
      'web-collection',
      'web-comparison',
      'flex-property-demo',
    ],
    browser: ['student-browser', 'web-examples-browser', 'web-collection-browser'],
  },
  python: {
    node: [...catalog, ...student, 'pedagogy', 'python', 'python-lot7'],
    browser: ['student-browser'],
  },
  scratch: {
    node: [...catalog, ...student, 'pedagogy', 'scratch-visual-only'],
    browser: ['student-browser', 'scratch-lot3-browser'],
  },
  robotique: {
    node: [...catalog, ...student, 'pedagogy', 'robotique'],
    browser: ['student-browser'],
  },
  gdevelop: {
    node: [...catalog, ...student, 'pedagogy', 'gdevelop'],
    browser: ['student-browser'],
  },
  prof: {
    node: [...catalog, 'pedagogy', 'teacher', 'teacher-sessions', 'teacher-student-removal'],
    browser: ['teacher-browser'],
  },
  student: {
    node: [
      ...catalog,
      ...student,
      'pedagogy',
      'scratch-visual-only',
      'flex-property-demo',
      'web-comparison',
    ],
    browser: ['catalog-browser', 'student-browser'],
  },
  tooling: { node: [...catalog, 'development-tools'], browser: ['catalog-browser'] },
};
module.exports = { profiles };
