---
title: JS获取对象键名
author: teemwu
date: '2018/08/06 20:33'
isPublished: true
categories:
  - Javascript
tags: null
wordCount: 219
---

# JS获取对象键名

　　在开发的时候不时需要获取某个对象的键名集，以下为常用的两种获取对象键名的方法。

一、**通过 for in**

```
var obj={a:1,b:2,c:3},key;

for(key in obj){
    console.log(key);  //分别输出a b c
}


```

二、**通过Object.keys**

```
const obj={a:1,b:2,c:3};

console.log(Object.keys(obj));//["a","b","c"]


```

　注意：此方法虽然很方便，但需要浏览器支持ES5+。

三、**兼容写法**　

```
if(!Object.keys) Object.keys = function(o){
     if (o !== Object(o))
          throw new TypeError('Object.keys called on non-object');
     var ret=[],p;
     for(p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);
     return ret;
}


```

参考：

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/Object/keys](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object](https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object)
