const path = require('path');
const merge = require('webpack-merge'); // 需要安装才能用：npm install -D webpack-merge
const devConfig = require('./webpack.dev.js');// 引入开发模式文件
const prodConfig = require('./webpack.prod.js'); // 引入生产模式文件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入 plugin 插件1

const commonConfig = { // 基础配置
    entry: './src/index.js', // 入口文件（将要打包的文件）
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: 'babel-loader',
            },
            { // 打包图片
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                loader: path.resolve('./src/loaders/exchange-loader'),
                exclude: /node_modules/,
                options: {
                  replaceMap: {
                    "redrock": "Redrock"
                  }
                }
              }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html', // 作为生成的HTML文件的模板
        })
    ],
    resolveLoader: {
        modules: [path.join(__dirname, './src/loaders'), 'node_modules']
      }
}

module.exports = env => {
    if (env && env.production) {
        return merge(commonConfig, prodConfig); // 如果环境变量为env进入开发模式
    } else {
        return merge(commonConfig, devConfig); // 否则进入生产模式 
    }
}