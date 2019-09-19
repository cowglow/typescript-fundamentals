const path = require("path");

module.exports = {
  entry: "./src/app.ts",
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
  }
};
