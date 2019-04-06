// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require("path");
const webpack = require("webpack"); /* eslint no-unused-vars: 0 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const paths = {
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src"),
  DIST: path.resolve(__dirname, "dist"),
};

const extractSass = new ExtractTextPlugin({
  filename: "css/main.css",
});

module.exports = {
  mode: "development",
  target: "web",
  output: {
    filename: "js/bundle.js",
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin()],
  },
  module: {
    noParse: /node_modules\/localforage\/dist\/localforage.js/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
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
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      SERVING_URL: JSON.stringify(process.env.SERVING_URL),
      AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
      AUTH_CLIENT_ID: JSON.stringify(process.env.AUTH_CLIENT_ID),
      ISSUER: JSON.stringify(process.env.ISSUER),
      API_IDENTIFIER: JSON.stringify(process.env.API_IDENTIFIER),
    }),
    extractSass,
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
