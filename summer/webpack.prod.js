const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'js/[name].[contenthash].js' // loader 处理js，css文件，所以这里改一下
    },
    module: {
        rules: [
            {
                test: /\.less$/, // /\.css$/ 改为 /\.less$/
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }, // 文件打包至dist/css目录下，需配置 publicPath，以防会引入图片出错
                    },
                    'css-loader',
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css', // css 样式打包到 css 文件下面
        }),
        new CleanWebpackPlugin(),
    ]
}