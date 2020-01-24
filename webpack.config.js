const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        cratestory: "./scripts/createstory.js",
        about: "./scripts/about.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/, //регулярное выражение проверяет css ли это
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        /*   options: {
                               publicPath: '/public/path/to/',
                           },*/
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./html/createstory.html",
        filename: "createstory.html"
    }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
}