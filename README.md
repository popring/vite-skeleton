# 首屏骨架屏减少白屏

## 背景及实现步骤

本项目旨在减少用户在加载页面时的白屏体验，具体实现步骤和代码细节可以参见以下文章：[首屏骨架屏减少白屏](https://popring.github.io/2024/09/22/%E9%A6%96%E5%B1%8F%E9%AA%A8%E6%9E%B6%E5%B1%8F%E5%87%8F%E5%B0%91%E7%99%BD%E5%B1%8F/)

## 在线查看效果

[访问](https://popring.github.io/vite-skeleton/)，在控制台将网速调慢（例如 调整为3G），就可以看到效果，如图。

![](https://raw.githubusercontent.com/popring/assets-repo/master/img/202409240252167.gif)

## 仓库指引

本仓库主要包含两个路由页面：

1. `/vite-skeleton/`
2. `/vite-skeleton/normal`

骨架屏的实现仅在 `/vite-skeleton/` 页面生效，所有相关源代码均位于 `/plugins/SkeletonPlugin` 目录下。

此外，`tempermonkey` 文件夹中的 `genSkeleton.js` 脚本用于生成骨架图，已发布至油猴 https://greasyfork.org/zh-CN/scripts/509875-skeletonscript 。
