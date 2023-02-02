---
title: MacOS 安装、卸载 MySQL 
author: teemwu
date: 2023/02/02 15:11
isPublished: true
categories:
  - 工具
tags:
---

# MacOS 安装、卸载 MySQL 

## 安装

1. 前往官网下载适合自己的安装包 [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)
2. 安装然后尝试通过 `系统设置 -> MySQL -> Start MySQL Server` 运行
3. 如果运行不成功可以通过终端执行 `sudo /usr/local/mysql/support-files/mysql.server start` 手动运行

## 卸载

1. 通过 `系统设置 -> MySQL -> Uninstall` 进行卸载
2. 也可手动清除，执行以下命令即可

```sh
sudo rm /usr/local/mysql
sudo rm -rf /usr/local/mysql*
sudo rm -rf /Library/StartupItems/MySQLCOM
sudo rm -rf /Library/PreferencePanes/My*
rm -rf ~/Library/PreferencePanes/My*
sudo rm -rf /Library/Receipts/mysql*
sudo rm -rf /Library/Receipts/MySQL*
sudo rm -rf /var/db/receipts/com.mysql.*
```

## 常用命令

### 启动 MySQL

```sh
sudo /usr/local/mysql/support-files/mysql.server start
```

### 停止 MySQL

```sh
sudo /usr/local/mysql/support-files/mysql.server stop
```

### 重启 MySQL

```sh
sudo /usr/local/mysql/support-files/mysql.server restart
```