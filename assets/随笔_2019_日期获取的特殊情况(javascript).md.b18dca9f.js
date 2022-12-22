import{_ as p,c,b as n,w as r,d as e,e as i,a as y,r as d,o as C,f as D}from"./app.5e3fb6e7.js";const j=JSON.parse(`{"title":"日期获取的特殊情况(javascript)","description":"","frontmatter":{"title":"日期获取的特殊情况(javascript)","author":"teemwu","date":"2019/07/22 18:34","isPublished":true,"categories":["Javascript"],"tags":null,"wordCount":73},"headers":[{"level":1,"title":"日期获取的特殊情况(javascript)","slug":"日期获取的特殊情况-javascript","link":"#日期获取的特殊情况-javascript","children":[{"level":3,"title":"月份的获取","slug":"月份的获取","link":"#月份的获取","children":[]},{"level":3,"title":"iOS 系统下‘ yyyy-MM-dd '写法兼容","slug":"ios-系统下-yyyy-mm-dd-写法兼容","link":"#ios-系统下-yyyy-mm-dd-写法兼容","children":[]},{"level":3,"title":"ios 下多了8个小时","slug":"ios-下多了8个小时","link":"#ios-下多了8个小时","children":[]}]}],"relativePath":"随笔/2019/日期获取的特殊情况(javascript).md","lastUpdated":1671680872000}`),h={name:"随笔/2019/日期获取的特殊情况(javascript).md"},A=e("h1",{id:"日期获取的特殊情况-javascript",tabindex:"-1"},[i("日期获取的特殊情况(javascript) "),e("a",{class:"header-anchor",href:"#日期获取的特殊情况-javascript","aria-hidden":"true"},"#")],-1),_=y(`<h3 id="月份的获取" tabindex="-1">月份的获取 <a class="header-anchor" href="#月份的获取" aria-hidden="true">#</a></h3><div class="language-groovy"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki material-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2019</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">07</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">22</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getMonth</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2019-07-22</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getMonth</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回 6</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="ios-系统下-yyyy-mm-dd-写法兼容" tabindex="-1">iOS 系统下‘ yyyy-MM-dd &#39;写法兼容 <a class="header-anchor" href="#ios-系统下-yyyy-mm-dd-写法兼容" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2019-07-22T18:00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="ios-下多了8个小时" tabindex="-1">ios 下多了8个小时 <a class="header-anchor" href="#ios-下多了8个小时" aria-hidden="true">#</a></h3><p>需要将 ‘-’ 替换成 ‘/’</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2020/06/18</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,7);function F(s,a,u,v,m,g){const l=D,t=d("ClientOnly");return C(),c("div",null,[A,n(t,null,{default:r(()=>[n(l,{modelValue:s.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=o=>s.$frontmatter=o)},null,8,["modelValue"])]),_:1}),_])}const b=p(h,[["render",F]]);export{j as __pageData,b as default};
