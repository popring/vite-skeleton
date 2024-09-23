# 首屏骨架屏减少白屏

## 背景及实现步骤

本项目旨在减少用户在加载页面时的白屏体验，具体实现步骤和代码细节可以参见以下文章：[首屏骨架屏减少白屏](https://popring.github.io/2024/09/22/%E9%A6%96%E5%B1%8F%E9%AA%A8%E6%9E%B6%E5%B1%8F%E5%87%8F%E5%B0%91%E7%99%BD%E5%B1%8F/)

## 仓库指引

本仓库主要包含两个路由页面：

1. `/`
2. `/home`

骨架屏的实现仅在 `/home` 页面生效，所有相关源代码均位于 `/plugins/SkeletonPlugin` 目录下。

此外，`tempermonkey` 文件夹中的 `genSkeleton.js` 脚本用于生成骨架图，使用方法有两种：

- **直接复制**：将代码复制到浏览器控制台，页面右上角将出现按钮，点击即可生成骨架屏。
- **使用油猴插件**：如果你安装了油猴插件，可以将脚本引入，然后直接在控制台调用。

![](https://raw.githubusercontent.com/popring/assets-repo/master/img/202409240303432.png)

### 引入步骤

1. **新建脚本**：在油猴插件中创建一个新脚本。
2. **添加引用**：在脚本中加入以下一行代码：
   ```javascript
   // @require 文件路径
   ```
   这里 `@require` 后的路径应指向你本地 `genSkeleton.js` 文件的位置。对于 `mac` 用户，路径格式参考如图；而对于 `windows` 用户，路径大致为 `file://C:\xx\xx`，请根据你本地的文件路径进行修改。

![](https://raw.githubusercontent.com/popring/assets-repo/master/img/202409240308817.png)

---

这样修改后，文案更清晰易懂，步骤也更加明确。希望这能帮助你更好地传达信息！