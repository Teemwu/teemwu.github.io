---
title: 修改 jar 包中 class 文件
author: teemwu
date: '2020/07/31 02:58'
isPublished: true
categories: null
tags:
  - Java
wordCount: 540
---

# 修改 jar 包中 class 文件

做 Java 练习时，引用的第三方的 jar 包，其中有些方法冗余，在 IDEA 智能提示时总是排在第一个提示，影响开发效率，因此想修改 jar 包中 class 的方法。由于使用的是 macOS 系统，看了很多教程基本上是基于 Windows 的，不大适用，故整理下解决方法，方便遇到此问题的同学能顺利解决。

现在假设我有一个第三方 jar 包 net.jar ，我要修改里面的 Print.class 类，具体操作步骤如下：
### 反编译 jar 包
使用 [JD-GUI](http://java-decompiler.github.io/) 这个工具就能解决，下载安装完打开软件将你的 jar 包拖进去，将你要修改的 class 保存成 .java 文件即可。这一步我们得到了 Print.java 文件。（当然，你也可以通过其它工具来反编译，网上说通过 vim 直接修改 class 文件的，我这边打开会乱码，故反编译后保存成 .java 文件再修改。）
### 生成 class 
得到了修改完的 .java 文件后，我们需要将它编译成 class 文件才能替换掉 jar 包里的 class ，直接改后缀名是无效的哦。现在假设 jar 包和 反编译后的 .java 文件在同一目录，执行以下命令即可生成可用的 class。
```bat
javac -cp net.jar Print.java

```

### 替换 class
#### 1、以防万一，先拷贝 jar 包为 .zip 文件再进行操作
```bat
cp net.jar net.zip

```
#### 2、解压 net.zip 到 net-unzip 文件夹
```bat
unzip net.zip -d net-unzip/

```

进入解压后的文件夹，找到你要替换的类，并用之前生成的 Print.class  替换掉。
#### 3、重新打包
在 net-unzip 目录里执行以下命令，其中 META-INF 和 net 均为解压后就存在的目录
```bat
jar -cvfM0 net.jar META-INF net

```
重新打包完，此时当前目录应该多了个 net.jar 文件，至此整个修改 jar 包操作结束。

### 参考
- [https://www.cnblogs.com/grey-wolf/p/11291379.html#3083248972](https://www.cnblogs.com/grey-wolf/p/11291379.html#3083248972)
- [https://blog.csdn.net/chy555chy/article/details/78460837](https://blog.csdn.net/chy555chy/article/details/78460837)
