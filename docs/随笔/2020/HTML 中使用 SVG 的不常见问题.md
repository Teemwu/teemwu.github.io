---
title: HTML 中使用 SVG 的不常见问题
author: teemwu
date: '2020/08/12 18:16'
isPublished: true
categories:
  - CSS
  - HTML
tags: null
wordCount: 245
---

# HTML 中使用 SVG 的不常见问题

## Flex 布局中 SVG 宽高不正常（存在空隙）
HTML 中直接使用 svg 标签时，通过样式设置其宽高，正常情况下都是可控的，而如果父级标签设置 display 属性为 flex ，如果里面直接使用 svg 标签，如
```html
<div class="flex-box">
      <svg>....</svg>
</div>
```
此时设置 svg 的宽高，缩放界面时，chrome浏览器下其宽高并不固定，而 IE 个别版本却又正常显示。暂未找到具体原因，目前解决方法是直接给 svg 标签套上一个块级或者行内元素，比如
```html
<div class="flex-box">
      <div>
            <svg>....</svg>
      </div>
</div>
```
具体例子，如下：
<iframe height="452" style="width: 100%;" scrolling="no" title="flexAndSVG" src="https://codepen.io/nooby/embed/YzqygrB?height=452&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nooby/pen/YzqygrB'>flexAndSVG</a> by Teemwu
  (<a href='https://codepen.io/nooby'>@nooby</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 宽度设置为 100%, SVG 自适应失效
如下情况会导致 svg 不会自适应改变宽高
```html
<div>
      <svg style="width:100%;height:auto">....</svg>
</div>
```
将 height 设置一个固定值即可，比如：
```html
<div>
      <svg style="width:100%;height:200px">....</svg>
</div>
```
