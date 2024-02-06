module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['simple-import-sort'],
  extends: ['@rocketseat/eslint-config/react'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}
