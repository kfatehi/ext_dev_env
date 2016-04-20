var path = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, './project/index.js'),
  output: {
    path: path.join(__dirname, './project/dist'),
    library: 'myext',
    filename: 'myext.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }/*,
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })]*/
};
