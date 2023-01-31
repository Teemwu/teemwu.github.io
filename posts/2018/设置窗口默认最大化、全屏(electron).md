---
title: 设置窗口默认最大化、全屏(electron)
author: teemwu
date: '2018/12/11 09:47'
isPublished: true
categories:
  - Electron
tags:
  - electron
wordCount: 95
---

# 设置窗口默认最大化、全屏(electron)

### 一、默认最大化

```coffee
win = new BrowserWindow({show: false})
win.maximize()
win.show()

```

### 二、默认全屏

```
win = new BrowserWindow({fullscreen: true})

```

**参考：**

1.  [https://electronjs.org/docs/api/browser-window#browserwindow-setfullscreen-flag](https://electronjs.org/docs/api/browser-window#browserwindow-setfullscreen-flag)
2.  [https://github.com/electron/electron/issues/7076](https://github.com/electron/electron/issues/7076)
3.  [https://stackoverflow.com/questions/39062131/electron-set-fullscreen-onclick](https://stackoverflow.com/questions/39062131/electron-set-fullscreen-onclick)
