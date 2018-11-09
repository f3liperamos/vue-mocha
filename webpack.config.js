const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/app.js',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.styl(us)?$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader: 'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ],
  },
  devServer: { hot: true },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
