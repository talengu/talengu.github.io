---
title: Windows笔记本开共享wifi
date: 2015-04-14 12:39:04
categories:
  - Windows脚本
tags:
  - 共享wifi
  - cmd
comments: true
---

> 网上有很多用笔记本设置无线热点的批处理，我中和了一下。
> 复制下面代码到记事本，改后缀为bat就行了。
> [改一下你自己定义的ssid和key]

<!-- more -->

```shell

@echo off


set mssid=GTC
::网络名字
set mkey=123456789
::大于八位密码

echo ***********************************************
echo              打开承载网络  1
echo              关闭承载网络  2
echo              承载网络信息  3
echo              设置网络信息  set
echo              退出          e
echo        （网络名字、密码可在源文件中改）
echo           （请以管理员身份打开!!!）
echo ***********************************************
:start
set /p var=请选择:
if %var%==1 netsh wlan start hostednetwork && echo 网络名字:%mssid% 密码:%mkey% && GOTO start
if %var%==2 netsh wlan stop hostednetwork && GOTO start
if %var%==3 netsh wlan show hostednetwork && echo 网络名字:%mssid% 密码:%mkey% && GOTO start
if %var%==set netsh wlan set hostednetwork mode=allow ssid=%mssid% key=%mkey% && echo 网络名字:%mssid% 密码:%mkey% && GOTO start
if %var%==e pause

```
