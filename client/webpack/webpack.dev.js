const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../../server/public"),
    port: 9000,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new BundleAnalyzerPlugin()
  ]
});
