const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const config = {
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(["dist/build"]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["vendor.js"],
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
      "process.env.PUBLIC_URL":'"https://debug-pepsi.dev-altamedia.com"',
    }),
    // new CompressionPlugin({
    //     asset: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: /\.tsx$|\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // }),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false, // remove comments
        },
        compress: {
          unused: true,
          dead_code: true, // big one--strip code that will never execute
          warnings: false, // good for prod apps so users can't peek behind curtain
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: false, // strips console statements
          sequences: true,
          booleans: true,
        },
      },
    }), // 52ff05a530ba06b74e85.bundle.js  267 KiB
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\/includes/,
      }),
    ],
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: -10,
        },
      },
    },
    runtimeChunk: false,
  },
  mode: "production", //production,development
  devtool: "cheap-module-source-map", //cheap-module-source-map
  performance: {
    hints: process.env.NODE_ENV !== "development" ? false:"warning",
  },
  node: {
    net: "empty",
    dns: "empty",
  },
  output: {
    path: path.join(__dirname, "dist/build"),
    filename: "[chunkhash].[chunkhash].js",
    chunkFilename: "[chunkhash].bundle.js",
    publicPath: "/",
  },
};
module.exports = merge(common, config);
