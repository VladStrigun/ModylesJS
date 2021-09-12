const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/",
                            // hmr: true,
                        },
                    },
                    // 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.mp3$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/[name].css",
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
    ]
}
