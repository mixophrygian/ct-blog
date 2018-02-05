const webpack = require("webpack"); /* eslint no-unused-vars: 0 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js'); // inherit from the main config file

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  './src/index.js',
];

// // export css to a separate file
// module.exports.module.rules[0] = {
//   test: /\.scss$/,
//   loader: ExtractTextPlugin.extract('css!sass')
// };

module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
        warnings: false
    }
  })
);