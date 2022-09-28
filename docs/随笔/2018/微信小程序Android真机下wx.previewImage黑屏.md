---
title: 微信小程序Android真机下wx.previewImage黑屏
author: teemwu
date: 2018/07/04 17:04
isPublished: true
categories:
  - 微信小程序
  - 兼容
tags:
---

# 微信小程序Android真机下wx.previewImage黑屏

之前貌似都ok的，可是最近发现Android下一直黑屏，搜了下官方论坛，遇到黑屏的不少。

不过试了都没解决，最后把图片地址http协议改成https协议头预览正常，记录下：

```ini
      wx.previewImage({
        current:‘https开头的图片路径’, // 当前显示图片链接
        urls:[图片路径数组], // 需要预览的图片链接列表
        complete:res=>{
          console.log('pre:',res);
        }
      });


```

　　**注：一定要用网络地址，不能用本地路径。**