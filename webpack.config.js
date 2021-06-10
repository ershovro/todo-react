const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const postcssNormalize = require('postcss-normalize');

module.exports = {
   mode: 'production',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   watch: false,
   watchOptions: {
      aggregateTimeout: 600,
      poll: 1000,
      ignored: /node_modules/
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 9000,
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /nodeModules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: ['style-loader', 'css-loader']
         }, {
            test: /\.module\.css$/,
            use: [
               'style-loader',
               {
                  loader: 'css-loader',
                  options: {
                     importLoaders: 1,
                     modules: {
                        getLocalIdent: getCSSModuleLocalIdent,
                     },
                  },
               },
               {
                  loader: require.resolve('postcss-loader'),
                  options: {
                     postcssOptions: {
                        plugins: [
                           require('postcss-flexbugs-fixes'),
                           require('postcss-preset-env')({
                              autoprefixer: {
                                 flexbox: 'no-2009',
                              },
                              stage: 3,
                           }),
                           postcssNormalize(),
                        ]
                     }
                  },
               }
            ]
         }
      ]
   },
   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

