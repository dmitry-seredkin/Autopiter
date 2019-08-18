const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                },
            },
            {
                test: /\.(sc|c)ss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)$/,
            //     exclude: path.resolve(__dirname, './src/images'),
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'fonts/'
            //             }
            //         }
            //
            //     ]
            // },
            // {
            //     test: /\.(jp(e)?g|png|svg)$/,
            //     exclude: path.resolve(__dirname, './src/fonts'),
            //     use : [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'images/',
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    limit: 10 * 1024,
                    noquotes: true,
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new webpack.ProvidePlugin({
            React: 'react',
        })
    ],

    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'react': 'react/index.js',
            modules: path.resolve(__dirname, 'node_modules')
        }
    }
};
