---
title: Taro 多端适配实战总结
author: teemwu
date: '2023/02/15 14:34'
isPublished: true
categories:
  - 微信小程序
tags:
  - taro
wordCount: 265
---

# Taro 多端适配实战总结

## 自定义 NavBar

## 自定义 TabBar

微信自带的 TabBar 能满足大部分需求，而对于有设计要求时，则需要进行自定义。使用 Taro 进行自定义时，H5 端是自定义不了的，只能使用 Taro 官方提供的 TabBar。

### 修改配置信息

自定义 TabBar 首先要将 `tabBar.custom` 设为 `true`，并且 `tabBar.list` 不能为空。如果将项目打包成 H5，Taro 默认读取 `tabBar.list` 进行 tabBar 的渲染。

```js{5}
// app.config.ts
module.exports = {
  // ...
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/icons/home.png',
        selectedIconPath: './assets/icons/home_.png'
      },
      {
        pagePath: 'pages/events/index',
        text: '活动报名',
        iconPath: './assets/icons/link.png',
        selectedIconPath: './assets/icons/link_.png'
      },
      {
        pagePath: 'pages/points/index',
        text: '积分兑换',
        iconPath: './assets/icons/bag.png',
        selectedIconPath: './assets/icons/bag_.png'
      },
      {
        pagePath: 'pages/person/index',
        text: '我的',
        iconPath: './assets/icons/man.png',
        selectedIconPath: './assets/icons/man_.png'
      }
    ]
  },
  // ...
}
```

### custom-tab-bar 组件

这个命名 [官方规定的](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)，暂不支持修改，并且需要放在项目根目录，Taro 项目的话，放在 `src` 目录下即可。

具体组件文件目录如下：

```sh
├── custom-tab-bar
│   ├── index.config.ts
│   ├── index.scss
│   └── index.vue
```

主要代码 `src/custom-tab-bar/index.vue`：

```vue
<template>
  <view class="custom-tab-bar-index">
    <view class="tab-item"
          v-for="(item, index) in list"
          :key="item.pagePath"
          @tap="onSwitchTab(index)">
      <image class="img"
             :src="common.currentTabBar === index ? item.selectedIconPath : item.iconPath"></image>
      <view class="text"
            v-if="item.text">{{ item.text }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import './index.scss'
import { getCurrentPages, switchTab, useLoad } from '@tarojs/taro'
import { useCommonStore } from '@/stores/common'
import HOME from '@/assets/icons/home.png'
import HOME_ from '@/assets/icons/home_.png'
import KINK from '@/assets/icons/link.png'
import KINK_ from '@/assets/icons/link_.png'
import BAG from '@/assets/icons/bag.png'
import BAG_ from '@/assets/icons/bag_.png'
import MAN from '@/assets/icons/man.png'
import MAN_ from '@/assets/icons/man_.png'

const common = useCommonStore()
const list = [
  {
    pagePath: 'pages/index/index',
    text: '',
    iconPath: HOME,
    selectedIconPath: HOME_
  },
  {
    pagePath: 'pages/events/index',
    text: '活动报名',
    iconPath: KINK,
    selectedIconPath: KINK_
  },
  {
    pagePath: 'pages/points/index',
    text: '积分兑换',
    iconPath: BAG,
    selectedIconPath: BAG_
  },
  {
    pagePath: 'pages/person/index',
    text: '我的',
    iconPath: MAN,
    selectedIconPath: MAN_
  }
]

const onSwitchTab = (index: number) => {
  switchTab({ url: '/' + list[index].pagePath })
  common.currentTabBar = index
}

useLoad(() => {
  const currentRoute = getCurrentPages()[0].route
  common.currentTabBar = list.findIndex(i => i.pagePath === currentRoute)
})
</script>
```


### 需要注意

1. 切换时选中状态不同步

需要将选择索引提取到全局，或者通过 `pinia` 进行存取。

2. 切换时图标“抖动”

产生“抖动”的原因是图标被重新加载，导致页面重新渲染。解决方法是将图标变成 Base64 字符串引入即可。Taro 使用了 webpack 来对引入的图片进行压缩，小于一定值的图片会被转成 Base64 字符串写入页面中，所以我们使用时只需通过 `import` 的方法引入图标就能得到 Base64 图标。如若图标无法生成，可检查是否图标文件太大了，图标太大可以通过工具压缩一下，抑或是修改 [mini.imageUrlLoaderOption](https://docs.taro.zone/docs/config-detail#miniimageurlloaderoption)（默认会对小于 `8192` 字节的图片进行转换）配置中的 `limit` 值来扩大转换范围。

3. 页面被 TabBar 遮挡

这是因为微信默认将自定义 TabBar 是通过 `postion: fixed` 的形式固定到页面底部，脱离了当前页面，所以需要在页面中设置空白元素或者 `padding-bottom` 的形式进行占位。不管是什么形式，都需要获得底部自定义 TabBar 的高度。根据计算我们可以知道高度为 `calc(112px + env(safe-area-inset-bottom))`，为了方便使用，我们将其存为 `sass` 变量 `$tabBarHeight: calc(112px + env(safe-area-inset-bottom));`。

Taro 中使用 sass 变量需要配置一下，更多配置信息可参考 [官方文档](https://taro-docs.jd.com/docs/next/config-detail#sass)

```js
// config/index.js
module.exports = {
  // ...
  sass: {
    resource: ['variable.scss'],
    projectDirectory: path.resolve(__dirname, '..','src/styles')
  }
}
```

注意，如果需要多端适用，记得放在配置文件最外层！

在页面中使用：

```scss
.index{
    padding-bottom: calc(100px + $tabBarHeight);
}
```

## 生成骨架屏

通过微信开发者工具一键生成，保存成 `.vue` 文件，然后通过组件的方式进行引用就行，具体生成步骤可查看 [官方文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html)。

## 列表请求封装

业务场景中常常需要使用到列表下拉刷新和上拉加载更多数据的功能，为了方便使用，我们需要将功能提取成单独的组件和模块。

## 踩过的那些坑

1. 提示“Template `tmpl_0_xx` not found.”错误

这个报错，偶尔会触发，很难定位，根据 [相关讨论](https://github.com/NervJS/taro/issues/12090)，猜测可能是组件解析异常，因为 Taro 会将标签进行转换，组件使用时的名字不要和 [微信自带的组件](https://taro-docs.jd.com/docs/next/components-desc) 名相同，尽量给自定义组件名加前缀，如 `ks-nav-icon`，并且使用时尽量使用小写中横线分割的形式。

如果使用微信小程序自带组件也报此错，那就通过引入模块的形式进行使用，如 `import { Navigator } from '@tarojs/components'`。