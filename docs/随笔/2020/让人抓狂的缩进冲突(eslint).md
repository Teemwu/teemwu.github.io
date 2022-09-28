---
title: 让人抓狂的缩进冲突(eslint)
author: teemwu
date: 2020/04/20 18:53
isPublished: true
categories:
  - 报错
tags:
  - eslint
---

# 让人抓狂的缩进冲突(eslint)

![](/public/imgs/2020/04/20/2020042018530.png)

原本在开开心心地写着代码，然鹅格式化后居然有一处 eslint 提示报错，说我的缩进有问题，删除多余的缩进后，再格式化又变成了之前那样！其它地方都没问题，为啥就那一小块会报错呢？项目使用了 prettier 进行自动格式化，eslint 来进行检查报错，可是这俩貌似有世仇，不能好好相处。。。废话不多说了，直接上配置代码吧，找了好久才找到的方法，根据代码自己调整下就好，有些项不一定用得上，希望对看官管用吧。

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'indent': ['error', 2],
    'vue/script-indent': [
      'error',
      2,
      { 'baseIndent': 1 }
    ],
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
};
```
项目中我注释掉了 `vue/script-indent` 如果开启这个会报其它错误，使用时自个看看。 

### 参考
- [https://github.com/vuejs/eslint-plugin-vue/issues/362#issuecomment-406586699](https://github.com/vuejs/eslint-plugin-vue/issues/362#issuecomment-406586699)