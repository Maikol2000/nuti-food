// PROD Webpack configuration used to build the service worker

const webpackDevConfig = require("./webpack.dev.config");
const path = require("path");
const webpack = require("webpack");
const targetServiceWorkerFilename = "service-worker-src.js";
const webBuildTargetFolder = path.join(__dirname, "..", "dist/prod");
module.exports = Object.assign({}, webpackDevConfig, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
      "process.env.PUBLIC_URL":'"https://pepsirapgame.pepsishop.vn"',
    }),
    ],
    output: {
      path: webBuildTargetFolder,
      filename: targetServiceWorkerFilename,
    },
});