---
title: File ignored by default.  Use a negated ignore pattern (like "--ignore-pattern '!'") to override.
author: teemwu
date: 2019/12/17 15:59
isPublished: true
categories:
  - 报错
tags:
---

# File ignored by default.  Use a negated ignore pattern (like "--ignore-pattern '!'") to override.

### 说明
使用 vue-cli 创建工程，将 eslint 的配置单独出 .eslintrc.js 文件时，出现此警告

![](/public/imgs/2019/12/17/2019121715590.png)

### 解决方法
项目根目录增加文件名为 .eslintignore 的文件，并在此文件中添加

```
!.eslintrc.js

```

### 参考

[https://github.com/eslint/eslint/blob/d31f3370396ec4868722bdc044aa697b135ac183/.eslintignore#L13](https://github.com/eslint/eslint/blob/d31f3370396ec4868722bdc044aa697b135ac183/.eslintignore#L13)