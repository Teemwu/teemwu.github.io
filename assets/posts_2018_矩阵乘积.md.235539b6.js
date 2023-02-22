import{_ as r,c,a as n,w as i,b as e,d as C,e as A,r as l,o as d}from"./app.bba8534e.js";const w=JSON.parse('{"title":"矩阵乘积","description":"","frontmatter":{"title":"矩阵乘积","author":"teemwu","date":"2018/11/15 09:47","isPublished":true,"categories":["Javascript"],"tags":["解题"],"wordCount":255},"headers":[{"level":1,"title":"矩阵乘积","slug":"矩阵乘积","link":"#矩阵乘积","children":[]}],"relativePath":"posts/2018/矩阵乘积.md","lastUpdated":1677057861000}'),u={name:"posts/2018/矩阵乘积.md"},_=e("h1",{id:"矩阵乘积",tabindex:"-1"},[C("矩阵乘积 "),e("a",{class:"header-anchor",href:"#矩阵乘积","aria-hidden":"true"},"#")],-1),m=A(`<p>在 codewars 做练习题时遇到 <a href="https://www.codewars.com/kata/matrix-multiplier/train/javascript" target="_blank" rel="noreferrer">一道矩阵相关的题目</a>，一开始挺懵逼的，因为相关的的概念忘得差不多了，于是查了一下 <a href="https://baike.baidu.com/item/%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95/5446029" target="_blank" rel="noreferrer">资料</a></p><p>可知矩阵 A、B 乘积 ( C=AB ) 满足的条件是：</p><blockquote><p>1、当矩阵A的列数等于矩阵B的行数时，A与B可以相乘。</p><p>2、矩阵C的行数等于矩阵A的行数，C的列数等于B的列数。</p><p>3、乘积C的第m行第n列的元素等于矩阵A的第m行的元素与矩阵B的第n列对应元素乘积之和</p></blockquote><p>根据已知条件和题目要求可解：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function getMatrixProduct(a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //If a and b can be multiplied, returns the product of a and b as a two-dimensional array. Otherwise returns -1.</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(a[0].length!==b.length) return -1</span></span>
<span class="line"><span style="color:#A6ACCD;">    let aRows=a.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    let aCols=a[0].length</span></span>
<span class="line"><span style="color:#A6ACCD;">    let bRows=b.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    let bCols=b[0].length</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result=new Array(aRows)</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i=0;i&lt;aRows;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">      result[i]=new Array(bCols)</span></span>
<span class="line"><span style="color:#A6ACCD;">      for(let j=0;j&lt;bCols;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        result[i][j]=0</span></span>
<span class="line"><span style="color:#A6ACCD;">        for(let k=0;k&lt;aCols;k++){</span></span>
<span class="line"><span style="color:#A6ACCD;">          result[i][j]+=a[i][k]*b[k][j]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5);function y(s,a,h,b,D,f){const t=l("articleMeta"),p=l("ClientOnly");return d(),c("div",null,[_,n(p,null,{default:i(()=>[n(t,{modelValue:s.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=o=>s.$frontmatter=o)},null,8,["modelValue"])]),_:1}),m])}const k=r(u,[["render",y]]);export{w as __pageData,k as default};
