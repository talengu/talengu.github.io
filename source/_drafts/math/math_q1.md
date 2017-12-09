---
title: 数学问题
date: 2017-05-05 16:00:04
categories:
  - 数学
tags:
  - 数学问题
  - Latex
comments: true
---

> 概要：
> 一个数学问题，我有空试着练习一下，顺便练习一下Latex输入公式。如果有错误或更好的解答，欢迎在下面回复。
> 【原创】

<!-- more -->

## 问题
为什么会经过这个空隙？  
![动图](http://images2015.cnblogs.com/blog/587038/201612/587038-20161228133616914-567036618.gif)

## 解答
首先建立空间直角坐标系，$P$ 点为水平杆与斜杆的交点，$Q$点为垂直杆与水平杆的交点，
将斜杆标记为 $L$，假设 $OQ=q$ ，$QP=r$ 。

设水平杆$QP$绕$z$轴以$\omega\, rad/s$ 的角速度旋转，并设开始旋转的时间长度为$t$ 秒，
则$P(r\cos{\omega t}, r\sin{\omega t}, q)$  

 $$
 \overrightarrow{OQ}=(0, 0, q) \qquad \overrightarrow{QP}=(r\cos{\omega t}, r\sin{\omega t}, 0)
 $$


我们知道 $\overrightarrow{QP}$ 与斜杆 $L$ 垂直，假设 $\overrightarrow{OQ}$ 与斜杆 $L$ 成固定角 $\theta$ ，设 $L$ 的方向向量 $\overrightarrow{s}=(A, B, C)$

斜杆 $L$ 代表的直线：
$$   
\frac{x-r\cos{\omega t}}{A}=\frac{y-r\sin{\omega t}}{B}=\frac{z-q}{C}
$$


$$
\begin{cases}
0=\overrightarrow{QP} \cdot \overrightarrow{s} \\\
\cos{\theta}=\frac{\overrightarrow{OQ} \cdot \overrightarrow{s}}{\left|\overrightarrow{OQ}\right| \left| \overrightarrow{s}\right|}
\end{cases}
$$

$$   
\frac{A}{C}=\frac{-\sin{\omega t}}{\cos{\omega t}}
$$

$$   
B^{2}(\tan{\theta})^{2}=A^{2}+C^{2}
$$

$$   
\frac{B^{2}}{C^{2}}=\frac{1}{(\tan{\theta})^{2}(\cos{\omega t})^{2}}
$$


为了求直线组$L$与$xoy$平面相交的图形，我们令$z=0$
$$  
\frac{x-r\cos{\omega t}}{A}=\frac{y-q}{B}=\frac{-r\sin{\omega t}}{C}
$$

$$
\begin{cases}
\frac{A}{C}=\frac{1}{(\tan{\theta})^{2}(\cos{\omega t})^{2}}\\\
\frac{x-r\cos{\omega t}}{A}=\frac{-r\sin{\omega t}}{C}
\end{cases}
$$

$$
\cos{tx}=r
$$
$$
(\cos{\omega t})^{2}=\frac{r^{2}}{x^{2}}
$$
$$
(\sin{\omega t})^{2}=\frac{x^{2}-r^{2}}{x^{2}}
$$


$$
\begin{cases}
\frac{B^{2}}{C^{2}}=\frac{1}{(\tan{\theta})^{2}(\cos{\omega t})^{2}}\\\
\frac{y-q}{B}=\frac{-r\sin{\omega t}}{C}
\end{cases}
$$





消去 $(\cos{\omega t})^{2}$ 和 $(\sin{\omega t})^{2}$
得 $x^{2}-(\tan{\theta})^{2}(y-q)^{2}=r^{2}$
易知为双曲线方程，所以在 $xoy$ 平面相交得图形为双曲线。
