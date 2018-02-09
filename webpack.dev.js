const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	devtool: 'eval-source-map',

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		inline: true,
		host: '0.0.0.0',
		port: 8080
	}

});