---
title: 文档对象模型（DOM）
author: teemwu
date: 2020/05/01 09:51
isPublished: true
categories:
  - 读书笔记
tags:
  - JavaScript高级程序设计
---

# 文档对象模型（DOM）

### DOM 定义

1. 全称为 Document Object Model 
2. 针对 XML 但经过扩展用于 HTML 的应用编程接口
3. DOM 会把整个页面映射为一个多层节点结构
4. HTML 或 XML 页面中每个组成部分都是某种类型的节点，这些节点又包含不同类型的数据

注意：DOM 是独立的实体，并非专属 JavaScript 语言，也可以通过其他语言实现
	
### DOM 级别

1. DOM1
   a. DOM Core （规定如何映射基于 XML 的文档结构）
   b. DOM HTML（添加了针对 HTML 的对象和方法）
2. DOM2
   a. DOM Views（定义了跟踪不同文档视图的接口）
   b. DOM Events（定义了事件和事件处理的接口）
   c. DOM Style（定义了基于 CSS 为元素应用样式的接口）
   d. DOM Traversal and Range（定义了遍历和操作文档的接口）
3. DOM3
   a. DOM Load and Save（统一加在和保存文档的方法）
   b. DOM Validation（验证文档的方法）

### 其他 DOM 标准

1. SVG（Scalable Vector Graphic，可伸缩矢量图）
2. MathML（Mathematical Markup Language，数学标记语言）
