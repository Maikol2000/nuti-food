// DEV Webpack configuration used to build the service worker

const path = require("path");
const webpack = require("webpack");
const webBuildTargetFolder = path.join(__dirname, "..", "dist/build");
const targetServiceWorkerFilename = "service-worker-src.js";
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
module.exports = {
  target: "node",
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
      "process.env.PUBLIC_URL":'"https://debug-pepsi.dev-altamedia.com"',
    }),
    ],
  // WARNING: commented out to disable source maps
  //devtool: 'inline-source-map',
  entry: {
    index: path.join(__dirname, "../src", "service-worker.ts"),
  },
  resolve: { extensions: [".js", ".ts"] },
  output: {
    path: webBuildTargetFolder,
    filename: targetServiceWorkerFilename,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader"
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    plugins: [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)],
    // alias: {
    //     "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js"),
    // }
  }
};