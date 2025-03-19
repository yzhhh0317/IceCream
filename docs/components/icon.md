---
title: Icon
description: Icon 组件的文档
---

# Icon 图标

提供一套常用的图标集合，基于 Font Awesome 图标库。

## 基础用法

使用 `icon` 属性设置图标，图标名称遵循 FontAwesome 的命名规则。

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="Icon 组件的基础用法"></preview>

## 图标颜色

使用 `type` 或 `color` 属性设置图标颜色。

<preview path="../demo/Icon/Color.vue" title="图标颜色" description="设置图标颜色"></preview>

## 图标大小

使用 `size` 属性设置图标大小。

<preview path="../demo/Icon/Size.vue" title="图标大小" description="设置图标大小"></preview>

## 图标动画

使用 `spin`、`pulse`、`beat` 等属性可以为图标添加动画效果。

<preview path="../demo/Icon/Animation.vue" title="图标动画" description="图标动画效果"></preview>

## Icon Attributes

| 名称       | 说明                 | 类型                                                                                                                              | 默认值 |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------ |
| icon       | 图标名称             | `object \| Array<string> \| string \| IconDefinition`                                                                             | —      |
| type       | 图标类型/颜色        | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'`                                                                       | —      |
| color      | 自定义颜色值         | `string`                                                                                                                          | —      |
| size       | 图标大小             | `'2xs' \| 'xs' \| 'sm' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| '3x' \| '4x' \| '5x' \| '6x' \| '7x' \| '8x' \| '9x' \| '10x'` | —      |
| spin       | 是否旋转动画         | `boolean`                                                                                                                         | false  |
| pulse      | 是否脉冲动画         | `boolean`                                                                                                                         | false  |
| border     | 是否显示边框         | `boolean`                                                                                                                         | false  |
| fixedWidth | 是否固定宽度         | `boolean`                                                                                                                         | false  |
| flip       | 翻转方向             | `'horizontal' \| 'vertical' \| 'both'`                                                                                            | —      |
| rotation   | 旋转角度             | `90 \| 180 \| 270 \| '90' \| '180' \| '270'`                                                                                      | —      |
| beat       | 是否心跳动画         | `boolean`                                                                                                                         | false  |
| fade       | 是否淡入淡出动画     | `boolean`                                                                                                                         | false  |
| beatFade   | 是否心跳淡入淡出动画 | `boolean`                                                                                                                         | false  |
| bounce     | 是否弹跳动画         | `boolean`                                                                                                                         | false  |
| shake      | 是否抖动动画         | `boolean`                                                                                                                         | false  |
