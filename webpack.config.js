const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('--------------------------开发模式--------------------------');

module.exports = {
    entry: __dirname+'/app/main.jsx', // 打包入口，__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output:{
        path: __dirname+"/build", // 打包出口，存放位置
        filename: 'bundle.js' // 打包后的文件名
    },
    module:{
        rules:[
            { // js模块
                test:/(\.jsx|\.js)$/,
                use: {
                    loader:'babel-loader',
                    // options:{ // options可以迁移到.babelrc文件中配置，webpack会自动调用.babelrc里的babel配置选项
                    //     presets: ["es2015", "react"]
                    // },
                },
                exclude: /node_modules/
            },
            { // 样式模块
                test: /(\.css|\.less|\.sass)$/,
                use: [
                    { loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    devtool:'eval-source-map', // 生成一个完整干净的source-map，打包速度适中
    devServer:{
        contentBase:  "/build",//本地服务器所加载的页面所在的目录
        port: 8999,
        //hot: true, // 该模块需要单独安装
        inline: true, //实时刷新 设置为true，当源文件改变时会自动刷新页面
        historyApiFallback: true, //不跳转
    }
};



