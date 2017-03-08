var webpack = require("webpack");
module.exports = {
	// devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry:  {
		index1: __dirname + "/src/public/js/index1.js",
		index2: __dirname + "/src/public/js/index2.js",
	},
	output: {
		path: __dirname + "/src/public/online",//打包后的文件存放的地方
		filename: "[name].entry.js",//打包后输出文件的文件名
		chunkFilename: "[id].entry.js"
	},

	module:{
		rules: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: "/node_modules/",
			}
		]
	},
	// 对打包的文件进行压缩
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
}