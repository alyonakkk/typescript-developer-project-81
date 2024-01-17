module.exports = {
  plugins: [
    '@typescript-eslint',
  ],

  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'max-len': ['error', { code: 150 }],
    'no-restricted-exports': ['error', { restrictDefaultExports: { direct: true } }],
  },
  overrides: [
    {
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      files: ['*.ts', '*tsx'],
      rules: {},
    },
  ],
};
