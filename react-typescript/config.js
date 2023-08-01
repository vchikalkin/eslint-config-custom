module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  parser: '@typescript-eslint/parser',
  extends: ['canonical', 'plugin:sonarjs/recommended', 'prettier'],
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
  ],
  plugins: ['sonarjs', '@typescript-eslint', 'prettier'],
};
