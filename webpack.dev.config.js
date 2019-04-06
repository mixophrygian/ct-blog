const merge = require("webpack-merge");
const common = require("./webpack.config.js"); // inherit from the main config file

module.exports = merge(common, {
  mode: "development",
  // disable the hot reload
  entry: ["babel-polyfill", "./src/index.js"],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
  },
});
