const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const Critters = require('critters-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: '[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        // new Critters({
        //     preload: 'swap',
        //     pruneSource: false
        // })
    ],
    module: {
        rules: [
            {
            test: /\.(le|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true,
                        minimize: true,
                        plugins: [
                            autoprefixer(),
                            cssnano()
                        ]
                    }
                },
                {
                    loader: "less-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }, ]
    },
    optimization: {
        runtimeChunk: 'single',
        moduleIds: 'hashed',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        },
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            extractComments: true,
            parallel: true,
            sourceMap: true
        })],
    },
});