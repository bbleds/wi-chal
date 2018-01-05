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
		rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    },
		{
			test: /(\.css|\.scss)$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				},{
					loader: 'sass-loader',
					options: {
						includePaths: [path.resolve(__dirname, 'src', 'scss')],
						sourceMap: true
					}
				}
			]
		},
		 {
			 test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			 loader: 'url-loader',
			 options: {
				 limit: 10000
			 }
		 }
  ]
  }
}
