const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.tsx'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
      chunkFilename: '[name]-[chunkhash].js'
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.jsx', '.js']
   },
   devServer: {
      historyApiFallback: true,
      host: 'localhost',
      disableHostCheck: true
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.styl$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
         }
      ]
   },
   optimization: {
      splitChunks: {
         name: 'commons',
         chunks: 'initial',
         minSize: 0,
         filename: '[name].js'
      }
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         chunkFilename: '[name].chunk.css',
         filename: '[name].css'
      }),
      new WorkboxWebpackPlugin.GenerateSW({
         runtimeCaching: [
            {
               urlPattern: new RegExp(
                  'https?://(images.unsplash.com|www.casadelaweb.com|image.tmdb.org|assets.nflxext.com)'
               ),
               handler: 'CacheFirst',
               options: {
                  cacheName: 'images'
               }
            }
         ]
      })
   ]
}
