---
title: Latex知识记录
date: 2017-06-29 16:00:04
categories:
  - Latex
tags:
  - 排版
comments: true
---

> 概要：
> 记录Latex
>

<!-- more -->

## Latex语句记录

| Header One     | Header Two     |
| :------------- | :------------- |
| /quad       | 空格       |
| \\          | 换行       |


## 图片引用
`\usepackage{graphicx} `
　　
```tex
\begin{figure}
 \centering　％居中显示
 \includegraphics[width=3cm]{1.png}
\end{figure}
```

## 超链接
`\usepackage[colorlinks,linkcolor=red]{hyperref}`

```tex
\url{http://blog.sina.com.cn/swuly302}
\href{http://blog.sina.com.cn/swuly302}{木子的博客}
```


## 列表
```tex
\begin{itemize}
  \item xxxxx1
  \item xxxxx2
  \item xxxxx3
\end{itemize}
```

## 代码
`\usepackage{listings}`

```tex
\begin{lstlisting}[language=C]
  int main(int argc, char ** argv)
  {
    printf("Hello world! \n");
    return 0;
  }
\end{lstlisting}

```

## 内容不变
`verbatim`

```
\begin{verbatim}
dddddd sdf;
sfsf    dsafa///dafasd
sdafas
\end{verbatim}
```
