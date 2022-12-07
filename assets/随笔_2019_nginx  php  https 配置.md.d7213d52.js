import{_ as o}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.36f45e7a.js";import{_ as c,c as r,b as a,w as i,d as p,e as C,a as A,r as _,o as d}from"./app.85d088e9.js";const F=JSON.parse('{"title":"nginx + php + https \u914D\u7F6E","description":"","frontmatter":{"title":"nginx + php + https \u914D\u7F6E","author":"teemwu","date":"2019/10/10 23:23","isPublished":true,"categories":["\u670D\u52A1\u5668"],"tags":["nginx","php","https"],"wordCount":98},"headers":[{"level":1,"title":"nginx + php + https \u914D\u7F6E","slug":"nginx-php-https-\u914D\u7F6E","link":"#nginx-php-https-\u914D\u7F6E","children":[]}],"relativePath":"\u968F\u7B14/2019/nginx  php  https \u914D\u7F6E.md","lastUpdated":1670425435000}'),h={name:"\u968F\u7B14/2019/nginx  php  https \u914D\u7F6E.md"},y=p("h1",{id:"nginx-php-https-\u914D\u7F6E",tabindex:"-1"},[C("nginx + php + https \u914D\u7F6E "),p("a",{class:"header-anchor",href:"#nginx-php-https-\u914D\u7F6E","aria-hidden":"true"},"#")],-1),D=A(`<div class="language-apache"><button title="Copy Code" class="copy"></button><span class="lang">apache</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name   \u4F60\u7684\u57DF\u540D\u6216IP;</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite ^(.*)$  https://$host$</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> permanent;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name \u4F60\u7684\u57DF\u540D\u6216IP;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root \u7AD9\u70B9\u6587\u4EF6\u8DEF\u5F84;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.php index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate   \u8BC1\u4E66.pem\u6587\u4EF6\u8DEF\u5F84;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate_key  \u8BC1\u4E66.key\u6587\u4EF6\u8DEF\u5F84;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">                fastcgi_pass   </span><span style="color:#F78C6C;">127</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">9000</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">                fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">                include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u6539\u4FDD\u5B58\u540E\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u4E0B nginx \u914D\u7F6E\u6587\u4EF6</p><div class="language-apache"><button title="Copy Code" class="copy"></button><span class="lang">apache</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"></span></code></pre></div>`,3);function g(s,n,m,u,x,f){const e=o,l=_("ClientOnly");return d(),r("div",null,[y,a(l,null,{default:i(()=>[a(e,{modelValue:s.$frontmatter,"onUpdate:modelValue":n[0]||(n[0]=t=>s.$frontmatter=t)},null,8,["modelValue"])]),_:1}),D])}const V=c(h,[["render",g]]);export{F as __pageData,V as default};
