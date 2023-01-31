---
title: Postman-请求加密和设置 Cookie
author: teemwu
date: '2021/01/29 10:19'
isPublished: true
categories:
  - 工具
tags:
  - postman
wordCount: 167
---

# Postman-请求加密和设置 Cookie

### 请求加密
```ini javascript
/**
 * Pre-request Script
 */
const md5 = CryptoJS.MD5

pm.environment.set('sign', md5('要加密的字符串').toString())
pm.environment.set('timestamp', '时间戳')

```
设置完环境变量后即可在 headers 中使用，如下图
![](/public/imgs/2021/01/29/2021012910190.png)

### 设置 Cookie
```javascript
/**
 * Pre-request Script
 */
const cookieJar = pm.cookies.jar()
const domain = pm.request.url.host.join('.')

cookieJar.set(domain, 'cookieName', 'cookieValue', (error, cookie) => {
    if (error) {
        console.error(`An error occurred: ${error}`);
    } else {
        console.log(`Cookie saved: ${cookie}`);
    }
})
```
需要注意的是，设置 cookie 需要开启域名白名单，如下图
![](/public/imgs/2021/01/29/2021012910191.png)


### 参考
- [Using cookies](https://learning.postman.com/docs/sending-requests/cookies/)
- [CookieStore: programmatic access to "127.0.0.1" is denied ](https://github.com/postmanlabs/postman-app-support/issues/9253)
