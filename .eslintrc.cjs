module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },

  env: {
    browser: true,
    node: true,
    es6: true
  },

  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-redeclare': 'off',
    'prefer-rest-params': 'off'
  },
  ignorePatterns: ['*.d.ts']
}
