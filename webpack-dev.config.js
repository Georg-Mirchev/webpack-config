const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common.config');

module.exports = merge(common, {
    devtool: 'eval',
    plugins: [
        
    ],
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: "style-loader"
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
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    }
});