import{_ as s,c as n,o as a,a as e}from"./app.b066a273.js";const A=JSON.parse(`{"title":"Cannot read property 'fileCoverage' of undefined...","description":"","frontmatter":{"title":"Cannot read property 'fileCoverage' of undefined...","author":"teemwu","date":"2018/12/04 17:10","isPublished":true,"categories":["\u62A5\u9519"],"tags":null},"headers":[{"level":1,"title":"\\"Cannot read property 'fileCoverage' of undefined...\\"","slug":"cannot-read-property-filecoverage-of-undefined","link":"#cannot-read-property-filecoverage-of-undefined","children":[]}],"relativePath":"\u968F\u7B14/2018/Cannot read property fileCoverage of undefined....md","lastUpdated":1664375998000}`),o={name:"\u968F\u7B14/2018/Cannot read property fileCoverage of undefined....md"},l=e(`<h1 id="cannot-read-property-filecoverage-of-undefined" tabindex="-1">&quot;Cannot read property &#39;fileCoverage&#39; of undefined...&quot; <a class="header-anchor" href="#cannot-read-property-filecoverage-of-undefined" aria-hidden="true">#</a></h1><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Failed to collect coverage from xxx.js</span></span>
<span class="line"><span style="color:#A6ACCD;">ERROR: Cannot read property &#39;fileCoverage&#39; of undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">STACK: TypeError: Cannot read property &#39;fileCoverage&#39; of undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">    at Instrumenter.instrumentSync (xxx.js:148:40)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at exports.default (xxx.js:32:18)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at Object.worker (xxx.js:52:80)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at execMethod (xxx.js:90:29)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at process.on (xxx.js:40:7)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at process.emit (events.js:182:13)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at emit (internal/child_process.js:811:12)</span></span>
<span class="line"><span style="color:#A6ACCD;">    at process._tickCallback (internal/process/next_tick.js:63:19)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u7528 jest \u8FDB\u884C\u9879\u76EE\u7684\u4EE3\u7801\u8986\u76D6\u7387\u6D4B\u8BD5\u7684\u65F6\u5019\u62A5\u4EE5\u4E0A\u9519\u8BEF\uFF0C\u7ECF\u6392\u67E5\uFF0C\u662F\u9879\u76EE\u4E4B\u524D\u4F7F\u7528\u4E86 Babel \u7684\xA0<a href="https://yarnpkg.com/zh-Hans/package/istanbul" target="_blank" rel="noreferrer">istanbul</a>\xA0\u4EE3\u7801\u8986\u76D6\u7387\u63D2\u4EF6\uFF0C\u5982\u679C\u518D\u5F00\u542F jest \u7684 \u201C\xA0collectCoverage: true \u201D \u65F6\u5C31\u4F1A\u9020\u6210\u51B2\u7A81\u3002</p><p>\u89E3\u51B3\uFF1A\u5728 babel \u7684\u914D\u7F6E\u6587\u4EF6\xA0.babelrc \u91CC\u53BB\u6389\u63D2\u4EF6 istanbul \u7684\u914D\u7F6E</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#676E95;">// .babelrc</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">istanbul</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u53BB\u6389 istanbul</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,5),p=[l];function t(r,c,i,C,d,y){return a(),n("div",null,p)}const f=s(o,[["render",t]]);export{A as __pageData,f as default};
