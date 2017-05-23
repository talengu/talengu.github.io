---
title: 【翻译】daugman算法
date: 2017-05-21 16:00:04
categories:
  - 计算机视觉
tags:
  - 虹膜识别
  - 翻译
comments: true
---

> 概要：
> daugman算法是虹膜是识别的经典算法。  
>  John.Daugman的  [剑桥主页](http://www.cl.cam.ac.uk/~jgd1000/)  
> 虹膜识别介绍 [Introduction to Iris Recognition](http://www.cl.cam.ac.uk/~jgd1000/iris_recognition.html)

<!-- more -->
## 文章
Daugman, J. (1993) "High confidence visual recognition of persons by a test of statistical independence." IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 15(11), pp. 1148-1161. [PDF link](http://www.cl.cam.ac.uk/users/jgd1000/PAMI93.pdf)

## 翻译
High Confidence Visual Recognition of Persons by a Test of Statistical Independence  
John G. Daugman

# 通过统计独立实验的高可信的人类视觉识别算法

> 摘要 - 基于独立性统计检验的失败，描述了快速视觉认知个人身份的方法。人脸上最独特的表型特征是眼睛上虹膜的细致纹理：对人类样本样本中的统计学复杂性的估计显示出与几百个独立自由度的变化。虹膜小梁网纹理表现形态学随机性确保了来自不同眼睛的两种编码图案的统计学独立性测试几乎可以肯定地通过，当比较的代码来源于同一只眼睛时，相同的测试几乎肯定失败。一个人的可见纹理“ 实时视频图像中的虹膜被编码成多尺度正交2-D Gabor小波系数的紧凑序列，其最高有效位包括256字节的“虹膜代码”。统计学决策理论根据独家对比完整的虹膜代码，以每秒4000次的速度生成识别决策，包括决定置信水平的计算。在这种比较中经验观察到的分布意味着当采用一种能够使错误接受和错误拒绝率相等的决策标准时，理论上的“交叉”错误率为131 000。在典型情况下，考虑到虹膜代码协议的平均观察程度，决策置信水平正式对应于约 $10^{31}$ 中的条件假接受概率

> 关键字 - 图像分析，统计模式识别，生物识别，统计判定理论，2-D Gabor滤波器，小波，纹理分析，形态发生。

## 介绍
设计可靠的生物特征识别的机械方法已经有一段历史了。在维多利亚女王那个时代举例，

## 图像分析

### A 标定虹膜的操作

### B Assessing Image Quality, Eyelid Occlusion, and Possibility of Artifice

### C 2-D Gabor滤波器

### D Doubly Dimensionless Projected Polar Coordinate System
