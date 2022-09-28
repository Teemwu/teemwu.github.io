---
title: Gitlab 自动化部署和局域网访问 Gitlab Pages
author: teemwu
date: 2021/03/03 21:54
isPublished: true
categories:
tags:
  - gitlab
---

# Gitlab 自动化部署和局域网访问 Gitlab Pages

### 介绍

前些天好不容易升级了 Gitlab，组件库文档也搭建好了，只差自动化部署。由于只是想给团队内部使用，所以 gitlab 部署时并没有使用域名，而 gitlab pages 访问却需要填具体域名，如果填 IP 的话是访问不到的。下面记录下简单的配置过程。

### 安装
安装前先查看是否已经安装了
```bat
gitlab-runner -v

```
如果还没安装的话，可以根据官方的方法进行安装
 ```
# Download the binary for your system
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

# Give it permissions to execute
sudo chmod +x /usr/local/bin/gitlab-runner

# Create a GitLab CI user
sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash

# Install and run as service
sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
sudo gitlab-runner start

```
### 配置
修改 gitlab.rb 的配置文件
```
vi /etc/gitlab/gitlab.rb

```
gitlab pages 的域名我们假设为 `http://kk-gitlab.cn`，你也可以根据自己的喜好来填，切记不能是 IP 地址！
修改如下

```ini
##! Define to enable GitLab Pages
pages_external_url "http://kk-gitlab.cn"
gitlab_pages['enable'] = true

```
保存后，执行以下命令
```ini
# 刷新配置
gitlab-ctl reconfigure
# 重启 gitlab
gitlab-ctl restart

```
然后我们需要先启动 gitlab-runner 服务
```
gitlab-runner start

```
启动成功后我们就需要开始注册 runner 了，具体执行命令可通过下图步骤获得，需要注意的是登录的账号必须为管理者账号，否则看不到那个“设置”按钮
![](/public/imgs/2021/03/03/2021030321540.png)
点击第三步，弹出提示窗，在最底下找到类似下面的语句，复制到服务器执行
```yaml
sudo gitlab-runner register --url http://xx.xx.xx.xxx/ --registration-token xxxxxxxxxxxxxx

```
执行后需要你输入一些信息，步骤如下

1. 输入url地址（enter 跳过）
2. 输入token（enter 跳过）
3. 输入描述，任意即可
4. 输入标签（enter 跳过）
5. 选择Runner executor，这里选择 shell

操作完后，刷新 Runners 页面，就可以看到新注册的 runner 了

![](/public/imgs/2021/03/03/2021030321541.png)

点击编辑，进入 runner 的设置，设置保存后，在页面下面选择要应用 runner 的项目 enable 即可

![](/public/imgs/2021/03/03/2021030321542.png)

我们可以检查下 runner 的状态

```ini
gitlab-runner verify

```
此时我们重新提交代码时，gitlab-runner 应该会自动执行部署了，部署成功如下图
![](/public/imgs/2021/03/03/2021030321543.png)

![](/public/imgs/2021/03/03/2021030321544.png)

在上图我们可以看到 gitlab-page 的访问地址，直接访问是不行的，因为是我们乱写的域名，此时我们如果只在本地访问的话，可以修改服务器和本地机器的 [hosts](https://www.cnblogs.com/teemwu/p/10063842.html)，将 gitlab-page 的域名指向我们服务器的IP
```ini
# 服务器端 hosts 增加
127.0.0.1 gitlab-page 的地址

```
```ini
# 本地的 hosts 增加
服务器IP  gitlab-page地址

```
至此，本地可以直接访问你的 gitlab pages 了，当然这种方式不是很好的地方是每个项目都要修改一次 hosts，后面或许会通过 nginx 来做转发，待续。。
