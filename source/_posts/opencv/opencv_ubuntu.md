---
title: 在ubuntu平台上编译opencv
date: 2017-06-23 22:00:04
categories:
  - 计算机视觉
tags:
  - OpenCv
  - Ubuntu
comments: true
---

> 概要：
> 在ubuntu环境下编译opencv  
>[link](http://blog.csdn.net/zmdsjtu/article/details/69507456?from=singlemessage)
>

<!-- more -->
在cmakewen文件里添加
```cmake
find_package(OpenCV REQUIRED)
target_link_libraries(项目名 ${OpenCV_LIBS})

```
