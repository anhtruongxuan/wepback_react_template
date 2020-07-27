const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
 * Project config
 */
const config = require("../config");
const src = `${config.root}/src`;
const outputDir = `${config.root}/${config.build.outputDir}`;

const APP_ENV = process.env.NODE_ENV;
const isProduction = APP_ENV === "production";
const isDevelopment = APP_ENV === "development";
const isHotReload = process.env.HOT_DEV;

config.build.publicPath = isHotReload ? "/" : config.build.publicPath;
const { publicPath } = config.build;

module.exports = {
  entry: `${src}/index.js`,
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath,
  },
  devServer: {
    hot: true,
    port: config.devServer.port,
    overlay: true,
    disableHostCheck: true,
  },
  devtool: isProduction ? "eval" : "inline-source-map",
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              {
                plugins: ["@babel/plugin-proposal-class-properties"],
              },
            ],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.PUBLIC_PATH": JSON.stringify(publicPath),
      "process.env.NODE_ENV": JSON.stringify(APP_ENV),
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.$": "jquery",
      "window.jQuery": "jquery",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
};
