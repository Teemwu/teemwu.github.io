---
title: Nignx 处理异常操作流程
author: teemwu
date: 2020/05/10 11:08
isPublished: true
categories:
  - 报错
  - 服务器
tags:
  - nginx
---

# Nignx 处理异常操作流程

很久没弄 nginx ，最近安装 cms 时 发现 nginx 映射出错，外网访问域名异常，经过很久才确定错误源，因此想整理下基本的排错流程，以便日后使用
### 1、检测是否开启 nginx
```yaml
ps -ef | grep nginx

```
输出类似如下信息则说明已经开启成功
```yaml
root      1763     1  0 May09 ?        00:00:00 nginx: master process nginx
www-data  1863  1763  0 May09 ?        00:00:00 nginx: worker process
root      4631  4617  0 10:30 pts/1    00:00:00 grep nginx

```
否则，去到 nginx 的安装目录进行启动（ 默认安装目录：` /usr/sbin/nginx `），如若找不到安装目录可以用如下命令查找
```yaml
whereis nginx

```
进入到 ` /usr/sbin/ ` 目录，然后自行以下命令
```
./nginx

```
如果开启不成功，则需要根据报错信息另找原因

### 2、检测 nginx 配置是否正确
```bat
nginx -t

```
如果输出类似以下成功信息，则说明配置成功
```yaml
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

```
否则，需要到 nginx 的配置目录进行配置排查

### 3、nginx 错误日志查看
默认存放错误日志的目录在 `/var/log/nginx`，到达目录可以通过以下命令查看错误信息
```
tail -f error.log

```
根据错误日志进行排查即可