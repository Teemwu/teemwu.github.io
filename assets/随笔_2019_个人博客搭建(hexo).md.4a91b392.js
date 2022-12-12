import{_ as t}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.ec1f1841.js";import{_ as i,c as r,b as n,w as c,d as e,e as d,a as h,r as g,o as C}from"./app.fe1e5ba4.js";const u="/assets/2019011313010.b38df0e0.png",k=JSON.parse('{"title":"个人博客搭建(hexo)","description":"","frontmatter":{"title":"个人博客搭建(hexo)","author":"teemwu","date":"2019/01/13 13:01","isPublished":true,"categories":["工具","服务器"],"tags":["hexo"],"wordCount":1076},"headers":[{"level":1,"title":"个人博客搭建(hexo)","slug":"个人博客搭建-hexo","link":"#个人博客搭建-hexo","children":[{"level":2,"title":"开始前","slug":"开始前","link":"#开始前","children":[{"level":3,"title":"操作系统&环境","slug":"操作系统-环境","link":"#操作系统-环境","children":[]},{"level":3,"title":"Hexo 安装","slug":"hexo-安装","link":"#hexo-安装","children":[]}]},{"level":2,"title":"部署到服务器","slug":"部署到服务器","link":"#部署到服务器","children":[{"level":3,"title":"服务器端配置","slug":"服务器端配置","link":"#服务器端配置","children":[]},{"level":3,"title":"Windows 本地配置","slug":"windows-本地配置","link":"#windows-本地配置","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"随笔/2019/个人博客搭建(hexo).md","lastUpdated":1670810221000}'),y={name:"随笔/2019/个人博客搭建(hexo).md"},A=e("h1",{id:"个人博客搭建-hexo",tabindex:"-1"},[d("个人博客搭建(hexo) "),e("a",{class:"header-anchor",href:"#个人博客搭建-hexo","aria-hidden":"true"},"#")],-1),b=h(`<p>老早就想搭建一个属于自己的个人博客了，之前也弄过一个，后台到前端完全原生自主编写，可是终究还是太年轻，很多东西都不会，也不懂得坚持，慢慢就荒废了。加上几次的服务器变更，再加上工作没精力打理，之前的个人博客已经完全荒废了。经过2018年一年时间的沉淀，决定再次搭建一个属于自己的博客了，之前一直在 <a href="https://www.cnblogs.com/fiy-noob/" target="_blank" rel="noreferrer">博客园</a> 潜水，平时也没怎么输出，记录几个随笔。2019年，决定好好地写一下博客。计划每周写一篇吧，以周为单位，不断吸取新的东西，整理输出。</p><h2 id="开始前" tabindex="-1">开始前 <a class="header-anchor" href="#开始前" aria-hidden="true">#</a></h2><p>本篇主要记录如何将 hexo 博客部署到服务端，因此 git 和 node 的安装和配置需要自行准备。</p><h3 id="操作系统-环境" tabindex="-1">操作系统&amp;环境 <a class="header-anchor" href="#操作系统-环境" aria-hidden="true">#</a></h3><ul><li>本地：Windows10</li><li>ECS服务器：Ubuntu18.04（阿里云）</li><li>安装 git</li><li>安装 node</li></ul><h3 id="hexo-安装" tabindex="-1">Hexo 安装 <a class="header-anchor" href="#hexo-安装" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ npm install -g hexo-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">$ hexo init &lt;folder&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cd &lt;folder&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="部署到服务器" tabindex="-1">部署到服务器 <a class="header-anchor" href="#部署到服务器" aria-hidden="true">#</a></h2><p>hexo 安装和配置好主题之后便是日常的写作发布了，可是要怎么才能比较优雅地写作及发布呢？参考了网上的做法以及考虑到后期自己需要 DIY 的需求，决定在本地环境生成博客静态文件，然后通过 git 推送到服务器 git 仓库，再设置 git-hooks 来进行自动部署。具体思路如图：</p><p><img src="`+u+`" alt="hexo-deploy"></p><h3 id="服务器端配置" tabindex="-1">服务器端配置 <a class="header-anchor" href="#服务器端配置" aria-hidden="true">#</a></h3><p>由于自个的 Linux 和 git 都不是很好，因此在这一块耗了很长时间（在此立个flag，要认真研究一下！）。好啦，下面将会是一堆命令操作，用惯 Windows 可能会不大适应~_~不要紧，按顺序一步一步来。</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /var/www/blog // 创建存放博客静态文件的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd git // Linux增加一个 git 用户</span></span>
<span class="line"><span style="color:#A6ACCD;">passwd git // 设置 git 用户的密码</span></span>
<span class="line"><span style="color:#A6ACCD;">su git // 切换到 git 用户</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /home/git/ // 如果没有 /home/git 目录则自行创建</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir repos &amp;&amp; cd repos</span></span>
<span class="line"><span style="color:#A6ACCD;">git init --bare blog.git // 创建一个 git 裸库</span></span>
<span class="line"><span style="color:#A6ACCD;">cd blog.git/hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">vi post-receive // 创建hook钩子函数，并输入以下内容</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>post-receive:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">#!/bin/sh</span></span>
<span class="line"><span style="color:#A6ACCD;">git --work-tree=/var/www/blog --git-dir=/home/git/repos/blog.git checkout -f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>保存完毕后继续以下命令</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">chmod +x post-receive // 赋予执行权限</span></span>
<span class="line"><span style="color:#A6ACCD;">exit // 退出 git 用户</span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R git /home/git/repos/blog.git // 将 blog.git 文件夹及文件夹下所有文件所有者设置为 git 用户</span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R git ~/.ssh // 原理同上句，如果没有 .ssh 文件夹请自行创建</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>上面就是服务端所要的配置，在执行命令的时候可能会报错，可以参考文末“参考”部分解决。</p><h3 id="windows-本地配置" tabindex="-1">Windows 本地配置 <a class="header-anchor" href="#windows-本地配置" aria-hidden="true">#</a></h3><p>打开 &quot;Git Bash&quot; 命令行工具，执行以下命令</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ssh-copy-id -i C:/Users/yourname/.ssh/id_rsa.pub git@server_ip // 将公钥复制到服务器上</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh git@server_ip //测试是否无需密码登录</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>如果没有报错就可以打开 hexo 博客项目，否则按照报错提示去找解决方法。 在博客跟目录打开 _config.yml 主配置文件找到 deploy 属性进行以下配置：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">repo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@server_ip:/home/git/repos/blog.git</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre></div><p>然后在博客根目录执行以下命令</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">hexo g // 生成静态页面文件</span></span>
<span class="line"><span style="color:#C3E88D;">hexo d // 部署到服务器</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>至此个人博客已经上传到ECS云服务器上了，至于要怎么给外界访问，就要使用 Nginx、Apache 等 web 服务器软件咯。具体配置自行搜索咯。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://hexo.io/docs/deployment" target="_blank" rel="noreferrer">Hexo 官方文档</a></li><li><a href="https://juejin.im/post/5b70d68ae51d45665d383281" target="_blank" rel="noreferrer">带你跳过各种坑，一次性把 Hexo 博客部署到自己的服务器</a></li><li><a href="https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90" target="_blank" rel="noreferrer">自定义 Git - Git 钩子</a></li><li><a href="https://www.cnblogs.com/DawaTech/p/7249734.html" target="_blank" rel="noreferrer">linux修改文件所有者和文件所在组</a></li><li><a href="https://segmentfault.com/q/1010000004683286/a-1020000004684388" target="_blank" rel="noreferrer">裸库? git init 和 git init --bare 的区别</a></li><li><a href="https://www.cnblogs.com/felixzh/p/5062082.html" target="_blank" rel="noreferrer">git is not in the sudoers file. This incident will be reported.</a></li><li><a href="https://www.jianshu.com/p/68e727dda16d" target="_blank" rel="noreferrer">如何优雅地发布Hexo博客</a></li></ul>`,28);function _(s,a,m,D,x,f){const l=t,o=g("ClientOnly");return C(),r("div",null,[A,n(o,null,{default:c(()=>[n(l,{modelValue:s.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=p=>s.$frontmatter=p)},null,8,["modelValue"])]),_:1}),b])}const E=i(y,[["render",_]]);export{k as __pageData,E as default};
