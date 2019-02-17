const path = require('path');

const DEV_MODE = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'ghost-keyboard.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: DEV_MODE ? 'development' : 'production',
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
