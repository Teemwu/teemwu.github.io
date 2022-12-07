---
title: 解决微信小程序placeholder文字悬浮问题
author: teemwu
date: '2018/08/16 19:23'
isPublished: true
categories:
  - 微信小程序
tags: null
wordCount: 335
---

# 解决微信小程序placeholder文字悬浮问题

**方法一：**
--------

在弹出层显示时隐藏input或者textarea组件，测试发现只有设置”display:none“才生效，设置"opacity:0"真机测试placeholder的文字依旧存在。当然也可以设置wx:if或hidden来显示隐藏，只不过这些做法都影响布局，不推荐。

后来再想了下，其实可以在隐藏textarea的时候用view来模拟textarea显示内容，这样既不改变布局，也能合理地展示内容。

**方法二：**
--------

通过“[cover-view](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)”组件来写弹出层，不修改placeholder。

官方原话：

> 覆盖在原生组件之上的文本视图，可覆盖的原生组件包括`map`、`video`、`canvas`、`camera`、`live-player`、`live-pusher`，只支持嵌套`cover-view`、`cover-image`，可在`cover-view`中使用`button`。

　这个做法适合在弹出层层级比较单一的时候，倘若弹出层是一个自定义的日历，且日历的每个组件都要使用coever-view，cover-image代替，其渲染性能会大大减弱。（其实picker组件也是可以在cover-view中使用的，具体是将其显示的值用cover-view包裹即可）

**方法三：**
--------

通过控制“placeholder-style"或者”placeholder-class"来设置placeholder的颜色来显示或隐藏placeholder文字。

```
<textarea placeholder-style="color: transparent" placeholder="请输入"/>

```
