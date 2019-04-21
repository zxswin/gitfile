# vscode 中调试 js 代码

## .vscode 文件夹 及 launch.json 配置文件的生成

- 生成 launch.json 文件

```bash
# 软件会自动生成该文件
打开软件最左边的调试按钮 -> 点击设置(打开launch.json文件) ->选择环境(Node.js)
```

- 配置 launch.json 文件

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Electron Main",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "program": "${workspaceFolder}/main.js"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}"
    }
  ]
}
```

## vscode 中启动代码调试程序

```bash
1.打开你要调试的文件
2.点击 左侧调试图标
3.选择要调试的选项(在launch.json中已经设置"name" 字段)
4.点击绿色的三角形启动按钮开启调试
5.开启调试后下方会蓝色状态条变为橙色后等调试结果出现则恢复为蓝色
6.调试快捷键为F5;
```

## 调试工具栏的使用

```bash
在调试程序结束并输出结果后改工具栏会消失(为悬浮的可拖动状态)
Continue / Pause F5  - 继续
Step Over F10        - 跳过
Step Into F11        - 进入代码块
Step Out Shift+F11   - 跳出代码块
Restart Ctrl+Shift+F5 - 重新开始
Stop Shift+F5 - 停止
```

## 使用断点调试程序

- 普通断点调试

```bash
在代码编辑区左边打上断点
左侧面包断点栏显示你所打的断点
点击启动按钮 开启调试断点
```

- 编辑记录点 记录消息调试

```bash
1.在断点处右键选择编辑记录点 选中记录信息
表达式
命中次数
记录信息 √

2.调试实例
let a = change(10);
let b = change(20);
let c = change(30);

function change(v) {
  v += 10;
  return v;
}
编辑表达式并按enter 退出则按esc
fun({v}):{v}

2.启动调试程序
调试控制台将会输出
fun(20):20
fun(30):30
fun(40):40
```

- 程序变量查看

```bash
可以通过在程序中鼠标移动到对应的变量上方显示变量的当前值
也可以通过右侧面板中的变量面板查看this下的所有变量的当前值
```

## 调试 typescript 文件

- 安装相关依赖

  > npm install -D ts-node
  > npm install -D typescript

- launch.json

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}"
    },
    {
      "name": "Launch index.html",
      "type": "chrome",
      "request": "launch",
      "file": "${workspaceFolder}/index.html"
    },
    {
      "name": "ts:debug",
      "type": "node",
      "request": "launch",
      "args": ["-r", "ts-node/register", "${relativeFile}"]
    }
  ]
}
```
