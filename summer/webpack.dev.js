const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.less$/, // /\.css$/ 换为 /\.less$/
                use: ['style-loader', 'css-loader', 'less-loader'], // 多了一个less-loader
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true,
        open: false,
    },
}