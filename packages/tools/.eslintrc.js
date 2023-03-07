module.exports = {
  env: {
    es6: true,
    node: true,
  },
  globals: {
    React: 'writable',
    FormData: 'readonly',
    FileReader: 'readonly',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    quotes: ['error', 'single', 'avoid-escape'],
    curly: ['error', 'all'],
    'import/extensions': 'off',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 130,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['error', 'info', 'warn'],
      },
    ],
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'lines-between-class-members': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
      },
    ],
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'always',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    'import/resolver': {
      // @xxx load tsconfig.json to eslint...
      // thx https://github.com/benmosher/eslint-plugin-import/issues/1485#issuecomment-535351922 🙏
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
