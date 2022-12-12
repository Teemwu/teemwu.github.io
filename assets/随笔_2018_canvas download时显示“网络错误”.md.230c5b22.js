import{_ as p}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.ec1f1841.js";import{_ as r,c,b as n,w as i,d as l,e as d,a as C,r as A,o as _}from"./app.fe1e5ba4.js";const k=JSON.parse('{"title":"canvas download时显示“网络错误”","description":"","frontmatter":{"title":"canvas download时显示“网络错误”","author":"teemwu","date":"2018/05/03 18:42","isPublished":true,"categories":["Javascript","报错"],"tags":null,"wordCount":248},"headers":[{"level":1,"title":"canvas download时显示“网络错误”","slug":"canvas-download时显示-网络错误","link":"#canvas-download时显示-网络错误","children":[]}],"relativePath":"随笔/2018/canvas download时显示“网络错误”.md","lastUpdated":1670810221000}'),m={name:"随笔/2018/canvas download时显示“网络错误”.md"},u=l("h1",{id:"canvas-download时显示-网络错误",tabindex:"-1"},[d("canvas download时显示“网络错误” "),l("a",{class:"header-anchor",href:"#canvas-download时显示-网络错误","aria-hidden":"true"},"#")],-1),v=C(`<p>在使用html2canvas截取页面的时候发现图片死活保存不到本地，chrome一直报“网络错误”，百度、谷歌无果。</p><p>后来想想，html2canvas生成的也是canvas对象，所以按这个关键字找到了解决方法。</p><p><a href="https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error" target="_blank" rel="noreferrer">解决链接</a>:<a href="https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error</a></p><p>主要出现这个问题是canvas保存图片到本地时各个浏览器像素的限制不同，所以将图片数据转换成Blob数据流下载下来就行了。</p><p>主要代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//....前面省略      </span></span>
<span class="line"><span style="color:#A6ACCD;">dataURLtoBlob(dataurl) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var arr = dataurl.split(&#39;,&#39;), mime = arr[0].match(/:(.*?);/)[1],</span></span>
<span class="line"><span style="color:#A6ACCD;">          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);</span></span>
<span class="line"><span style="color:#A6ACCD;">        while(n--){</span></span>
<span class="line"><span style="color:#A6ACCD;">          u8arr[n] = bstr.charCodeAt(n);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Blob([u8arr], {type:mime});</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      downloadCanvas(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        var link = document.createElement(&quot;a&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var imgData =canvas.toDataURL({format: &#39;png&#39;, multiplier: 4});</span></span>
<span class="line"><span style="color:#A6ACCD;">        var strDataURI = imgData.substr(22, imgData.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var blob = this.dataURLtoBlob(imgData);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var objurl = URL.createObjectURL(blob);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        link.download = this.cName+&quot;.png&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        link.href = objurl;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        link.click();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">//省略后面...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6);function D(a,s,y,h,w,b){const e=p,o=A("ClientOnly");return _(),c("div",null,[u,n(o,null,{default:i(()=>[n(e,{modelValue:a.$frontmatter,"onUpdate:modelValue":s[0]||(s[0]=t=>a.$frontmatter=t)},null,8,["modelValue"])]),_:1}),v])}const U=r(m,[["render",D]]);export{k as __pageData,U as default};
