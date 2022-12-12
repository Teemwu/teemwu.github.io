import{_ as o}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.88bb6f08.js";import{_ as c,c as r,b as a,w as i,d as p,e as C,a as A,r as _,o as d}from"./app.76f071c4.js";const F=JSON.parse('{"title":"nginx + php + https 配置","description":"","frontmatter":{"title":"nginx + php + https 配置","author":"teemwu","date":"2019/10/10 23:23","isPublished":true,"categories":["服务器"],"tags":["nginx","php","https"],"wordCount":98},"headers":[{"level":1,"title":"nginx + php + https 配置","slug":"nginx-php-https-配置","link":"#nginx-php-https-配置","children":[]}],"relativePath":"随笔/2019/nginx  php  https 配置.md","lastUpdated":1670836236000}'),h={name:"随笔/2019/nginx  php  https 配置.md"},y=p("h1",{id:"nginx-php-https-配置",tabindex:"-1"},[C("nginx + php + https 配置 "),p("a",{class:"header-anchor",href:"#nginx-php-https-配置","aria-hidden":"true"},"#")],-1),D=A(`<div class="language-apache"><button title="Copy Code" class="copy"></button><span class="lang">apache</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name   你的域名或IP;</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite ^(.*)$  https://$host$</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> permanent;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name 你的域名或IP;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root 站点文件路径;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.php index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate   证书.pem文件路径;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate_key  证书.key文件路径;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">                fastcgi_pass   </span><span style="color:#F78C6C;">127</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">9000</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">                fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">                include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>更改保存后需要重新加载下 nginx 配置文件</p><div class="language-apache"><button title="Copy Code" class="copy"></button><span class="lang">apache</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"></span></code></pre></div>`,3);function g(s,n,m,u,x,f){const e=o,l=_("ClientOnly");return d(),r("div",null,[y,a(l,null,{default:i(()=>[a(e,{modelValue:s.$frontmatter,"onUpdate:modelValue":n[0]||(n[0]=t=>s.$frontmatter=t)},null,8,["modelValue"])]),_:1}),D])}const V=c(h,[["render",g]]);export{F as __pageData,V as default};
