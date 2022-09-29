import{_ as a,c as s,o as n,a as l}from"./app.e45ad973.js";const v=JSON.parse('{"title":"canvas download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D","description":"","frontmatter":{"title":"canvas download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D","author":"teemwu","date":"2018/05/03 18:42","isPublished":true,"categories":["Javascript","\u62A5\u9519"],"tags":null},"headers":[{"level":1,"title":"canvas download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D","slug":"canvas-download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D","link":"#canvas-download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D","children":[]}],"relativePath":"\u968F\u7B14/2018/canvas download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D.md","lastUpdated":1664444269000}'),o={name:"\u968F\u7B14/2018/canvas download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D.md"},e=l(`<h1 id="canvas-download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D" tabindex="-1">canvas download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D <a class="header-anchor" href="#canvas-download\u65F6\u663E\u793A\u201C\u7F51\u7EDC\u9519\u8BEF\u201D" aria-hidden="true">#</a></h1><p>\u5728\u4F7F\u7528html2canvas\u622A\u53D6\u9875\u9762\u7684\u65F6\u5019\u53D1\u73B0\u56FE\u7247\u6B7B\u6D3B\u4FDD\u5B58\u4E0D\u5230\u672C\u5730\uFF0Cchrome\u4E00\u76F4\u62A5\u201C\u7F51\u7EDC\u9519\u8BEF\u201D\uFF0C\u767E\u5EA6\u3001\u8C37\u6B4C\u65E0\u679C\u3002</p><p>\u540E\u6765\u60F3\u60F3\uFF0Chtml2canvas\u751F\u6210\u7684\u4E5F\u662Fcanvas\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6309\u8FD9\u4E2A\u5173\u952E\u5B57\u627E\u5230\u4E86\u89E3\u51B3\u65B9\u6CD5\u3002</p><p><a href="https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error" target="_blank" rel="noreferrer">\u89E3\u51B3\u94FE\u63A5</a>:<a href="https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error</a></p><p>\u4E3B\u8981\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u662Fcanvas\u4FDD\u5B58\u56FE\u7247\u5230\u672C\u5730\u65F6\u5404\u4E2A\u6D4F\u89C8\u5668\u50CF\u7D20\u7684\u9650\u5236\u4E0D\u540C\uFF0C\u6240\u4EE5\u5C06\u56FE\u7247\u6570\u636E\u8F6C\u6362\u6210Blob\u6570\u636E\u6D41\u4E0B\u8F7D\u4E0B\u6765\u5C31\u884C\u4E86\u3002</p><p>\u4E3B\u8981\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//....\u524D\u9762\u7701\u7565      </span></span>
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
<span class="line"><span style="color:#A6ACCD;">//\u7701\u7565\u540E\u9762...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),p=[e];function t(r,c,i,d,A,C){return n(),s("div",null,p)}const D=a(o,[["render",t]]);export{v as __pageData,D as default};
