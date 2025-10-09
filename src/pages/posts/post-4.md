---
layout: ../../layouts/MarkdownPostLayout.astro
title: '我的第四篇博客文章'
author: 'Astro 学习者'
description: "这篇文章会自己出现在列表中！"
image:
  # url: "https://docs.astro.build/default-og-image.png"
  alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---
这篇文章应该会与其他的博客文章一起显示，因为 `import.meta.glob()` 会返回一个包含所有文章的列表，以创建这个文章列表。

```go
package main

import "fmt"

func main() {
  fmt.Println("hello world")
}
```


```typ
= Introduction
In this report, we will explore the
various factors that influence _fluid
dynamics_ in glaciers and how they
contribute to the formation and
behaviour of these natural structures.

+ The climate
+ The topography
+ The geology

+ The climate
  - Temperature
  - Precipitation
+ The topography
+ The geology


#text(font: "New Computer Modern")[
  = Background
  In the case of glaciers, fluid
  dynamics principles can be used
  to understand how the movement
  and behaviour of the ice is
  influenced by factors such as
  temperature, pressure, and the
  presence of other fluids (such as
  water).
]
```