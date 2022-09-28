---
title: The process cannot access the file because it is being used by another process
author: teemwu
date: 2019/04/09 18:06
isPublished: true
categories:
  - Electron
tags:
  - electron
---

# The process cannot access the file because it is being used by another process

在用 electron-builder 打包时，时常会出现 “The process cannot access the file because it is being used by another process.” 这个报错，字面意思是因另外一个进程在使用文件，所以现在不能操作此文件。报错如图：

![](/public/imgs/2019/04/09/2019040918060.png)

由于这个报错是偶尔发生的，排除了很久才解决，故做下笔记。

### 网上的方法

vscode "设置" 里排除掉 "win-unpacked" 文件夹的监测

```json
{
  "files.watcherExclude": {
    "**/build/win-unpacked/**": true
  }
}
````
理由是 vscode 会检测项目文件的变化，然而按照此方法设置了依旧还是会报错。所以根本原因不在此。。

### 解决

***不要启用 “live server” 插件！***

因为项目要做自动更新，图个方便，开启了 “live server” 服务，由于此插件就像一个服务器，已开启就会检测项目的根目录，开启后，即使再关闭，其检测文件的进程依旧存在，这是就需要重启 vscode 了。