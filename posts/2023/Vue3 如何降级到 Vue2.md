---
title: Vue3 如何降级到 Vue2
author: teemwu
date: 2023/02/06 10:16
isPublished: false
categories:
  - 项目实战
tags:
  - vue
---

# Vue3 如何降级到 Vue2

使用 Vue3 + Vite 来写项目已有一段时间，现阶段移动端基本没出现问题。不过，在一次项目中 android 真机上出现白屏，并且真机调试没任何报错。查了 android 自带的浏览器内核版本是 chromium 61，而 Vite 只兼容了