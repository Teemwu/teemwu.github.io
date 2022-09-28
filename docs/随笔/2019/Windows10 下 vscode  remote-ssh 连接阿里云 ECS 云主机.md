---
title: Windows10 下 vscode  remote-ssh 连接阿里云 ECS 云主机
author: teemwu
date: 2019/06/10 11:08
isPublished: true
categories:
  - 系统
  - 服务器
tags:
  - vscode
---

# Windows10 下 vscode  remote-ssh 连接阿里云 ECS 云主机

使用 Linux 服务器对我来说一直有个痛点，就是要用 **Vi** 或者 **Vim** 来编辑文件，在没有进行定制和对操作命令熟悉前，完全是懵逼的，使用惯现代化编辑器，突然间没有语法高亮，不能自动提醒，简直让人没脾气。。。还好，如今 vscode 可以实现本地编辑了。在预览版 vscode 上就想试一下了，可没时间弄，如今稳定版全面支持，所以花了点时间来整理下，中间遇到挺多坑的，主要是太久没搞 SSH 了，参照官方文档，总的下来还是比较顺利的，下面记录下配置过程。

### 具体操作

1. ECS 云主机需要开启 ssh 服务，此处假设你已准备妥当，略。
2. 检测本地命令行是否具备 ssh 访问远程服务器的能力（本人使用 MobaXterm 进行 SSH ，故命令行里是不具备 ssh 访问远程服务器能力的，需要按照以下步骤配置）
    2.1. ` Win + X ` 然后 ` A ` 键，以管理者权限运行 powershell 
    2.2. 执行 ` ssh 登陆名@服务器IP地址 `（如果成功登陆服务器则可以跳过以下步骤）
    2.3. 安装本地运行 ssh 环境，命令行执行 ` Get-WindowsCapability -Online | ? Name -like 'OpenSSH*' `
    2.4. 若没报错则继续执行 ` Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0 `，否则参考文末相关链接或搜索引擎解决
    2.5. 重复执行步骤 2.2
    2.6. 如果连接时[登陆错误](https://help.aliyun.com/knowledge_detail/41471.html)，在本地 .ssh 配置中找到 ` known_hosts ` 文件删除即可（默认安装路径 ` C:\Users\你的本机用户名\.ssh `）
    2.7. 重新连接，选 yes ，输入密码即可
3. vscode 安装 [remote-ssh](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) 扩展
    3.1. 安装完毕，在 vscode ` setting `里搜索 ` remote.SSH.showLoginTerminal ` 配置项，并开启它（倘若此项没开启，连接服务器时将会一直停留在连接状态）
    3.2. vscode 中` F1 `或者` Ctrl + Shift + P ` 打开命令查找，输入 `Remote-SSH:Open Configuration File `，选择打开 ` C:\Users\你的本机用户名\.ssh\config ` 文件

              // config 文件
             Host AliServer2 // AliServer2 只是远程服务器的一个别名，随意起
             HostName XXX.XX.XX.XXX // 你的服务器公网IP
             User root // 登陆服务器的用户名

    3.3. 再次打开命令查找，输入` Remote-SSH:Connect Current Window to Host ` ，选择刚配置好的远程服务 ` AliServer2 `，等待连接
    3.4. 如果出现 **Host key verification failed **报错，可参考步骤 2.6 解决 ![](/public/imgs/2019/06/10/2019061011080.png) 
    3.5. 连接成功在 vscode 的 TEMINAL （<kbd>Ctrl + `</kbd> 可快速打开）中会提示输入登陆密码，回车即可
4. 执行以上步骤后，会重新打开一个 vscode 窗口，可能需要多次输入登陆密码（不想频繁输入密码，可参照 [文档](https://code.visualstudio.com/docs/remote/troubleshooting#_enabling-alternate-ssh-authentication-methods) 自行配置），连接成功后在 vscode 文件管理目录（` Ctrl + Shift + E `快捷键打开），点击 **Open Folder** 按钮，至此，我们就可以在 vscode 本地编辑远程服务器上的文件了。


### 参考

- [ttps://code.visualstudio.com/docs/remote/ssh](https://code.visualstudio.com/docs/remote/ssh)
- [https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_install_firstuse](https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_install_firstuse)