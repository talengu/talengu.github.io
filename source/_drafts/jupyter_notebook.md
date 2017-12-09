---
title: Jupyter notebook的配置
date: 2017-07-03 16:00:04
categories:
  - Notebook
tags:
  - Python
  - Jupyter
  - 工具
comments: true
---

> 概要：
> jupyter notebook的安装  
> jupyter server安装 [link](https://zhuanlan.zhihu.com/p/23110830)


<!-- more -->

生成notebook配置文件
```shell

jupyter notebook --generate-config

#修改 ~/.jupyter/jupyter_notebook_config.py
c.NotebookApp.ip = '*'
c.NotebookApp.password = u'sha1:bcd259ccf...your hashed password here'

```
生成密码

```python
In [1]: from IPython.lib import passwd

In [2]: passwd()

    Enter password:

    Verify password:

    Out[2]: 'sha1:67xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

```
在命令行后面加 & 后台运行
