const webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + './client/app/components/App.jsx',
        vendor: ['jquery', 'react', 'react-dom', 'react-router', 'router-bootstrap', 'react-router-bootstrap', 'isomorphic-fetch', 'babel-polyfill', 'react-select']
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
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: '{{app_name}}/templates',
        historyApiFallback: true,
    },
    devtool: 'source-map',
};
