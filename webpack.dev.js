const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = merge(common, {
    mode: 'development',
    devServer: {
        overlay: true,
        // hot: true,
    },
    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[chunkhash].js'
        // filename: 'main.js'
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/main.pug',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css',
            // filename: 'style.css'
        })
    ]
});