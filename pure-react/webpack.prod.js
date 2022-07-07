const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: 'pure-react.bundle.js',
  },
  module: {
    rules: [{
      test: /.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript"
          ]
        }
      }
    }]
  }
});