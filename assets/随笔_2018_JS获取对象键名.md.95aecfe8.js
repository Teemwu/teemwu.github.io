import{_ as s,c as a,o as n,a as e}from"./app.b066a273.js";const b=JSON.parse('{"title":"JS\u83B7\u53D6\u5BF9\u8C61\u952E\u540D","description":"","frontmatter":{"title":"JS\u83B7\u53D6\u5BF9\u8C61\u952E\u540D","author":"teemwu","date":"2018/08/06 20:33","isPublished":true,"categories":["Javascript"],"tags":null},"headers":[{"level":1,"title":"JS\u83B7\u53D6\u5BF9\u8C61\u952E\u540D","slug":"js\u83B7\u53D6\u5BF9\u8C61\u952E\u540D","link":"#js\u83B7\u53D6\u5BF9\u8C61\u952E\u540D","children":[]}],"relativePath":"\u968F\u7B14/2018/JS\u83B7\u53D6\u5BF9\u8C61\u952E\u540D.md","lastUpdated":1664375998000}'),p={name:"\u968F\u7B14/2018/JS\u83B7\u53D6\u5BF9\u8C61\u952E\u540D.md"},l=e(`<h1 id="js\u83B7\u53D6\u5BF9\u8C61\u952E\u540D" tabindex="-1">JS\u83B7\u53D6\u5BF9\u8C61\u952E\u540D <a class="header-anchor" href="#js\u83B7\u53D6\u5BF9\u8C61\u952E\u540D" aria-hidden="true">#</a></h1><p>\u5728\u5F00\u53D1\u7684\u65F6\u5019\u4E0D\u65F6\u9700\u8981\u83B7\u53D6\u67D0\u4E2A\u5BF9\u8C61\u7684\u952E\u540D\u96C6\uFF0C\u4EE5\u4E0B\u4E3A\u5E38\u7528\u7684\u4E24\u79CD\u83B7\u53D6\u5BF9\u8C61\u952E\u540D\u7684\u65B9\u6CD5\u3002</p><p>\u4E00\u3001<strong>\u901A\u8FC7 for\xA0in</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var obj={a:1,b:2,c:3},key;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(key in obj){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(key);  //\u5206\u522B\u8F93\u51FAa b c</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E8C\u3001<strong>\u901A\u8FC7Object.keys</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const obj={a:1,b:2,c:3};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.keys(obj));//[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u6B64\u65B9\u6CD5\u867D\u7136\u5F88\u65B9\u4FBF\uFF0C\u4F46\u9700\u8981\u6D4F\u89C8\u5668\u652F\u6301ES5+\u3002</p><p>\u4E09\u3001<strong>\u517C\u5BB9\u5199\u6CD5</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(!Object.keys) Object.keys = function(o){</span></span>
<span class="line"><span style="color:#A6ACCD;">     if (o !== Object(o))</span></span>
<span class="line"><span style="color:#A6ACCD;">          throw new TypeError(&#39;Object.keys called on non-object&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     var ret=[],p;</span></span>
<span class="line"><span style="color:#A6ACCD;">     for(p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);</span></span>
<span class="line"><span style="color:#A6ACCD;">     return ret;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53C2\u8003\uFF1A</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys</a></p><p><a href="https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object</a></p>`,12),o=[l];function t(c,r,i,C,A,y){return n(),a("div",null,o)}const _=s(p,[["render",t]]);export{b as __pageData,_ as default};
