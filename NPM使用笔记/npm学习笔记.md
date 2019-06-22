# NPM 学习笔记

## 一些常用的 npm 命令

- 一些常用的命令

```bash
# 更新npm 到最新版本
$ npm install npm@latest -g
# 查看 npm 命令列表
$ npm help
# 查看各个命令的简单用法
$ npm -l
# 查看 npm 的版本
$ npm -v
# 查看 npm 的配置
$ npm config list -l
```

- 始化生成一个新的 package.json 文件

```bash
# 使用了-f（代表force）、-y（代表yes），则跳过提问阶段，直接生成一个新的package.json文件
$ npm init -y
```

- 设置环境变量

```bash
# npm set用来设置环境变量
$ npm set init-author-name 'Your name'
$ npm set init-author-email 'Your email'
$ npm set init-author-url 'http://yourdomain.com'
$ npm set init-license 'MIT'

# 通过上面的设置后以后执行npm init的时候，package.json的作者姓名、邮件、主页、许可证字段就会自动写入预设的值。
# 这些信息会存放在用户主目录的 ~/.npmrc文件
# 如果某个项目有不同的设置，可以针对该项目运行npm config

# 设置加入模块时，package.json将记录模块的确切版本，而不是一个可选的版本范围
$ npm set save-exact true
```

- npm config 命令

```bash
# 将指定的$dir目录，设为模块的全局安装目录。
$ npm config set prefix $dir

# npm install --save和npm install --save-dev安装新模块时，
# 允许的版本范围从克拉符号（^）改成波浪号（~），即从允许小版本升级，变成只允许补丁包的升级。
$ npm config set save-prefix ~

# 指定使用npm init时，生成的package.json文件的字段默认值
$ npm config set init.author.name $name
$ npm config set init.author.email $email
```

- npm info 命令

```bash
# npm info命令可以查看每个模块的具体信息
$ npm info underscore
# 查询指定的描述字段
$ npm info underscore description
```

- npm search 命令用于搜索 npm 仓库

```bash
# 后面可以跟字符串，也可以跟正则表达式
$ npm search <搜索词>
$ npm search node-gyp
```

- npm list 命令

```bash
# npm list命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块
$ npm list

# 列出全局安装的模块
$ npm list -global

# npm list命令也可以列出单个模块。
npm list underscore
```

## npm install 命令

- 本地安装与全局安装

```bash
# “全局安装”指的是将一个模块安装到系统目录中，各个项目都可以调用。
$ sudo npm install -global <package name>
$ sudo npm install -g <package name>

# “本地安装”指的是将一个模块下载到当前项目的node_modules子目录，然后只有在项目目录之中，才能调用这个模块
$ npm install <package name>

# 支持直接输入Github代码库地址
$ npm install git://github.com/package/path.git
$ npm install git://github.com/package/path.git#0.1.0

# 安装之前，npm install会先检查，node_modules目录之中是否已经存在指定模块。
# 如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此
# 强制重新安装模块
# 重新安装，可以使用-f或--force参数
$ npm install <packageName> --force
```

- 安装不同版本

```bash
# install命令总是安装模块的最新版本，如果要安装模块的特定版本，可以在模块名后面加上@和版本号
$ npm install sax@latest
$ npm install sax@0.1.1
$ npm install sax@">=0.1.0 <0.2.0"

# 使用--save-exact参数，会在package.json文件指定安装模块的确切版本
$ npm install readable-stream --save --save-exact
```

- 指定所安装的模块属于哪一种性质的依赖关系

```bash
# 模块用于生产环境
# –save：模块名将被添加到dependencies，可以简化为参数-S。
$ npm install sax --save
$ npm install sax -S

# 模块用于开发环境
# –save-dev: 模块名将被添加到devDependencies，可以简化为参数-D。
$ npm install node-tap --save-dev
$ npm install node-tap -D
```

- 安装 beta 版本的模块

```bash
# 安装最新的beta版
$ npm install <module-name>@beta (latest beta)

# 安装指定的beta版
$ npm install <module-name>@1.3.1-beta.3
```

- 模块的安装与加载

```bash
# npm install默认会安装dependencies字段和devDependencies字段中的所有模块
# 如果使用--production参数，可以只安装dependencies字段的模块。
$ npm install --production
# 或者
$ NODE_ENV=production npm install

# 用require命令加载这个模块
var backbone = require('backbone')
console.log(backbone.VERSION)
```

## npm update 命令可以更新本地安装的模块

```bash
# 它会先到远程仓库查询最新版本，然后查询本地版本。
# 如果本地版本不存在，或者远程版本较新，就会安装。
# 可以理解为此命令安装的是最新的版本了

# 升级当前项目的指定模块
$ npm update [package name]

# 升级全局安装的模块
$ npm update -global [package name]

# 使用-S或--save参数，可以在安装的时候更新package.json里面模块的版本号。
// 更新之前的package.json
dependencies: {
  dep1: "^1.1.1"
}

// 更新之后的package.json
dependencies: {
  dep1: "^1.2.2"
}

# 从npm v2.6.1 开始，npm update只更新顶层模块，而不更新依赖的依赖
# 以前版本是递归更新的。如果想取到老版本的效果，要使用下面的命令
npm --depth 9999 update
```

## npm uninstall 命令，卸载已安装的模块。

```bash
# 卸载本地模块
$ npm uninstall [package name]

# 卸载全局模块
$ npm uninstall [package name] -global
```

## npm run

```bash
# package.json文件有一个scripts字段，可以用于指定脚本命令，供npm直接调用。
# npm run是npm run-script的缩写，一般都使用前者，但是后者可以更好地反应这个命令的本质。
# npm run lint，就会执行jshint **.js
# npm run test，就会执行mocha test/
{
  "name": "myproject",
  "devDependencies": {
    "jshint": "latest",
    "browserify": "latest",
    "mocha": "latest"
  },
  "scripts": {
    "lint": "jshint **.js",
    "test": "mocha test/"
  }
}

# npm run命令会自动在环境变量$PATH添加node_modules/.bin目录
# 所以scripts字段里面调用命令时不用加上路径，这就避免了全局安装NPM模块。

# npm run如果不加任何参数，直接运行，会列出package.json里面所有可以执行的脚本命令

# npm内置了两个命令简写，npm test等同于执行npm run test，npm start等同于执行npm run start。
# npm run会创建一个Shell，执行指定的命令，并临时将node_modules/.bin加入PATH变量，这意味着本地模块可以直接运行。

# 执行ESLint的安装命令。
# 首先，ESLint被安装到当前目录的node_modules子目录
# 其次，node_modules/.bin目录会生成一个符号链接node_modules/.bin/eslint，指向ESLint模块的可执行脚本。
# 你就可以在package.json的script属性里面，不带路径的引用eslint这个脚本。

## 用其他npm run命令
## 先运行npm run build-js，然后再运行npm run build-css，两个命令中间用&&连接。
## 如果希望两个命令同时平行执行，它们中间可以用&连接。
## "build": "npm run build-js && npm run build-css"


# 写在scripts属性中的命令，也可以在node_modules/.bin目录中直接写成bash脚本。
# "build-js": "bin/build.sh"
```

- 参数

```bash
# 将参数传到mocha，则参数之前要加上两个连词线。
$ npm run test -- anothertest.js
# 等同于
$ mocha test/ anothertest.js

# npm run本身有一个参数-s，表示关闭npm本身的输出，只输出脚本产生的结果。
// 输出npm命令头
$ npm run test

// 不输出npm命令头
$ npm run -s test
```

## scripts 脚本命令最佳实践

- 运行多个 scripts 脚本命令

```bash
# 首先，安装npm-run-all模块
# 这个模块用于运行多个scripts脚本命令。
# 继发执行
$ npm-run-all build:html build:js
# 等同于
$ npm run build:html && npm run build:js

# 并行执行
$ npm-run-all --parallel watch:html watch:js
# 等同于
$ npm run watch:html & npm run watch:js

# 混合执行
$ npm-run-all clean lint --parallel watch:html watch:js
# 等同于
$ npm-run-all clean lint
$ npm-run-all --parallel watch:html watch:js

# 通配符
$ npm-run-all --parallel watch:*

# 如果start脚本没有配置，npm start命令默认执行下面的脚本，前提是模块的根目录存在一个server.js文件。
$ node server.js
```

- 开发环境下执行的命令

```bash
#dev脚本命令
# dev脚本命令，规定开发阶段所要做的处理，比如构建网页资源。
# 并行执行所有dev的子命令
# "dev": "npm-run-all dev:*"
# 将sass文件编译为css文件，并生成source map文件
# "predev:sass": "node-sass --source-map src/css/hoodie.css.map --output-style nested src/sass/base.scss src/css/hoodie.css"
# 监视sass文件的变动，只要有变动，就自动将其编译为css文件
# "dev:sass": "node-sass --source-map src/css/hoodie.css.map --watch --output-style nested src/sass/base.scss src/css/hoodie.css"
# 为css文件加上浏览器前缀，限制条件是只考虑市场份额大于5%的浏览器
# "dev:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers \"> 5%\" --output src/css/hoodie.css src/css/hoodie.css"
```

- serve 脚本命令

```bash
# serve脚本命令用于启动服务
# "serve": "live-server dist/ --port=9090"

# live-server模块有三个功能。
# 启动一个HTTP服务器，展示指定目录的index.html文件，通过该文件加载各种网络资源，这是file://协议做不到的。
# 添加自动刷新功能。只要指定目录之中，文件有任何变化，它就会刷新页面。
# npm run serve命令执行以后，自动打开浏览器。、
```

- test 脚本命令用于执行测试。

```bash
# "test": "npm-run-all test:*",
# "test:lint": "sass-lint --verbose --config .sass-lint.yml src/sass/*"
```

- prod 脚本命令，规定进入生产环境时需要做的处理。

```bash
# 将sass文件转为css文件，并加上浏览器前缀
# "prod": "npm-run-all prod:*",
# "prod:sass": "node-sass --output-style compressed src/sass/base.scss src/css/prod/hoodie.min.css",
# "prod:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers "> 5%" --output src/css/prod/hoodie.min.css src/css/prod/hoodie.min.css"
```

- help 脚本命令

```bash
# help脚本命令用于展示帮助信息。
# markdown-chalk模块用于将指定的markdown文件，转为彩色文本显示在终端之中
# "help": "markdown-chalk --input DEVELOPMENT.md"
```

- docs 脚本命令

```bash
# docs脚本命令用于生成文档
# "docs": "kss-node --source src/sass --homepage ../../styleguide.md"
# 使用kss-node模块，提供源码的注释生成markdown格式的文档
```

## pre- 和 post- 脚本

```bash
# npm run为每条命令提供了pre-和post-两个钩子（hook）
# 以npm run lint为例，执行这条命令之前，npm会先查看有没有定义prelint和postlint两个钩子
# 如果有的话，就会先执行npm run prelint，然后执行npm run lint，最后执行npm run postlint
# 如果执行过程出错，就不会执行排在后面的脚本，即如果prelint脚本执行出错，就不会接着执行lint和postlint脚本。
```

- 常见的 pre-和 post-脚本。

```bash
# 最后一个npm restart命令，如果没有设置restart脚本，prerestart和postrestart会依次执行stop和start脚本。
# 另外，不能在pre脚本之前再加pre，即prepretest脚本不起作用。
# 注意，即使Npm可以自动运行pre和post脚本，也可以手动执行它们。
prepublish：发布一个模块前执行。
postpublish：发布一个模块后执行。
preinstall：用户执行npm install命令时，先执行该脚本。
postinstall：用户执行npm install命令时，安装结束后执行该脚本，通常用于将下载的源码编译成用户需要的格式，比如有些模块需要在用户机器上跟本地的C++模块一起编译。
preuninstall：卸载一个模块前执行。
postuninstall：卸载一个模块后执行。
preversion：更改模块版本前执行。
postversion：更改模块版本后执行。
pretest：运行npm test命令前执行。
posttest：运行npm test命令后执行。
prestop：运行npm stop命令前执行。
poststop：运行npm stop命令后执行。
prestart：运行npm start命令前执行。
poststart：运行npm start命令后执行。
prerestart：运行npm restart命令前执行。
postrestart：运行npm restart命令后执行。

# 如果安装某些模块，还能支持Git相关的钩子。下面以husky模块为例。
$ npm install husky --save-dev

# 安装以后，就能在package.json添加precommit、prepush等钩子
# "precommit": "npm run test && npm run lint",
# "prepush": "npm run test && npm run lint",

# 类似作用的模块还有pre-commit、precommit-hook等
```

## 内部变量

```bash
# scripts字段可以使用一些内部变量，主要是package.json的各种字段。
# 变量npm_package_version的值是1.2.5
# "bundle": "mkdir -p build/$npm_package_version/"
# 运行npm run bundle以后，将会生成build/1.2.5/子目录

# config字段也可以用于设置内部字段。
# 变量npm_package_config_reporter对应的就是reporte
## "name": "fooproject",
## "config": {
  ## "reporter": "xunit"
## },
## "scripts": {
  ## "test": "mocha test/ --reporter $npm_package_config_reporter"
## }
```

## 通配符

```bash
* 匹配0个或多个字符
? 匹配1个字符
[...] 匹配某个范围的字符。如果该范围的第一个字符是!或^，则匹配不在该范围的字符。
!(pattern|pattern|pattern) 匹配任何不符合给定的模式
?(pattern|pattern|pattern) 匹配0个或1个给定的模式
+(pattern|pattern|pattern) 匹配1个或多个给定的模式
*(a|b|c) 匹配0个或多个给定的模式
@(pattern|pat*|pat?erN) 只匹配给定模式之一
** 如果出现在路径部分，表示0个或多个子目录。
```

## npm link

```bash
# 对于开发中的模块，解决方法就是在全局的node_modules目录之中，生成一个符号链接，指向模块的本地目录。
# npm link就能起到这个作用，会自动建立这个符号链接

# 首先，在模块目录（src/myModule）下运行npm link命令。
src/myModule$ npm link
# 会在NPM的全局模块目录内，生成一个符号链接文件，该文件的名字就是package.json文件中指定的模块名。
/path/to/global/node_modules/myModule -> src/myModule

# 切换到项目目录，再次运行npm link命令，并指定模块名
src/myProject$ npm link myModule
# 上面命令等同于生成了本地模块的符号链接。
src/myProject/node_modules/myModule -> /path/to/global/node_modules/myModule

# 然后，就可以在你的项目中，加载该模块了
var myModule = require('myModule');

# 项目不再需要该模块，可以在项目目录内使用npm unlink命令，删除符号链接
src/myProject$ npm unlink myModule
```

- npm bin

```bash
# npm bin命令显示相对于当前目录的，Node模块的可执行脚本所在的目录（即.bin目录）
# 项目根目录下执行
$ npm bin
./node_modules/.bin
```

## npm adduser 用于在 npmjs.com 注册一个用户。

```bash
$ npm adduser
Username: YOUR_USER_NAME
Password: YOUR_PASSWORD
Email: YOUR_EMAIL@domain.com
```

## npm publish

```bash
# npm publish用于将当前模块发布到npmjs.com
# npm login 命令登录已经注册的账号
# 使用 npm publish 命令发布模块
$ npm publish

# 指定标签，默认的发布标签是latest
# 指定当前模块是一个beta版本
$ npm publish --tag beta

# 发布私有模块
# 只有npm的付费用户才能发布私有模块
$ npm init --scope=<yourscope>

# 如果你的模块是用ES6写的，那么发布的时候，最好转成ES5
# 安装Babel
$ npm install --save-dev babel-cli@6 babel-preset-es2015@6
# 在package.json里面写入build脚本
"scripts": {
  "build": "babel source --presets babel-preset-es2015 --out-dir distribution",
  "prepublish": "npm run build"
}

# 在项目根目录里新建两个文件
// .npmignore
source

// .gitignore
node_modules
distribution
```

## 如果想废弃某个版本的模块，可以使用 npm deprecate 命令

```bash
# 小于0.2.3版本的模块的package.json都会写入一行警告，用户安装这些版本时，这行警告就会在命令行显示。
$ npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

## npm owner

```bash
# 列出指定模块的维护者
$ npm owner ls <package name>

# 新增维护者
$ npm owner add <user> <package name>

# 删除维护者
$ npm owner rm <user> <package name>
```

## 其他命令

- npm home，npm repo

```bash
# npm home命令可以打开一个模块的主页，npm repo命令则是打开一个模块的代码仓库
$ npm home $package
$ npm repo $package
```

- npm outdated

```bash
# npm outdated命令检查当前项目所依赖的模块，是否已经有新版本。
$ npm outdated
```

- npm prune

```bash
# npm prune检查当前项目的node_modules目录中，是否有package.json里面没有提到的模块，然后将所有这些模块输出在命令行。
$ npm prune
```

- npm shrinkwrap

```bash
# npm shrinkwrap的作用是锁定当前项目的依赖模块的版本
# 根目录下生成一个npm-shrinkwrap.json文件，内容是node_modules目录下所有已经安装的模块，以及它们的精确版本。
$ npm shrinkwrap
```

## 发布一个简单的 npm 模块

- 一个简单 npm 模块的创建

```bash
# 创建zxstestnpm文件夹

# 创建package.json文件
{
  "name": "zxstestnpm",
  "version": "1.0.0",
  "description": "my first npm module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "zxswin",
  "license": "ISC"
}

# 创建index.js文件
module.exports = function() {
  console.log('我的第一个npm模块！');
};

```

- npm 发包流程(假设模块已经创建好了)

```bash
# 第一步注册npm账号
# npm账号注册地址：https://www.npmjs.com/signup。

# 第二步登录
# 命令行中输入 npm login

# 发布 npm publish
# 命令行在当前文件夹中，直接输入npm publish既可发布模块
# 若不在当前文件夹中，则需要输入npm publish 你的文件夹名字
npm publish testnpm

# 删除模块
# npm --force unpublish 你的模块名，来删除发布的模块（超过24小时就不能删除了）

## 更新模块
## 可以通过修改package文件中的版本好
## 通过npm publish 命令更新

# 注意要点
# 包的名字被占用了，可以通过访问npm的网站来进行包的搜索该模块是否存在
# npm view 你的模块名，来查看模块是否发布成功
# 登录失败的原因1,修改镜像地址
# npm config set registry https://registry.npmjs.org/

## 关于npm 包的更新问题
## 使用npm update <packName> -S 更新包
## package.json文件中的版本好也会同步更新

## 通过npm i <packName>  重新安装会同时更新package.json文件中的版本号
## 通过npm install 安装依赖的时候会把库中所引用的依赖也一并下载

```

- 使用 npm 包

```bash
# 创建项目
npm init -y
# 安装 npm包
npm i zxstestnpm -S

# 在index.js文件中使用
const zxswin = require('zxstestnpm');
zxswin();

```

## 参考资料

[npm 模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)
