const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const postcssNormalize = require('postcss-normalize');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   watch: true,
   watchOptions: {
      aggregateTimeout: 600,
      poll: 1000,
      ignored: /node_modules/
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
                     ident: 'postcss',
                     plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                           autoprefixer: {
                              flexbox: 'no-2009',
                           },
                           stage: 3,
                        }),
                        postcssNormalize(),
                     ]
                  },
               }
            ]
         }
      ]
   },
   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

