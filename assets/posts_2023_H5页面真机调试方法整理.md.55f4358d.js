import{_ as r,c as i,C as s,z as c,x as l,a as d,N as h,D as o,o as g}from"./chunks/framework.88b2c8bb.js";const D=JSON.parse('{"title":"H5页面真机调试方法整理","description":"","frontmatter":{"title":"H5页面真机调试方法整理","author":"teemwu","date":"2023/01/09 10:13","isPublished":true,"categories":["工具"],"tags":["调试"],"wordCount":582},"headers":[{"level":1,"title":"H5页面真机调试方法整理","slug":"h5页面真机调试方法整理","link":"#h5页面真机调试方法整理","children":[{"level":2,"title":"spy-debugger","slug":"spy-debugger","link":"#spy-debugger","children":[]},{"level":2,"title":"Chrome DevTools","slug":"chrome-devtools","link":"#chrome-devtools","children":[]}]}],"relativePath":"posts/2023/H5页面真机调试方法整理.md","lastUpdated":1678960772000}'),u={name:"posts/2023/H5页面真机调试方法整理.md"},b=l("h1",{id:"h5页面真机调试方法整理",tabindex:"-1"},[d("H5页面真机调试方法整理 "),l("a",{class:"header-anchor",href:"#h5页面真机调试方法整理","aria-hidden":"true"},"#")],-1),m=h(`<p>真机调试在很久之前的随笔里有写过，因为最近需要真机调试微信上的页面，发现之前有些方法不管用了，所以现在重新整理下。下面主要介绍两种调试工具。</p><h2 id="spy-debugger" tabindex="-1">spy-debugger <a class="header-anchor" href="#spy-debugger" aria-hidden="true">#</a></h2><p>现在用得比较多的调试工具是 <code>spy-debugger</code>，因为它不需要通过 USB 线来连接，相对来说会方便点。但需要在手机上安装证书才能进行真机调试，有些手机安装证书很麻烦甚者还安装不了证书的就不推荐这种方式了。下面简单介绍下其安装使用，具体可到 Github 上查看<a href="https://github.com/wuchangming/spy-debugger#readme" target="_blank" rel="noreferrer">具体文档</a>。</p><p>安装</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-1UAbi" id="tab-2y-BTK5" checked="checked"><label for="tab-2y-BTK5">Windows</label><input type="radio" name="group-1UAbi" id="tab-iV8RiM-"><label for="tab-iV8RiM-">MacOS</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">spy-debugger</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">spy-debugger</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span></code></pre></div></div></div><p>安装完成后可以直接启动进行调试</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">spy-debugger</span></span>
<span class="line"></span></code></pre></div><p>调试前需要注意几点：</p><ol><li>手机和电脑必须在同一网络下</li><li>手机上手动设置代理（IP 填写电脑 IP 地址，端口默认使用 9888） <ul><li>Android：<code>设置 - WLAN - 长按选中网络 - 修改网络 - 高级 - 代理设置 - 手动</code></li><li>IOS：<code>设置 - 无线局域网 - 选中网络 - HTTP 代理手动</code></li></ul></li><li>手机证书安装。注：手机必须先设置完代理后再通过(非微信)手机浏览器访问 <a href="http://spydebugger.com/cert" target="_blank" rel="noreferrer">http://spydebugger.com/cert</a>（手机首次调试需要安装证书，已安装了证书的手机无需重复安装)。iOS新安装的证书需要手动打开证书信任，<code>设置-&gt;通用-&gt;关于本机-&gt;证书信任设置-&gt; 找到node-mitmproxy CA（打开）</code></li><li>手机浏览器访问要调试的页面即可</li></ol><h2 id="chrome-devtools" tabindex="-1">Chrome DevTools <a class="header-anchor" href="#chrome-devtools" aria-hidden="true">#</a></h2><p>如果手上是 android 手机并且刚好手上有数据线可以连接手机和电脑，可使用此方法。</p><ol><li>在 Chrome 浏览器访问 <code>chrome://inspect/#devices</code></li><li>用数据线连接你的手机和电脑，并且手机上需要在设置里开启 <code>USB调试</code></li><li>允许 USB 调试后，在手机上访问要调试的页面，chrome 就会显示对应的页面地址</li><li>开启科学上网后，点击对应页面下面的 <code>inspect</code> 等待弹出页面就可以开始调试了</li></ol>`,12);function y(e,a,C,_,v,A){const t=o("articleMeta"),n=o("ClientOnly");return g(),i("div",null,[b,s(n,null,{default:c(()=>[s(t,{modelValue:e.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=p=>e.$frontmatter=p)},null,8,["modelValue"])]),_:1}),m])}const B=r(u,[["render",y]]);export{D as __pageData,B as default};
