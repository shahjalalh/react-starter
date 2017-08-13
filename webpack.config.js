const webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + './client/app/components/App.jsx',
        vendor: ['react', 'react-dom', 'react-router', 'router-bootstrap', 'react-router-bootstrap', 'isomorphic-fetch', 'babel-polyfill', 'react-select']
    },
    output: {
        path: __dirname + '{{app_name}}/static/js',
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }

};
