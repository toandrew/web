const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: ['webpack/hot/dev-server', __dirname + '/app/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),

		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			},

			{
				test: /\.css/,
				loader: '<style-loader!css-loader></style-loader!css-loader>'
			}
		]
	},

	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		inline: true,
		host: '0.0.0.0',
		port: 8080
	}

}