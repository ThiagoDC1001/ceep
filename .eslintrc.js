module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    strict: 0,
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'no-nested-ternary': 'warn',
    'react/prop-types': 'warn',
  },
};
