import{_ as i,c as p,a as t,w as c,b as o,d as s,e as u,r as l,o as h}from"./app.bba8534e.js";const V=JSON.parse('{"title":"A hook (orm) failed to load!","description":"","frontmatter":{"title":"A hook (`orm`) failed to load!","author":"teemwu","date":"2018/06/28 10:37","isPublished":true,"categories":["Sails","报错"],"tags":null,"wordCount":134},"headers":[{"level":1,"title":"A hook (orm) failed to load!","slug":"a-hook-orm-failed-to-load","link":"#a-hook-orm-failed-to-load","children":[]}],"relativePath":"posts/2018/A hook (orm) failed to load!.md","lastUpdated":1677057861000}'),m={name:"posts/2018/A hook (orm) failed to load!.md"},_=o("h1",{id:"a-hook-orm-failed-to-load",tabindex:"-1"},[s("A hook ("),o("code",null,"orm"),s(") failed to load! "),o("a",{class:"header-anchor",href:"#a-hook-orm-failed-to-load","aria-hidden":"true"},"#")],-1),f=u('<p><strong>启动sails时报错：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">error: A hook (`orm`) failed to load!</span></span>\n<span class="line"><span style="color:#A6ACCD;">error: Could not tear down the ORM hook.  Error details: Error: Consistency violation: Attempting to tear down a datastore (`default`) which is not currently registered with this adapter.  This is usually due to a race condition in userland code (e.g. attempting to tear down the same ORM instance more than once), or it could be due to a bug in this adapter.  (If you get stumped, reach out at http://sailsjs.com/support.)</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>**原因：**数据库服务关闭了，sails连接不上数据库。</p><p>**解决：**重启数据库服务“ windows + R &quot;--&gt;&quot; services.msc &quot;找到数据库服务” 启动 “。</p>',4);function A(e,a,C,g,k,y){const n=l("articleMeta"),r=l("ClientOnly");return h(),p("div",null,[_,t(r,null,{default:c(()=>[t(n,{modelValue:e.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=d=>e.$frontmatter=d)},null,8,["modelValue"])]),_:1}),f])}const b=i(m,[["render",A]]);export{V as __pageData,b as default};
