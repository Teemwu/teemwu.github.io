---
title: Parsing error Expression expected.
author: teemwu
date: '2020/04/30 11:57'
isPublished: true
categories:
  - 报错
tags:
  - eslint
wordCount: 260
---

# Parsing error Expression expected.

之前的项目模块拷贝粘贴到现有项目中， eslint 报 "Parsing error: Expression expected. " 错误，网上没找到解决方法，自己摸索一番已解决。
```javascript
    // 省略无用代码...
    hammer.on('doubletap', e => {
      const c = this.rawCenter(e)
      this.zoomAround(2, c.x, c.y)
    })
    // 省略无用的代码
```
编辑器在 `const` 处提示报错， 将花括号里的代码提取到单独的函数中，再引用此函数此处提示就好了吧。。。
```javascript
  // 省略无用代码...
  doubletapHandle(e) {
    const c = this.rawCenter(e)
    this.zoomAround(2, c.x, c.y)
  }
  hammer.on('doubletap', e => this.doubletapHandle(e))
  // 省略无用的代码
```
不过，后面省略处的代码继续报此错误，可是后面的代码反复查看都是没有错的，那只有一种可能，eslint 在某行监测到错误，然而不知道啥原因没有显示那一行的错误，反而在后面无错代码上提示报错了！

***最终解决方法：将代码都注释掉，一行一行找错，Good Luck To You ！***
