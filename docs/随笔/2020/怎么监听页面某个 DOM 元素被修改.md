---
title: 怎么监听页面某个 DOM 元素被修改
author: teemwu
date: 2020/08/14 10:26
isPublished: true
categories:
  - Javascript
tags:
  - 调试
---

# 怎么监听页面某个 DOM 元素被修改

## MutationObserver 监听 DOM 树的改变
> [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 接口提供了监视对DOM树所做更改的能力。它被设计为旧的Mutation Events功能的替代品，该功能是DOM3 Events规范的一部分。

将下面代码加入到 [Tampermonkey](https://www.tampermonkey.net/index.php)，刷新所需监听元素页面，查看断点信息即可查找到对应调用方法。

```javascript
new MutationObserver((mutations, observer) => {
  const el = document.querySelector("your selector")
  if (el != null) {
    observer.disconnect()
    new MutationObserver((mutations, observer) => {
      debugger
    }).observe(el, {childList: true, subtree: true})
  }
}).observe(document, {childList: true, subtree: true})
```
## Chrome 设置断点进行监听

选中需要监听 DOM 元素的父级元素，右击选中 `Break on => subtree moditfications`，断点打上后刷新页面即可。

![](/public/imgs/2020/08/14/2020081410260.png)

- subtree modifications 监听当前元素子级元素变化
- attribute modifications 监听当前元素属性变化
- node removal 监听当前元素被移除
