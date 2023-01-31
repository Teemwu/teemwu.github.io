---
title: Eslint 自动格式化(vscode)
author: teemwu
date: '2019/04/01 14:11'
isPublished: true
categories:
  - VS Code
  - 工具
tags: null
wordCount: 192
---

# Eslint 自动格式化(vscode)

###  设置中搜索关键词 “semicolon” 

新版本 vscode 在设置那可以根据关键词来进行搜索，找到相关配置进行勾选设置，如图，将勾勾去掉保存设置即可

![](/public/imgs/2019/04/01/2019040114110.png)

###  直接在 "settings.json" 文件中修改

```json
    {
      "javascript.format.insertSpaceAfterSemicolonInForStatements": false,
       "prettier.semi": false,
       "typescript.format.insertSpaceAfterSemicolonInForStatements": false
    }
```

### 在 “.prettierrc" 文件中设置

```json
    {
      "singleQuote": true,
      "semi": false
    }
```

这里要注意的是，”Prettier - Code formatter“ 这个插件是先判断项目根目录是否存在 ".prettierrc" 配置文件，如果存在则不再读取 “settings.json" 中 prettier 的相关配置了。
因此，如果根目录的 ”.prettierrc" 没有设置 ` "semi": false ` 则在 “settings.json" 里设置 `  "prettier.semi": false ` 无效。

### 自动格式化

```json 
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
```
