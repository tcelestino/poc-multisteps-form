module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  rules: {
    'object-curly-newline': ['error', { consistent: true }],
    'max-len': ['error', { code: 140, ignoreUrls: true, ignoreStrings: true }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
};
