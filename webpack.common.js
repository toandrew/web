const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: [__dirname + '/app/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},

	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
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
}