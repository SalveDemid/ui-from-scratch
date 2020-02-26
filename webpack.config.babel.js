import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
  entry: {
    main: "./src/main.js"
  },
  output: {
    filename: "[name]_[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8080,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename: "second.html",
      chunks: ["main"]
    }),
    new CleanWebpackPlugin()
  ]
};
