---
title: 微信小程序上拉加载和下拉刷新（wepy）
author: teemwu
date: 2018/06/15 20:08
isPublished: true
categories:
  - 微信小程序
tags:
  - wepy
---

# 微信小程序上拉加载和下拉刷新（wepy）

**2018/07/16更新**

 经过测试发现，wepy列表上拉加载更多时出现渲染延迟或者渲染不全，造成这个原因是page过渡动画中设置了**animation-fill-mode: both**;这个属性，去掉之后渲染正常。应该不是兼容性问题，因为在原生上测试加上这一属性是渲染正常的，不明所以。。。

---

**这篇随笔主要是记录在用wepy写小程序下拉刷新和上拉加载功能时遇到的数据显示不完全的问题及解决方法。**

网上很多关于小程序的上拉加载和下拉刷新的文章的实现方法，无非两种，一是用[scroll-view](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)组件，另一种则是使用[onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html?search-key=onReachBottom)()和onPullDownRefresh()两个页面事件处理函数。

scroll-view实现不好的是不能使用onPullDownRefresh，只能检测滚动到顶部触发刷新或者其它动画操作，以及在其内部使用`textarea`、`map`、`canvas`、`video等组件会有各种不适。`

所以，最理想的方法是检测onReachBottom来进行更多数据加载和改变加载动画，检测onPullDownReFresh进行数据更新（官方支持动画）。

方案一（scroll-view）：
-----------------

```ini
<scroll-view @scroll="handleScroll"
              @scrolltoupper="upper"
              @scrolltolower="loadMore"
              scroll-top="{{scrollTop}}"
              scroll-y
              scroll-with-animation="{{true}}"
              style="height: 100%;">
  <view wx:for="{{data}}" wx:key="{{index}}">
    <!--复杂的内容条目-->
  </view>
  <!--加载动画&提示切换-->
  <view>
    <view hidden="{{!hasNext}}"></view>
    <view>{{hasNext?'正在加载':'无更多数据'}}</view>
  </view>
</scroll-view>


```

这个方案如果不要求有下拉动画是挺好的，至少数据渲染时正常。

**方案二（page页面事件函数）：**
--------------------

```ini
　　 <view wx:for="{{dataList}}"
          wx:key="{{index}}">
      <!--复杂内容填充-->
    </view>
    <view  wx:if="{{hasNext}}" style="padding: 5px;text-align: center">
      正在加载
    </view>


```

　　相关方法：

```groovy
    onPullDownRefresh() {
      //请求数据更新
    }
    onReachBottom(event) {
      //请求更多数据
    }


```

　　上面这样子是渲染正常的，但如果“正在加载”换成方案一那种较复杂的判断，在安卓下则会出现渲染不完全。查看元素是已经渲染的了，可是就是有半截没显示，由于用的是wepy所以不确定是小程序本身问题，还是wepy 脏检的问题。后续再写原生测下。

　　**注意：用方案二可能ios下会滚动卡顿的问题，参考：[微信小程序ios端overflow:auto滚动卡顿](https://www.cnblogs.com/fiy-noob/p/8624898.html)**