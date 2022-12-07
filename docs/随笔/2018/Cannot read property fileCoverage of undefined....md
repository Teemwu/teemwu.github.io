---
title: Cannot read property 'fileCoverage' of undefined...
author: teemwu
date: '2018/12/04 17:10'
isPublished: true
categories:
  - 报错
tags: null
wordCount: 180
---

# "Cannot read property 'fileCoverage' of undefined..."

```
Failed to collect coverage from xxx.js
ERROR: Cannot read property 'fileCoverage' of undefined
STACK: TypeError: Cannot read property 'fileCoverage' of undefined
    at Instrumenter.instrumentSync (xxx.js:148:40)
    at exports.default (xxx.js:32:18)
    at Object.worker (xxx.js:52:80)
    at execMethod (xxx.js:90:29)
    at process.on (xxx.js:40:7)
    at process.emit (events.js:182:13)
    at emit (internal/child_process.js:811:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)

```

在用 jest 进行项目的代码覆盖率测试的时候报以上错误，经排查，是项目之前使用了 Babel 的 [istanbul](https://yarnpkg.com/zh-Hans/package/istanbul) 代码覆盖率插件，如果再开启 jest 的 “ collectCoverage: true ” 时就会造成冲突。

解决：在 babel 的配置文件 .babelrc 里去掉插件 istanbul 的配置

```json
// .babelrc
{
  ...
  "env": {
    "test": {
      "plugins": [ "istanbul" ] // 去掉 istanbul
    }
  }
}

```
