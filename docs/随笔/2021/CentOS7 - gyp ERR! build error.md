---
title: CentOS7 - "gyp ERR! build error"
author: teemwu
date: 2021/04/20 11:23
isPublished: true
categories:
  - 报错
  - 服务器
tags:
  - centos7
---

# CentOS7 - "gyp ERR! build error"

## 起因
将本地运行完好的项目推送到服务器端进行自动打包部署，运行 “npm install“ 进行包安装，提示一大堆 “gyp ..." 的报错，记得之前 Windows 上报此错误是需要安装 c++ 相关的运行套件，而在 CentOS7 上则需要安装 gcc （一个驱动程序，根据代码的后缀名来判断调用c编译器还是c++编译器 (g++)）,正常情况下 CentOS7 是自带 gcc 的，之所以运行报错，是因为 gcc 版本太低了，或者说我们的项目相关依赖需要的 gcc 版本太高了。

## 解决方法一
降低 node 版本，“npm install” 进行依赖安装时，node 会进行代相关码编译，其中过高的 node 版本对 gcc 的版本要求就更高，所以可以试下降低 node 的版本，实测中 node 版本从 15.x 降到 14.x 解决问题。

## 解决方法二
更新 gcc 的版本，依次执行如下命令：
```javascript
// 安装centos-release-scl
sudo yum install centos-release-scl
// 安装devtoolset，8.x 版本
sudo yum install devtoolset-8-gcc*
// 激活对应的 devtoolset
scl enable devtoolset-8 bash
// 查看当前 gcc 版本
gcc -v
```
至此，重新执行 “npm install” ，应该可以正常安装了。
需要注意的是上面的操作只限当前会话，如若需要重启后继续使用，则需要执行以下配置：
```javascript
// 启用指定版本 devtoolset
source /opt/rh/devtoolset-8/enable
// 打开开机自启执行文件，将上一个命令添加到 rc.local 末尾
vi /etc/rc.d/rc.local
// 如果遇到权限问题，可执行以下进行赋权后再操作
chmod +x /etc/rc.d/rc.local
```
如果不想每次都 enable 来指定版本的话，可以尝试替换掉旧版本 gcc，具体如下：
```javascript
mv /usr/bin/gcc /usr/bin/gcc-4.8.5

ln -s /opt/rh/devtoolset-8/root/bin/gcc /usr/bin/gcc

mv /usr/bin/g++ /usr/bin/g++-4.8.5

ln -s /opt/rh/devtoolset-8/root/bin/g++ /usr/bin/g++

gcc --version

g++ --version
```

### 参考
- https://www.cnblogs.com/jixiaohua/p/11732225.html
