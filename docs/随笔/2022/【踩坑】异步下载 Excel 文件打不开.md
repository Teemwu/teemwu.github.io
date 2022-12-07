---
title: 【踩坑】异步下载 Excel 文件打不开
author: teemwu
date: '2022/02/22 09:52'
isPublished: false
categories: null
tags: null
wordCount: 60
---

# 【踩坑】异步下载 Excel 文件打不开

## 起因
修改管理系统，需要实现上传一个 excel 文件，后台处理后立即返回一个 excel 文件流，前端下载返回文件并保存到本地。
