import{_ as o,c as i,b as t,w as c,d as s,e as d,a as p,r as h,o as u,f as _}from"./app.a54b87e4.js";const A=JSON.parse('{"title":"常用命令","description":"","frontmatter":{"title":"常用命令","author":"teemwu","date":"2022/10/25 15:52","isPublished":true,"categories":["效率"],"tags":["terminal"],"wordCount":137},"headers":[{"level":1,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":2,"title":"清空 terminal 输出信息","slug":"清空-terminal-输出信息","link":"#清空-terminal-输出信息","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"基础知识/06.Terminal/常用命令.md","lastUpdated":1671184101000}'),m={name:"基础知识/06.Terminal/常用命令.md"},C=s("h1",{id:"常用命令",tabindex:"-1"},[d("常用命令 "),s("a",{class:"header-anchor",href:"#常用命令","aria-hidden":"true"},"#")],-1),b=p(`<p>记录一些常用的终端命令。</p><h2 id="清空-terminal-输出信息" tabindex="-1">清空 terminal 输出信息 <a class="header-anchor" href="#清空-terminal-输出信息" aria-hidden="true">#</a></h2><p>清空当前屏输出信息（滚动上去还能看到历史记录）</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">clear</span></span>
<span class="line"></span></code></pre></div><p>重置终端（会重新加载终端并清空输出内容）</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">reset</span></span>
<span class="line"></span></code></pre></div><p>重置终端并不重新加载（速度快，效果佳）</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tput reset</span></span>
<span class="line"></span></code></pre></div><p>如果使用的是 VSCode 可终端里直接使用 <code>command + K</code> 键进行快速重置。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://askubuntu.com/a/25079" target="_blank" rel="noreferrer">How to really clear the terminal?</a></li><li><a href="https://stackoverflow.com/a/48713754/8897313" target="_blank" rel="noreferrer">How can I clear the terminal in Visual Studio Code?</a></li></ul>`,11);function f(e,a,g,v,k,y){const l=_,n=h("ClientOnly");return u(),i("div",null,[C,t(n,null,{default:c(()=>[t(l,{modelValue:e.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$frontmatter=r)},null,8,["modelValue"])]),_:1}),b])}const T=o(m,[["render",f]]);export{A as __pageData,T as default};
