const path = require('path');
const webpack = require('webpack');
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: 'aurelia-bootstrapper',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ],
        modules: [
            'src',
            'node_modules'
        ]
    },
    module: {
        rules: [{
            test: /\.ts$/i,
            use: 'ts-loader',
            include: /src/
        },
        {
            test: /\.css$/i,
            issuer: /\.html?$/i,
            use: 'css-loader'
        },
        {
            test: /\.html$/i,
            use: 'html-loader'  
        },
        { 
            test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, 
            loader: 'url-loader?limit=100000' 
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.template.html'
        }),
        new AureliaPlugin({
            aureliaApp: 'main'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}