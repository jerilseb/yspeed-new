const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  // devtool: "source-map",
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'extension/content-scripts'),
  },
  resolve: {
    extensions: ['.ts', '.json']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};