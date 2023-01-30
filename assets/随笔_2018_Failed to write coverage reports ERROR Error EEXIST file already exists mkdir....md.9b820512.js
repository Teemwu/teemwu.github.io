import{_ as r,c as p,b as a,w as i,d as n,e as c,a as d,r as C,o as y,f as A}from"./app.25b4d486.js";const k=JSON.parse('{"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","description":"","frontmatter":{"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","author":"teemwu","date":"2018/12/04 17:27","isPublished":true,"categories":["报错"],"tags":null,"wordCount":206},"headers":[{"level":1,"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","slug":"failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","link":"#failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","children":[]}],"relativePath":"随笔/2018/Failed to write coverage reports ERROR Error EEXIST file already exists mkdir....md","lastUpdated":1675042688000}'),x={name:"随笔/2018/Failed to write coverage reports ERROR Error EEXIST file already exists mkdir....md"},m=n("h1",{id:"failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir",tabindex:"-1"},[c("Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir... "),n("a",{class:"header-anchor",href:"#failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","aria-hidden":"true"},"#")],-1),_=d(`<p>配置 vue 的 jest 单元测试时报错如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> Failed to write coverage reports:</span></span>
<span class="line"><span style="color:#A6ACCD;">        ERROR: Error: EEXIST: file already exists, mkdir &#39;xxx\\tests\\coverage\\vue-cli-3\\dist\\js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        STACK: Error: EEXIST: file already exists, mkdir &#39;xxx\\tests\\coverage\\vue-cli-3\\dist\\js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    at Object.mkdirSync (fs.js:738:3)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:71:13)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:77:24)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:78:17)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:78:17)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:78:17)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:78:17)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:78:17)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:78:17)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at sync (xxx\\node_modules\\mkdirp\\index.js:78:17)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>百度、谷歌没有无果。后来修改了 jest.config.js 里的 collectCoverageFrom 匹配规格解决问题。</p><p>将</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// jest.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">model.export=</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    collectCoverageFrom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    　　&#39;**</span><span style="color:#676E95;font-style:italic;">/*.{js,vue}&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    　　&#39;!**/</span><span style="color:#A6ACCD;">node_modules</span><span style="color:#676E95;font-style:italic;">/**&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  　],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // ...      </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>改成</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// jest.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">model.export={</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    collectCoverageFrom: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    　  &#39;src/**/*.{js,vue}&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;!src/main.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;!src/router/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;!**/node_modules/**&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  　],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...      </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7);function u(s,e,E,D,f,g){const l=A,o=C("ClientOnly");return y(),p("div",null,[m,a(o,null,{default:i(()=>[a(l,{modelValue:s.$frontmatter,"onUpdate:modelValue":e[0]||(e[0]=t=>s.$frontmatter=t)},null,8,["modelValue"])]),_:1}),_])}const j=r(x,[["render",u]]);export{k as __pageData,j as default};
