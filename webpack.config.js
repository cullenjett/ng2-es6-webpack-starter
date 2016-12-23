var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: "./src/main.js",
    vendor: [
      "./src/vendor.js",
      "webpack-dev-server/client?http://localhost:8080"
    ]
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
  devServer: {
    contentBase: "./src",
    historyApiFallback: true,
    stats: 'minimal'
 }
}