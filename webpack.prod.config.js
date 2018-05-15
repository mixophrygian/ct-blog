const webpack = require("webpack"); /* eslint no-unused-vars: 0 */
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = require("./webpack.config.js"); // inherit from the main config file

// disable the hot reload
module.exports.entry = ["babel-polyfill", "./src/index.js"];

module.exports.plugins.push(
  new CleanWebpackPlugin(["css/main.css", "js/bundle.js", "index.html"], {
    root: __dirname + "/public",
    verbose: true,
    dry: false, // true for simulation
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
    SERVING_URL: JSON.stringify("http://ec2-54-183-244-115.us-west-1.compute.amazonaws.com"),
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false,
    },
  }),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require("cssnano"),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true,
  }),
  new UglifyWebpackPlugin()
);
