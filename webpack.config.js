/**
 * Created by Александр on 31.12.2016.
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: __dirname + "/",
    entry: "./index.js",
    output: {
        path: __dirname + "/",
        filename: "build.js"
    },
    watch: false,

    externals: {
        jquery: '$'
    },

    resolve: {
        moduleDirectories: ['node-modules']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node-modules/

            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('build.css')
    ]

};
