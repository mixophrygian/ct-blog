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

module.exports.plugins = [
  new ExtractTextPlugin('../css/main.css'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
  })
];