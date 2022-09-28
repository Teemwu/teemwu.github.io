---
title: webview 中获取微信发票抬头
author: teemwu
date: 2020/08/27 21:39
isPublished: false
categories:
tags:
---

# webview 中获取微信发票抬头

这些天在做开发票相关的功能模块，其中有个需求是调用微信来获取用户已经保存的发票抬头，将获取的发票抬头数据填充到自己的页面中。查看官方文档，通过 jsapi 接口在微信自带浏览器中是可以获取到发票抬头的，或者是在小程序中调用相关接口即可。
如果想在小程序的 webview 中调用微信的发票抬头，这时在 H5 页面中使用 jsapi 接口是获取不到发票抬头信息，可能是小程序 webview 组件的限制吧，通过 ` wx.invoke `   方法总是弹出报错说没权限。试了很久，翻遍了微信开发者社区都没找到解决方案，正在一头雾水的状态，想起了小程序中 webview 组件貌似是可以和 H5 页面通信的。心想，如果在 H5 触发小程序去获取发票抬头信息，然后将获取到的值传到 H5 页面中，这不就行了吗？确实，这是可行的，具体操作如下：

**H5 端核心代码**
```javascript
wx.miniProgram.postMessage({
    data: 'Hi !' // 你要传给小程序的数据
})

wx.miniProgram.navigateTo({
    url: '/pages/empty' // 要跳转到的小程序页面路径
})
```
**小程序端核心代码**

empty 页面 js
```javascript
    onLoad() {
        const pages = getCurrentPages()
        //  获取上一页面对象信息
        const webviewPage = pages[pages.length - 2]
        wx.chooseInvoiceTitle({
          success(res) {
            console.log('res:',res)
            //  将值写到上一页对象信息中
            webviewPage.setCallBack(JSON.stringify(res))
            wx.navigateBack()
          }
        })
     }
```

webview 页面 wxml
```html
  <web-view src="{{url}}"
            wx:if="{{url&&!hideWebview}}"
            bindmessage="handlePostMessage"></web-view>
```
webview 页面 js
```javascript
  onShow() {
    // 重新激活 webview
    // 也就是获取完数据后重新打开 H5 页面
    if (this.data.shouldReattachWebview) {
      this.setData({
          hideWebview:true
      })
      setTimeout(()=>{
          this.setData({
                hideWebview:false
                webviewReattached:true
          })
      },0)
    }
  },
  //  webview 被销毁时触发
  //  通过此方法获取 H5 传来的数据
  handlePostMessage(e) {
    const { data } = e.detail
    console.log(data) // Hi ! 
  },
  //  在 empty 页面获取到发票抬头
  //  调用此方法更新页面信息
  //  重新进入此页面时触发 onShow 
  setCallBack(weChatTitle){
    this.setData({
        shouldReattachWebview:true
        weChatTitle:weChatTitle
    })
  }
```
*大致流程：H5 触发小程序页面跳转=》小程序 empty 页面，获取到发票抬头，返回上一页=》 wevbiew 页面重新访问 H5 =》H5 通过 query 获取到发票抬头数据*

参考：
- [https://developers.weixin.qq.com/doc/offiaccount/WeChat_Invoice/Quick_issuing/Interface_Instructions.html](https://developers.weixin.qq.com/doc/offiaccount/WeChat_Invoice/Quick_issuing/Interface_Instructions.html)
- [https://segmentfault.com/a/1190000020122429](https://segmentfault.com/a/1190000020122429)
- [https://juejin.im/post/6844903936306970632](https://juejin.im/post/6844903936306970632)
