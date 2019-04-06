const CompressionPlugin = require("compression-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.config.js"); // inherit from the main config file

module.exports = merge(common, {
  mode: "production",
  // disable the hot reload
  entry: ["babel-polyfill", "./src/index.js"],
  optimization: {},
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css)$/,
      asset: "[path].gz[query]",
      minRatio: 0.8,
      deleteOriginalAssets: true,
    }),
  ],
});
