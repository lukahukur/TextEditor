const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')

module.exports = {
	plugins: [
		new htmlWebpackPlugin({
			template: './src/static/index.html',
			favicon: './src/static/favicon.png'
		})
	],
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.png$/,
				use: 'file-loader'
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	}
}
