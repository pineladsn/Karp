const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
       rules: [
           {
               test: /\.scss$/,
               use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: ['css-loader','sass-loader'],
                   publicPath: '/dist'
               })
           }
       ]
   },
   plugins: [
         new ExtractTextPlugin({
             filename: 'app.css',
             disable: false,
             allChunks: true
         })
     ]
};
