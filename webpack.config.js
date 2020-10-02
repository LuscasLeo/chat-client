const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {

	// webpack will take the files from ./src/index
	entry: './src/index',

	// and output it into /dist as bundle.js
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},

	// adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [
		new TsconfigPathsPlugin()
		]
	},

	module: {
		rules: [

				// we use babel-loader to load our jsx and tsx files
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},

			// css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 10000
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		host: '0.0.0.0',//your ip address
		port: 8080,
		disableHostCheck: true,
	}
};