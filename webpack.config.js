
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './source/app.js'
    },
    output: {
        path: path.resolve(__dirname, "/build"),
        publicPath: '/build/',
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
