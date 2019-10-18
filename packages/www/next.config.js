const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';
const cdnHost = process.env.CDN_HOST || false;

/* eslint-disable */
module.exports = {
  poweredByHeader: false,
  assetPrefix: isProd && cdnHost ? cdnHost : '',
  webpack: function(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(
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
