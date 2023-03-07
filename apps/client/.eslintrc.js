module.exports = {
  extends: [
    '../../packages/tools/.eslintrc.js', // path to your shared eslint config
    'next',
    'airbnb-base',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
