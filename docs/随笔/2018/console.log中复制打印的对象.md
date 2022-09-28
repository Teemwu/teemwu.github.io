---
title: console.log中复制打印的对象
author: teemwu
date: 2018/10/12 11:07
isPublished: true
categories:
  - Javascript
tags:
---

# console.log中复制打印的对象

在使用console.log()打印我们的内容时，时常需要将打印的内容复制粘贴使用，然而控制台打印出来的对象是经过格式化处理且直接选择粘贴会有格式问题，此时我们可以通过控制台的 **copy()** 方法来进行打印结果的复制，如图所示：

![](/public/imgs/2018/10/12/2018101211070.gif)

当复copy执行完，内容已经放在系统粘贴板中，ctrl+v 粘贴就好。

参考：[https://stackoverflow.com/questions/10305365/javascript-chrome-how-to-copy-an-object-from-the-webkit-inspector-as-code](https://stackoverflow.com/questions/10305365/javascript-chrome-how-to-copy-an-object-from-the-webkit-inspector-as-code)