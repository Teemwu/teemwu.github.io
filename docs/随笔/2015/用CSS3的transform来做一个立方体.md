---
title: 用CSS3的transform来做一个立方体
author: teemwu
date: 2015/11/18 13:41
isPublished: true
categories:
  - CSS
  - HTML
tags:
---

# 用CSS3的transform来做一个立方体

　　更新下：好久没用博客园了，今天为了点赞别人的文章又登录了，谢谢chrome帮我记住了账号密码，下面这个效果之前自己已经实现了，分享个演示地址：[https://codepen.io/nooby/pen/vKogZB](https://codepen.io/nooby/pen/vKogZB "codepen演示地址")

---

　　有一次上数据结构课老师布置了一个用队列的思想通过js和Html来做一个“跳舞配对”的网页，当时那个跳舞的部分用了css3里面transform的相关属性做了个个让图片无限翻转的效果，可能正是由于这个效果，让我想到了--可以不可以通过transform来弄个3D的立方体呢？后来慢慢的去做，遇到好多问题，下面把这次小尝试记录下，等到日后有灵感再去弄。。。

　　代码如下：

```html
 1 <!DOCTYPE html>
 2 <html lang="en">
 3 <head>
 4     <meta charset="UTF-8">
 5     <title></title>
 6     <style>
 7         #main{
 8             width: 500px;
 9             height: 500px;
10             margin:150px auto;
11             position: absolute;
12             transform-style: preserve-3d;
13             left:40%;
14             perspective: 1500px;
15         }
16         img{
17             width:240px;
18             height:150px;
19             position: absolute;
20         }
21         img:nth-child(1){
22             transform:rotateY(30deg) translateZ(120px);
23             -webkit-transform: rotateY(30deg) translateZ(120px);
24             -moz-transform: rotateY(30deg) translateZ(120px);
25         }
26         img:nth-child(2){
27             transform:rotateY(120deg) translateZ(120px);
28             -webkit-transform: rotateY(120deg) translateZ(120px);
29             -moz-transform: rotateY(120deg) translateZ(120px);
30         }
31         img:nth-child(3){
32             transform:rotateY(210deg) translateZ(120px);
33             -webkit-transform: rotateY(210deg) translateZ(120px);
34             -moz-transform: rotateY(210deg) translateZ(120px);
35         }
36         img:nth-child(4){
37             transform:rotateY(300deg) translateZ(120px);
38             -webkit-transform: rotateY(300deg) translateZ(120px);
39             -moz-transform: rotateY(300deg) translateZ(120px);
40         }
41     </style>
42     <script>
43        // var r=120 / Math.tan(45/ 180 * Math.PI);//计算translate的值
44        /*window.onload=function f(){
45             var oImg=document.getElementsByTagName("img");
46             for(var i=0;i<oImg.length;i++){
47                 oImg[i].style.transform=rotateY(0,30+i*90+'deg');
48             }
49         }*/
50     </script>
51 </head>
52 <body>
53 <div id="main">
54     <img src="Images/a.jpg">
55     <img src="Images/f.jpg">
56     <img src="Images/c.jpg">
57     <img src="Images/d.jpg">
58 </div>
59 </body>
60 </html>

```

　　问题1、在chrome浏览器里面和ie浏览器里面的效果不同

　　问题2、不知道怎么加上两个“盖子”

　　问题3、想通过js来控制rotateY()以实现转动变换的效果，发现用普通获取属性的方法获取不了rotateY（）（见注释处）

　　。。。

　　希望知道上面的问题怎么解决的博友们不吝赐教哈，谢谢！