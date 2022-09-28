---
title: 修改 terminal 主机名和用户名显示
author: teemwu
date: 2020/07/10 00:10
isPublished: true
categories:
  - 系统
  - 工具
tags:
  - zsh
  - shell
---

# 修改 terminal 主机名和用户名显示

macos 的终端默认显示主机名+用户名，这样显示太长，影响心情。Catalina 之前系统默认 shell 使用的是 bash ，之后则改成了 zsh ，所以网上很多修改终端输出信息的方法都失效了。。。
当然，如果你想用回 bash ，只要在命令行运行以下命令重启终端即可
```
chsh -s /bin/bash

```
不过，这样每次打开终端总是会输出一段官方提示改用 zsh 的话，改回 zsh 通过下面命令即可
```
chsh -s /bin/zsh

```
恢复 zsh 后，我们可以打开 zsh 的配置文件
```
sudo vim /etc/zshrc

```
编辑时提示只可读的话，需要更改文件权限
```
sudo chmod 777 /etc/zshrc

```
改完再进行编辑即可
找到 ` PS1="一堆奇怪的东西“ ` 这一行，将其修改为
```bat
PS1="[%T] %1~ %# "

```
保存一下，重启终端，一下子清爽了许多
![](/public/imgs/2020/07/10/2020071000100.png)
需要说明下：
|转义变量|描述|
|----|----|
| %T | 系统时间（24小时制：时:分） |
| %* | 系统时间（24小时制：时:分:秒） |
| %n | 你的用户名 |
如果自个有其他自定义想法，可以查看 [Prompt-Expansion](http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html)

### 参考资料
- [https://apple.stackexchange.com/questions/387102/did-the-shell-terminal-change-in-catalina?answertab=votes#tab-top](https://apple.stackexchange.com/questions/387102/did-the-shell-terminal-change-in-catalina?answertab=votes#tab-top)
- [http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html](http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html)