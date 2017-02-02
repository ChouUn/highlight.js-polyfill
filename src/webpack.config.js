const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    index: './styles/index.scss',
  },
  output: {
    filename: './build/empty.js',
  },
  plugins: [
    new ExtractTextPlugin('./styles/index.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ]
  },
};

module.exports = config;