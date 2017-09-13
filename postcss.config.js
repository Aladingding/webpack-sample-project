
module.exports = {
    entry: __dirname+'/app/main.jsx', // 打包入口
    output:{
        path: __dirname+'/public', // 打包出口，存放位置
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
        require('autoprefixer')
    ],
    devtool:'eval-source-map', // 生成一个完整干净的source-map，打包速度适中
    devServer:{
        contentBase: './public',//本地服务器所加载的页面所在的目录
        //hot: true, // 该模块需要单独安装
        inline: true, //实时刷新 设置为true，当源文件改变时会自动刷新页面
        historyApiFallback: true, //不跳转
    }
};



