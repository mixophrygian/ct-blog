// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
const app_root = 'src'; // the app root folder: src, src_users, etc
const path = require('path'); /* eslint no-unused-vars: 0 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
//  app_root: app_root, // the app root folder, needed by the other webpack configs
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  module: {
    noParse: /node_modules\/localforage\/dist\/localforage.js/,
    rules: [
      {
       test: /\.scss$/,
       use:
         ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                  url: true,
              }
            },
            'sass-loader',
          ],
          fallback: "style-loader",
       })
     },
     {
       test: /\.js$/,
       use: [
         "react-hot-loader",
         "babel-loader",
       ],
       exclude: /node_modules/,
     },
     {
       test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
       loader: "url-loader"
      },
    ],
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false, // true for simulation
    }),
    new ExtractTextPlugin("../css/main.css"),
   ],
};
