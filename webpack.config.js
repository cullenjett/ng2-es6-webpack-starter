var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: "./src/main.js",
    vendor: "./src/vendor.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["app", "vendor"]
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: "./src",
    inline: true,
    historyApiFallback: true,
    stats: 'minimal'
 }
}