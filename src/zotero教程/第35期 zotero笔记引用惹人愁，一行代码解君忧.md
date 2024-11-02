---
类型: 公众号
公众号内容:
  - zotero教程
rating:
  - ⭐⭐⭐
简记: 有需要的人就会有需要
title: 第35期 zotero笔记引用惹人愁，一行代码解君忧
---

>35期
>
>在zotero使用better-note插件进行**引用**或注释的**粘贴入笔记**的时候，在句子之后会出现citation来**注明来源**。但一个论文复制太多的时候，重复的引用标又让人一言难尽。本期主要介绍如何完美隐藏引用标

**>注意：**

>zotero笔记的引用有实际的用处，在汇总多文献时citation有具体的引用内含。但本期教程针对于长篇文本摘要，过多相同引用导致不够美观，避免自己手动一次次关引注的情况

## 目录

[TOC]

## 展示效果

![](https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231213111054.png)

## 如何实现

### 使用bn插件功能-隐藏引注

- 较为自由，可**隐藏某笔记的引注**
- 但是是**一次性的**，在隐藏之后如果继续做笔记**还是会显示引注**
- ![](https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/GIF%202023-12-13%2011-13-17.gif)

### 使用CSS代码隐藏，永不显示

```css
.citation {
  display: none;
}
```

- 如何使用
	- 可参考笔记推文第6期，**笔记样式美化**
	- 打开zotero编辑-设置-高级-编辑器-搜索CSS-在**extensions.zotero.note.css**输入代码
	- 但仍然可以实现跳转原文，只是不显示显性的citation
- ![](https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/GIF%202023-12-13%2011-23-13.gif)

## 相关链接

- 全元素zotero笔记样式美化代码及教程（代码的bug在最新版更新了）
- 最新版的代码公众号回复： **CSS** 获取。（不包含本期的代码，需要自行粘贴到最后）