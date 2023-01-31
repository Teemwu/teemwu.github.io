---
title: Gitlab 私有化管理 npm 包
author: teemwu
date: '2021/02/03 18:16'
isPublished: true
categories: null
tags:
  - gitlab
wordCount: 232
---

# Gitlab 私有化管理 npm 包

### 新建私有 npm 模块
1. 在 Gitlab 新建一个组，名为 kk
2. 新建组 kk 里新建一个项目 kk-cms
3. 将 kk-cms 克隆到本地开发环境
4. 打开 kk-cms 终端执行 `npm init --scope=kk` 生成 `package.json` 文件
5. 将 kk-cms 提交到 Gitlab 仓库

### 使用私有 npm 模块
1. 在需要使用到项目 `package.json` 文件中添加依赖
```json
"@kk/kk-cms":"git+http://git.your-inc.com/kk/kk-cms.git"
```
2. 执行 `npm install` 或者 `yarn` 进行安装即可

### 更新私有 npm 模块
1. `npm install @kk/kk-cms` 或 `yarn upgrade @kk/kk-cms`

### 问题&解决
1. 执行 yarn 进行包安装时报错“Exit code: 128”
清空 yarn 到缓存文件重新安装即可，路径`/Users/yourName/Library/Caches/Yarn/v1/.tmp/`

### 参考
- [打造简易的 NPM 私有仓库](https://www.jianshu.com/p/996f8a8d9e17)
- [Bug: Yarn fails to install (Exit code: 128)](https://github.com/yarnpkg/yarn/issues/3303#issuecomment-407369153)
