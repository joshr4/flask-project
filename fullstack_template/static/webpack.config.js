const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module : {
      rules : [
        {
          test: /.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['@babel/react', '@babel/es2015'],
            plugins: ['@babel/proposal-class-properties']
          }
        }
      ]
    }
};
module.exports = config;
