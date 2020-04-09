# API 参考

## Main Process 模块

- net 模块(主进程)

```js
// net 模块是一个发送 HTTP(S) 请求的客户端API。 它类似于Node.js的HTTP 和 HTTPS 模块 ，但它使用的是Chromium原生网络库来替代Node.js的实现，提供更好的网络代理支持。

app.on('ready', () => {
  const { net } = require('electron')
  const request = net.request('https://github.com')
  request.on('response', response => {
    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    response.on('data', chunk => {
      console.log(`BODY: ${chunk}`)
    })
    response.on('end', () => {
      console.log('No more data in response.')
    })
  })
  request.end()
})
```

- netLog 录会话的网络事件(主进程)

```js
const { netLog } = require('electron')

app.on('ready', async function() {
  netLog.startLogging('/path/to/net-log')
  // After some network events
  const path = await netLog.stopLogging()
  console.log('Net-logs written to', path)
})
```

- powerMonitor(电源监视器)

```js
// Event: 'suspend'
// 在系统挂起时触发。

// Event: 'resume'
// 在系统恢复时触发。

// Event: 'on-ac' Windows
// 当系统变为交流电源时触发。

// Event: 'on-battery' Windows
// 当系统更改为电池电量时触发。

// Event: 'shutdown' Linux macOS
// 当系统即将重启或关机时出发 如果事件调用e.preventDefault(), Electron 将会尝试延迟系统关机，以便 app 完全退出。 如果e.preventDefault()被调用，在调用类似 app.quit() 后，app 会很快地退出。

// Event: 'lock-screen' macOS Windows
// 当系统即将锁定屏幕时触发。

// Event: 'unlock-screen' macOS Windows
// 当系统屏幕解锁，立即触发。
const electron = require('electron')
const { app } = electron

app.on('ready', () => {
  electron.powerMonitor.on('suspend', () => {
    console.log('The system is going to sleep')
  })
})
```

- 省电拦截器 | powerSaveBlocker

```js
// 阻止系统进入低功耗 (休眠) 模式。
// prevent-app-suspension-仅防止应用程序被挂起。保持操作系统处于活动状态, 但允许操作系统关闭屏幕。示例用途包括: 下载文件或播放音频。
// prevent-display-sleep-阻止操作系统关闭显示器，即同时保持系统和屏幕处于活动状态。 示例用途包括: 播放视频。

const { powerSaveBlocker } = require('electron')
const id = powerSaveBlocker.start('prevent-display-sleep')
console.log(powerSaveBlocker.isStarted(id))
powerSaveBlocker.stop(id)
```

- protocol

```js
// 注册自定义协议并拦截基于现有协议的请求
const { app, protocol } = require('electron')
const path = require('path')

app.on('ready', () => {
  protocol.registerFileProtocol(
    'atom',
    (request, callback) => {
      const url = request.url.substr(7)
      callback({ path: path.normalize(`${__dirname}/${url}`) })
    },
    error => {
      if (error) console.error('Failed to register protocol')
    }
  )
})
```

- screen

```js
// 检索有关屏幕大小、显示器、光标位置等的信息。

// 创建填充整个屏幕的窗口的示例:
const electron = require('electron')
const { app, BrowserWindow } = electron

let win

app.on('ready', () => {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({ width, height })
  win.loadURL('https://github.com')
})

// 另一个在外部显示器中创建窗口的例子

const electron = require('electron')
const { app, BrowserWindow } = require('electron')

let win

app.on('ready', () => {
  let displays = electron.screen.getAllDisplays()
  let externalDisplay = displays.find(display => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })

  if (externalDisplay) {
    win = new BrowserWindow({
      x: externalDisplay.bounds.x + 50,
      y: externalDisplay.bounds.y + 50
    })
    win.loadURL('https://github.com')
  }
})
```

- session

```js
// 管理浏览器会话、cookie、缓存、代理设置等。

// session 模块可用于创建新的 session 对象。
// 你还可以使用WebContents的session属性或session模块访问现有页的session

const { BrowserWindow } = require('electron')

let win = new BrowserWindow({ width: 800, height: 600 })
win.loadURL('http://github.com')

const ses = win.webContents.session
console.log(ses.getUserAgent())
```

- 获取 system preferences

```js
// 获取系统首选项
const { systemPreferences } = require('electron')
console.log(systemPreferences.isDarkMode())
```

- 为原生 macOS 应用创建 TouchBar 布局

```js
// 触控板
```

- Tray 系统托盘

```js
// 添加图标和上下文菜单到系统通知区
// Tray 是一个 EventEmitter.

const { app, Menu, Tray } = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('/path/to/my/icon')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
```

- webContents

```js
// 渲染以及控制 web 页面
// webContents 是 EventEmitter 的实例， 负责渲染和控制网页, 是 BrowserWindow 对象的一个属性。 这是一个访问 webContents 对象的例子:

const { BrowserWindow } = require('electron')

let win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('http://github.com')

let contents = win.webContents
console.log(contents)

// 通过webContents模块可以访问以下方法：

const { webContents } = require('electron')
console.log(webContents)
```

## Renderer Process 模块

```js
// 通过[navigator.mediaDevices.getUserMedia] API ，可以访问那些用于从桌面上捕获音频和视频的媒体源信息。
// 从标题为 Electron 的桌面窗口捕获视频
// In the renderer process.
const { desktopCapturer } = require('electron')

desktopCapturer
  .getSources({ types: ['window', 'screen'] })
  .then(async sources => {
    for (const source of sources) {
      if (source.name === 'Electron') {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: source.id,
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720
              }
            }
          })
          handleStream(stream)
        } catch (e) {
          handleError(e)
        }
        return
      }
    }
  })

function handleStream(stream) {
  const video = document.querySelector('video')
  video.srcObject = stream
  video.onloadedmetadata = e => video.play()
}

function handleError(e) {
  console.log(e)
}
```

- ipcRenderer

```js
// ipcRenderer 是一个 EventEmitter 的实例。 你可以使用它提供的一些方法从渲染进程 (web 页面) 发送同步或异步的消息到主进程。 也可以接收主进程回复的消息。
```

- remote 在渲染进程中使用主进程模块。

```js
// 进程: 渲染进程
// remote 模块为渲染进程（web页面）和主进程通信（IPC）提供了一种简单方法。
// 例如：从渲染进程创建浏览器窗口
// 反过来（如果需要从主进程访问渲染进程），可以使用 webContents. executeJavascript 。

const { BrowserWindow } = require('electron').remote
let win = new BrowserWindow({ width: 800, height: 600 })
win.loadURL('https://github.com')
```

- webFrame

```js
// 自定义渲染当前网页
// 将当前页缩放到200% 的示例。

const { webFrame } = require('electron')
webFrame.setZoomFactor(2)
```

## 两种进程都可用的模块

- clipboard 剪贴板

```js
// 剪贴板在系统剪贴板上执行复制和粘贴操作。
const { clipboard } = require('electron')
clipboard.writeText('Example String')
```

- crashReporter 崩溃日志报告

```js
// 崩溃日志报告

const { crashReporter } = require('electron')

crashReporter.start({
  productName: 'YourName',
  companyName: 'YourCompany',
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: true
})
```

- 使用 PNG 或 JPG 文件创建托盘、dock 和应用程序图标。

```js

// 例如, 创建托盘或设置窗口图标时, 你可以传递 String 格式的图片路径

const { BrowserWindow, Tray } = require('electron')
const appIcon = new Tray('/Users/somebody/images/icon.png')
let win = new BrowserWindow({ icon: '/Users/somebody/images/window.png' })
console.log(appIcon, win)Copy

// 或者从剪贴板中读取返回 NativeImage 的图像:
const { clipboard, Tray } = require('electron')
const image = clipboard.readImage()
const appIcon = new Tray(image)
console.log(appIcon)
```

- shell 模块提供与桌面集成相关的功能

```js
// 在用户的默认浏览器中打开 URL 的示例:

const { shell } = require('electron')

shell.openExternal('https://github.com')
```
