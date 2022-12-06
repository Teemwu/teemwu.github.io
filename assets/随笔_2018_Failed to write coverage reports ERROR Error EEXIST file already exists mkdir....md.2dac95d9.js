import{_ as s,c as a,o as e,a as n}from"./app.87d5be66.js";const x=JSON.parse('{"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","description":"","frontmatter":{"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","author":"teemwu","date":"2018/12/04 17:27","isPublished":true,"categories":["\u62A5\u9519"],"tags":null},"headers":[{"level":1,"title":"Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...","slug":"failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","link":"#failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir","children":[]}],"relativePath":"\u968F\u7B14/2018/Failed to write coverage reports ERROR Error EEXIST file already exists mkdir....md","lastUpdated":1670316517000}'),l={name:"\u968F\u7B14/2018/Failed to write coverage reports ERROR Error EEXIST file already exists mkdir....md"},o=n(`<h1 id="failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir" tabindex="-1">Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir... <a class="header-anchor" href="#failed-to-write-coverage-reports-error-error-eexist-file-already-exists-mkdir" aria-hidden="true">#</a></h1><p>\u914D\u7F6E vue \u7684 jest \u5355\u5143\u6D4B\u8BD5\u65F6\u62A5\u9519\u5982\u4E0B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> Failed to write coverage reports:</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u767E\u5EA6\u3001\u8C37\u6B4C\u6CA1\u6709\u65E0\u679C\u3002\u540E\u6765\u4FEE\u6539\u4E86\xA0jest.config.js \u91CC\u7684\xA0collectCoverageFrom \u5339\u914D\u89C4\u683C\u89E3\u51B3\u95EE\u9898\u3002</p><p>\u5C06</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// jest.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">model.export=</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    collectCoverageFrom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u3000\u3000&#39;**</span><span style="color:#676E95;">/*.{js,vue}&#39;,</span></span>
<span class="line"><span style="color:#676E95;">    \u3000\u3000&#39;!**/</span><span style="color:#A6ACCD;">node_modules</span><span style="color:#676E95;">/**&#39;</span></span>
<span class="line"><span style="color:#676E95;">  \u3000],</span></span>
<span class="line"><span style="color:#676E95;">  // ...      </span></span>
<span class="line"><span style="color:#676E95;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u6539\u6210</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// jest.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">model.export={</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    collectCoverageFrom: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u3000  &#39;src/**/*.{js,vue}&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;!src/main.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;!src/router/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;!**/node_modules/**&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u3000],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...      </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),p=[o];function r(t,i,c,d,C,y){return e(),a("div",null,p)}const _=s(l,[["render",r]]);export{x as __pageData,_ as default};
