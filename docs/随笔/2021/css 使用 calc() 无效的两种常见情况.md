---
title: css 使用 calc() 无效的两种常见情况
author: teemwu
date: 2021/01/10 22:46
isPublished: true
categories:
  - CSS
tags:
---

# css 使用 calc() 无效的两种常见情况

### 第一种
运算符间没加空格，如
```css
/*错误示例*/
div{
      width: calc(100%-10px);
}
/*正确写法*/
div{
      width: calc(100% - 10px);
}
```
为什么要加空格？其实不是所有运算符间都需要加空格，只有 `+` 和 `-` 需要加空格，因为运算允许负数的出现，如
```css
div{
       width: calc(100% + -10px);
}
```
所以，为了统一，`/` 和 `*`  最好都带上空格。

### 第二种
运算值不带单位，如
```css
/*错误写法*/
div{
      width: calc(0 + 10px);
}
/*正确写法*/
div{
      width: calc(0px + 10px);
}
```
看到这里，你可能会疑问，为啥 0 还要带个单位呢？其实，calc() 函数传入的是一个数学表达式，而表达式的值可以有多种类型，如长度、百分比、角度等，
那如果你传个 0 进去，没单位的话，怎么知道这个 0 是属于什么类型呢？

### 参考
- https://drafts.csswg.org/css-values-3/#calc-type-checking
