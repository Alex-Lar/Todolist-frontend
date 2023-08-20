const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new TerserPlugin(),
  ],
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: './dist',
    },
  },
};
