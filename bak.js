module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	
	entry:  __dirname + "/public/js/main.js",//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/web",//打包后的文件存放的地方
		filename: "entry.js",//打包后输出文件的文件名
		publicPath: "/assets/"
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
	}
}