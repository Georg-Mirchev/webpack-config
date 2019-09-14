const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
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