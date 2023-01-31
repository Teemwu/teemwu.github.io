---
title: CSS文字两端对齐
author: teemwu
date: '2020/07/21 14:43'
isPublished: true
categories:
  - CSS
  - HTML
tags: null
wordCount: 135
---

# CSS文字两端对齐

好记性不如烂笔头，写了几次都忘了，起个随笔加深下记忆。

### HTML

```html
<div class="container">
    <div><span>肆个字哦</span>：四个字啊</div>
    <div><span>壹</span>：一</div>
    <div><span>贰字</span>：两字</div>
    <div><span>叁个字</span>：三个字</div>
</div>
```

### 样式

```css
.container span {
  width: 70px;
  text-align: justify;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}
.container span:after {
  content: " ";
  display: inline-block;
  width: 100%;
  height: 0px;
}
```
### 运行结果
<iframe height="251" style="width: 100%;" scrolling="no" title="OJMrwrm" src="https://codepen.io/nooby/embed/OJMrwrm?height=251&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nooby/pen/OJMrwrm'>OJMrwrm</a> by Teemwu
  (<a href='https://codepen.io/nooby'>@nooby</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
