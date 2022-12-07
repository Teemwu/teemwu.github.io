---
title: Wepy 格式化和语法高亮(vscode)
author: teemwu
date: '2020/03/16 17:11'
isPublished: true
categories:
  - 微信小程序
  - 报错
tags: null
wordCount: 154
---

# Wepy 格式化和语法高亮(vscode)


wepy2.0 使用了 config 标签，用旧的方法解析可能会有问题，故推荐禁用 vetur 扩展，安装第三方 [Wepy](https://marketplace.visualstudio.com/items?itemName=mengj.wepy) 扩展

***

今天修改一个比较早的小程序项目，项目使用的是 wepy 1.x 框架，打开项目代码中直接各种标红警告，看了下发现是 vetur 扩展的报错，setting 中直接配置 vetur 即可。
```json
// .vscode/setting.json
{
    "files.associations": {
        "*.wpy": "vue"
    },
    "vetur.completion.autoImport": false,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "prettier-eslint",
    "vetur.validation.template": false,
    "vetur.validation.style": false,
    "vetur.validation.script": false
}
```
