const webpack = require('webpack')
const path = require('path');
const { default: BundleDeclarationsWebpackPlugin } = require('bundle-declarations-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        // exclude: /node_modules/,
      },
      {
          test:/\.css$/,
          use:['style-loader','css-loader']
      }
    ],
  },
  plugins: [
    new BundleDeclarationsWebpackPlugin({
      entry: ["./src/index.ts"],
      outFile: "main.d.ts"
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};