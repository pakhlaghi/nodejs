const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [path.join(__dirname, "../src/index.js")],
  output: {
    path: path.join(__dirname, "../../server/public"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["server/public"], {
      root: path.resolve(__dirname, "../..")
    }),
    new CopyWebpackPlugin([{ from: "src/assets", to: "assets" }]), // compy assets to build folder
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(__dirname, "../wpTemplate/index.html"), // template to add script and css tag
      path: path.join(__dirname, "../../server/public/"), // add scripts and css into this folder
      filename: "index.html"
    })
  ]
};
