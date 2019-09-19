const path = require("path");

module.exports = {
  entry: {
    app: ["./src/app.ts"]
  },
  mode: "development",
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    hot: true,
    port: 9000,
    publicPath: "/"
  }
};
