import{_ as l,c,a as o,w as p,b as n,d as u,e as d,r,o as _}from"./app.b4c69dc4.js";const f=JSON.parse('{"title":"“There appears to be trouble with your network connection. Retrying”","description":"","frontmatter":{"title":"“There appears to be trouble with your network connection. Retrying”","author":"teemwu","date":"2020/06/03 15:42","isPublished":true,"categories":["Webpack","报错"],"tags":null,"wordCount":130},"headers":[{"level":1,"title":"“There appears to be trouble with your network connection. Retrying”","slug":"there-appears-to-be-trouble-with-your-network-connection-retrying","link":"#there-appears-to-be-trouble-with-your-network-connection-retrying","children":[]}],"relativePath":"posts/2020/“There appears to be trouble with your network connection. Retrying”.md","lastUpdated":1675147220000}'),h={name:"posts/2020/“There appears to be trouble with your network connection. Retrying”.md"},y=n("h1",{id:"there-appears-to-be-trouble-with-your-network-connection-retrying",tabindex:"-1"},[u("“There appears to be trouble with your network connection. Retrying” "),n("a",{class:"header-anchor",href:"#there-appears-to-be-trouble-with-your-network-connection-retrying","aria-hidden":"true"},"#")],-1),b=d(`<p>网上很多答案都说是代理问题，不过，设置了代理还是提示这个，后来删除了 <code>yarn.lock</code> 文件后重新 yarn 就好了。估计是 yarn.lock 中包的路径有错，所以一直加载失败。出现此问题可能是 npm 和 yarn 混用导致的。当然，也有可能真的是网络问题。</p><p>删了 <code>yarn.lock</code> 文件依然无效可以试下设置代理镜像</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3);function w(e,t,g,m,k,C){const a=r("articleMeta"),s=r("ClientOnly");return _(),c("div",null,[y,o(s,null,{default:p(()=>[o(a,{modelValue:e.$frontmatter,"onUpdate:modelValue":t[0]||(t[0]=i=>e.$frontmatter=i)},null,8,["modelValue"])]),_:1}),b])}const A=l(h,[["render",w]]);export{f as __pageData,A as default};
