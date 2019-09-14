const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const Critters = require('critters-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.min.css'
        }),
        new Critters({
            preload: 'swap'
        })
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
            },
        ]
    }
});