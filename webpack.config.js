const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|PNG|jpg|gif|svg)/,
                use:{
                    loader: 'url-loader'
                }

            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        alias:{
            src: path.resolve(__dirname,'src/')
        },
        extensions: [".js", ".jsx", ".json"]
      },
    
};