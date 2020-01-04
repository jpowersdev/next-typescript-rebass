const path = require('path');

module.exports = {
  webpack: function(config) {
    config.resolve.alias['src'] = path.join(__dirname, 'src');

    return config;
  },
  target: 'serverless'
};
