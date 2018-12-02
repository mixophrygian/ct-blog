const webpack = require("webpack"); /* eslint no-unused-vars: 0 */
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = require("./webpack.config.js"); // inherit from the main config file

module.exports.mode = "production";
// disable the hot reload
module.exports.entry = ["babel-polyfill", "./src/index.js"];

module.exports.plugins.push(
  new CleanWebpackPlugin(["css/main.css", "js/bundle.js", "index.html"], {
    root: __dirname + "/public",
    verbose: true,
    dry: false, // true for simulation
  }),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require("cssnano"),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true,
  })
);
