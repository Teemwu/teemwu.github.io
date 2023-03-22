import{_ as r,c,C as e,z as i,x as l,a as d,N as u,D as n,o as C}from"./chunks/framework.818a7516.js";const v=JSON.parse('{"title":"Flutter 常用命令","description":"","frontmatter":{"title":"Flutter 常用命令","author":"teemwu","date":"2019/12/27 09:41","isPublished":true,"categories":["Flutter"],"tags":["flutter"],"wordCount":150},"headers":[{"level":1,"title":"Flutter 常用命令","slug":"flutter-常用命令","link":"#flutter-常用命令","children":[{"level":3,"title":"新建项目","slug":"新建项目","link":"#新建项目","children":[]},{"level":3,"title":"安装所需包","slug":"安装所需包","link":"#安装所需包","children":[]},{"level":3,"title":"打包app","slug":"打包app","link":"#打包app","children":[]},{"level":3,"title":"发布版本调试","slug":"发布版本调试","link":"#发布版本调试","children":[]},{"level":3,"title":"更新 Flutter 版本","slug":"更新-flutter-版本","link":"#更新-flutter-版本","children":[]}]}],"relativePath":"posts/2019/Flutter 常用命令.md","lastUpdated":1679454061000}'),h={name:"posts/2019/Flutter 常用命令.md"},A=l("h1",{id:"flutter-常用命令",tabindex:"-1"},[d("Flutter 常用命令 "),l("a",{class:"header-anchor",href:"#flutter-常用命令","aria-label":'Permalink to "Flutter 常用命令"'},"​")],-1),y=u(`<h3 id="新建项目" tabindex="-1">新建项目 <a class="header-anchor" href="#新建项目" aria-label="Permalink to &quot;新建项目&quot;">​</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flutter create project_name</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="安装所需包" tabindex="-1">安装所需包 <a class="header-anchor" href="#安装所需包" aria-label="Permalink to &quot;安装所需包&quot;">​</a></h3><p>如果使用 vscode 开发，安装了相关插件的话，改动 pubspec.yaml 文件就会自动增删包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flutter packages get</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flutter pub get</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="打包app" tabindex="-1">打包app <a class="header-anchor" href="#打包app" aria-label="Permalink to &quot;打包app&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Android</span></span>
<span class="line"><span style="color:#A6ACCD;">flutter build apk</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ios</span></span>
<span class="line"><span style="color:#A6ACCD;">flutter build ios</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="发布版本调试" tabindex="-1">发布版本调试 <a class="header-anchor" href="#发布版本调试" aria-label="Permalink to &quot;发布版本调试&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flutter run  --release</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>发布版本测试需要连接真机方能调试。</p><h3 id="更新-flutter-版本" tabindex="-1">更新 Flutter 版本 <a class="header-anchor" href="#更新-flutter-版本" aria-label="Permalink to &quot;更新 Flutter 版本&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flutter upgrade</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>国内需要设置镜像，否则更新下载失败，<a href="https://flutter.cn/community/china" target="_blank" rel="noreferrer">参考</a></p><p>mac下终端输入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">open ~/.bash_profile </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>添加镜像设置：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export </span><span style="color:#F07178;">PUB_HOSTED_URL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://pub.flutter-io.cn</span></span>
<span class="line"><span style="color:#A6ACCD;">export </span><span style="color:#F07178;">FLUTTER_STORAGE_BASE_URL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://storage.flutter-io.cn</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,19);function g(a,s,m,_,f,b){const t=n("articleMeta"),p=n("ClientOnly");return C(),c("div",null,[A,e(p,null,{default:i(()=>[e(t,{modelValue:a.$frontmatter,"onUpdate:modelValue":s[0]||(s[0]=o=>a.$frontmatter=o)},null,8,["modelValue"])]),_:1}),y])}const k=r(h,[["render",g]]);export{v as __pageData,k as default};
