module.exports = {
  parser: 'babel-eslint',
  extends: ['@abdullahceylan/eslint-config', '@abdullahceylan/eslint-config-react'],
  plugins: ['react-hooks'],
  env: {
    es6: true,
  },
  rules: {
    'no-unsafe-finally': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off', // <--- THIS IS THE NEW RULE
  },
};
