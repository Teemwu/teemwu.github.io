---
title: A hook (`orm`) failed to load!
author: teemwu
date: 2018/06/28 10:37
isPublished: true
categories:
  - Sails
  - 报错
tags:
---

# A hook (`orm`) failed to load!

**启动sails时报错：**

```
error: A hook (`orm`) failed to load!
error: Could not tear down the ORM hook.  Error details: Error: Consistency violation: Attempting to tear down a datastore (`default`) which is not currently registered with this adapter.  This is usually due to a race condition in userland code (e.g. attempting to tear down the same ORM instance more than once), or it could be due to a bug in this adapter.  (If you get stumped, reach out at http://sailsjs.com/support.)


```

**原因：**数据库服务关闭了，sails连接不上数据库。

**解决：**重启数据库服务“ windows + R "-->" services.msc "找到数据库服务” 启动 “。