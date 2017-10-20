'use strict';

// Import our modules for webpack and our CSS loaders
// The CSS loaders will let us import SASS files directly into our react components
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const autoreset = require('postcss-autoreset');
const postcssinitial = require('postcss-initial');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Configure css loaders
let cssLoaders = [
    { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
    { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] }
];

const config = {};

// Web config
module.exports = {
        devtool: 'eval',
        entry: [
            // Define the entry point for our application
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index'
        ],
        output: {
            path: path.join(__dirname, 'deploy'),
            filename: 'bundle.js',
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
        ],
        postcss: () => [
        autoprefixer,
        postcssinitial
    ]
};