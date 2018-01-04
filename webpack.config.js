var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname,
    filename: './client/dist/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
