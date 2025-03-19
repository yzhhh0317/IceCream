# IceCream UI

一个基于 Vue3 的轻量级 UI 组件库，提供简洁、易用、美观的组件设计系统。

## 项目介绍

IceCream UI 是一款基于 Vue3 开发的 UI 组件库，使用 Composition API 和 TypeScript 构建。组件库设计简约现代，易于使用，旨在帮助开发者快速构建高质量的 Web 应用界面。

## 特性

- **🚀 基于 Vue3**：充分利用 Vue3 Composition API 的优势
- **📦 按需引入**：支持组件按需引入，优化应用体积
- **🔧 TypeScript 支持**：完全使用 TypeScript 编写，提供类型定义
- **🎨 可定制主题**：基于 CSS 变量的主题系统，易于定制
- **📱 响应式设计**：适配不同屏幕尺寸
- **🔍 详细文档**：提供完善的使用文档和示例

## 组件预览

### Button 按钮

提供多种类型、状态和尺寸的按钮。

![Button 组件预览](/src/assets/button.png)

### Icon 图标

丰富的图标集合，支持自定义颜色和大小。

![Icon 组件预览](/src/assets/Icon.gif)

## 快速开始

### 下载项目

```bash
git clone https://github.com/your-username/IceCream-UI.git
cd IceCream-UI
npm install
```

### 使用组件

```vue
<template>
  <div>
    <yu-button type="primary">主要按钮</yu-button>
    <yu-input v-model="input" placeholder="请输入内容"></yu-input>
    <yu-collapse v-model="activeNames">
      <yu-collapse-item name="1" title="标题1">内容1</yu-collapse-item>
      <yu-collapse-item name="2" title="标题2">内容2</yu-collapse-item>
    </yu-collapse>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button, Input, Collapse, CollapseItem } from "icecream-ui";

const input = ref("");
const activeNames = ref(["1"]);
</script>
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动文档站点

```bash
npm run docs:dev
```

### 构建文档

```bash
npm run docs:build
```

## 项目结构

```
IceCream-UI/
├── docs/                 # 文档源码
│   ├── components/       # 组件文档
│   └── demo/             # 示例代码
├── src/                  # 组件源码
│   └── components/       # 组件文件夹
│       ├── Button/       # 按钮组件
│       ├── Input/        # 输入框组件
│       ├── Collapse/     # 折叠面板组件
│       └── Icon/         # 图标组件
├── public/               # 静态资源
├── .gitignore            # Git忽略文件
├── package.json          # 包配置
└── README.md             # 项目说明
```

## 在线演示

查看[在线演示文档](https://your-demo-url.com)了解更多组件细节和用法示例。

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

[MIT](LICENSE)

## 联系方式

- 作者: 您的名字
- 邮箱: your.email@example.com

---

感谢您使用 IceCream UI！
