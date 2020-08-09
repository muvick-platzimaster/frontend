const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: path.resolve(__dirname, "src", "index.jsx"),
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
   },
   resolve: {
      extensions: [".js", ".jsx"],
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            use: "babel-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               { loader: "css-loader" },
               "postcss-loader",
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "public", "index.html"),
         filename: "index.html",
      }),
      new MiniCssExtractPlugin({
         filename: "[name].css",
      }),
   ],
};
