---
title: Uncaught (in promise) undefined
author: teemwu
date: '2020/01/19 14:13'
isPublished: true
categories:
  - Javascript
  - 报错
tags: null
wordCount: 232
---

# Uncaught (in promise) undefined

Vue-router >= 3.1.0  版本在使用 push 和 replace 进行跳转时控制台会抛出异常，其主要原因是 vue-router 3.1.0 版本以后 router.push('/path') 返回了 promise ，而当路由跳转异常时便会抛出错误，此前版本没有报错是因为 vue-router 根本没有返回错误信息，所以之前我们一直无法捕获异常，而并非异常不存在。当然，很多时候这些报错我们不用关心，除非有些地方需要特殊处理。下面给出些解决方法。

使用时进行错误拦截：
```javascript
router.push('/path').catch(err => {})
```
全局进行错误拦截：
```javascript
const routerMethods = ['push', 'replace']
routerMethods.forEach(method => {
  const originalCall = VueRouter.prototype[method]
  VueRouter.prototype[method] = function(location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject)
    }
    return originalCall.call(this, location).catch(err => err)
  }
})
```

### 参考
[https://github.com/vuejs/vue-router/issues/2881](https://github.com/vuejs/vue-router/issues/2881)
