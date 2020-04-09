# electron 指南

## 指南：开始使用 Electron

- 配置开发环境

```bash
根据不同的操作系统安装对应的node长期支持版本 并检查是否安装成功
# 下面这行的命令会打印出Node.js的版本信息
node -v
# 下面这行的命令会打印出npm的版本信息
npm -v
```

- 打造你的第一个 Electron 应用

```js
// 具体可以参考入门文档
const electron = require('electron')Copy
// electron 模块所提供的功能都是通过命名空间暴露出来的。
// 比如说： electron.app负责管理Electron 应用程序的生命周期， electron.BrowserWindow类负责创建窗口

```

- 模板和命令行界面

```bash
# 运用开发的主流工具类
## Electron Forge
Electron Forge 是一个用来构建现代化Electron应用的完善的工具。
Electron Forge将多个现有的（ 且有稳定维护的 ）Electron构建工具整合为一个简单易用的工具包，所有人都可以用它来快速地搭建Electron开发环境。
Forge 将一些流行框架整合为“开箱即用”的模板，比如：React、Vue、Angular等

## Electron Builder
Electron Builder 是一个完备的Electron应用打包和分发解决方案，它致力于软件开发的集成体验。
electron-builder 会将Electron维护者使用的模块和功能(例如: auto-updater) 替换为自定义的. Electron Builder打包的应用内组件的集成度会更高，同时与主流的Electron应用共同点也就更少了。

## electron-react-boilerplate
electron-react-boilerplate
如果你不希望任何工具，而想要简单地从一个模板开始构建，CT Lin的 electron-react-boilerplate 可能值得一看

```

- Electron 应用架构

```bash
主进程使用 BrowserWindow 实例创建页面。 每个 BrowserWindow 实例都在自己的渲染进程里运行页面。
当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。
Electron 的用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些底层交互。
主进程管理所有的web页面和它们对应的渲染进程。 每个渲染进程都是独立的，它只关心它所运行的 web 页面。

# 主进程
Electron 运行 package.json 的 main 脚本的进程被称为主进程。 在主进程中运行的脚本通过创建web页面来展示用户界面。
一个 Electron 应用总是有且只有一个主进程。

# 渲染进程
每个 Electron 中的 web 页面运行在它自己的渲染进程中。
在页面中调用与 GUI 相关的原生 API 是不被允许的
如果你想在 web 页面里使用 GUI 操作，其对应的渲染进程必须与主进程进行通讯，请求主进程进行相关的 GUI 操作。

# 使用Electron的API
const electron = require('electron')
许多API只能被用于主进程或渲染进程中，但其中一些API可以同时在上述两种进程中使用。

Electron中的窗口是使用BrowserWindow类型创建的一个实例， 它只能在主进程中使用。

// 这样写在主进程会有用，但是在渲染进程中会提示'未定义'
const { BrowserWindow } = require('electron')
const win = new BrowserWindow()

# 进程之间的通信
渲染进程可以调用主进程来执行任务。
Electron通过remote模块暴露一些通常只能在主进程中获取到的API。

//这样写在渲染进程中时行得通的，但是在主进程中是'未定义'
const { remote } = require('electron')
const { BrowserWindow } = remote

const win = new BrowserWindow()

# 使用 Node.js 的 API
所有在Node.js可以使用的API，在Electron中同样可以使用。 在Electron中调用如下代码是有用的：

const fs = require('fs')
const root = fs.readdirSync('/')
// 这会打印出磁盘根级别的所有文件
// 同时包含'/'和'C:\'。
console.log(root)
```

- 为你的应用添加功能

```bash

# 通知
Electron允许开发者使用 HTML5 Notification API 发送通知，并使用当前运行的操作系统的本地通知 API 来显示它。
注意: 由于这是一个 HTML5 API，它只能在渲染器进程中使用。 如果你想在主进程中显示通知，请查看 Notification 模块.
let myNotification = new Notification('标题', {
  body: '通知正文内容'
})

myNotification.onclick = () => {
  console.log('通知被点击')
}

Electron尝试将应用程序用户模型 ID 的相关工作自动化。 Electron在和安装和更新框架 Squirrel 协同使用的时候，快捷方式将被自动正确的配置好。
也可以使用各大操作系统原生的系统通知API实现通知功能

# 最近文档
Windows 和 macOS 分别通过打开跳转列表（JumpList）和dock菜单使应用程序能够快速的访问最近打开的文档列表。
若要增加一个文件到最近文件列表，你可以使用app.addRecentDocument API:

const { app } = require('electron')
app.addRecentDocument('/Users/USERNAME/Desktop/work.type')Copy
你也可以使用 app.clearRecentDocuments API 来清空最近文件列表。

const { app } = require('electron')
app.clearRecentDocuments()


# 任务栏的进度条
三个系统中都是用相同的API - setProgressBar() 方法是 BrowserWindows 的方法。 是用 0 到 1 之间的数字来表示你的进度。
一般来说，将参数设置为 0 以下的值（例如 -1）将会去掉进度条，而设置为 1 以上（例如 2）将会切换这个进度条为不确定的进度。
const { BrowserWindow } = require('electron')
const win = new BrowserWindow()
win.setProgressBar(0.5)

# 设置自定义的dock菜单, 可以使用 app.dock.setMenu API, 它仅在 macOS 上可用
const { app, Menu } = require('electron')

const dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Window',
    click () { console.log('New Window') }
  }, {
    label: 'New Window with Settings',
    submenu: [
      { label: 'Basic' },
      { label: 'Pro' }
    ]
  },
  { label: 'New Command...' }
])

app.dock.setMenu(dockMenu)

# 弹出列表
你可以使用 app.setUserTasks API 来设置你的应用中的用户任务：

const { app } = require('electron')
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])
调用 app.setUserTasks 并传入空数组就可以清除你的任务列表：

const { app } = require('electron')
app.setUserTasks([])

# 缩略图工具栏
你可以使用 BrowserWindow.setThumbarButtons 来设置你的应用的缩略图工具栏。
const { BrowserWindow } = require('electron')
const path = require('path')
const win = new BrowserWindow()
win.setThumbarButtons([
  {
    tooltip: 'button1',
    icon: path.join(__dirname, 'button1.png'),
    click () { console.log('button1 clicked') }
  }, {
    tooltip: 'button2',
    icon: path.join(__dirname, 'button2.png'),
    flags: ['enabled', 'dismissonclick'],
    click () { console.log('button2 clicked.') }
  }
])

调用 BrowserWindow.setThumbarButtons 并传入空数组即可清空缩略图工具栏：
const { BrowserWindow } = require('electron')
const win = new BrowserWindow()
win.setThumbarButtons([])

# 任务栏中的图标叠加
要设置窗口的叠加层图标，可以使用 BrowserWindow.setOverlayIcon API:
const { BrowserWindow } = require('electron')
let win = new BrowserWindow()
win.setOverlayIcon('path/to/overlay.png', 'Description for overlay')

# 闪烁框
要在 BrowserWindow 的任务栏按钮突出显示，可以使用 BrowserWindow.flashFrame API:
const { BrowserWindow } = require('electron')
let win = new BrowserWindow()
win.once('focus', () => win.flashFrame(false))
win.flashFrame(true)

# 快捷键
本地快捷键
const { Menu, MenuItem } = require('electron')
const menu = new Menu()

menu.append(new MenuItem({
  label: 'Print',
  accelerator: 'CmdOrCtrl+P',
  click: () => { console.log('time to print stuff') }
}))

为不同的操作系统提供不同的快捷键
{
  accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Ctrl+Shift+I'
}

全局快捷键
当应用程序不处于焦点状态时，你可以使用 globalShortcut 模块来检测键盘事件，

const { app, globalShortcut } = require('electron')

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })
})

在浏览器窗口内的快捷方式
如果你想处理 BrowserWindow中的键盘快捷键，你可以监听渲染进程中 window 对象的 keyup 和 keydown 事件。
window.addEventListener('keyup', doSomething, true)
注意第三个参数 true，这意味着当前监听器总是在其他监听器之前接收按键，以避免其它监听器调用 stopPropagation()

如果您不想手动进行快捷键解析，可以使用一些库来进行高级的按键检测。例如 mousetrap.
Mousetrap.bind('4', () => { console.log('4') })
Mousetrap.bind('?', () => { console.log('show shortcuts!') })
Mousetrap.bind('esc', () => { console.log('escape') }, 'keyup')

// 组合
Mousetrap.bind('command+shift+k', () => { console.log('command shift k') })

// 将多个组合映射到相同的回调
Mousetrap.bind(['command+k', 'ctrl+k'], () => {
  console.log('command k or control k')

  // 返回 false 以防止默认行为，并阻止事件冒泡
  return false
})

//  gmail 风格序列
Mousetrap.bind('g i', () => { console.log('go to inbox') })
Mousetrap.bind('* a', () => { console.log('select all') })

// konami 代码
Mousetrap.bind('up up down down left right left right b a enter', () => {
  console.log('konami code')
})

# 在线/离线事件探测
是通过标准 HTML5 API 中 navigator.onLine 属性来实现的。 脱机时 (从网络断开), navigator.onLine 属性将返回 false， 除此之外都返回true 。
main.js
const { app, BrowserWindow } = require('electron')
let onlineStatusWindow
app.on('ready', () => {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(`file://${__dirname}/online-status.html`)
})

online-status.html
<!DOCTYPE html>
<html>
<body>
<script>
  const alertOnlineStatus = () => {
    window.alert(navigator.onLine ? 'online' : 'offline')
  }

  window.addEventListener('online',  alertOnlineStatus)
  window.addEventListener('offline',  alertOnlineStatus)

  alertOnlineStatus()
</script>
</body>
</html>

主进程没有 navigator 对象因此不能直接探测在线还是离线。 使用 Electron 的进程间通讯工具，事件就可以在主进程被使用
main.js
const { app, BrowserWindow, ipcMain } = require('electron')
let onlineStatusWindow

app.on('ready', () => {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(`file://${__dirname}/online-status.html`)
})

ipcMain.on('online-status-changed', (event, status) => {
  console.log(status)
})

online-status.html
<!DOCTYPE html>
<html>
<body>
<script>
  const { ipcRenderer } = require('electron')
  const updateOnlineStatus = () => {
    ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline')
  }

  window.addEventListener('online',  updateOnlineStatus)
  window.addEventListener('offline',  updateOnlineStatus)

  updateOnlineStatus()
</script>
</body>
</html>

# 在 macOS，一个窗口可以设置它展示的文件，文件的图标可以出现在标题栏
当用户 Command-Click 或者 Control-Click 标题栏，文件路径弹窗将会出现。
要设置展示文件窗口，可以使用 BrowserWindow.setRepresentedFilename 和 BrowserWindow.setDocumentEdited APIs：

const { BrowserWindow } = require('electron')

const win = new BrowserWindow()
win.setRepresentedFilename('/etc/passwd')
win.setDocumentEdited(true)

# 原生文件拖放
在 Render 进程中, 接收 ondragstart 事件并发送消息到 Main 进程。
<a href="#" id="drag">item</a>
<script type="text/javascript" charset="utf-8">
  document.getElementById('drag').ondragstart = (event) => {
    event.preventDefault()
    ipcRenderer.send('ondragstart', '/path/to/item')
  }
</script>

然后, 在主进程中，接收拖拽过来的文件路径和在拖拽过程中要显示的图标。
const { ipcMain } = require('electron')

ipcMain.on('ondragstart', (event, filePath) => {
  event.sender.startDrag({
    file: filePath,
    icon: '/path/to/icon.png'
  })
})

# 离屏渲染
离线渲染允许您在位图中获取浏览器窗口的内容，因此可以在任何地方渲染，例如在3D场景中的纹理。
用法：
const { app, BrowserWindow } = require('electron')
app.disableHardwareAcceleration()
let win
app.once('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      offscreen: true
    }
  })

  win.loadURL('http://github.com')
  win.webContents.on('paint', (event, dirty, image) => {
    // updateBitmap(dirty, image.getBitmap())
  })
  win.webContents.setFrameRate(30)
})

# 支持 macOS 深色模式
如果你的应用本身就有黑暗模式，那么你需要跟系统同步他的开与关。 你可以通过监听 Electron 的 systemPreferences 模块上的主题变更事件来实现。 如下:
const { systemPreferences } = require('electron')
systemPreferences.subscribeNotification(
  'AppleInterfaceThemeChangedNotification',
  function theThemeHasChanged () {
    updateMyAppTheme(systemPreferences.isDarkMode())
  }
)

```

- 辅助功能

```bash
# 主要用于代码测试
在测试框架Spectron中，你可以审查应用程序中的每个window和<webview>标签。例如：
app.client.auditAccessibility().then(function (audit) {
  if (audit.failed) {
    console.error(audit.message)
  }
})

Devtron
在 Devtron 中, 有一个新的辅助功能选项卡, 允许您对应用程序中的某一个页面进行审核, 并对审核结果进行排序和筛选。


# 开启辅助功能
由于性能原因, Electron应用程序在默认情况下禁用了辅助功能, 不过你可以通过多种方法启用它们。
通过使用 app.setAccessibilitySupportEnabled(enabled), 可以在应用程序首选项中向用户开放辅助功能的开关。 用户的系统的辅助实用程序优先于此设置, 并将覆盖它。

# 在 macOS 上, 在Electron应用中，可以通过 AXManualAccessibility来切换第三方的辅助功能：

CFStringRef kAXManualAccessibility = CFSTR("AXManualAccessibility");

+ (void)enableAccessibility:(BOOL)enable inElectronApplication:(NSRunningApplication *)app
{
    AXUIElementRef appRef = AXUIElementCreateApplication(app.processIdentifier);
    if (appRef == nil)
        return;

    CFBooleanRef value = enable ? kCFBooleanTrue : kCFBooleanFalse;
    AXUIElementSetAttributeValue(appRef, kAXManualAccessibility, value);
    CFRelease(appRef);
}
```

- 测试和调试

```bash
# 渲染进程调试
const { BrowserWindow } = require('electron')

let win = new BrowserWindow()
win.webContents.openDevTools()

# 主进程调试
Electron 提供了 --inspect 和 --inspect-brk 开关。

--inspect=[port]
当这个开关用于 Electron 时，它将会监听 V8 引擎中有关 port 的调试器协议信息。 默认的port 是 5858
electron --inspect=5858 your/app

--inspect-brk=[port]
和--inspector 一样，但是会在JavaScript 脚本的第一行暂停运行。

外部调试器
你需要使用一个支持 V8 调试协议的调试器
通过访问 chrome://inspect 来连接 Chrome 并在那里选择需要检查的Electron 应用程序。

# 使用 VSCode 进行主进程调试
# 使用 Selenium 和 WebDriver

```

- 运用部署/分发

```bash
# 代码打包发布
为了使用 Electron 部署你的应用，您需要进行打包和重塑。这样做的最简单的方法是使用以下第三方打包工具之一：
electron-forge
electron-builder
electron-packager
这些工具将覆盖发布一个Electron应用所需采取的所有步骤，例如，打包应用程序，重组可执行程序，设置图标和可配置的创建安装程序。
# 代码签名
```
