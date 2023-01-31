---
title: >-
  The resource could not be loaded because the App Transport Security policy
  requires the use of a secure connection.
author: teemwu
date: '2020/04/16 00:23'
isPublished: true
categories:
  - 报错
  - Flutter
tags: null
wordCount: 106
---

# The resource could not be loaded because the App Transport Security policy requires the use of a secure connection.

Flutter 使用 webview 访问 `http://localhost:8080` 时报错，此错误应为 iOS11 禁止本地http的访问。

解决方法：
在 `ios/Runner/Info.plist' 文件中添加

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true />
    <key>NSAllowsLocalNetworking</key>
    <true />
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSExceptionAllowsInsecureHTTPLoads</key>
            <true />
            <key>NSExceptionRequiresForwardSecrecy</key>
            <false />
            <key>NSIncludesSubdomains</key>
            <true />
            <!-- Optional: Specify minimum TLS version -->
            <key>NSTemporaryExceptionMinimumTLSVersion</key>
            <string>TLSv1.1</string>
            <key>NSRequiresCertificateTransparency</key>
            <false />
        </dict>
    </dict>
</dict>
```
需要注意的是：此段代码必须放在 plist 里面。
```xml
<plist version="1.0">
	<dict>
            <!-- 上面那段代码放这 -->
        </dict>
</plist>
```
保存好文件，执行 `flutter clean` ，再重新运行即可。
