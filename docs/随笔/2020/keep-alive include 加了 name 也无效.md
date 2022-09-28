---
title: keep-alive include 加了 name 也无效
author: teemwu
date: 2020/04/15 18:37
isPublished: true
categories:
  - Vue
tags:
---

# keep-alive include 加了 name 也无效

今修改一个比较老的 Vue 项目，参考[网上的答案](https://segmentfault.com/q/1010000009117672)，在export 加了 name 还是无效，找了半天原因，发现项目中用了三层 router-view ，keep-alive 加在了第二层 router-view 中，难怪无效。。。

```html
<!-- App.vue -->
<router-view />
    <!-- Layout.vue -->
    <router-view />
        <!-- Companent.vue -->
        <keep-alive include="字符串|数组|正则">
              <router-view />
        </keep-alive>
```

**注意：keep-alive 必须加在组件直接关联的 router-view 上！**