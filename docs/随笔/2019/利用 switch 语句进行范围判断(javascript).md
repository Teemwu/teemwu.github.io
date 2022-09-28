---
title: 利用 switch 语句进行范围判断(javascript)
author: teemwu
date: 2019/10/30 10:42
isPublished: true
categories:
  - Javascript
tags:
---

# 利用 switch 语句进行范围判断(javascript)

```javascript
const x = this.dealer;
switch (true) {
    case (x < 5):
        alert("less than five");
        break;
    case (x < 9):
        alert("between 5 and 8");
        break;
    case (x < 12):
        alert("between 9 and 11");
        break;
    default:
        alert("none");
        break;
}
```

### 参考
[https://stackoverflow.com/a/5619997](https://stackoverflow.com/a/5619997)