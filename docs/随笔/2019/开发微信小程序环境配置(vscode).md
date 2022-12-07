---
title: 开发微信小程序环境配置(vscode)
author: teemwu
date: '2019/10/31 12:05'
isPublished: true
categories:
  - 微信小程序
tags: null
wordCount: 171
---

# 开发微信小程序环境配置(vscode)

### 插件
- [minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode)
    微信小程序标签、属性的智能补全（同时支持原生小程序、mpvue 和 wepy 框架，并提供 snippets)
- [wechat-snippet](https://marketplace.visualstudio.com/items?itemName=ChandZhang.wechat-snippet)
    微信小程序代码辅助,代码片段自动完成
- [wepy snippets](https://marketplace.visualstudio.com/items?itemName=wleven.wepy-snippets)
    微信小程序 wepy 框架, wepy 框架代码片段

### 文件解析语言类型设置
 - wxml
    通过 html 进行解析，setting.json 中添加
 ```json
// 禁止内联样式报错
"html.validate.styles": false 
// 强制属性换行对其
"html.format.wrapAttributes": "force-aligned"
```
- wxs
    直接设置 JavaScript 作为解析语言
