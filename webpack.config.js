const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            use: ['style-loader', 'css-loader']
         }
      ]
   },
   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

