const webpack = require("webpack");
module.exports = require('./webpack.config.js'); // inherit from the main config file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "../css/main.css",
});

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  './src/index.js',
];

module.exports.module.rules[0] = {
  test: /\.scss$/,
  use: extractSass.extract({
    use: [{
      loader: "css-loader", options: {
        sourceMap: true
      }
    }, {
      loader: "sass-loader", options: {
        sourceMap: true
      }
    }],
  })
}

module.exports.plugins.pop();

module.exports.plugins.push(
  extractSass
)

// production env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  })
);

// compress the js file
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    output: {
      comments: false,
    }
  })
);