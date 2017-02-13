// const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
    {
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: function () {
                return [
                    autoprefixer({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            sourceMap: true
        }
    },
    {
        loader: 'sass-loader',
        options: {
            includePaths: [ 'client/style' ],
            sourceMap: true
        }
    }
];

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: "inline-sourcemap",
    entry: ['./App.jsx'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: loaders
                })
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
    plugins:[
        new ExtractTextPlugin({filename: "[name].css",allChunks: true}),
        new HtmlWebpackPlugin({
            title: "Imagemap",
            filename: 'index.html'
        })
    ]
};