const path = require("path");

const dest = "public/script";

module.exports = {
  entry: {
    app: ["./src/app.ts"]
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader" },
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    path: path.resolve(__dirname, dest),
    filename: "app.js"
  }
};
