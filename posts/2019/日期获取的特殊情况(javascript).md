---
title: 日期获取的特殊情况(javascript)
author: teemwu
date: '2019/07/22 18:34'
isPublished: true
categories:
  - Javascript
tags: null
wordCount: 73
---

# 日期获取的特殊情况(javascript)

### 月份的获取
```groovy javascript

new Date(2019,07,22).getMonth()
// 返回 7

new Date('2019-07-22').getMonth()
// 返回 6


```

### iOS 系统下‘ yyyy-MM-dd '写法兼容
```javascript
new Date('2019-07-22T18:00')
```

### ios 下多了8个小时
需要将 ‘-’ 替换成 ‘/’
```javascript
new Date('2020/06/18')
```
