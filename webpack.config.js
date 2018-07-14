const path = require('path');
const ExamplePlugin = require('./ExamplePLugin.js');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      //   {
      //     test: /\.js$/,
      //     use: 'babel-loader',
      //   },
      //   {
      //     test: /\.css$/,
      //     use: ['style-loader', 'css-loader'],
      //   },

      {
        test: /\.jpe?g$/,
        use: [
          'file-loader',
          //   {
          //     loader: 'image-webpack-loader',
          //     options: {},
          //   },
        ],
      },
    ],
  },
  plugins: [new ExamplePlugin()],
};
