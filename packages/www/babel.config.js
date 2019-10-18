const aliases = {
  '@components': './src/components',
  '@styles': './src/components/styles',
  '@theme': './src/components/theme',
  '@layouts': './src/layouts',
  '@config': './src/config',
  '@utils': './src/utils',
};

module.exports = {
  presets: ['next/babel'],
  env: {
    development: {
      plugins: [
        ['babel-plugin-styled-components', { ssr: true, displayName: true, preprocess: false }],
        '@babel/transform-react-jsx-source',
        'react-element-info',
        [
          'module-resolver',
          {
            alias: {
              ...aliases,
            },
          },
        ],
      ],
    },
    production: {
      plugins: [
        ['babel-plugin-styled-components', { ssr: true, displayName: false, preprocess: false }],
        'transform-remove-console',
        [
          'module-resolver',
          {
            alias: {
              ...aliases,
            },
          },
        ],
      ],
    },
  },
};
