import{_ as r}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.ec1f1841.js";import{_ as p,c,b as s,w as i,d as t,e as d,a as h,r as _,o as m}from"./app.fe1e5ba4.js";const E=JSON.parse('{"title":"Echart 配置项合并","description":"","frontmatter":{"title":"Echart 配置项合并","author":"teemwu","date":"2019/12/17 10:57","isPublished":true,"categories":["Javascript"],"tags":["数据可视化"],"wordCount":227},"headers":[{"level":1,"title":"Echart 配置项合并","slug":"echart-配置项合并","link":"#echart-配置项合并","children":[]}],"relativePath":"随笔/2019/Echart 配置项合并.md","lastUpdated":1670810221000}'),u={name:"随笔/2019/Echart 配置项合并.md"},y=t("h1",{id:"echart-配置项合并",tabindex:"-1"},[d("Echart 配置项合并 "),t("a",{class:"header-anchor",href:"#echart-配置项合并","aria-hidden":"true"},"#")],-1),C=h(`<p>最近使用 echart 做数据可视化，遇到一个需求，就是需要将默认配置项和后台返回的数据项合并。第一时间是想到直接使用原生 JavaScript 的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" target="_blank" rel="noreferrer">Object.assign</a>来处理，echart 的配置项层级较深，用 Object.assign 不适合。在网上找了一大堆方法，都没能解决一个问题，就是对象下数组的合并都没能保留数组的字段对比。</p><p>后来，想起了强大的 <a href="https://lodash.com/" target="_blank" rel="noreferrer">lodash</a>，其 <a href="https://lodash.com/docs/4.17.15#merge" target="_blank" rel="noreferrer">merge</a>方法完全符合自己的需求。</p><p>只想单独使用 merge 方法，可以直接安装 lodash.merge 包</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">npm i lodash.merge</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>使用</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> merge </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lodash.merge</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;">// ......</span></span>
<span class="line"><span style="color:#82AAFF;">merge</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;">defaultOption</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">otherOption</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dataOption)</span></span>
<span class="line"><span style="color:#676E95;">// ......</span></span>
<span class="line"></span></code></pre></div><p>注：将所有配置项合并到 {} ，不用 defaultOption 作为源，是防止合并后 defaultOption 被改变，</p>`,7);function g(a,e,f,D,A,b){const n=r,l=_("ClientOnly");return m(),c("div",null,[y,s(l,null,{default:i(()=>[s(n,{modelValue:a.$frontmatter,"onUpdate:modelValue":e[0]||(e[0]=o=>a.$frontmatter=o)},null,8,["modelValue"])]),_:1}),C])}const O=p(u,[["render",g]]);export{E as __pageData,O as default};
