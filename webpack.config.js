
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/entry.js'
    },
    output: {
        path: path.resolve(__dirname, "/assets"),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}