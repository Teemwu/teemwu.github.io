---
title: 对象深拷贝(javascript)
author: teemwu
date: '2019/04/03 09:48'
isPublished: false
categories: null
tags: null
wordCount: 33
---

# 对象深拷贝(javascript)

### 一、` JSON.parse`  &  ` JSON.stringify ` 【ES5】

```javascript
const cloneObj=JSON.parse(JSON.stringify(originObj))
```

### 二、` ... ` 延展操作符 【ES8】

```javascript
const cloneObj={...originObj}
```

### 三、
