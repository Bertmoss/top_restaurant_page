const path = require('path');
/* const htmlWebpackPlugin = require("html-webpack-plugin"); */

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  /* plugins: [
    new htmlWebpackPlugin({
      title: "Restaurant Page"
    })
  ], */
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    /* clean: true, */
  },
   
};