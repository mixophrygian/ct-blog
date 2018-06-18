// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require("path");
const webpack = require("webpack"); /* eslint no-unused-vars: 0 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  DIST: path.resolve(__dirname, "public"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src"),
};

const extractSass = new ExtractTextPlugin("css/main.css");

module.exports = {
  target: "web",
  entry: path.join(paths.JS, "index.js"),
  output: {
    publicPath: "/",
    path: paths.DIST,
    filename: "js/bundle.js",
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      SERVING_URL: JSON.stringify(process.env.SERVING_URL),
      AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
      AUTH_CLIENT_ID: JSON.stringify(process.env.AUTH_CLIENT_ID),
      ISSUER: JSON.stringify(process.env.ISSUER),
      API_IDENTIFIER: JSON.stringify(process.env.API_IDENTIFIER),
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html"),
    }),
    extractSass,
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
