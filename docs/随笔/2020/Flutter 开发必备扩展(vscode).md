---
title: Flutter 开发必备扩展(vscode)
author: teemwu
date: '2020/04/12 10:20'
isPublished: true
categories:
  - VS Code
  - Flutter
tags:
  - vscode
wordCount: 387
---

# Flutter 开发必备扩展(vscode)

### Dart
VS Code 对 dart 语言的支持，初次打开会提示安装，选择安装即可。

### Flutter
运行 Flutter 项目必须，和 dart 一样，初次用 VS Code 打开 Flutter 项目会提示安装，选安装即可。

### Flutter tree
通过简单的语法，自动快速构建 widget 树，有点像前端 Emmet。 
![](/public/imgs/2020/04/12/2020041210200.gif)

### Pubspec Assist
在 pubspec.yaml 文件下快速搜索、添加需要安装项目所需要的依赖，不必打开浏览器去获取插件和插件版本信息。
![](/public/imgs/2020/04/12/2020041210201.gif)

### Awesome Flutter Snippets
Flutter 常用类和方法的代码集合，通过简短的输入即可自动填充所需代码块，提高开发效率。

### Bracket Pair Colorizer 2

---
#### [2021-10-08] 更新

vscode 1.61.0 版本原生支持改插件，只要在 `设置` 中配置:
```json
{
    "editor.guides.bracketPairs": true,
    "editor.bracketPairColorization.enabled": true
}
```
即可，无需再安装第三方扩展。

---

不同的颜色显示代码块括号范围，其实这插件不仅在 Flutter 项目开发中能用。
![](/public/imgs/2020/04/12/2020041210202.png)

值得注意的是，在开发时可能由于 Flutter 组件的层级嵌套较深，为了方便查看代码，你可能需要在 setting.json 中添加 `"dart.previewFlutterUiGuides": true,`，开启组件层级预览，效果如上图虚线的效果。
补充一下，如果开启后没效果，查看 Dart 扩展安装和开启了没，如果扩展安装了开启还是没效果，重启 VS Code 再试试吧，祝好运！
