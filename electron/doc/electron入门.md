# Electron 入门文档

## 打造你的第一个 Electron 应用

- 构建项目

```txt
一个简单的项目结构
your-app/
├── package.json
├── main.js
└── index.html
```

```js
// 构建项目
npm init

// 安装electron
npm install --save-dev electron

```

- 如何重新为 Electron 编译原生模块

```bash
# 安装electron-rebuild
npm install --save-dev electron-rebuild

# 每次运行"npm install"时，也运行这条命令
./node_modules/.bin/electron-rebuild

# 在windows下如果上述命令遇到了问题，尝试这个：
.\node_modules\.bin\electron-rebuild.cmd

# 用法
./node_modules/.bin/electron-rebuild npm install module-name
```

## 开发一个简易的 Electron

- package.json

```json
{
  "name": "electron-demo",
  "version": "0.1.0",
  "description": "electron learn item",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "author": "zxswin",
  "license": "ISC",
  "devDependencies": {
    "electron": "^6.0.1",
    "electron-rebuild": "^1.8.5"
  }
}
```

- main.js

```js
const { app, BrowserWindow } = require('electron')

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win

function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
```

- index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node
    <script>
      document.write(process.versions.node)</script
    >, Chrome
    <script>
      document.write(process.versions.chrome)</script
    >, and Electron
    <script>
      document.write(process.versions.electron)</script
    >.
  </body>
</html>
```

## Electron 应用架构

```js
// 主进程和渲染器进程
// 一个 Electron 应用总是有且只有一个主进程。
//  Electron 使用了 Chromium 来展示 web 页面，所以 Chromium 的多进程架构也被使用到
// 主进程使用 BrowserWindow 实例创建页面。 每个 BrowserWindow 实例都在自己的渲染进程里运行页面。

// 使用Electron API
//  许多API只能被用于主进程或渲染进程中，但其中一些API可以同时在上述两种进程中使用。
// 所有在Node.js可以使用的API，在Electron中同样可以使用。

// 进程间的通讯
// 可以使用ipcRenderer 和 ipcMain模块发送消息，使用 remote模块进行RPC方式通信
```

## 常见问题

- 如何在两个网页间共享数据？

```js
// 其中比较好的方案是用 Storage API， localStorage，sessionStorage 或者 IndexedDB。
// 你还可以用 Electron 内的 IPC 机制实现

// 在主进程中
global.sharedObject = {
  someProperty: 'default value'
}

// 在第一个页面中
require('electron').remote.getGlobal('sharedObject').someProperty = 'new value'

// 在第二个页面中
console.log(require('electron').remote.getGlobal('sharedObject').someProperty)
```

- 为什么应用的窗口、托盘在一段时间后不见了

```js
// 这通常是因为用来存放窗口、托盘的变量被垃圾回收了
const { app, Tray } = require('electron')
app.on('ready', () => {
  const tray = new Tray('/path/to/icon.png')
  tray.setTitle('hello world')
})

// 改为

const { app, Tray } = require('electron')
let tray = null
app.on('ready', () => {
  tray = new Tray('/path/to/icon.png')
  tray.setTitle('hello world')
})
```

- 我在 Electron 中无法使用 jQuery、RequireJS、Meteor、AngularJS。

```js
// 因为 Electron 在运行环境中引入了 Node.js，所以在 DOM 中有一些额外的变量，比如 module、exports 和require。
// 这导致 了许多库不能正常运行，因为它们也需要将同名的变量加入运行环境中。
// 我们可以通过禁用 Node.js 来解决这个问题，在Electron里用如下的方式：

// 在主进程中
const { BrowserWindow } = require('electron')
let win = new BrowserWindow({
  webPreferences: {
    nodeIntegration: false
  }
})
win.show()

// 假如你依然需要使用 Node.js 和 Electron 提供的 API，你需要在引入那些库之前将这些变量重命名，比如：
<head>
<script>
window.nodeRequire = require;
delete window.require;
delete window.exports;
delete window.module;
</script>
<script type="text/javascript" src="jquery.js"></script>
</head>
```

- 文字看起来很模糊

```js
// 在 BrowserWindow的构造器中设置背景：
const { BrowserWindow } = require('electron')
let win = new BrowserWindow({
  backgroundColor: '#fff'
})
```

## Storage API， localStorage，sessionStorage

- sessionStorage

```js
// sessionStorage
// 返回值 : 一个 Storage 对象。
// 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复

// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value')
// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key')
// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key')
// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear()

// 保存input中输入的数据
// 获取文本输入框
let field = document.getElementById('field')
// 检测是否存在 autosave 键值
// (这个会在页面偶然被刷新的情况下存在)
if (sessionStorage.getItem('autosave')) {
  // 恢复文本输入框的内容
  field.value = sessionStorage.getItem('autosave')
}
// 监听文本输入框的 change 事件
field.addEventListener('change', function() {
  // 保存结果到 sessionStorage 对象中
  sessionStorage.setItem('autosave', field.value)
})
```

- localStorage

```js
// localStorage
// 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。
// localStorage 中的键值对总是以字符串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).

// 浏览器中 Window 对象实现了 WindowLocalStorage 和 WindowSessionStorage 对象并挂在其 localStorage 和 sessionStorage 属性下）
// 对于每个源（origin）sessionStorage 和 localStorage 使用不同的 Storage 对象——独立运行和控制。
// Window.sessionStorage 和 Window.localStorage — 它们分别地提供对当前域的会话和本地Storage 对象的访问

// localStorage 中的键值对总是以字符串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).

// 下面的代码片段访问了当前域名下的本地 Storage 对象，并通过 Storage.setItem() 增加了一个数据项目。
localStorage.setItem('myCat', 'Tom')

// 该语法用于读取 localStorage 项，如下:

let cat = localStorage.getItem('myCat')
// 该语法用于移除 localStorage 项，如下:

localStorage.removeItem('myCat')
// 该语法用于移除所有的 localStorage 项，如下:

// 移除所有
localStorage.clear()
```

## 浏览器数据库 IndexedDB

- 概述

```js
// 现有的浏览器数据储存方案，都不适合储存大量数据：Cookie 的大小不超过4KB，且每次请求都会发送回服务器；
// LocalStorage 在 2.5MB 到 10MB 之间（各家浏览器不同），而且不提供搜索功能，不能建立自定义的索引。
// 所以，需要一种新的解决方案，这就是 IndexedDB 诞生的背景。

// 就数据库类型而言，IndexedDB 不属于关系型数据库（不支持 SQL 查询语句），更接近 NoSQL 数据库。

// （1）键值对储存。 IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。
// （2）异步。 IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。
// （3）支持事务。 IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。
// （4）同源限制 IndexedDB 受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。
// （5）储存空间大 IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。
// （6）支持二进制储存。 IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。
```

- 操作

```js
// 打开数据库
// 如果指定的数据库不存在，就会新建数据库。
var request = window.indexedDB.open(databaseName, version)

// 新建数据库
// 数据库新建成功以后，新增一张叫做person的表格，主键是id。
request.onupgradeneeded = function(event) {
  db = event.target.result
  var objectStore
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' })
  }
}

// 新建索引
request.onupgradeneeded = function(event) {
  db = event.target.result
  var objectStore = db.createObjectStore('person', { keyPath: 'id' })
  objectStore.createIndex('name', 'name', { unique: false })
  objectStore.createIndex('email', 'email', { unique: true })
}

// 新增数据指的是向对象仓库写入数据记录。这需要通过事务完成。
function add() {
  var request = db
    .transaction(['person'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })

  request.onsuccess = function(event) {
    console.log('数据写入成功')
  }

  request.onerror = function(event) {
    console.log('数据写入失败')
  }
}

add()

// 读取数据也是通过事务完成。
function read() {
  var transaction = db.transaction(['person'])
  var objectStore = transaction.objectStore('person')
  var request = objectStore.get(1)

  request.onerror = function(event) {
    console.log('事务失败')
  }

  request.onsuccess = function(event) {
    if (request.result) {
      console.log('Name: ' + request.result.name)
      console.log('Age: ' + request.result.age)
      console.log('Email: ' + request.result.email)
    } else {
      console.log('未获得数据记录')
    }
  }
}

read()

// 遍历数据
function readAll() {
  var objectStore = db.transaction('person').objectStore('person')

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result

    if (cursor) {
      console.log('Id: ' + cursor.key)
      console.log('Name: ' + cursor.value.name)
      console.log('Age: ' + cursor.value.age)
      console.log('Email: ' + cursor.value.email)
      cursor.continue()
    } else {
      console.log('没有更多数据了！')
    }
  }
}

readAll()

// 更新数据要使用IDBObject.put()方法。
function update() {
  var request = db
    .transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' })

  request.onsuccess = function(event) {
    console.log('数据更新成功')
  }

  request.onerror = function(event) {
    console.log('数据更新失败')
  }
}

update()

// 删除数据
function remove() {
  var request = db
    .transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(1)

  request.onsuccess = function(event) {
    console.log('数据删除成功')
  }
}

remove()

// 使用索引
objectStore.createIndex('name', 'name', { unique: false })

var transaction = db.transaction(['person'], 'readonly')
var store = transaction.objectStore('person')
var index = store.index('name')
var request = index.get('李四')

request.onsuccess = function(e) {
  var result = e.target.result
  if (result) {
    // ...
  } else {
    // ...
  }
}
```

- 基本概率

```js
// 接口
// 数据库：IDBDatabase 对象
// 对象仓库：IDBObjectStore 对象
// 索引： IDBIndex 对象
// 事务： IDBTransaction 对象
// 操作请求：IDBRequest 对象
// 指针： IDBCursor 对象
// 主键集合：IDBKeyRange 对象
```
