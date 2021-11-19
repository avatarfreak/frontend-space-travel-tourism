const path = require('path');

module.exports = {
   trailingSlash: true,
   webpackDevMiddleware: config => {
      config.watchOptions = {
         poll: 1000,
         aggregateTimeout: 300,
         ignored: /node_modules/
      };
      return config;
   },
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   }
}
