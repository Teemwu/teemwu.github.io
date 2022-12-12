import{_ as t}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.ec1f1841.js";import{_ as c,c as r,b as n,w as i,d as e,e as C,a as y,r as D,o as F}from"./app.fe1e5ba4.js";const w=JSON.parse('{"title":"微信小程序跳转无效","description":"","frontmatter":{"title":"微信小程序跳转无效","author":"teemwu","date":"2018/02/28 09:40","isPublished":true,"categories":["微信小程序"],"tags":["wepy"],"wordCount":215},"headers":[{"level":1,"title":"微信小程序跳转无效","slug":"微信小程序跳转无效","link":"#微信小程序跳转无效","children":[]}],"relativePath":"随笔/2018/微信小程序跳转无效.md","lastUpdated":1670810221000}'),d={name:"随笔/2018/微信小程序跳转无效.md"},A=e("h1",{id:"微信小程序跳转无效",tabindex:"-1"},[C("微信小程序跳转无效 "),e("a",{class:"header-anchor",href:"#微信小程序跳转无效","aria-hidden":"true"},"#")],-1),_=y(`<p><strong>原因</strong></p><blockquote><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1.检查你要跳转的位置是否在app.js中注册过。</span></span>
<span class="line"><span style="color:#A6ACCD;">2.检查你要跳转的地址是否有误。经常都是因为少写或者多写使得跳转无效。</span></span>
<span class="line"><span style="color:#A6ACCD;">3.检查你要跳转的位置是否位于TabBar中，如果是的话，要使用wx.switchTab 来跳转界面。</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[**原生**](https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`ini</span></span>
<span class="line"><span style="color:#A6ACCD;">wx.navigateTo(OBJECT) //不会销毁当前页面，仅仅是将其hide，使用wx.navigateBack可以返回到原页面。</span></span>
<span class="line"><span style="color:#A6ACCD;">wx.redirectTo(OBJECT) //销毁当前页面，跳转到应用内的其他页面。</span></span>
<span class="line"><span style="color:#A6ACCD;">wx.switchTab()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://tencent.github.io/wepy/document.html#/api?id=wepypage-class" target="_blank" rel="noreferrer"><strong>wepy</strong></a></p><div class="language-coffee"><button title="Copy Code" class="copy"></button><span class="lang">coffee</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$navigate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$redirect</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$switch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><strong>参考</strong></p><p><a href="http://blog.csdn.net/zgmu/article/details/72123335" target="_blank" rel="noreferrer"><strong>http://blog.csdn.net/zgmu/article/details/72123335</strong></a></p>`,7);function u(s,a,g,h,m,b){const l=t,p=D("ClientOnly");return F(),r("div",null,[A,n(p,null,{default:i(()=>[n(l,{modelValue:s.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=o=>s.$frontmatter=o)},null,8,["modelValue"])]),_:1}),_])}const v=c(d,[["render",u]]);export{w as __pageData,v as default};
