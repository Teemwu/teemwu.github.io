---
title: 个人博客搭建(hexo)
author: teemwu
date: '2019/01/13 13:01'
isPublished: true
categories:
  - 工具
  - 服务器
tags:
  - hexo
wordCount: 1076
---

# 个人博客搭建(hexo)

老早就想搭建一个属于自己的个人博客了，之前也弄过一个，后台到前端完全原生自主编写，可是终究还是太年轻，很多东西都不会，也不懂得坚持，慢慢就荒废了。加上几次的服务器变更，再加上工作没精力打理，之前的个人博客已经完全荒废了。经过2018年一年时间的沉淀，决定再次搭建一个属于自己的博客了，之前一直在 [博客园](https://www.cnblogs.com/fiy-noob/) 潜水，平时也没怎么输出，记录几个随笔。2019年，决定好好地写一下博客。计划每周写一篇吧，以周为单位，不断吸取新的东西，整理输出。

<!-- more -->

## 开始前

本篇主要记录如何将 hexo 博客部署到服务端，因此 git 和 node 的安装和配置需要自行准备。

### 操作系统&环境

- 本地：Windows10
- ECS服务器：Ubuntu18.04（阿里云）
- 安装 git
- 安装 node

### Hexo 安装

```
$ npm install -g hexo-cli
$ hexo init <folder>
$ cd <folder>
$ npm install

```

## 部署到服务器

hexo 安装和配置好主题之后便是日常的写作发布了，可是要怎么才能比较优雅地写作及发布呢？参考了网上的做法以及考虑到后期自己需要 DIY 的需求，决定在本地环境生成博客静态文件，然后通过 git 推送到服务器 git 仓库，再设置 git-hooks 来进行自动部署。具体思路如图：

![hexo-deploy](/public/imgs/2019/01/13/2019011313010.png)

### 服务器端配置

由于自个的 Linux 和 git 都不是很好，因此在这一块耗了很长时间（在此立个flag，要认真研究一下！）。好啦，下面将会是一堆命令操作，用惯 Windows 可能会不大适应~_~不要紧，按顺序一步一步来。

```ini
mkdir -p /var/www/blog // 创建存放博客静态文件的目录
useradd git // Linux增加一个 git 用户
passwd git // 设置 git 用户的密码
su git // 切换到 git 用户
cd /home/git/ // 如果没有 /home/git 目录则自行创建
mkdir repos && cd repos
git init --bare blog.git // 创建一个 git 裸库
cd blog.git/hooks
vi post-receive // 创建hook钩子函数，并输入以下内容

```
post-receive:

```
#!/bin/sh
git --work-tree=/var/www/blog --git-dir=/home/git/repos/blog.git checkout -f

```

保存完毕后继续以下命令

```ini
chmod +x post-receive // 赋予执行权限
exit // 退出 git 用户
chown -R git /home/git/repos/blog.git // 将 blog.git 文件夹及文件夹下所有文件所有者设置为 git 用户
chown -R git ~/.ssh // 原理同上句，如果没有 .ssh 文件夹请自行创建

```
上面就是服务端所要的配置，在执行命令的时候可能会报错，可以参考文末“参考”部分解决。

### Windows 本地配置
打开 "Git Bash" 命令行工具，执行以下命令

```ini
ssh-copy-id -i C:/Users/yourname/.ssh/id_rsa.pub git@server_ip // 将公钥复制到服务器上
ssh git@server_ip //测试是否无需密码登录

```

如果没有报错就可以打开 hexo 博客项目，否则按照报错提示去找解决方法。
在博客跟目录打开 _config.yml 主配置文件找到 deploy 属性进行以下配置：

```yaml
deploy:
  type: git
  repo: git@server_ip:/home/git/repos/blog.git
  branch: master
```

然后在博客根目录执行以下命令

```yaml
hexo g // 生成静态页面文件
hexo d // 部署到服务器

```

至此个人博客已经上传到ECS云服务器上了，至于要怎么给外界访问，就要使用 Nginx、Apache 等 web 服务器软件咯。具体配置自行搜索咯。

## 参考

- [Hexo 官方文档](https://hexo.io/docs/deployment)
- [带你跳过各种坑，一次性把 Hexo 博客部署到自己的服务器](https://juejin.im/post/5b70d68ae51d45665d383281)
- [自定义 Git - Git 钩子](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
- [linux修改文件所有者和文件所在组](https://www.cnblogs.com/DawaTech/p/7249734.html)
- [裸库? git init 和 git init --bare 的区别](https://segmentfault.com/q/1010000004683286/a-1020000004684388)
- [git is not in the sudoers file.  This incident will be reported.](https://www.cnblogs.com/felixzh/p/5062082.html)
- [如何优雅地发布Hexo博客](https://www.jianshu.com/p/68e727dda16d)
