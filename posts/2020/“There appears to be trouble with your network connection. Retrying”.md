---
title: “There appears to be trouble with your network connection. Retrying”
author: teemwu
date: '2020/06/03 15:42'
isPublished: true
categories:
  - Webpack
  - 报错
tags: null
wordCount: 130
---

# “There appears to be trouble with your network connection. Retrying”

网上很多答案都说是代理问题，不过，设置了代理还是提示这个，后来删除了 `yarn.lock` 文件后重新 yarn 就好了。估计是 yarn.lock 中包的路径有错，所以一直加载失败。出现此问题可能是 npm 和 yarn 混用导致的。当然，也有可能真的是网络问题。

删了 `yarn.lock` 文件依然无效可以试下设置代理镜像
```
yarn config set registry https://registry.npm.taobao.org

```
