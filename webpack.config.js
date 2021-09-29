const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        exclude: [
          /\.(js|css|less|html|jpg|png|gif)/,
          /\.m?jsx?$/,
          /\.html$/,
          /\.json$/,
          /\.tsx?$/,
        ],
        loader: "file-loader",
        options: {
          outputPath: "media",
        },
      },
    ],
  },
  resolve: {
    // modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  mode: "development",
};
