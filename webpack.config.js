const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlContent = fs.readFileSync("./index.html").toString();

const clientConfig = {
    entry: ['./src/index.tsx', './style/index.css'],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: '[path][name].[ext]?[contenthash]'
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css?[contenthash]',
        }),
        new HtmlWebpackPlugin({
            templateContent: htmlContent,
            minify: false
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            "node_modules",
            __dirname
        ]
    },
    devServer: {
        contentBase: "./output"
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js?[contenthash]',
        publicPath: "/"
    }
};

module.exports = clientConfig;