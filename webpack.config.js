var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    "./src/main.js",
    "webpack-dev-server/client?http://localhost:8080"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
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