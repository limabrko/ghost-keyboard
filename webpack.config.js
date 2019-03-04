const path = require('path');

const DEV_MODE = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: DEV_MODE ? 'ghost-keyboard.js' : 'ghost-keyboard.min.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  mode: DEV_MODE ? 'development' : 'production',
  devtool: DEV_MODE ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
