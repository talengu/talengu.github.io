---
title: 视线估计算法
date: 2017-05-28 16:00:04
categories:
  - 计算机视觉
tags:
  - 视线估计
  - Kinect
comments: true
---

> 记录算法 c语言代码
>

<!-- more -->

$$
\begin{cases}
k1=\left| \overrightarrow{cp}\right| \\\
\cos{\theta}=\frac{\overrightarrow{cp} \cdot \overrightarrow{cg}}{\left|\overrightarrow{cp}\right|
\left| \overrightarrow{cg}\right|}
\end{cases}
$$

| Header One     | Header Two     |
| :------------- | :------------- |
| 水平   5° y=0 在xoz平面      | Item Two       |
| 竖直 1.5° x=0 在yoz平面      | Item Two       |

## 计算夹角公式代码
```c
#include "stdio.h"
#include "math.h"
#define PI 3.141592653
typedef struct _Point3
{
    float x;
    float y;
    float z;
}Point3;
Point3 test_vetor(Point3 _in_a,Point3 _in_b)
{
    Point3 _out_c;
    _out_c.x=_in_b.x-_in_a.x;
    _out_c.y=_in_b.y-_in_a.y;
    _out_c.z=_in_b.z-_in_a.z;
    return _out_c;
}
float test_distance(Point3 _in_a) {
    return sqrt((_in_a.x)*(_in_a.x)+(_in_a.y)*(_in_a.y)+(_in_a.z)*(_in_a.z));
}

float test_angle(Point3 p,Point3 g,Point3 c) {
    Point3 cg=test_vetor(c,g);
    Point3 cp=test_vetor(c,p);
    float a=cg.x*cp.x+cg.y*cp.y+cg.z*cp.z;
    float tmp=a/test_distance(cg)/test_distance(cp);
    return acos(tmp)/PI;

}
int main(int argc, char const *argv[]) {
    //计算OP与OQ的夹角
    Point3 O={1,0,0};
    Point3 P={0,1,0};
    Point3 Q={0,0,1};

    printf("%f PI\n",test_angle(Q,P,O));
    return 0;
}

```
