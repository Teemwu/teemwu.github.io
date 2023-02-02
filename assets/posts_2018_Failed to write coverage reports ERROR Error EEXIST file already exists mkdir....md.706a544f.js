import{_ as p,c as i,a,w as c,b as n,d,e as C,r as l,o as y}from"./app.caa71a2c.js";const v=JSON.parse('{"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","description":"","frontmatter":{"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","author":"teemwu","date":"2018/12/04 17:27","isPublished":true,"categories":["报错"],"tags":null,"wordCount":206},"headers":[{"level":1,"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","slug":"failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","link":"#failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","children":[]}],"relativePath":"posts/2018/Failed to write coverage reports ERROR Error EEXIST file already exists mkdir....md","lastUpdated":1675321729000}'),A={name:"posts/2018/Failed to write coverage reports ERROR Error EEXIST file already exists mkdir....md"},x=n("h1",{id:"failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir",tabindex:"-1"},[d("Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir... "),n("a",{class:"header-anchor",href:"#failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","aria-hidden":"true"},"#")],-1),m=C(`<p>配置 vue 的 jest 单元测试时报错如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> Failed to write coverage reports:</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7);function _(s,e,u,E,D,f){const o=l("articleMeta"),t=l("ClientOnly");return y(),i("div",null,[x,a(t,null,{default:c(()=>[a(o,{modelValue:s.$frontmatter,"onUpdate:modelValue":e[0]||(e[0]=r=>s.$frontmatter=r)},null,8,["modelValue"])]),_:1}),m])}const k=p(A,[["render",_]]);export{v as __pageData,k as default};
