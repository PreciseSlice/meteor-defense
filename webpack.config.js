const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  }
};
