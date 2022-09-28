---
title: Gitlab 跨版本升级
author: teemwu
date: 2021/02/26 16:17
isPublished: true
categories:
tags:
  - gitlab
---

# Gitlab 跨版本升级

### 介绍
由于想使用 gitlab 新版本添加的一些特性，最近项目不是很忙，故开始了作死的 gitlab 升级之旅。。。真的，没事还是不建议升级这东西！很久没弄 gitlab 很多东西都忘了，过程中各种踩坑，故写一篇文章记录下升级、安装及配置的过程，希望对各位看官有点帮助。

### 开始
一般升级某个软件直接去 [官网](https://about.gitlab.com/update) 看更新教程即可，而其官网提示 CentOS 7 升级 gitlab 也很简单，就两步：
```ini
# 备份
sudo gitlab-rake gitlab:backup:create STRATEGY=copy
# 下载&安装更新
sudo yum install -y gitlab-ce

```
一时兴起，执行完第二步后发现，升级失败，原因是我的 gitlab 版本过老（11.11.3），不能直接升级到 13.x 的版本，需要一个版本一个版本升，参考别人的踩坑经验，选择了
`11.11.3 -> 12.0.12 -> 12.10.14 -> 13.0.10 -> 13.4.2 -> 13.9.1` 这个版本升级路线
开始尝试升级时，通过 `curl` 和 `yum` 的方式在服务器端进行 gitlab-ce 下载，然而经常会因为网络问题中断掉，换了国内镜像源(清华源、阿里云)依旧偶尔中断，第一次更新，通过 `yum` 进行下载，到百分之九十多的时候进度条卡住了，继续执行安装操作，后面启动时报错(“STDOUT: WARNING: This version of GitLab depends on gitlab-shell 9.3.0, but you're running 9.1.0. Please update gitlab-shell.”)，找了一晚上的处理方法，各种尝试无果，估计是下载不完全强行安装造成的某些包不对应，或者是之前手动改了一些配置文件导致的，后另起服务器重新安装备份文件的对应版本 11.11.3 重新进行更新操作

### 系统&环境
- CentOS 7
- Gitlab-CE 11.11.3 -> 12.0.12 -> 12.10.14 -> 13.0.10 -> 13.4.2 -> 13.9.1

### 下载&安装
由于国内原因，如果你想通过修改镜像源来下载安装 gitlab-ce 的安装包，可以查看文末的“参考”链接，我不推荐这种做法，因为国内镜像源不稳定，如清华源下载到500M左右就很不稳定，且有些同步不及时。我的做法是，在电脑本地开 VPN 去 [官网下载](https://packages.gitlab.com/gitlab/gitlab-ce) 完所有文件后，再上传到服务器上进行安装
```ini
# 上传本地文件到指定服务器
scp /path/filename username@servername:/path

```
上传到服务器之后，需要先备份且停掉 gitlab 再进行安装
```ini
# 创建备份
gitlab-rake gitlab:backup:create
# 停止 gitlab 各项服务
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq
gitlab-ctl stop nginx
# 安装指定版本 gitlab
rpm -Uvh gitlab-ce-12.0.12-ce.0.el7.x86_64.rpm
# 刷新配置
gitlab-ctl reconfigure
# 重启 gitlab
gitlab-ctl restart

```
重复以上几条命令，即可升级到最新版本，如果过程中有红字提示“Warning: Your gitlab.rb and gitlab-secrets.json files contain sensitive data..."可以暂时不管，升级到最新版本后再处理，报错原因是 gitlab.rb 和 gitlab-secrets.json 两个文件包含敏感信息。未被备份到备份文件中。需要手动备份，两文件路径分别为 `/etc/gitlab/gitlab.rb` 和 `/etc/gitlab/gitlab-secrets.json`，如果需要使用旧版本的配置，将老版本的 gitlab.rb 文件替换新版本的 gitlab.rb 即可，gitlab-secrets.json 文件同理，不过这个是记录了安全相关的，比如你访问 Runners 页面提示 500 报错，就需要将旧版本替换掉新版

### 自动&定时备份
修改 `/etc/gitlab/gitlab.rb` 文件
```ini
# 设置备份存储位置
gitlab_rails['backup_path'] = "/mnt/udisk/gitlab/backups"
# 备份最近七天的数据，即 7*24*60*60 秒
gitlab_rails['backup_keep_time'] = 604800

```
保存后，刷新配置文件
```bat
gitlab-ctl reconfigure

```
编辑定时任务
```
crontab -e

```
加入以下内容后保存(每天中午 12 点和傍晚 18 点自动执行备份操作)
```
0 12 * * * /opt/gitlab/bin/gitlab-rake gitlab:backup:create
0 18 * * * /opt/gitlab/bin/gitlab-rake gitlab:backup:create

```
保存后我们需要重新启动定时器，执行如下语句
```ini
# 重启定时任务
systemctl restart crond.service
# 重装定时任务
systemctl reload crond.service
# 查看定时任务是否开启（可选）
systemctl is-enabled crond.service
# 查看所有用户下的定时任务（可选）
cat /etc/passwd | cut -f 1 -d : |xargs -I {} crontab -l -u {}

```
至此，自动定时备份完成
### 参考
- [CentOS 7下安装指定版本的GitLab，和数据备份与恢复](https://blog.csdn.net/djzhao627/article/details/88356067)
- [gitlab从11.11.3升级至13.4.2](https://blog.csdn.net/huoyan98/article/details/108917811)
- [gitlab安装、备份、恢复、升级、内存消耗问题](https://www.cnblogs.com/jxd283465/p/11525629.html)
- [curl命令断点续传多线程下载文件](https://www.codenong.com/cs106080856/)
- [访问Gitlab中的runners页面时显示500问题](https://blog.csdn.net/fishinhouse/article/details/105131917)
- [【linux】【tomcat】linux下定时重启tomcat 【CentOS 6.4】【CentOS 7.6】](https://www.cnblogs.com/sxdcgaq8080/p/10730633.html)
