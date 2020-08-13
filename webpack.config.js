const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/* const MiniCssExtractPlugin = require("mini-css-extract-plugin"); */

module.exports = {
   entry: path.resolve(__dirname, "src", "index.tsx"),
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
   },
   resolve: {
      extensions: [".ts", ".tsx", ".jsx", ".js"],
   },
   devServer: {
      historyApiFallback: true,
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "babel-loader",
            exclude: /node_modules/,
         },
      ],
   },
   optimization: {
      splitChunks: {
         name: "commons",
         chunks: "all",
         minSize: 0,
         filename: "[name].js",
      },
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "public", "index.html"),
         filename: "index.html",
      }),
   ],
};
