---
title: 正则表达式批量替换路径(vscode)
author: teemwu
date: 2019/04/11 18:29
isPublished: true
categories:
  - VS Code
tags:
  - vscode
---

# 正则表达式批量替换路径(vscode)

由于项目文件目录整改，需要将文件中所有的引用路径进行更改，比较快捷的方法便是使用 vscode 的正则匹配进行批量查找、替换。

原本文件路径为 `../../assets/图片名.png`

现在想改为 `../../assets/img/图片名.png`

查找的正则表达式：`..\/assets\/(.*).png`

替换的表达式：`../assets/img/$1.png`

![](/public/imgs/2019/04/11/2019041118290.png)

可能存在的问题，vscode 会提示开启开启 PCRE2 搜索引擎，在设置中开启即可。