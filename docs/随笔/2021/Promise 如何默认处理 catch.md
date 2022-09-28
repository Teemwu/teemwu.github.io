---
title: Promise 如何默认处理 catch
author: teemwu
date: 2021/01/18 17:56
isPublished: true
categories:
  - Javascript
tags:
---

# Promise 如何默认处理 catch

### 起因
为了方便管理，封装全局请求方法的时候，需要对异步请求返回值进行统一的异常处理，符合的值就走 then 进行返回，不符合的数据走 catch 进行返回或者处理。

### 需求
1、当执行 Promise 方法出现异常时自动调用 catch 并执行对应的处理方法
2、需要单独手动处理 catch 时可以自行手动调用 catch 进行错误处理
3、手动调用 catch 时要覆盖掉默认执行的 catch

比如
```javascript
const p = MyPromise() // promise 方法

p.then() // 出错时自动执行默认的 catch

p.then().catch(res=>{}) // 手动调用 catch
```
### 解决
核心方法如下，catch 默认将报错信息进行输出。
```javascript
function RequestPromise(originalPromise) {
  this._promise = originalPromise

  this._catchyPromise = Promise.resolve()
    .then(() => this._promise)
    .catch(err => console.error('Error', err))

  // every method but 'constructor' from Promise.prototype
  const methods = ['then', 'catch', 'finally']

  for (const method of methods) {
    this[method] = function (...args) {
      this._promise = this._promise[method](...args)

      return this
    }
  }
}
```
由于项目中使用了 flyio ，下面例子基于该请求库
```javascript
// post 请求封装
export const post = (uri, data, config)=> {
  return new RequestPromise(new Promise((resolve, reject) => {
    fly
      .post(uri, data, config)
      .then(response => {
        const { success, data } = response.data
        if (success) return resolve(data)
        return reject(response.data)
      })
      .catch(reject)
  }))
}
// 报错时默认执行 catch
post(URL).then()

// 手动处理报错信息
post(URL).then().catch(error=>{
      // TODO
})
```
### 参考
- [Define fallback catch for promise chain?](https://stackoverflow.com/a/39732825)