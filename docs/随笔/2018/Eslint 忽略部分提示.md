---
title: Eslint 忽略部分提示
author: teemwu
date: 2018/09/18 14:15
isPublished: true
categories:
tags:
---

# Eslint 忽略部分提示

## 一、忽略JS中某一行错误提示

在行末添加一下注释，其中 “错误类型” 为 eslint 提示的报错类型

```ini
// eslint-disable-line [错误类型]

```

如图（printJS 定义的是全局的，引入时是通过 _**import 'print-js'**_ 来引入，所以使用时 eslint 检测为未定义）

![](/public/imgs/2018/09/18/2018091814150.png)

解决：

```ini
printJS(this.cImg, 'image') // eslint-disable-line no-undef


```

## 二、忽略某些不常规的闭合标签报错

在使用 iview 的 `<Col></Col>` 组件时会在 `</Col>` 提示错误，此时可以通过设置eslint配置文件(.eslintrc.js)的rules选项来解决

```json
//...
rules:{
'vue/no-parsing-error': [2, { 
        "x-invalid-end-tag": false
}
}
//...
```

如果用的是 VSCode 编辑器可能还要设置 `settings.json` 才能生效

```ini
//settings.json
"vetur.validation.template": false
```

## 三、忽略 template 中的三元运算符使用小于号（<）时报错

![](/public/imgs/2018/09/18/2018091814151.png)

解决：在 eslint 配置文件中设置 **_"invalid-first-character-of-tag-name": false_**

```yaml
 rules: {
      'vue/no-parsing-error': [2, { 
        "x-invalid-end-tag": false,
        "invalid-first-character-of-tag-name": false
     }]
    }

```

 相关讨论：[https://github.com/vuejs/eslint-plugin-vue/issues/370](https://github.com/vuejs/eslint-plugin-vue/issues/370)

## 四、修改配置文件忽略关键字

在遇到全局需要使用的 “ 未定义 ”变量（如微信小程序的 wx ）时，使用 _// eslint-disable-line no-undef_  显然不合理，所以我们应该在全局配置入手，可以在配置文件中的gobal下进行全局忽略变量

```javascript
// ...
rules: {
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false,
      "invalid-first-character-of-tag-name": false
    }]
  },
  globals: {
    wx: null
  }
// ...

```

## 五、忽略整个文件

在文件内第一行添加 _/\* eslint-disable no-undef \*/_ 注释，需要注意的是，文件后缀为 .vue 等文件，需要加在 script 标签后方才生效。