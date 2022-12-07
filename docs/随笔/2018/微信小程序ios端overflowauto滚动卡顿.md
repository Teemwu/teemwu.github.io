---
title: 微信小程序ios端overflow&#58;auto滚动卡顿
author: teemwu
date: '2018/03/22 16:56'
isPublished: true
categories:
  - 微信小程序
  - 兼容
tags: null
wordCount: 108
---

# 微信小程序ios端overflow:auto滚动卡顿

**解决方法一：**

```
view{
overflow:auto;
-webkit-overflow-scrolling: touch;
}


```

　　这种方法虽然可以让列表滚动，但会伴随副作用（比如fixed元素会跟随滚动再恢复位置），不推荐。

**解决方法二：**

直接使用微信小程序提供的 “ [scroll-view](https://mp.weixin.qq.com/debug/wxadoc/dev/component/scroll-view.html) " 组件。

```ini
 <scroll-view scroll-y style="height: 200px;">
      <!--你要滚动的内容-->
</scroll-view>


```

**注意：　必须要设置scroll-view的高度height**
