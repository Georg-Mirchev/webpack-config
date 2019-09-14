const merge = require('webpack-merge');
const common = require('./webpack-common.config');

module.exports = merge(common, {
    devtool: 'eval',
    plugins: [
        
    ],
    module: {
        rules: [
            
        ]
    },
    devServer: {
        compress: true,
        port: 9000
    }
});