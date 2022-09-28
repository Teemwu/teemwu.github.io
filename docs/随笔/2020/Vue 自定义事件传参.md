---
title: Vue 自定义事件传参
author: teemwu
date: 2020/03/06 15:07
isPublished: true
categories:
  - Vue
tags:
  - vant
  - vue
---

# Vue 自定义事件传参

项目中使用 vant 的上传组件进行文件上传，通过其自定义事件返回要上传文件的同时，想传一个参数到方法里,原生事件使用 $event 就好，而这是自定义事件，不管用。


官方示例：
```html
<van-uploader :after-read="afterRead" />
```
afterRead 方法会默认返回上传的文件 file，而我想同时传一个 id，参考了网上的方法可解

实测管用：
```html
<van-uploader :after-read="file=>afterRead(file,'ID')" />
```
### 参考
[https://github.com/vuejs/vue/issues/5735#issuecomment-438656657](https://github.com/vuejs/vue/issues/5735#issuecomment-438656657)