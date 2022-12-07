---
title: 将数字转成 'k'结尾的字符串
author: teemwu
date: '2020/04/06 02:26'
isPublished: true
categories:
  - Dart
tags:
  - Dart
wordCount: 271
---

# 将数字转成 'k'结尾的字符串

有时候数字过大，为了方便查看，在不需要过度精确的情况下，我们往往会将其转换 ‘k’ 结尾的字符串，如 1k，1.2k等等。原本想找个 Dart 版本的，奈何找了很久都没找到，于是参考了 Javscript 版本的方法进行了更改和优化。其实，Dart 和 Javascript 的正则差不多，只是 Dart 并没有 `$1~$9` 的[子串匹配符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)(不推荐使用)，且各自一些方法存在写法的差异。
```dart
nFormatter(dynamic num, [int digits = 1]) {
  var si = [
    {'value': 1, 'symbol': ''},
    {'value': 1e3, 'symbol': 'k'},
    {'value': 1e6, 'symbol': 'M'},
    {'value': 1e9, 'symbol': 'G'},
    {'value': 1e12, 'symbol': 'T'},
    {'value': 1e15, 'symbol': 'P'},
    {'value': 1e18, 'symbol': 'E'},
  ];
  var rx = RegExp(r'\.0+$|(\.[0-9]*[1-9])0+$');
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num.abs() >= si[i]['value']) {
      break;
    }
  }
  return (num / si[i]['value']).toStringAsFixed(digits).replaceAll(rx, '') + si[i]['symbol'];
}

void main() {
  print(nFormatter(600)); // 600
  print(nFormatter(1000)); // 1k
  print(nFormatter(1122, 1)); // 1.1k
  print(nFormatter(1122, 2)); // 1.12k
  print(nFormatter(-1122, 2)); // -1.12k
}
```

### 参考
[https://stackoverflow.com/a/9462382](https://stackoverflow.com/a/9462382)
