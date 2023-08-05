const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'index.js'),
    },
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[],
            }
        ]
    },
    plugins:[
        
    ]
}