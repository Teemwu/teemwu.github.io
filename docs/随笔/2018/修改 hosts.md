---
title: 修改 hosts
author: teemwu
date: 2018/12/04 14:15
isPublished: false
categories:
tags:
  - 网络
---

# 修改 hosts

最近发现 medium 访问不了，即使开了梯子也不行，后来修改了host能正常访问。

### 具体操作：

1.  找到系统使用的host文件用编辑器打开（我用VS code）
2.  将下载host文件打开复制到系统的host里
3.  保存host文件并刷新dns配置  
      
    

### host文件路径：

##### Windows

```bat
C:\Windows\System32\drivers\etc\hosts

```

##### [](https://github.com/highsea/Hosts#mac-osx)macOS & linux

```
sudo vi /etc/hosts

```

### 刷新dns配置：

##### Windows

```
ipconfig /flushdns

```

##### macOS

```bat
sudo dscacheutil -flushcache

```

### _hosts_文件下载：

[https://github.com/googlehosts/hosts/tree/master/hosts-files](https://github.com/googlehosts/hosts/tree/master/hosts-files)