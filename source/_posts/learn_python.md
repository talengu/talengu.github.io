---
title: python小技巧
date: 2017-07-17 12:39:04
categories:
  - 编程语言
tags:
  - python
  - 编程
comments: true
---

## 记录程序运行时间
```python
import datetime
starttime = datetime.datetime.now()
...
endtime = datetime.datetime.now()
print(endtime - starttime)
```
