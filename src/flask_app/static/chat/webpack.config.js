var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {

    entry: [path.resolve(ROOT_PATH, 'app/containers/app.js')],

    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: 'chat.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
