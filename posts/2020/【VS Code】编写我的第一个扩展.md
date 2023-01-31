---
title: 【VS Code】编写我的第一个扩展
author: teemwu
date: '2020/04/16 22:10'
isPublished: false
categories: null
tags:
  - vscode
wordCount: 440
---

# 【VS Code】编写我的第一个扩展

# 前言
 
使用 vscode 不知不觉已经有一年多了，不断丰富的 vscode 插件给自己提高了不少工作效率，随着自身对此工具的深入使用，发现有些插件和功能还是不能满足自身开发的需求的。比如，为了少写些代码，就需要各种 snippet 插件，当然，你可以在本地自建一个 snippet 使用。本着饮水思源的原则及现有不满足自身需求的是前提，决定自己来写一个 snippet 插件并发布到线上插件库，好啦，我们开始吧。

# 基础环境

1. 必备 node，git 想必这些你都准备好了（没准备的，自行谷歌之。。）
2. 安装 (Yeoman)[https://yeoman.io/] 和 (VS Code Extension Generator)[https://www.npmjs.com/package/generator-code]

# 安装

```
npm install -g yo generator-code

```

运行 `yo code` 根据自己所需，选择脚手架类型，这里我选 ‘Code Snippet’

![](/public/imgs/2020/04/16/2020041622100.png)


填写完信息，脚手架就创建完成啦，需要注意的是不要和自己下载的扩展重名，否则会报错。

![](/public/imgs/2020/04/16/2020041622101.png)

# 编写

其实 snippet 扩展和我们本地创建 snippet 代码块自己使用差不多，只是多了打包发布到扩展市场而已。我们要做的是生成 snippet 代码块的 json 文件，格式如下：

```json
{
  "anchor": {
    "prefix": "ianchor",
    "scope": "vue, html, vue-html",
    "body": [
      "<Anchor show-ink>",
      "  <AnchorLink href=\"#$1\" title=\"$2\" />",
      "</Anchor>"
    ],
    "description": "iview anchor"
  },
  // ...
}
```

具体项目目录结构和实现方法，可参考我写的 [例子](https://github.com/Teemwu/iview-snippet)

# 调试

VS Code 打开你的扩展项目直接按 F5 键进入调试，或者在菜单栏》Run》Start Debugging

# 打包发布
























# 参考

- https://code.visualstudio.com/api/get-started/your-first-extension
