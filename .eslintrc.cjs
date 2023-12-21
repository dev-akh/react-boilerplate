module.exports = {
  root: true,
  env: { 
    browser: true,
    es2021: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': [
      'error', 
      { 'allow': ['warn', 'error'] }
    ],
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { FunctionDeclaration: { parameters: 'first' } }],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
  },
}
