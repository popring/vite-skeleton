# 首屏骨架屏减少白屏

## 背景及实现步骤

本项目旨在减少用户在加载页面时的白屏体验，具体实现步骤和代码细节可以参见以下文章：[首屏骨架屏减少白屏](https://popring.github.io/2024/09/22/%E9%A6%96%E5%B1%8F%E9%AA%A8%E6%9E%B6%E5%B1%8F%E5%87%8F%E5%B0%91%E7%99%BD%E5%B1%8F/)

## 仓库指引

本仓库主要包含两个路由页面：

1. `/`
2. `/home`

骨架屏的实现仅在 `/home` 页面生效，所有相关源代码均位于 `/plugins/SkeletonPlugin` 目录下。

此外，`tempermonkey` 文件夹中的 `genSkeleton.js` 脚本用于生成骨架图，已发布至油猴 https://greasyfork.org/zh-CN/scripts/509875-skeletonscript 。
