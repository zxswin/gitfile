# package.json 文件

## 一个完整的 package.jsom 文件 示例

```json
{
  "name": "Hello World",
  "version": "0.0.1",
  "author": "张三",
  "description": "第一个node.js程序",
  "keywords": ["node.js", "javascript"],
  "repository": {
    "type": "git",
    "url": "https://path/to/url"
  },
  "license": "MIT",
  "engines": { "node": "0.10.x" },
  "bugs": { "url": "http://path/to/bug", "email": "bug@example.com" },
  "contributors": [{ "name": "李四", "email": "lisi@example.com" }],
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "latest",
    "mongoose": "~3.8.3",
    "handlebars-runtime": "~1.0.12",
    "express3-handlebars": "~0.5.0",
    "MD5": "~1.2.0"
  },
  "devDependencies": {
    "bower": "~1.2.8",
    "grunt": "~0.4.1",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-jshint": "~0.7.2",
    "grunt-contrib-uglify": "~0.2.7",
    "grunt-contrib-clean": "~0.5.0",
    "browserify": "2.36.1",
    "grunt-browserify": "~1.3.0"
  }
}
```

- 常规操作

```bash
# 使用npm init命令自动生成 package文件
$ npm init

# 在当前目录中安装所需要的模块
$ npm install

# --save参数表示将该模块写入dependencies属性
$ npm install express --save

# --save-dev表示将该模块写入devDependencies属性
$ npm install express --save-dev
```

- scripts 字段

```bash
# scripts指定了运行脚本命令的npm命令行缩写

"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}
```

- dependencies 字段，devDependencies 字段

```bash
# dependencies字段指定了项目运行所依赖的模块
# devDependencies指定项目开发所需要的模块
```

- 关于版本问题

```bash
# version是版本（遵守“大版本.次要版本.小版本”的格式）

# 指定版本：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。

# 波浪号（tilde）+指定版本
# 比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。

# 插入号（caret）+指定版本
# 比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号

# latest：安装最新版本。
```

- peerDependencies 字段

```bash
# 项目和模块都依赖与一个不同版本的模块
# 大多数情况下，这不构成问题，B模块的两个版本可以并存，同时运行

# 最典型的场景就是插件
# A插件只能和2.0版本的B模块一起使用。这时，用户要是将1.0版本的B的实例传给A，就会出现问题
# 在模板安装的时候提醒用户，如果A和B一起安装，那么B必须是2.0模块

# peerDependencies字段，就是用来供插件指定其所需要的主工具的版本、
# 安装chai-as-promised模块时，主程序chai必须一起安装，而且chai的版本必须是1.x。如果你的项目指定的依赖是chai的2.0版本，就会报错。
# 从npm 3.0版开始，peerDependencies不再会默认安装了
{
  "name": "chai-as-promised",
  "peerDependencies": {
    "chai": "1.x"
  }
}
```

- bin 字段

```bash
# bin项用来指定各个内部命令对应的可执行文件的位置。
# someTool.js会建立符号链接npm_modules/.bin/someTool
# node_modules/.bin/目录会在运行时加入系统的PATH变量，因此在运行npm时，就可以不带路径，直接通过命令来调用这些脚本
# 所有node_modules/.bin/目录下的命令，都可以用npm run [命令]的格式运行
"bin": {
  "someTool": "./bin/someTool.js"
}
```

- main 字段

```bash
# main字段指定了加载的入口文件，require('moduleName')就会加载这个文件。
# 这个字段的默认值是模块根目录下面的index.js。
```

- config 字段

```bash
# config字段用于添加命令行的环境变量
{
  "name" : "foo",
  "config" : { "port" : "8080" },
  "scripts" : { "start" : "node server.js" }
}
# 然后，在server.js脚本就可以引用config字段的值
http
  .createServer(...)
  .listen(process.env.npm_package_config_port)

# 用户执行npm run start命令时，这个脚本就可以得到值。
$ npm run start

# 用户可以改变这个值。
$ npm config set foo:port 80
```

- browser 字段

```bash
# browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。
"browser": {
  "tipso": "./node_modules/tipso/src/tipso.js"
},
```

- engines 字段

```bash
# engines字段指明了该模块运行的平台，比如 Node 的某个版本或者浏览器。
{ "engines" : { "node" : ">=0.10.3 <0.12" } }

# 该字段也可以指定适用的npm版本。
{ "engines" : { "npm" : "~1.0.20" } }

```

- man 字段

```bash
# man用来指定当前模块的man文档的位置。
"man" :[ "./doc/calc.1" ]
```

- preferGlobal 字段

```bash
# preferGlobal的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），
# 要不要显示警告，表示该模块的本意就是安装为全局模块。
```

- style 字段

```bash
# style指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。
"style": [
  "./node_modules/tipso/src/tipso.css"
]
```
