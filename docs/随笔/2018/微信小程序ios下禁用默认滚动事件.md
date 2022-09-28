---
title: 微信小程序ios下禁用默认滚动事件
author: teemwu
date: 2018/08/10 18:29
isPublished: true
categories:
  - 微信小程序
  - 兼容
tags:
---

# 微信小程序ios下禁用默认滚动事件

在微信小程序ios下，如果有一个scroll-view滚动列表，开始触摸点点在滚动列表外，向列表里拖拽列表是不会滚动的，这很正常，因为开始触摸点点在了滚动列表外。可是不正常的是ios下会出现“反应不过来”的现象，这很难表述，看下图

![](/public/imgs/2018/08/10/2018081018290.png)

图中view：A用了fixed主要是防止ios下拉时系统自带的 “ 橡皮筋 ” 效果出现。手指从p1点滑动到p2点，scroll-view的滚动事件是不触发的，滑动到p2松开手快速在scroll-view里滑动，正常来说scroll-view内滚动事件已经触发了，可是ios下会出现卡住的现象，scroll-view内滚动事件依旧没触发，应该还是触发了系统的下拉事件。没找到什么好的解决方法，目前解决方法是给view：B的catchtouchmove加个空方法，' catch '是[阻止事件冒泡](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html?search-key=catchtouchmove)。

```
<view class="viewA">
    <view class="viewB" catchtouchmove="handleMove"></view>
    <scroll-view scroll-y></scroll-view>
</view>


```

```ini
handleMove(e){
//不做任何处理
}


```