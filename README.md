# Web Skipper for Plex <a name="web-skipper-for-plex-zh"></a>
<a href="#web-skipper-for-plex-en">Switch to English</a>

使用 Web Skipper for Plex（下文简称 WSP）可以实现在 Plex Web 上观看视频时自动跳过片头、自动跳过片尾（当项目存在片头或片尾标记时）和自动播放下一个（当播放队列中存在下一个项目时）功能，并且允许你单独设置这三个功能的开关状态。

## 运行条件
安装了 [Tampermonkey](https://www.tampermonkey.net/) 或其他用户脚本管理工具。

## 脚本安装
### 自动安装
1. 通过 Greasy Fork 的 [Web Skipper for Plex](https://greasyfork.org/zh-CN/scripts/474505-web-skipper-for-plex) 页面一键安装。

### 手动安装
1. 通过 [Releases](https://github.com/x1ao4/web-skipper-for-plex/releases) 下载最新版本的压缩包并解压到本地目录中。
2. 打开 Tampermonkey 的 `管理面板`，进入 `实用工具`，通过 `导入` 功能选择文件 `web-skipper-for-plex.user.js` 进行安装。

## 使用方法
WSP 会在你访问以下 URL 时自动启用，若需要通过其他 URL 访问 Plex Web，请在 Tampermonkey 的 `已安装脚本` 中找到 `Web Skipper for Plex`，点击后方的 `编辑` 按钮，将你的 `自定义服务器访问 URL` 按照下面的格式添加到脚本中，然后依次点击 `文件`、`保存`，再刷新 Plex Web 页面即可成功启用 WSP。
```
// @match              https://app.plex.tv/*
// @match              http://localhost:32400/*
// @match              http://127.0.0.1:32400/*
```
WSP 每隔 1 秒会检查一遍页面上是否存在 `跳过片头`、`跳过片尾` 按钮，以及 `开启自动播放` 元素；若存在 `跳过片头` 或 `跳过片尾` 按钮，则会根据用户设置自动点击对应的按钮，自动跳过片头或片尾；若存在 `开启自动播放` 元素，则会在用户开启 `自动播放下一个` 功能时自动按下 `空格` 键，立刻自动播放下一个项目。

自动跳过片头、自动跳过片尾和自动播放下一个功能默认都是开启的，你可以通过点击 Tampermonkey 图标呼出 WSP 的控制面板，单独设置这三个功能的开关状态。

## 注意事项
- 如果脚本功能未生效，请检查 WSP 是否已经成功安装并启用。
- 只有项目存在片头或片尾标记时，你才可以使用 WSP 自动跳过标记。
- `自动播放下一个` 功能仅在勾选了 `开启自动播放` 时生效，开启 `自动播放下一个` 功能后，倒计时会变为 0 秒，也就是立刻播放下一个项目；关闭 `自动播放下一个` 功能后，Plex 依然会在 10 秒倒计时后自动播放下一个项目；若不想自动播放下一个项目，请在 Plex 内取消勾选 `开启自动播放`。
- WSP 的控制面板会根据浏览器的语言设置显示对应语言的翻译，若没有对应的翻译，则会使用英文，默认仅支持简体中文、繁体中文（台湾）和英文；若你希望使用其他语言显示控制面板，可以自己在 `const buttonTexts` 这个部分增加对应的翻译。
- WSP 仅在 Plex Web 处于活动状态时生效（包括全屏状态）。

## 赞赏
如果你觉得这个项目对你有用，可以请我喝杯咖啡。如果你喜欢这个项目，可以给我一个⭐️。谢谢你的支持！

<img width="399" alt="赞赏" src="https://github.com/user-attachments/assets/bdd2226b-6282-439d-be92-5311b6e9d29c">
<br><br>
<a href="#web-skipper-for-plex-zh">回到顶部</a>
<br>
<br>
<br>

# Web Skipper for Plex <a name="web-skipper-for-plex-en"></a>
<a href="#web-skipper-for-plex-zh">切换至中文</a>

With Web Skipper for Plex (hereinafter referred to as WSP), you can automatically skip intros, skip credits (when the item has intro or credits markers), and auto-play the next item (when there is a next item in the play queue) while watching videos on Plex Web. It also allows you to individually set the switch status of these three functions.

## Requirements
Installed [Tampermonkey](https://www.tampermonkey.net/) or other user script manager.

## Installation
### Automatic Installation
1. Install with one click from the [Web Skipper for Plex](https://greasyfork.org/zh-CN/scripts/474505-web-skipper-for-plex) page on Greasy Fork.

### Manual Installation
1. Download the latest release package from [Releases](https://github.com/x1ao4/web-skipper-for-plex/releases) and extract it to a local directory.
2. Open the `Dashboard` in Tampermonkey, go to `Utilities`, and use the `Import from file` function to select the `web-skipper-for-plex.user.js` file for installation.

## Usage
WSP will be automatically enabled when you visit the following URLs. If you need to access Plex Web through other URLs, please find `Web Skipper for Plex` in the `Installed Userscripts` of Tampermonkey, click the `Edit` button in Actions, add your `Custom server access URLs` to the script in the following format, then click `File`, `Save` in order, and refresh the Plex Web page to successfully enable WSP.
```
// @match              https://app.plex.tv/*
// @match              http://localhost:32400/*
// @match              http://127.0.0.1:32400/*
```
WSP will check every second if there are `Skip Intro`, `Skip Credits` buttons, and the `AUTO PLAY ON` element on the page. If the `Skip Intro` or `Skip Credits` buttons are present, it will automatically click the corresponding buttons based on user settings, skipping the intro or credits. If the `AUTO PLAY ON` element is present, it will automatically press the `Space` key to immediately play the next item when the `Auto Play Next` function is enabled.

The functions of auto-skip intro, auto-skip credits, and auto-play next are all turned on by default. You can call up the control panel of WSP by clicking the Tampermonkey icon and set the switch status of these three functions separately.

## Notes
- If the script functions do not work, please check if WSP is successfully installed and enabled.
- You can only use WSP to automatically skip markers if the item has intro or credits markers.
- The `Auto Play Next` function only works when `AUTO PLAY ON` is checked. When `Auto Play Next` is enabled, the countdown will be reduced to 0 seconds, immediately playing the next item. When `Auto Play Next` is disabled, Plex will still automatically play the next item after a 10-second countdown. If you do not want to auto-play the next item, please uncheck `AUTO PLAY ON` in Plex.
- The WSP control panel will display the corresponding language translation based on the browser's language settings. If there is no corresponding translation, it will default to English. The default supported languages are Simplified Chinese, Traditional Chinese (Taiwan), and English. If you want to display the control panel in another language, you can add the corresponding translation in the `const buttonTexts` section.
- WSP only works when Plex Web is active (including fullscreen mode).

## Support
If you found this helpful, consider buying me a coffee or giving it a ⭐️. Thanks for your support!

<img width="399" alt="Support" src="https://github.com/user-attachments/assets/bdd2226b-6282-439d-be92-5311b6e9d29c">
<br><br>
<a href="#web-skipper-for-plex-en">Back to Top</a>
