---
title: JavaScript 中 label 的理解与应用
author: teemwu
date: '2020/07/15 12:36'
isPublished: true
categories:
  - Javascript
tags: null
wordCount: 331
---

# JavaScript 中 label 的理解与应用

label 语句在之前写的代码中很少用到。最近重新看了基础，发现之前没有真的清楚其作用，开始只知道 label 是代码“跳转”到这个标签，什么时候应用才比较好呢？带着疑问，重新梳理了一下。
在执行单层循环的时候，label 其实作用不明显，比如
```javascript
loopTop:
for(let i = 0; i < 3; i++){
      if(i === 2){
            break loopTop;
      }
      console.log(i);
}
// 输出结果
// 0
// 1
```
和
```javascript
for(let i = 0; i < 3; i++){
      if(i === 2){
            break;
      }
      console.log(i);
}
// 输出结果
// 0
// 1
```
效果是一样的，故 label 在此时是多余的。
不过，当我们遇到多层循环，想直接跳到最外层循环时，label 的作用就体现出来了，如下面的例子
```javascript
loopTop:
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(i === 2 && j === 1) break loopTop;
    }
    console.log(i);
}
// 输出结果
// 0
// 1
```
如果没用 label 跳转
```javascript
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(i === 2 && j === 1) break;
    }
    console.log(i);
}
// 输出结果
// 0
// 1
// 2
```
则 break 只是跳过了最里层的 for 循环，外层 for 循环依旧执行。
所以如果遇到多层循环时，想跳出到指定位置时， label 是非常有用的。
