# Plex Skipper
使用 Plex Skipper 可以实现在 Plex Web 播放影片时自动跳过片头和片尾（当影片包含片头/片尾标记时），并自动播放下一集（当播放列表中存在下一集时）。

## 运行条件
请确保您已经安装了 [Tampermonkey](https://www.tampermonkey.net/) 或其他用户脚本管理器。

## 脚本安装
方式一（一键安装）
1. 通过本项目在 Greasy Fork 的地址 [Plex Skipper](https://greasyfork.org/zh-CN/scripts/474505-plex-skipper) 一键安装。

方式二（导入安装）
1. 将仓库克隆或下载到计算机上的一个目录中。
2. 打开 Tampermonkey 的「管理面板」，进入「实用工具」，通过「导入」功能选择文件 `plex-skipper.user.js` 进行安装。

## 使用方法
脚本会在您访问以下地址时自动启用，若您需要通过其他地址访问 Plex Web 并使用本脚本，请在 Tampermonkey 的「已安装脚本」中找到「Plex Skipper」，点击后方的「编辑」按钮，将您的「自定义服务器访问地址」按照下面的格式添加至脚本中，并保存脚本，然后刷新您的 Plex Web 页面，Plex Skipper 就可以正常启用了。
```
// @match              https://app.plex.tv/*
// @match              http://localhost:32400/*
// @match              http://127.0.0.1:32400/*
```
脚本启用后会自动检查页面上的「跳过片头」和「跳过片尾」按钮，并在它们出现时自动点击它们，从而实现自动跳过片头和片尾的功能。脚本还会检查「自动播放下一集」的元素是否存在，如果存在，则按下空格键来实现自动播放下一集的功能。

这样，您就可以享受连续观看影片和剧集而不必手动跳过片头和片尾，以及手动选择下一集了。

## 注意事项
- 如果脚本功能未生效，请检查 Plex Skipper 是否已经成功安装并启用。
- 只有当影片存在片头或片尾标记时，您才可以使用 Plex Skipper 实现自动跳过。
<br>

# Plex Skipper
Plex Skipper allows you to automatically skip intros and credits (when the video contains intro/credits markers) and automatically play the next episode (when the next episode exists in the playlist) while playing videos on Plex Web.

## Requirements
Make sure you have installed [Tampermonkey](https://www.tampermonkey.net/) or another user script manager.

## Installation
Option 1 (One-click Install)
1. You can install Plex Skipper with a single click through the Greasy Fork link [Plex Skipper](https://greasyfork.org/zh-CN/scripts/474505-plex-skipper).

Option 2 (Manual Import)
1. Clone or download the repository to a directory on your computer.
2. Open Tampermonkey's "Dashboard", go to "Utilities", and use the "Import from file" feature to select the file `plex-skipper.user.js` for installation.

## Usage
The script will automatically enable itself when you visit the following URLs. If you need to access Plex Web through different URLs and use this script, find "Plex Skipper" in Tampermonkey's "Installed Userscripts", click the "Edit" button, add your "Custom Server Access URLs" in the format shown below to the script, save it, then refresh your Plex Web page to enable Plex Skipper.
```
// @match              https://app.plex.tv/*
// @match              http://localhost:32400/*
// @match              http://127.0.0.1:32400/*
```
Once the script is enabled, it will automatically check for the presence of "Skip Intro" and "Skip Credits" buttons on the page and click them when they appear, enabling automatic skipping of intros and credits. The script will also check if the "Auto Play Next" element exists, if it does, it will press the spacebar to automatically play the next episode.

This way, you can enjoy continuous watching of movies and TV shows without having to manually skip intros and credits or manually select the next episode.

## Notes
- If the script's functionality does not work, ensure that Plex Skipper is installed and enabled.
- Automatic skipping only occurs when video markers for intros and credits are present.
