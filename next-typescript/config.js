const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'canonical',
    'plugin:sonarjs/recommended',
    'canonical/next',
    'prettier',
  ],
  overrides: [
    {
      extends: ['canonical/typescript'],
      files: '*.ts',
    },
    {
      extends: ['canonical/react', 'canonical/typescript'],
      files: '*.tsx',
    },
    {
      extends: ['canonical/react'],
      files: '*.jsx',
    },
    {
      extends: ['canonical/graphql'],
      files: ['*.graphql'],
    },
    // {
    //   files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    //   extends: ['plugin:testing-library/react', 'canonical/jest'],
    // },
  ],
  plugins: [
    'sonarjs',
    '@typescript-eslint',
    'prettier',
    // 'testing-library',
  ],
});
