---
title: 小程序 - Unexpected token 'var'
author: teemwu
date: 2021/08/18 18:40
isPublished: true
categories:
  - 微信小程序
  - 报错
tags:
---

# 小程序 - Unexpected token 'var'

## 问题
使用 uglify 对 wxs 文件进行压缩后开发者工具报的错，原因是压缩后 wxs 中 for 语句合并了其它变量。
```javascript
  // 压缩前
  var obj = {}
  for (var i = 0;i < args.length;i++) {
        obj['key' + i] = args[i];
  }
  // 压缩后
  ﻿for (var obj = {}, i = 0;i < args.length;i++) {
        obj['key' + i] = args[i];
  }
```
目前 wxs 的 for 语法不像 JavaScript 那样支持在括号中声明多个变量，或许后面会完善 wxs 的语法吧，目前挺坑的。
## 解决
根据 [uglify 的配置信息](https://github.com/mishoo/UglifyJS#compress-options) 可知，将 `join_vars` 属性设置为 false 即可。
```javascript
  compress: {
    join_vars: false // 禁止合并 var
  }
```
也可以将 obj 变量放在 for 后面，或者隔着一个表达式或者语句放在 for 前面。