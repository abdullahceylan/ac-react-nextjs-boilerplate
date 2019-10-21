require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.FB_PROJECT_ID': JSON.stringify(process.env.FB_PROJECT_ID),
        'process.env.FB_AUTH_DOMAIN': JSON.stringify(process.env.FB_AUTH_DOMAIN),
        'process.env.FB_API_KEY': JSON.stringify(process.env.FB_API_KEY),
      }),
    );
    return config;
  },
  env: {
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_API_KEY: process.env.FB_API_KEY,
  },
};
