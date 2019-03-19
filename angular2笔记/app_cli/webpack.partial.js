const HtmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css插件
const SpritesmithPlugin = require("webpack-spritesmith"); // 处理雪碧图合成
const webpack = require("webpack"); // 用于访问内置插件

const path = require("path");

const config = {
  /** 处理loader */
  module: {
    rules: [
      /** 处理component.pug文件  */
      {
        test: /\.component.pug$/,
        use: ["html-loader", "pug-html-loader"],
        include: path.resolve(__dirname, "src")
      }
    ]
  },

  plugins: [
    /* 雪碧图处理  */
    new SpritesmithPlugin({
      // 目标小图标
      src: {
        cwd: path.resolve(__dirname, "./src/static/icon"),
        glob: "*.png"
      },
      // 输出雪碧图文件及样式文件
      target: {
        image: path.resolve(__dirname, "./src/static/css/sprites/sprite.png"),
        css: path.resolve(__dirname, "./src/static/css/sprites/sprite.css")
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
        cssImageRef: "../sprites/sprite.png"
      },
      spritesmithOptions: {
        algorithm: "top-down"
      }
    })
  ]
};

module.exports = config;
