---
title: JS数组去重方法
author: teemwu
date: '2018/11/26 17:14'
isPublished: false
categories: null
tags: null
wordCount: 176
---

# JS数组去重方法

**方法一、 [Array.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**

```
var arr=[1,2,1,2,3]
var uniqueArray=arr.filter(function(item,pos){
   return arr.indexOf(item)==pos 
})console.log( uniqueArray ) //[1,2,3]

```

 **方法二、`[Set.prototype](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)`**

```
const set1 = new Set([1, 2, 3, 2, 1])

console.log(set1) // [1,2,3]

```

 **方法三、[Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)**

```
let arr=[1,2,1,2,3]
const uniqueArray=arr.sort().reduce((init,current)=>{
   if(init.legnth===0||init[init.length-1]===current){
       init.push(current) 
    }
    return init
},[])console.log(uniqueArray) // [1,2,3]

```

参考：

1.  [https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array](https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array)
2.  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/Array/filter
