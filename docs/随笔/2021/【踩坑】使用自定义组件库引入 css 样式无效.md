---
title: 【踩坑】使用自定义组件库引入 css 样式无效
author: teemwu
date: 2021/06/03 16:59
isPublished: true
categories:
  - Webpack
tags:
---

# 【踩坑】使用自定义组件库引入 css 样式无效

自行开发 vue 组件库，为了节省写打包配置的时间，使用 vue-sfc-rollup 傻瓜式生成打包配置，组件库发布后使用 npm 包时发现通过 import 'packageName/dist/xxx.css' 不能引入 css 样式，一开始以为是 vue 项目打包配置有问题，各种排查，由于无报错提示，尝试了引入其它第三方组件库，是能正常引入样式的。后来对比了 package.json 文件，发现 sideEffects 这一配置
```json
  "sideEffects": false,
```
其含义表明整个工程是"无副作用"的”，而正常来说项目中肯定会包含一些“副作用”的文件，如 import 'xxx' 就是有副作用，故不能设置为 false，将其删除或者设置具体的排除名单，具体可见参考。

### 参考

- [https://github.com/yinxin630/blog/issues/23](https://github.com/yinxin630/blog/issues/23)