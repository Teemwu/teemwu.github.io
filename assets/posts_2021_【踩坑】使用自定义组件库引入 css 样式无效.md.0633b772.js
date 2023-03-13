import{_ as r,c as i,C as t,z as p,x as a,a as _,N as d,D as n,o as u}from"./chunks/framework.bcd58125.js";const v=JSON.parse('{"title":"【踩坑】使用自定义组件库引入 css 样式无效","description":"","frontmatter":{"title":"【踩坑】使用自定义组件库引入 css 样式无效","author":"teemwu","date":"2021/06/03 16:59","isPublished":true,"categories":["Webpack"],"tags":null,"wordCount":235},"headers":[{"level":1,"title":"【踩坑】使用自定义组件库引入 css 样式无效","slug":"【踩坑】使用自定义组件库引入-css-样式无效","link":"#【踩坑】使用自定义组件库引入-css-样式无效","children":[{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"posts/2021/【踩坑】使用自定义组件库引入 css 样式无效.md","lastUpdated":1678694718000}'),h={name:"posts/2021/【踩坑】使用自定义组件库引入 css 样式无效.md"},m=a("h1",{id:"【踩坑】使用自定义组件库引入-css-样式无效",tabindex:"-1"},[_("【踩坑】使用自定义组件库引入 css 样式无效 "),a("a",{class:"header-anchor",href:"#【踩坑】使用自定义组件库引入-css-样式无效","aria-hidden":"true"},"#")],-1),f=d(`<p>自行开发 vue 组件库，为了节省写打包配置的时间，使用 vue-sfc-rollup 傻瓜式生成打包配置，组件库发布后使用 npm 包时发现通过 import &#39;packageName/dist/xxx.css&#39; 不能引入 css 样式，一开始以为是 vue 项目打包配置有问题，各种排查，由于无报错提示，尝试了引入其它第三方组件库，是能正常引入样式的。后来对比了 package.json 文件，发现 sideEffects 这一配置</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sideEffects</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><p>其含义表明整个工程是&quot;无副作用&quot;的”，而正常来说项目中肯定会包含一些“副作用”的文件，如 import &#39;xxx&#39; 就是有副作用，故不能设置为 false，将其删除或者设置具体的排除名单，具体可见参考。</p><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/yinxin630/blog/issues/23" target="_blank" rel="noreferrer">https://github.com/yinxin630/blog/issues/23</a></li></ul>`,5);function C(e,s,g,x,y,D){const l=n("articleMeta"),o=n("ClientOnly");return u(),i("div",null,[m,t(o,null,{default:p(()=>[t(l,{modelValue:e.$frontmatter,"onUpdate:modelValue":s[0]||(s[0]=c=>e.$frontmatter=c)},null,8,["modelValue"])]),_:1}),f])}const k=r(h,[["render",C]]);export{v as __pageData,k as default};
