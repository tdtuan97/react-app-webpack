const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'main.js',
        publicPath: '/' // For production - Change to base directory folder name Eg. "https://localhost/BASENAME/" - publicPath: 'BASENAME'
    },
    mode: 'production',
    devServer: {
        static: path.resolve(__dirname, 'src'),
        compress: true,
        host: '0.0.0.0',
        port: 3100,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options:
                            {
                                minimize: true
                            }
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|cur)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        /*new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },
            ],
        }),*/
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
};