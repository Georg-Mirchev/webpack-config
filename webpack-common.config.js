const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            // styles: path.resolve(__dirname, 'src/styles/'),
            jquery: 'jquery/src/jquery'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src', 'data', 'people.json'),
                to: path.resolve(__dirname, 'dist', 'data')
            }
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                      }                  
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        context: path.resolve(__dirname, "src/"),
                        outputPath: 'images',
                        publicPath: '../images',
                        useRelativePaths: true,
                    },
                  },
                ],
            }
        ]
    }
};