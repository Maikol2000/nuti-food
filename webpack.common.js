const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const SRC_DIR = path.resolve(__dirname, "src");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
// const { InjectManifest } = require('workbox-webpack-plugin');
const VENDOR_LIBS = [
  "axios",
  "moment",
  "react",
  "react-dom",
  "react-loadable",
  // 'bootstrap',
  "jquery",
  "react-router",
  "react-router-dom",
  // 'recompose',
];
module.exports = {
  entry: {
    bundle: path.join(SRC_DIR, "index.tsx"),
    vendor: VENDOR_LIBS,
    'service-worker': './src/service-worker.ts',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: ["/node_modules/", "/build/"]
      },
      {
        /*bien dich soure map sang ts*/
        enforce: "pre",
        test: /\.js?$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2|mp4|webm|mp3|wav)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
      {
        loader: "file-loader",
        test: /\.gz$|.ico$|\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2|\.eot$|.ttf$|\.icon$|\?[a-z0-9]+?$/,
        query: {
          name: "[name]-[md5:hash:8].[ext]",
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: [
                // __dirname
                path.resolve(__dirname, "src/shared/"),
                path.resolve(__dirname, "src/view/"),
                // path.resolve(__dirname, "src/modules"),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      logo: "./public/logo48.png",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
      thumbnail_fb: "./public/share-facebook.jpg",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.ProvidePlugin({
      // inject ES5 modules as global vars
      $: "jquery",
      jQuery: "jquery",
      "window.$": "jquery",
      "window.jQuery": "jquery",
    }),
    new CopyWebpackPlugin([
      { from: "src/shared/assets/images", to: "src/shared/assets/images" },
      { from: "public", to: "public" },
    ]),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    plugins: [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)],
    // alias: {
    //     "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js"),
    // }
  }
};
