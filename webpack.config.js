const  path = require('path');
const HTMLWebpckPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV ==='development';


const config ={
    target: "web",
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },{
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader'

                ]
            },{
                test:/\.(jpg|gif|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader', //把图片转义成base64
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }, plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev ?'"development"':'"production"'
            }
        }),
        new HTMLWebpckPlugin()
    ]
};

if(isDev){
    config.devServer={
        port:'8000',
        host:'0.0.0.0',
        overlay:{
            errors:true
        },
        hot: true
    },
    config.devtool = '#cheap-module-eval-source-map'//将es6,vue等js代码source-map为方便调试的代码
    config.plugins.push(//配合devServer热加载
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports =config;