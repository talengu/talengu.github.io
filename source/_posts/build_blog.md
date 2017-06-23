---
title: 个人主页搭建
date: 2016-12-22 12:39:04
categories:
  - 博客搭建
tags:
  - Hexo
  - NexT
comments: true
---

> 概要：
> 博客搭建的记录与分享，主要用了Hexo和NexT主题。

小技巧，在文章中使用`<!-- more -->`手动进行截断，Hexo 提供的方式。  
下面就是用这个截断的～～
<!-- more -->

## Hexo中文网站  
https://hexo.io/zh-cn/  

## NexT相关
 NexT的Github项目  
https://github.com/iissnan/hexo-theme-next  

NexT安装教程  
http://theme-next.iissnan.com  

NexT开发者的博客    
http://notes.iissnan.com  

## 图标网站  
http://fontawesome.io  


## local search
http://theme-next.iissnan.com/third-party-services.html

`npm install hexo-generator-searchdb --save`

## MathJax
$\frac{d}{dx}c^n=nx^{n-1}$

## 网易云跟帖
https://gentie.163.com/

登陆 网易云跟帖 获取你的 `Product Key` 。 编辑 主题配置文件， 编辑 `gentie_productKey` 字段，设置如下：
```
gentie_productKey: #your-gentie-product-key
```


## 图片存储原则
- github上有项目图片就从项目中链接过来，比如头像就是我github的头像
- 非常重要的图片就存在本项目，然后链接过来

## 编写规范
以后再补充～

## Ubuntu16.04安装
```
sudo apt install npm nodejs-legacy
sudo npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```
CopyLeft Here
