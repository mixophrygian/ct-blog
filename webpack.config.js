// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const paths = {
  DIST: path.resolve(__dirname, "public"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src"),
};

const extractSass = new ExtractTextPlugin("css/main.css");

module.exports = {
  mode: "development",
  target: "web",
  entry: path.join(paths.JS, "index.js"),
  output: {
    publicPath: "/",
    path: paths.DIST,
    filename: "js/bundle.js",
  },
  // Tell webpack to use html plugin
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    extractSass,
    new HtmlWebpackPlugin({
      template: `${paths.SRC}/index.html`,
      title: "Automatic Thought Journal",
    }),
  ],

  module: {
    noParse: /node_modules\/localforage\/dist\/localforage.js/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: "style-loader",
        }),
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
      },
    ],
  },
};
