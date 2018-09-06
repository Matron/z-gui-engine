const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/public/js')
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/server.js', to: '../../server.js' },
      { from: 'src/public/index.html', to: '../index.html' },
      { from: 'src/public/index.css', to: '../css/index.css' },
      { from: 'src/public/favicon.ico', to: '../favicon.ico' }
    ])
  ]
};