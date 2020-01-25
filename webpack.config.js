const webpack= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        index:"./scripts/index.js",
        cratestory: "./scripts/createstory.js",
        about: "./scripts/about.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, //регулярное выражение проверяет css ли это
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },

                ],
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./html/createstory.html",
        filename: "createstory.html"
    }),
        new HtmlWebpackPlugin({
            template: "./html/about.html",
            filename: "about.html"
        }),

        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide2.html",
            filename: "./html/slide2.html"
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide3.html",
            filename: "./html/slide3.html"
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide4.html",
            filename: "./html/slide4.html"
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide5-1.html",
            filename: "./html/slide5-1.html"
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide5-2.html",
            filename: "./html/slide5-2.html"
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide6-1.html",
            filename: "./html/slide6-1.html"
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide6-2.html",
            filename: "./html/slide6-2.html"
        }),
        new HtmlWebpackPlugin({
            template: "./html/slide7.html",
            filename: "./html/slide7.html"
        }),


        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            JQuery: 'jquery',
            'window.JQuery':'jquery'
        }),
        new CopyWebpackPlugin([
            {
                from: './images',
                to: './images'
            },
        ])
    ]
}