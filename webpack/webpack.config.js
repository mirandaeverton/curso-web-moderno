const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin') // No lugar do OptimizeCSSAssetsPlugin
const terserWebpackPlugin = require('terser-webpack-plugin') // No lugar do uglifyJsPlugin
const path = require('path')
module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 9000
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    optimization: {
        minimizer: [
            new terserWebpackPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
            }),
            new cssMinimizerWebpackPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCssExtractPlugin.loader, // Conflita com o style-loader
                //'style-loader', // Adiciona CSS à DOM, injetando a tag <style>
                'css-loader', // Responsável por interpretar @import, url()...
                'sass-loader',
            ]
            // },{
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: ['file-loader'] // NÃO UTILIZAR! Webpack já trata sozinho
            // }
        }]
    }
}