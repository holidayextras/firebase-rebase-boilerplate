'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const autoreset = require('postcss-autoreset');
const postcssinitial = require('postcss-initial');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// Set our build destination
const buildDestination = "deploy";
const bundleNameUnique = 'bundle.js';

let cssLoaders = [
    { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
    { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] }
];

module.exports = {
    devtool: 'eval',
    entry: [
        //(babel polyfill to fix IE9 Axios Promise issue)
        "babel-polyfill",
        './src/index'
    ],
    output: {
        path: path.join(__dirname, buildDestination),
        filename: '/' + bundleNameUnique,
        publicPath: '/'
    },
    module: {
        loaders: [
            cssLoaders,
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            { from: 'index.html', to: 'index.html' }
        ])
    ],
    postcss: () => [
        autoprefixer,
        postcssinitial
    ]
};