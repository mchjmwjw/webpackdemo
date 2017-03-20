var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map', // 配置生成Source Maps
	
	entry: __dirname + '/app/main.js', // 文件入口
	output: {
		path: __dirname + "/public", //打包后文件存放的位置
		filename: 'bundle.js' // 打包后输出文件的文件名		
	},

	module: {
		loaders: [{
			test: /\.json$/,  //一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
			loaders: "json-loader"	  //loader的名称（必须）
		},
		{
			test: /\.js$/,
			loaders: "babel-loader"
		},
		{
			test: /\.css$/,
			loaders: "style-loader!css-loader?modules!postcss-loader"  //感叹号的作用在于使同一文件能够使用不同类型的loader
		}]
	},

	plugins: [
		//在这个数组中new一个就可以了
    	new webpack.BannerPlugin("Copyright Flying Unicorns inc."), //一个实现版权声明的插件
    	new webpack.optimize.UglifyJsPlugin({	//压缩
      		compress: {
        		warnings: false
      		}
    	}),
    	new HtmlWebpackPlugin({
    		template: __dirname + "/app/index.tmpl.html"
    	}),
    	new webpack.HotModuleReplacementPlugin() // 热加载插件
  	],

	devServer: {
		contentBase: './public', //本地服务器所加载的页面所在的目录
		//colors: true, // 终端中输出的结果带有颜色	
		historyApiFallback: true, // 不跳转
		inline: true // 实时刷新	
	}	
}

// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。