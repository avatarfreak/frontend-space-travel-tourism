const path = require('path');

module.exports = {
   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
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
