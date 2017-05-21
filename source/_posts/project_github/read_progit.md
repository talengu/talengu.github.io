---
title: 阅读Progit
date: 2016-12-01 12:39:04
categories:
  - 技术书籍阅读
tags:
  - Git
  - Progit
---

> 概要：
> git官方教程书籍，有空的时候阅读一下并做笔记供以后参考。  
书的链接：  
[中文V2](https://git-scm.com/book/zh/v2)  
[英文V2](https://git-scm.com/book/en/v2)  
本文中的链接多为中文版。

暂停一下。我已经完成了初步了解。
手机上用 pocket git 和MarkDownX
<!-- more -->
## 1. 起步
### 1.1 关于版本控制

### 1.2 Git 简史

版本控制有单机版本控制、集中版本控制、分布式版本控制。git简史诞生于 2005 年。

### 1.3 Git 基础
Git 和其它版本控制系统（包括 Subversion 和近似工具）的主要差别在于对待数据的方法。直接快照，而非差异比较。
Git使用SHA-1 散列保证项目完整性。一般只增加内容。
**[文件三个状态](https://git-scm.com/book/zh/v2/起步-Git-基础)** ：已提交（committed）、已修改（modified）和已暂存（staged)

- 三个工作区域：Git 仓库、工作目录以及暂存区域。
<img src="https://git-scm.com/book/en/v2/book/01-introduction/images/areas.png" width = "300" height = "130" alt="文件的生命周期" align=center />


### 1.4 命令行

### 1.5 安装 Git
官网[windows官网下载](http://git-scm.com/download/win)
github客户端[windows github](https://windows.github.com/)

### 1.6 初次运行 Git 前的配置
检查配置。可以使用 git config --list 命令来列出所有 Git 当时能找到的配置。由于存在全局、用户、项目多个地方配置。Git 会使用它找到的每一个变量的最后一个配置。

Git 自带一个 git config 的工具来帮助设置控制 Git 外观和行为的配置变量。全局、用户、项目三级。项目的配置权利最大。   `一般配置用户的配置。 ` 一定要配置，所有操作都会被记录。
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
选择文本编辑器，当 Git 需要你输入信息时会调用它。 如果未配置，Git 会使用操作系统默认的文本编辑器，通常是 Vim。 如果你想使用不同的文本编辑器，例如 Emacs，可以这样做：
```
$ git config --global core.editor emacs
全部输出
```
```
$ git config --list
　　user.name=John Doe
　　user.email=johndoe@example.com
　　color.status=auto
　　color.branch=auto
　　color.interactive=auto
　　color.diff=auto
单独检查 git config <key>
$ git config user.name
　　John Doe
```

### 1.7 获取帮助
获取帮助。如果你觉得手册或者本书的内容还不够用，你可以尝试在 Freenode IRC 服务器（ irc.freenode.net ）的 #git 或 #github 频道寻求帮助。这些频道经常有上百人在线，他们都精通 Git 并且乐于助人。
```
$ git help <verb>
$ git <verb> --help
$ man git-<verb>
```


### 1.8 总结
git下载与配置
```
git config
git help
```


## 2. Git 基础
>  阐述 Git 的基本使用——包含你在使用 Git 时可能遇到的 80% 的情形。能够克隆仓库、查看项目历史、修改文件和贡献更改。   


### 2.1 获取 Git 仓库
git本地初始化
进入项目目录并输入：
```
$ git init
```
该命令将创建一个名为 .git 的子目录，仅仅初始化，项目里的文件还没被跟踪。

### 2.2 记录每次更新到仓库

- 通过 git add 命令来实现对指定文件的跟踪，然后执行 git commit 提交：
```
$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
```

git add 命令使用文件或目录的路径作为参数；如果参数是目录的路径，该命令将递归地跟踪该目录下的 **所有文件** 。


- 克隆现有的库。克隆仓库的命令格式是 git clone [url] 。 比如，
```
$ git clone https://github.com/libgit2/libgit2
```

这会在当前目录下创建名为 “libgit2” 的目录。 **自定义本地仓库名字** ，可以使用如下命令：
```
$ git clone https://github.com/libgit2/libgit2 mylibgit
```

例子使用的是 https:// 协议，不过也可使用 git:// 协议或者 ** SSH 传输协议**，如 user@server:path/to/repo.git 。

- [Git 时文件的生命周期](https://git-scm.com/book/zh/v2/Git-基础-记录每次更新到仓库)
<img src="https://git-scm.com/book/en/v2/book/02-git-basics/images/lifecycle.png" width = "400" height = "130" alt="文件的生命周期" align=center />

### 2.3 查看提交历史
- 检查当前文件状态
```
git status
```
在使用命令 git add 开始跟踪一个文件后。在 Changes to be committed 这行下面的，就说明是已暂存状态。

- 状态简览
```
$ git status -s
　　M README
　　MM Rakefile
　　A lib/git.rb
　　M lib/simplegit.rb
　　?? LICENSE.txt
```
新添加的未跟踪文件前面有 ?? 标记，新添加到暂存区中的文件前面有 A 标记，修改过的文件前面有 M 标记。
M 有两个可以出现的位置，出现在右边的 M 表示该文件被修改了但是还没放入暂存区，出现在靠左边的 M 表示该文件被修改了并放入了暂存区。

### 2.4 撤消操作

### 2.5 远程仓库的使用

### 2.7 Git 别名

### 2.8 总结
配置并初始化一个仓库（repository）、开始或停止跟踪（track）文件、暂存（stage）或提交（commit)更改。 配置 Git 来忽略指定的文件和文件模式、迅速而简单地撤销错误操作、浏览项目的历史版本以及不同提交（commits）间的差异、向远程仓库推送（push）以及从远程仓库拉取（pull）文件。
```
$ git init
$ git add *.c
$ git commit -m 'initial project version'
$ git clone <remote dir> <本地文件夹名>
```

## 3. Git 分支
### 3.1 分支简介
### 3.2 分支的新建与合并
### 3.3 分支管理
### 3.4 分支开发工作流
### 3.5 远程分支
### 3.6 变基
### 3.7 总结

## 4. 服务器上的 Git
4.1 协议
4.2 在服务器上搭建 Git
4.3 生成 SSH 公钥
4.4 配置服务器
4.5 Git 守护进程
4.6 Smart HTTP
4.7 GitWeb
4.8 GitLab
4.9 第三方托管的选择
4.10 总结

## 5. 分布式 Git
5.1 分布式工作流程
5.2 向一个项目贡献
5.3 维护项目
5.4 总结

## 6. GitHub
6.1 账户的创建和配置
6.2 对项目做出贡献
6.3 维护项目
6.4 管理组织
6.5 脚本 GitHub
6.6 总结

## 7. Git 工具
7.1 选择修订版本
7.2 交互式暂存
7.3 储藏与清理
7.4 签署工作
7.5 搜索
7.6 重写历史
7.7 重置揭密
7.8 高级合并
7.9 Rerere
7.10 使用 Git 调试
7.11 子模块
7.12 打包
7.13 替换
7.14 凭证存储
7.15 总结

## 8. 自定义 Git
8.1 配置 Git
8.2 Git 属性
8.3 Git 钩子
8.4 使用强制策略的一个例子
8.5 总结

## 9. Git 与其他系统
9.1 作为客户端的 Git
9.2 迁移到 Git
9.3 总结

## 10. Git 内部原理
10.1 底层命令和高层命令
10.2 Git 对象
10.3 Git 引用
10.4 包文件
10.5 引用规格
10.6 传输协议
10.7 维护与数据恢复
10.8 环境变量
10.9 总结

## 附录
A1. 其它环境中的 Git
A1.1 图形界面
A1.2 Visual Studio 中的 Git
A1.3 Eclipse 中的 Git
A1.4 Bash 中的 Git
A1.5 Zsh 中的 Git
A1.6 Powershell 中的 Git
A1.7 总结
A2. 将 Git 嵌入你的应用
A2.1 命令行 Git 方式
A2.2 Libgit2
A2.3 JGit
A3. Git 命令
A3.1 设置与配置
A3.2 获取与创建项目
A3.3 快照基础
A3.4 分支与合并
A3.5 项目分享与更新
A3.6 检查与比较
A3.7 调试
A3.8 补丁
A3.9 邮件
A3.10 外部系统
A3.11 管理
A3.12 底层命令


## 版权说明
The entire Pro Git book, written by Scott Chacon and Ben Straub and published by Apress, is available here. All content is licensed under the Creative Commons Attribution Non Commercial Share Alike 3.0 license. Print versions of the book are available on Amazon.com.
