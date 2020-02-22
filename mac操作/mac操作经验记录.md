# mac 操作经验记录

- 系统偏好设置

```bash
# 设置外接键盘
一开始需要做识别校验
然后在键盘设置中设置对应的修饰键

# 键盘大写按键caps-lock需要长按0.5秒才能锁定大写 且可以通过该键实现中英文输入法的快速切换
# 默认触控板不支持点选和双击需要在设置-鼠标设置中进行设置
# 鼠标滚轮方向和win不一样需要取消勾选自然方向设置项
# 设置屏幕色温
通过设置-显示器设置

```

- 常用快捷方式

```bash
command + c 复制
command + v 粘贴
command + x 剪切
```

- 软件的安装

```bash
# 软件的安装
# 通关app store安装
官方推荐安装方式,但是软件少,且部分功能被限制

# 通关下载第三方软件安装
第一步打开终端输入指令:sudo spctl --master-disable
第二步需要在设置系统偏好里设置 -> 隐私与安全 -> 允许从以下位置下载的运用中选中任何来源
第三步下载第三方软件包,如果是.app后缀名的直接拖道运用程序的文件夹中完成安装
如果是.dmg的镜像文件直接双击即可自动安装到运用程序中

# 安装xcode
在终端中输入: xcode-select --install
# 通过brew安装
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
安装谷歌浏览器示例: brew cask install google-chrome
# 查看软件安装位置
访达 -> 运用程序(所有软件均安装在这里)

```

- 软件的卸载

```bash
# 在运用程序文件夹找找到对应软件 右键选中移除到废纸篓即可
```

## git 的使用

```bash

```

## VSCODE 设置

```bash
# 菜单字体大小设置
查看 -> 放到
# 编辑器字体大小控制
首选项 -> 设置
# 安装Prettier - Code formatter 美化代码
settings.json文件配置如下
{
  "editor.fontSize": 16,
  "window.zoomLevel": 1,
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.formatOnPaste": true
}
```

## 单词

```pug
brew 酿造
cask 木桶
command 命令
```
