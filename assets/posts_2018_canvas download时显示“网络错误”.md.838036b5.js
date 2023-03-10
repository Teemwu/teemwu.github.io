import{_ as r,c,a as n,w as i,b as l,d,e as C,r as e,o as A}from"./app.1ca1cf72.js";const g=JSON.parse('{"title":"canvas download时显示“网络错误”","description":"","frontmatter":{"title":"canvas download时显示“网络错误”","author":"teemwu","date":"2018/05/03 18:42","isPublished":true,"categories":["Javascript","报错"],"tags":null,"wordCount":248},"headers":[{"level":1,"title":"canvas download时显示“网络错误”","slug":"canvas-download时显示-网络错误","link":"#canvas-download时显示-网络错误","children":[]}],"relativePath":"posts/2018/canvas download时显示“网络错误”.md","lastUpdated":1678442282000}'),u={name:"posts/2018/canvas download时显示“网络错误”.md"},_=l("h1",{id:"canvas-download时显示-网络错误",tabindex:"-1"},[d("canvas download时显示“网络错误” "),l("a",{class:"header-anchor",href:"#canvas-download时显示-网络错误","aria-hidden":"true"},"#")],-1),m=C(`<p>在使用html2canvas截取页面的时候发现图片死活保存不到本地，chrome一直报“网络错误”，百度、谷歌无果。</p><p>后来想想，html2canvas生成的也是canvas对象，所以按这个关键字找到了解决方法。</p><p><a href="https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error" target="_blank" rel="noreferrer">解决链接</a>:<a href="https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error</a></p><p>主要出现这个问题是canvas保存图片到本地时各个浏览器像素的限制不同，所以将图片数据转换成Blob数据流下载下来就行了。</p><p>主要代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">//....前面省略      </span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6);function v(a,s,D,y,h,w){const o=e("articleMeta"),t=e("ClientOnly");return A(),c("div",null,[_,n(t,null,{default:i(()=>[n(o,{modelValue:a.$frontmatter,"onUpdate:modelValue":s[0]||(s[0]=p=>a.$frontmatter=p)},null,8,["modelValue"])]),_:1}),m])}const f=r(u,[["render",v]]);export{g as __pageData,f as default};
