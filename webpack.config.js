'use strict';

const { resolve } = require('path');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map', // or 'eval'
  resolve: {
    extensions: ['.js', '.jsx'] // files that can be imported without specifying an extension
  },
  stats: { // detailed description upon compiling
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    ]
  }
};
