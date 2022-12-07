---
title: 在 template 中使用 sass 变量
author: teemwu
date: '2021/01/09 11:09'
isPublished: true
categories:
  - Javascript
  - Vue
tags:
  - sass
wordCount: 363
---

# 在 template 中使用 sass 变量

日常开发中总会有些不如意的地方。比如说，在 sass 中定义好了颜色变量，而在 template 却不能直接使用，每次都要去找到对应的色彩值手动进行复制粘贴，真的是伤害不高，侮辱性极强！
那么，我们该如何解决这个问题呢？其实很简单， 可以使用 CSS Modules 提供的 :export 关键字，示例如下
```scss
// styles/_variables.scss
$purple: #5344b6;

:export {
    purple: $purple;
}
```
在 .vue 中使用
```html
<template>
    <div>
        <van-icon :color="variables.purple"/>
    </div>
</template>
<script>
import variables from '@/styles/_variables.scss'
export default {
    data(){
        return {
             variables
        }
    }
}
</script>
```
为了方便管理，以及其它地方引用 `_variables.scss` 连同`:export`一同被解析的问题，我们新建一个文件来管理提供变量给 js 的方法
```scss
// styles/_export.scss
@import './_variables.scss'
:export {
    purple: $purple;
}
```
每次使用时都要定义个变量，是否还是有些不爽？别急，Vue 用户的话，如下可以解决
```html
<template>
    <div>
        <van-icon :color="$style.purple"/>
    </div>
</template>
<style module lang="scss" src="@/styles/_export.scss"></style>      
```
如果项目中使用了 typescript ，想要使用时有提示，则可定义对应的 ts 声明文件


### 参考
- [https://css-tricks.com/getting-javascript-to-talk-to-css-and-sass/](https://css-tricks.com/getting-javascript-to-talk-to-css-and-sass/)
- [https://github.com/css-modules/icss#export](https://github.com/css-modules/icss#export)
- [https://www.netguru.com/codestories/vue.js-scoped-styles-vs-css-modules](https://www.netguru.com/codestories/vue.js-scoped-styles-vs-css-modules)
- [https://vue-loader.vuejs.org/guide/css-modules.html#usage](https://vue-loader.vuejs.org/guide/css-modules.html#usage)
- [https://sergiocarracedo.es/2020/07/17/sharing-variables-between-scss-and-typescript/](https://sergiocarracedo.es/2020/07/17/sharing-variables-between-scss-and-typescript/)
