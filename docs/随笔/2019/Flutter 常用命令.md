---
title: Flutter 常用命令
author: teemwu
date: '2019/12/27 09:41'
isPublished: true
categories:
  - Flutter
tags:
  - flutter
wordCount: 150
---

# Flutter 常用命令

### 新建项目

```ini
flutter create project_name

```

### 安装所需包
如果使用 vscode 开发，安装了相关插件的话，改动 pubspec.yaml 文件就会自动增删包。

```
flutter packages get

```

或者

```
flutter pub get

```

### 打包app

```
// Android
flutter build apk

// ios
flutter build ios

```

###  发布版本调试

```
flutter run  --release

```
发布版本测试需要连接真机方能调试。

### 更新 Flutter 版本

```
flutter upgrade

```

国内需要设置镜像，否则更新下载失败，[参考](https://flutter.cn/community/china)

mac下终端输入： 
```
open ~/.bash_profile 

```

添加镜像设置：
```ini
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn

```
