const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
const SpritesmithPlugin = require('webpack-spritesmith'); // 处理雪碧图合成
const webpack = require('webpack'); // 用于访问内置插件

const path = require('path');
const config = {
  devtool: 'cheap-source-map', // SourceMap模式
  mode: 'development', //  "development" | "production" | "none" 启用开发还是生产模式,webpack已经内置优化
  entry: __dirname + '/src/index.ts', // 入口文件
  /** 出口文件配置 */
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  /** webpack-dev-server 配置 */
  devServer: {
    contentBase: '/dist/', // 提供访问的文件位置
    publicPath: '/dist/',
    compress: false,//是否启用gzip压缩
    hot: true, // 启动 热替换
    historyApiFallback: true, // 当使用html5 history api,将会在响应404时返回index.html
    inline: true, // 自动刷新
    clientLogLevel: "none", // 配置禁止显示一些调试信息
    progress: true, // 编译进度
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:3000', // 要访问的接口地址
        changeOrigin: true,
        secure: false // 关闭安全监测
      }
    }
  },
  /** 处理loader */
  module: {
    rules: [
      /** 处理ts文件  */
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      /** 处理js文件  */
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        include: path.resolve(__dirname, 'src'), // 要处理的文件夹
        exclude: path.resolve(__dirname, 'node_modules') // 不需要处理的文件夹
      },

      /** 处理pug文件  */
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          'pug-html-loader'
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /.component.pug$/
      },

      /** 处理component.pug文件  */
      {
        test: /\.component.pug$/,
        use: [
          'html-withimg-loader',
          'pug-ng-html-loader',
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /index.pug$/
      },

      /** 处理less文件  */
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  broswers: ['last 5 versions']
                })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true }
          }
        ],
        include: path.resolve(__dirname, 'src'), // 要处理的文件夹
        exclude: /\.component.less$/
      },

      /** 处理css文件  */
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  broswers: ['last 5 versions']
                })
              ]
            }
          },
        ],
        include: path.resolve(__dirname, 'src'), // 要处理的文件夹
        exclude: /\.component.css$/
      },

      /** 处理 component.less文件 */
      {
        test: /\.component.less$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  broswers: ['last 5 versions']
                })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true }
          }
        ],
        include: path.resolve(__dirname, 'src'),
      },

      /** 处理 component.css文件 */
      {
        test: /\.component.css$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  broswers: ['last 5 versions']
                })
              ]
            }
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },

      /** 处理图片资源文件  */
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'url-loader?sourceMap=true&limit=100&name=img/[name].[ext]',
          'image-webpack-loader'
        ],
        include: path.resolve(__dirname, 'src'), // 要处理的文件夹
        exclude: path.resolve(__dirname, 'node_modules') // 不需要处理的文件夹
      },
      /** 处理其他的资源文件  */
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader?name=font/[name].[ext]" },
      { test: /\.(woff|woff2)$/, use: "url-loader?prefix=font/&limit=5000&name=font/[name].[ext]" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream&name=font/[name].[ext]" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml&name=font/[name].[ext]" }
    ]
  },
  /** 来指示webpack在解析Typescript模块时使用什么文件扩展名  */
  resolve: {
    extensions: ['.ts', '.js']
  },
  /* 处理插件 */
  plugins: [
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/, // fixes WARNING Critical dependency: the request of a dependency is an expression
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes

    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/, // fixes WARNING Critical dependency: the request of a dependency is an expression
      path.join(__dirname, 'src'),
      {}
    ),
    new HtmlWebpackPlugin({
      title: 'app',
      template: 'html-withimg-loader!./src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),

    /* 提取css文件  */
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),

    /** 压缩css  */
    new OptimizeCssAssetsPlugin(),

    /* 雪碧图处理  */
    new SpritesmithPlugin({
      // 目标小图标
      src: {
        cwd: path.resolve(__dirname, './src/static/icon'),
        glob: '*.png'
      },
      // 输出雪碧图文件及样式文件
      target: {
        image: path.resolve(__dirname, './src/static/sprites/sprite.png'),
        css: path.resolve(__dirname, './src/static/sprites/sprite.css')
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
        cssImageRef: '../sprites/sprite.png'
      },
      spritesmithOptions: {
        algorithm: 'top-down'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;