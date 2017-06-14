---
title: ubuntu引导修复
date: 2017-06-14 16:00:04
categories:
  - Ubuntu
tags:
  - Linux
  - BootRecovery
comments: true
---

> 概要：
> 修复ubuntu引导，修改ubuntu盘的大小
> 参考：http://www.cnblogs.com/jloveu/p/Ubuntu-partition-expansion-record.html
> 我直接用Ubuntu live，里面自带gparted分区工具，还有grub修复工具
<!-- more -->

## 修复启动
执行以下命令（以root身份）：
```shell
mkdir /tmp/mydir
mount /dev/sda8 /tmp/mydir  (注：其中的`/dev/sda8`为我的`/`分区标识，根据自己情况修改为自己的`/`分区标识)
mount /dev/sda11 /tmp/mydir/boot  (注：同上，`/dev/sda11`为`/boot`分区标识)
mount --bind /dev /tmp/mydir/dev
mount --bind /proc /tmp/mydir/proc
mount --bind /sys /tmp/mydir/sys
chroot /tmp/mydir  (此步可能输出一些信息，可以无视)
grub-install /dev/sda  (注：其中的`/dev/sda`为`/`分区所在硬盘的标识)
exit

```

## 修改Ubuntu多系统的默认启动顺序
[link](http://jingyan.baidu.com/article/f71d60379e16021ab641d1ab.html)   
打开该配置文件"/etc/default/grub"
```shell
sudo vim /etc/default/grub
```
其中的“GRUB_DEFAULT=0”为设置默认启动项。系统启动菜单Windows10的启动项在第5项，修改为4（GRUB启动项是从0开始的）。  
![GRUB修改](http://jingyan.baidu.com/album/f71d60379e16021ab641d1ab.html?picindex=5)

## 去除多余GRUB启动项（直接）
[link](https://zhidao.baidu.com/question/472571337.html)  
注释掉“/boot/grub/grub.cfg”中对应
```shell
sudo gedit /boot/grub/grub.cfg
```
