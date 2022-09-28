---
title: Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...
author: teemwu
date: 2018/12/04 17:27
isPublished: true
categories:
  - 报错
tags:
---

# Failed to write coverage reports ERROR Error EEXIST file already exists, mkdir...

配置 vue 的 jest 单元测试时报错如下：

```
 Failed to write coverage reports:
        ERROR: Error: EEXIST: file already exists, mkdir 'xxx\tests\coverage\vue-cli-3\dist\js'
        STACK: Error: EEXIST: file already exists, mkdir 'xxx\tests\coverage\vue-cli-3\dist\js'
    at Object.mkdirSync (fs.js:738:3)
    at sync (xxx\node_modules\mkdirp\index.js:71:13)
    at sync (xxx\node_modules\mkdirp\index.js:77:24)
    at sync (xxx\node_modules\mkdirp\index.js:78:17)
    at sync (xxx\node_modules\mkdirp\index.js:78:17)
    at sync (xxx\node_modules\mkdirp\index.js:78:17)
    at sync (xxx\node_modules\mkdirp\index.js:78:17)
    at sync (xxx\node_modules\mkdirp\index.js:78:17)
    at sync (xxx\node_modules\mkdirp\index.js:78:17)
    at sync (xxx\node_modules\mkdirp\index.js:78:17)

```

百度、谷歌没有无果。后来修改了 jest.config.js 里的 collectCoverageFrom 匹配规格解决问题。

将

```json
// jest.config.js
model.export={
  // ...
    collectCoverageFrom: [
    　　'**/*.{js,vue}',
    　　'!**/node_modules/**'
  　],
  // ...      
}

```

改成

```
// jest.config.js
model.export={
  // ...
    collectCoverageFrom: [
    　  'src/**/*.{js,vue}',
        '!src/main.js',
        '!src/router/index.js',
        '!**/node_modules/**'
  　],
  // ...      
}

```