const { parsed: localEnv } = require('dotenv').config();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const cdnHost = process.env.CDN_HOST || false;

/* eslint-disable */
module.exports = {
  poweredByHeader: false,
  assetPrefix: isProd && cdnHost ? cdnHost : '',
  webpack: function(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    if (process.env.ANALYZE) {
      config.plugins.push(
        new webpack.EnvironmentPlugin(localEnv),
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      );
    }
    return config;
  },
};

// module.exports = {
//   env: {
//     SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
//     ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
//   },
// };
