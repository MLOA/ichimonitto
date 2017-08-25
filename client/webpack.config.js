const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		top: path.join(__dirname, 'js/top.js'),
		room: path.join(__dirname, 'js/room.js'),
	},
	output: {
		path: path.join(__dirname, '../static/js/'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'],
			}
		}]
	},
	resolve: {
		extensions: ['.js']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		})
	],
};