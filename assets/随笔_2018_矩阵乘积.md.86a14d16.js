import{_ as s,c as a,o as n,a as e}from"./app.412a2e2c.js";const u=JSON.parse('{"title":"\u77E9\u9635\u4E58\u79EF","description":"","frontmatter":{"title":"\u77E9\u9635\u4E58\u79EF","author":"teemwu","date":"2018/11/15 09:47","isPublished":true,"categories":["Javascript"],"tags":["\u89E3\u9898"]},"headers":[{"level":1,"title":"\u77E9\u9635\u4E58\u79EF","slug":"\u77E9\u9635\u4E58\u79EF","link":"#\u77E9\u9635\u4E58\u79EF","children":[]}],"relativePath":"\u968F\u7B14/2018/\u77E9\u9635\u4E58\u79EF.md","lastUpdated":1670208316000}'),l={name:"\u968F\u7B14/2018/\u77E9\u9635\u4E58\u79EF.md"},t=e(`<h1 id="\u77E9\u9635\u4E58\u79EF" tabindex="-1">\u77E9\u9635\u4E58\u79EF <a class="header-anchor" href="#\u77E9\u9635\u4E58\u79EF" aria-hidden="true">#</a></h1><p>\u5728 codewars \u505A\u7EC3\u4E60\u9898\u65F6\u9047\u5230\xA0<a href="https://www.codewars.com/kata/matrix-multiplier/train/javascript" target="_blank" rel="noreferrer">\u4E00\u9053\u77E9\u9635\u76F8\u5173\u7684\u9898\u76EE</a>\uFF0C\u4E00\u5F00\u59CB\u633A\u61F5\u903C\u7684\uFF0C\u56E0\u4E3A\u76F8\u5173\u7684\u7684\u6982\u5FF5\u5FD8\u5F97\u5DEE\u4E0D\u591A\u4E86\uFF0C\u4E8E\u662F\u67E5\u4E86\u4E00\u4E0B\xA0<a href="https://baike.baidu.com/item/%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95/5446029" target="_blank" rel="noreferrer">\u8D44\u6599</a></p><p>\u53EF\u77E5\u77E9\u9635 A\u3001B \u4E58\u79EF ( C=AB ) \u6EE1\u8DB3\u7684\u6761\u4EF6\u662F\uFF1A</p><blockquote><p>1\u3001\u5F53\u77E9\u9635A\u7684\u5217\u6570\u7B49\u4E8E\u77E9\u9635B\u7684\u884C\u6570\u65F6\uFF0CA\u4E0EB\u53EF\u4EE5\u76F8\u4E58\u3002</p><p>2\u3001\u77E9\u9635C\u7684\u884C\u6570\u7B49\u4E8E\u77E9\u9635A\u7684\u884C\u6570\uFF0CC\u7684\u5217\u6570\u7B49\u4E8EB\u7684\u5217\u6570\u3002</p><p>3\u3001\u4E58\u79EFC\u7684\u7B2Cm\u884C\u7B2Cn\u5217\u7684\u5143\u7D20\u7B49\u4E8E\u77E9\u9635A\u7684\u7B2Cm\u884C\u7684\u5143\u7D20\u4E0E\u77E9\u9635B\u7684\u7B2Cn\u5217\u5BF9\u5E94\u5143\u7D20\u4E58\u79EF\u4E4B\u548C</p></blockquote><p>\u6839\u636E\u5DF2\u77E5\u6761\u4EF6\u548C\u9898\u76EE\u8981\u6C42\u53EF\u89E3\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function getMatrixProduct(a, b) {</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),p=[t];function o(r,c,i,C,A,d){return n(),a("div",null,p)}const h=s(l,[["render",o]]);export{u as __pageData,h as default};
