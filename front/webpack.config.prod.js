const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    main: './js/main.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize',
          publicPath: '../',
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader?name=[path][name].[ext]!img?minimize',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
