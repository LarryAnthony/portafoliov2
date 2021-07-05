const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/images/[hash][ext][query]'
	},
	mode: 'development',
	devtool: 'source-map',
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/i,
				use:
					[MiniCssExtractPlugin.loader,
						'css-loader'
					],
			},
			{
				test: /\.(png|jpg)/,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						// mimetype: "application/font-woff",
						name: "[name].[contenthash].[ext]",
						outputPath: "./assets/fonts/",
						publicPath: "../assets/fonts/",
						esModule: false
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].[contenthash].css'
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets/images"),
					to: "assets/images"
				},
				{
					from: path.resolve(__dirname, "src", "assets/icons"),
					to: "assets/icons"
				},
				{
					from: path.resolve(__dirname, "./", "manifest.json"),
					to: "./"
				},
				{
					from: path.resolve(__dirname, "./", "sw.js"),
					to: "./"
				}
			]
		}),
		new Dotenv(),
		new BundleAnalyzerPlugin(),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		port: 3006,
	}
}