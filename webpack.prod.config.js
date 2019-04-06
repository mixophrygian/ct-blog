const CompressionPlugin = require("compression-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.config.js"); // inherit from the main config file

module.exports = merge(common, {
  mode: "production",
  entry: ["babel-polyfill", "./src/index.js"],
  plugins: [
    new CompressionPlugin({
      filename: "[path].gz[query]",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$|\.ico?.+$/,
      threshold: 10240,
      minRatio: 0.8,
      algorithm: "gzip",
    }),
  ],
});
