const { join } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: join(__dirname, 'app/renderer.jsx'),
  target: 'electron-renderer',
  output: {
    path: join(__dirname, 'app/build'),
    filename: 'renderer.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
};
