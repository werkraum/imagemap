const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: ['webpack/hot/dev-server' , './App.jsx'],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style','css?sourceMap!postcss!sass?sourceMap')
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                loader: "file-loader?name=/img/[name].[ext]"
            }
        ]
    },
    output: {
        path: path.join(__dirname, "./build"),
        filename: "main.min.js",
        publicPath: '/build'
    },
    sassLoader: {
        includePaths: [ 'client/style' ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: debug ? [new ExtractTextPlugin("[name].css",{allChunks: true})] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
            new ExtractTextPlugin("[name].css",{allChunks: true})
        ]
};