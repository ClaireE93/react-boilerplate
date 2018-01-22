const path = require('path');
const webpack = require('webpack');

 module.exports = {
     entry: './client/index.js',
     output: {
         path: path.resolve(__dirname, 'public'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.jsx?$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
