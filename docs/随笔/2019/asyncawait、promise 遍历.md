---
title: async/await、promise 遍历
author: teemwu
date: '2019/05/23 10:34'
isPublished: true
categories:
  - Javascript
tags: null
wordCount: 204
---

# async/await、promise 遍历

### for 遍历语句

```javascript

async function run() {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      await new Promise(resolve => {
        setTimeout(async () => {
          await new Promise(resolve => {
            setTimeout(() => {
              console.log(1)
              resolve()
            }, 3000)
          })
          console.log(2)
          resolve()
        }, 2000)
      })
    }
  }
  console.log(3)
}
run()
console.log(0)

// 输出顺序
// 0
// 1
// 2
// 1
// 2
// 1
// 2
// 1
// 2
// 3

```
需要注意的是，async 的影响范围只在其作用函数方法内，所以先输出 ‘0’；再则根据 await 一层一层地往里面执行，resolve 不能改名，且必须要在执行完各项操作后返回，否则会中断其后所有操作！

### forEach 方法遍历

```javascript

async function run() {
  let arr = []
  let target = [1, 2]
  target.forEach(i => {
    arr.push(
      new Promise(resolve => {
        setTimeout(() => {
          console.log(1)
          resolve()
        })
      })
    )
  })
  await Promise.all(arr).then(val => {
    console.log(2)
  })
  console.log(3)
}
run()
console.log(0)

// result
// 0
// 1
// 1
// 2
// 3

```
