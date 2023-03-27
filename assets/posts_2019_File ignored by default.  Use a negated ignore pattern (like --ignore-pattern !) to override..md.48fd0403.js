import{_ as s,c as d,C as a,z as p,x as n,a as g,N as c,D as r,o as _}from"./chunks/framework.af95065a.js";const u="/assets/2019121715590.23649c5f.png",A=JSON.parse(`{"title":"File ignored by default.  Use a negated ignore pattern (like \\"--ignore-pattern '!'\\") to override.","description":"","frontmatter":{"title":"File ignored by default.  Use a negated ignore pattern (like \\"--ignore-pattern '!'\\") to override.","author":"teemwu","date":"2019/12/17 15:59","isPublished":true,"categories":["报错"],"tags":null,"wordCount":98},"headers":[{"level":1,"title":"File ignored by default.  Use a negated ignore pattern (like \\"--ignore-pattern '!'\\") to override.","slug":"file-ignored-by-default-use-a-negated-ignore-pattern-like-ignore-pattern-to-override","link":"#file-ignored-by-default-use-a-negated-ignore-pattern-like-ignore-pattern-to-override","children":[{"level":3,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"posts/2019/File ignored by default.  Use a negated ignore pattern (like --ignore-pattern !) to override..md","lastUpdated":1679880402000}`),h={name:"posts/2019/File ignored by default.  Use a negated ignore pattern (like --ignore-pattern !) to override..md"},f=n("h1",{id:"file-ignored-by-default-use-a-negated-ignore-pattern-like-ignore-pattern-to-override",tabindex:"-1"},[g(`File ignored by default. Use a negated ignore pattern (like "--ignore-pattern '!'") to override. `),n("a",{class:"header-anchor",href:"#file-ignored-by-default-use-a-negated-ignore-pattern-like-ignore-pattern-to-override","aria-label":`Permalink to "File ignored by default.  Use a negated ignore pattern (like "--ignore-pattern '!'") to override."`},"​")],-1),b=c('<h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><p>使用 vue-cli 创建工程，将 eslint 的配置单独出 .eslintrc.js 文件时，出现此警告</p><p><img src="'+u+`" alt=""></p><h3 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><p>项目根目录增加文件名为 .eslintignore 的文件，并在此文件中添加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">!.eslintrc.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://github.com/eslint/eslint/blob/d31f3370396ec4868722bdc044aa697b135ac183/.eslintignore#L13" target="_blank" rel="noreferrer">https://github.com/eslint/eslint/blob/d31f3370396ec4868722bdc044aa697b135ac183/.eslintignore#L13</a></p>`,8);function m(e,t,k,v,y,C){const i=r("articleMeta"),l=r("ClientOnly");return _(),d("div",null,[f,a(l,null,{default:p(()=>[a(i,{modelValue:e.$frontmatter,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$frontmatter=o)},null,8,["modelValue"])]),_:1}),b])}const P=s(h,[["render",m]]);export{A as __pageData,P as default};