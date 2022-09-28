---
title: Echart 配置项合并
author: teemwu
date: 2019/12/17 10:57
isPublished: true
categories:
  - Javascript
tags:
  - 数据可视化
---

# Echart 配置项合并

最近使用 echart 做数据可视化，遇到一个需求，就是需要将默认配置项和后台返回的数据项合并。第一时间是想到直接使用原生 JavaScript 的 [Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)来处理，echart 的配置项层级较深，用 Object.assign 不适合。在网上找了一大堆方法，都没能解决一个问题，就是对象下数组的合并都没能保留数组的字段对比。

后来，想起了强大的 [lodash](https://lodash.com/)，其 [merge](https://lodash.com/docs/4.17.15#merge)方法完全符合自己的需求。

只想单独使用 merge 方法，可以直接安装 lodash.merge 包

```yaml
npm i lodash.merge

```

使用
```javascript
import merge from 'lodash.merge'
// ......
merge({},defaultOption,otherOption,dataOption)
// ......
```
注：将所有配置项合并到 {} ，不用 defaultOption 作为源，是防止合并后 defaultOption 被改变，