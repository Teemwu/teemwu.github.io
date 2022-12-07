---
title: 项目 NodeJS 版本锁定及自动切换
author: teemwu
date: '2021/08/24 17:33'
isPublished: true
categories:
  - Webpack
  - 服务器
tags: null
wordCount: 897
---

# 项目 NodeJS 版本锁定及自动切换

## 介绍

随着项目的增多，旧项目和新项目使用的 node 版本可能差异比较大，在多人协作或者交接项目时，其他开发者的开发环境 node 的版本也不尽相同。因此，我们有必要锁定每个项目的 node 版本范围，为了减少工作量，还需实现运行项目时能自动切换到对应的 node 版本。

## 版本锁定

要锁定 node 的版本可以直接在 `package.json` 中设置，其中 `">=10 <14"` 则表明 node 的版本要大于等于 10 小于 14，如果当前 node 版本不在此限定范围内的话，运行项目的时候终端会抛出提示说 node 的版本有误，并终止后续执行。

```json
"engines": {
    "node": ">=10 <14",
    "npm": ">= 3.0.0"
},
```

为了兼容通过 npm 来执行运行项目命令，需要在项目根目录新建一个文件名为 `.npmrc` 的配置文件，并加入以下语句。

```json
engine-strict = true

```

到这里，版本锁定已完成。

## 自动切换

之前一直使用 [nvm](https://github.com/nvm-sh/nvm) 来对 node 进行多版本管理，为了轻量化，就不引入其它自动切换 node 的版本库了。由于 nvm 对 Windows 支持不是很完善，建议 Windows 用户使用 [nvs](https://github.com/jasongin/nvs) 进行版本管理。假设已经安装成功 nvm（没安装的可以根据[官方文档](https://github.com/nvm-sh/nvm#install--update-script)安装），我们需要在`～/.zshrc`文件中加入以下配置：

```
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

```

如果你的终端是 bash 或者其它的话，请自行查看[官方示例](https://github.com/nvm-sh/nvm#deeper-shell-integration)。上面的代码是当你在项目下打开终端时，nvm 会在当前项目下去找 `.nvmrc` 文件，因此我们需要在项目根目录增加此文件，写入自己想要执行的版本号，如：

```
13.14.0

```

倘若你还没安装此版本的 node，nvm 则会自动去安装对应版本的 node 并且自动设为该版本。在项目中打开终端，nvm 就会自动切换到对应的 node 版本啦。

⚠️ ***如果没有自动切换版本，请重新打开终端或者重新通过 cd 指令进入项目目录***

## Jenkins 中使用

通过 jenkins 自动化打包部署项目，发现就算按照以上步骤在服务器上进行 nvm 的安装和配置了，构建部署项目时亦不能进行 node 版本自动切换。调试后发现，jenkins 的构建项目环境并不能找到 nvm 指令，猜测是 jenkins 的运行环境中找不到 nvm 配置。因此，我门可以在 pipeline 中手动执行一下 nvm 配置，如下：

```
// xxx.groovy
stage('Build') {
		git credentialsId: 'gitlab', url: "${projectScm}"
		sh """
			. ~/.nvm/nvm.sh
			. ~/.bashrc
			node -v
			yarn install
			yarn build
			zip -r dist.zip dist/
		"""
}

```

保存后，重新执行下项目构建即可。

通过搜索发现还可以通过安装 Jenkins 的 [nvm-wrapper](https://plugins.jenkins.io/nvm-wrapper/) 插件来解决此问题，暂未测试。

## 参考

- [https://github.com/nvm-sh/nvm#nvmrc](https://github.com/nvm-sh/nvm#nvmrc)
- [https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines)
- [https://plugins.jenkins.io/nvm-wrapper/](https://plugins.jenkins.io/nvm-wrapper/)
