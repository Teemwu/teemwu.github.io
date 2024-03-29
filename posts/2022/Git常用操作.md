---
title: Git常用操作
author: Teemwu
date: '2022/09/27 21:29'
isPublished: true
categories:
  - 效率
tags:
  - git
wordCount: 424
---

# Git常用操作

## 分支操作

```jsx
// 查看提交记录，获取 CommitID
git log
// 根据 CommitID 创建分支，并切换到新创建到分支
git checkout CommitID -b YourBranchName
// 分支改名
git branch -m oldName newName
// 查看分支
git branch
// 查看所有分支（包括远程分支）
git branch -a
// 切换到某个分支
git checkout YourBranchName
// 将分支提交到远程服务器
git push origin HEAD:YourBranchName
// 删除本地分支（-D 为强制删除）
git branch -d YourBranchName
// 删除远程分支
git push origin --delete YourBranchName
```

## 版本对比

```jsx
// 查看当前没有add 的内容修改
git diff
// 查看已经add 没有commit 的改动
git diff --cached
// 查看当前没有add和commit的改动
git diff HEAD
// OR
git status
// 两版本之间对比
git diff CommitID1 CommitID2
// 两版本之间某个文件夹的对比
git diff CommitID1 CommitID2 YourFolderName
// 显示两个分支所有有差异的文件列表
git diff branch1 branch2 --stat
// 显示两个分支所有有差异的文件列表并排除掉 dist 目录
git diff branch1 branch2 --stat ':!dist'
// 显示两个分支所有 src 目录下有差异的文件列表
git diff branch1 branch2 --stat src
// 显示两个分支所有差异详情
git diff branch1 branch2
// 两个分支指定具体文件对比
git diff branch1 branch2 'filePath'
```

## git pull 撤销

```jsx
// 查看历史变更记录
git reflog
// 回退到指定版本号
git reset --hard 版本号(如:40a9a83)
```

## git 修改 .gitignore 文件使其生效

```jsx
git rm -r --cached .  #清除缓存
git add . #重新trace file
git commit -m "update .gitignore" #提交和注释
git push origin master #可选，如果需要同步到remote上的话
```

## clone 最新的一个提交，不含历史 commit

```jsx
git clone clonePath --depth=1
```

## 撤销 `git add`
```bash
git reset --mixed
```
