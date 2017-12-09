---
title: DSP滤波程序
date: 2015-06-14 12:39:04
categories:
  - 数字信号处理
tags:
  - DSP
  - 滤波程序
comments: true
---

> 通过matlab对数字信号进行滤波器的设计后，我们要将设计好的参数放到嵌入式系统中进行滤波。
> IIR滤波器
> FIR滤波器

<!-- more -->
```c
#include <stdio.h>
#include <malloc.h>
//z变换转成差分方程然后迭代
//Talen @UESTC 2015.6.5

//打印数组
void print(float *x,int len);
//取后第1-n个
float* aminusone(float* a,int ar);
//差分中间值
float gtcet(float *t,float *x,int xr,int s,int d);
//主要滤波函数
float* gfilter(float *b,int br,float *a,int ar,float *x,int xr);

void print(float *x,int len)
{
    for(int i=0;i<len;i++)
    {printf("%9.3f ",x[i]);
    if((i%7)==6)
        printf("\n");}
    printf("\n");
}

float* aminusone(float* a,int ar){
    float* am = (float *)malloc((ar-1) * sizeof(float));
    for(int i=0;i<ar-1;i++)
        am[i]=a[i+1];
    return am;
}
float gtcet(float *t,float *x,int xr,int s,int d)
    //x[]数据源 r数据源长度 s开始点(0开始) d数据长度
    //t可以是a[] b[] 长度与d一样
{
    float sum=0;
    float* w = (float *)malloc(d * sizeof(float));
    for(int i=0;i<d;i++)
    {
        int temp=s-i;
        if(temp>=0&&temp<xr)
            w[i]=x[temp];
        else
            w[i]=0;
        //核心语句
        sum=sum+w[i]*t[i];
    }
    return sum;
}
float* gfilter(float *b,int br,float *a,int ar,float *x,int xr)
    //b a x br b的长度 ar a的长度 xr数据长度
    //use本程序定义的gtcet()和aminusone()
    //输入数据，b，a，x得出滤波后的y
{
    float* y = (float *)malloc(xr* sizeof(float));
    for(int ti=0;ti<xr;ti++)
        y[ti]=0;
    for(int i=0;i<xr;i++)
    {
        //最核心语句，此处迭代
        y[i]=gtcet(b,x,xr,i,br)-gtcet(aminusone(a,ar),y,xr,i-1,ar-1);
    }
    return y;
}

int main()
{
    //input 源数据 可修改
    ////////////////////////////////////////////////////////////////
    float x[120]={-4, -2, 0, -4, -6, -4, -2, -4, -6, -6, -4, -4,\
        -6, -6, -2, 6, 12, 8, 0, -16, -38, -60, -84,\
        -90, -66, -32, -4, 2, -4, 8, 12, 12, 10, 6,\
        6, 6, 4, 0, 0, 0, 0, 0, -2, -4, 0, 0, 0, -2,\
        -2, 0, 0, -2, -2, -2, -2, 0, -2, -4, -2, 0,\
        -2, -4, -4, 2, 0, 0, -2, -4, -2, 0, 0, -2,\
        -4, -2, 0, 0, -4, -4, -2, -2, -4, -6, -6,\
        -4, -4, 8, -10, -8, -6, -6, -8, -12, -10,\
        -8, -8, -10, -12, -10, -8, -8, -10, -10,\
        -8, -6, -6, -8, -8, -4, -2, -4, -4, -4,\
        0, 0, -2, -4, -2, -2, 0, -4};
    //参数
    float b[7]={ 0.0007,0.0044,0.0111,0.0148,0.0111,0.0044,0.0007};
    float a[7]={ 1.0000,-3.1836,4.6222,-3.7795,1.8136,-0.4800,0.0544};
    //////////////////////////////////////////////////////////////////
    //不要修改
    int xr=sizeof(x)/sizeof(float);
    int br=sizeof(b)/sizeof(float);
    int ar=sizeof(a)/sizeof(float);
    //output 滤波后数据
    float *y;

    printf("参数b：\n");print(b,br);
    printf("参数a：\n");print(a,ar);
    printf("原数据：\n");print(x,xr);

    y=gfilter(b,br,a,ar,x,xr);

    printf("滤波后数据：\n");print(y,xr);
    getchar();
    return 0;
}

```
