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

微信小程序左上方有一个“胶囊”工具栏，而官方提供的自定义头部导航栏的属性有限，满足不了我们日常的使用需求，自定义头部导航栏就很有必要。

### 获取导航栏尺寸信息

要自定义导航栏我们需要知道胶囊的尺寸、系统状态栏的高度等信息，通过微信提供的方法可获得具体的尺寸信息，如下：

``` js
import { getSystemInfoSync, getMenuButtonBoundingClientRect, getAppBaseInfo } from '@tarojs/taro'

/**
 * 获取头部导航栏信息
 */
export const getNavBarInfo = () => {
	const appBaseInfo = getAppBaseInfo() as any
	// 获取系统信息
	const info = getSystemInfoSync()
	// 获取小程序胶囊信息
	const menuButton = getMenuButtonBoundingClientRect()
	// 是否为 ios 环境
	const isIOS = info && /ios/i.test(info.system)
	// 系统状态栏高度，默认 20
	const statusBarHeight = info.statusBarHeight || 20
	// 默认导航栏高度，苹果设备：44 其它设备：48
	let navHeight = isIOS ? 44 : 48

	if (menuButton) {
		// 导航栏高度 = 胶囊高度 + (胶囊距离顶部距离 - 系统状态栏高度)*2
		navHeight = menuButton.height + (menuButton.top - statusBarHeight) * 2
	}

	// 导航栏总体高度
	const navBarHeight = statusBarHeight + navHeight
	// 系统默认字体大小
	const fontSizeSetting = appBaseInfo.fontSizeSetting || info.fontSizeSetting || 14

	return { statusBarHeight, navBarHeight, navHeight, fontSizeSetting }
}
```

### 页面滚动显示或隐藏导航栏背景

通常情况下，滚动页面显示导航栏背景，当滚动高度为零时不显示。此时有两种做法，一种是通过 `createIntersectionObserver` 来监测元素是否在可视区域，另一种是通过监测页面滚动高度来判断。

使用 `createIntersectionObserver` 监测：

```js
import { createIntersectionObserver, getCurrentInstance, nextTick, useReady } from '@tarojs/taro'

/**
 * 监测页面滚动
 */
const initScrollObserver = () => {
  const holderBackground = '#FFF'
  const currentPageInstance = getCurrentInstance().page

  if (!currentPageInstance) return

  const scrollObserver = createIntersectionObserver(currentPageInstance)

  scrollObserver.relativeToViewport().observe('.nav-holder', ({ intersectionRatio }) => {
    state.currentBackground = intersectionRatio > 0 ? '' : holderBackground || ''
  })
}

useReady(() => {
  nextTick(() => initScrollObserver())
})
```

这种做法有个不好的地方是，很难监测到具体的变化过程，如果需要给导航栏背景加透明过渡的话就不行了，所以一般情况我们通过 `usePageScroll` 来监测页面滚动，获得具体的滚动值来进行过渡处理。

```js
import { useLoad, getCurrentPages, Current, navigateBack, reLaunch, usePageScroll } from '@tarojs/taro'

/**
 * 监测页面滚动
 */
usePageScroll(({ scrollTop }) => {
  const barHeight = commonStore.navBarInfo.navBarHeight
  let opacity = scrollTop / barHeight

  if (opacity >= 1) {
    opacity = 1
  }

  state.currentBackground = props.holderBackground || ''
  state.navBackgroundOpacity = opacity
})
```


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

这个报错，偶尔会触发，很难定位，参考 [相关问题可知](https://github.com/NervJS/taro/issues/12553)，了解到，是由于在 `webpack5` 下默认开启了缓存，第三方组件引用时解析不了造成，开启强制弃用缓存即可。

```js
// config/index.js
const config = {
  // ...
  compiler: {
      type: 'webpack5',
      // 需要强制弃用缓存，否则会偶尔会编译报错：https://github.com/NervJS/taro/issues/12553
      prebundle: {
          // 关闭依赖预编译
          enable: false,
          // 强行弃用缓存
          force: true
        }
      },
},
cache: {
  enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
},
```

还有一种情况可能是自定义组件或者第三方组件的命名和小程序自带的组件命名冲突了，自定义组件加前缀即可，[微信小程序组件可查看](https://docs.taro.zone/docs/components-desc)。