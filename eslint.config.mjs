import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'generated/**',
      'tests/archive/**',
      'resources/**',
      'browser-artifacts/**',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'none',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
  {
    files: ['*.js', 'src/**/*.mjs'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['teacher-*.js', 'pedagogy.js'],
    languageOptions: { sourceType: 'script', globals: { module: 'readonly' } },
  },
  {
    files: ['**/*.cjs', 'eslint.config.mjs'],
    languageOptions: { globals: globals.node },
  },
];
