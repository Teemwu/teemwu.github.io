---
title: canvas download时显示“网络错误”
author: teemwu
date: '2018/05/03 18:42'
isPublished: true
categories:
  - Javascript
  - 报错
tags: null
wordCount: 248
---

# canvas download时显示“网络错误”

 在使用html2canvas截取页面的时候发现图片死活保存不到本地，chrome一直报“网络错误”，百度、谷歌无果。

后来想想，html2canvas生成的也是canvas对象，所以按这个关键字找到了解决方法。

[解决链接](https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error):https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error

主要出现这个问题是canvas保存图片到本地时各个浏览器像素的限制不同，所以将图片数据转换成Blob数据流下载下来就行了。

主要代码如下：

```
//....前面省略      
dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
      },
      downloadCanvas(){
        var link = document.createElement("a");
        var imgData =canvas.toDataURL({format: 'png', multiplier: 4});
        var strDataURI = imgData.substr(22, imgData.length);
        var blob = this.dataURLtoBlob(imgData);
        var objurl = URL.createObjectURL(blob);

        link.download = this.cName+".png";

        link.href = objurl;

        link.click();
      }
//省略后面...


```
