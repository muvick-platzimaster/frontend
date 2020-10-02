const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const Dotenv = require('dotenv-webpack')

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
         maxSize: 240000,
         filename: '[name].js'
      }
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
         filename: 'index.html'
      }),
      new FaviconsWebpackPlugin({
         logo: './public/muvick-icon.png',
         favicons: {
            appName: 'Muvick - Movies and TV Shows',
            appDescription: 'A Netflix clone',
            background: '#000',
            theme_color: '#000',
            appShortName: 'Muvick',
            start_url: '/',
            orientation: 'any'
         },
         publicPath: '/'
      }),
      new MiniCssExtractPlugin({
         chunkFilename: '[name].chunk.css',
         filename: '[name].css'
      }),
      new WorkboxWebpackPlugin.GenerateSW({
         clientsClaim: true,
         skipWaiting: true,
         navigateFallback: '/',
         runtimeCaching: [
            {
               urlPattern: new RegExp(
                  'https?://(images.unsplash.com|www.casadelaweb.com|image.tmdb.org|assets.nflxext.com)'
               ),
               handler: 'CacheFirst',
               options: {
                  cacheName: 'images'
               }
            },
            {
               urlPattern: new RegExp('(html|css|js)'),
               handler: 'CacheFirst',
               options: {
                  cacheName: 'statics'
               }
            }
         ]
      }),
      new CopyPlugin({
         patterns: [{ from: './public/locales', to: './locales' }]
      }),
      new Dotenv()
   ]
}
