import{_ as p}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.ec1f1841.js";import{_ as c,c as r,b as n,w as i,d as e,e as C,a as d,r as y,o as A}from"./app.fe1e5ba4.js";const v=JSON.parse('{"title":"JS获取对象键名","description":"","frontmatter":{"title":"JS获取对象键名","author":"teemwu","date":"2018/08/06 20:33","isPublished":true,"categories":["Javascript"],"tags":null,"wordCount":219},"headers":[{"level":1,"title":"JS获取对象键名","slug":"js获取对象键名","link":"#js获取对象键名","children":[]}],"relativePath":"随笔/2018/JS获取对象键名.md","lastUpdated":1670810221000}'),u={name:"随笔/2018/JS获取对象键名.md"},_=e("h1",{id:"js获取对象键名",tabindex:"-1"},[C("JS获取对象键名 "),e("a",{class:"header-anchor",href:"#js获取对象键名","aria-hidden":"true"},"#")],-1),b=d(`<p>在开发的时候不时需要获取某个对象的键名集，以下为常用的两种获取对象键名的方法。</p><p>一、<strong>通过 for in</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var obj={a:1,b:2,c:3},key;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(key in obj){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(key);  //分别输出a b c</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>二、<strong>通过Object.keys</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const obj={a:1,b:2,c:3};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.keys(obj));//[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注意：此方法虽然很方便，但需要浏览器支持ES5+。</p><p>三、<strong>兼容写法</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">if(!Object.keys) Object.keys = function(o){</span></span>
<span class="line"><span style="color:#A6ACCD;">     if (o !== Object(o))</span></span>
<span class="line"><span style="color:#A6ACCD;">          throw new TypeError(&#39;Object.keys called on non-object&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     var ret=[],p;</span></span>
<span class="line"><span style="color:#A6ACCD;">     for(p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);</span></span>
<span class="line"><span style="color:#A6ACCD;">     return ret;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>参考：</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys</a></p><p><a href="https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object</a></p>`,11);function f(s,a,h,g,D,j){const o=p,l=y("ClientOnly");return A(),r("div",null,[_,n(l,null,{default:i(()=>[n(o,{modelValue:s.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=t=>s.$frontmatter=t)},null,8,["modelValue"])]),_:1}),b])}const O=c(u,[["render",f]]);export{v as __pageData,O as default};
