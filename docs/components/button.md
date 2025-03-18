---
title: Button | IceCream-UI
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮，用于触发一个操作或事件。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 属性来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 禁用状态

使用 `disabled` 属性来定义按钮是否被禁用。

<preview path="../demo/Button/Disabled.vue" title="禁用状态" description="禁用状态的按钮不可点击"></preview>

## 按钮尺寸

使用 `size` 属性设置按钮的大小，可选值为 `large`、`default` 和 `small`。

<preview path="../demo/Button/Size.vue" title="按钮尺寸" description="不同尺寸的按钮"></preview>

## 图标按钮

设置 `icon` 属性即可使用图标按钮，或者使用 `icon` 插槽来自定义图标。

<preview path="../demo/Button/Icon.vue" title="图标按钮" description="带图标的按钮"></preview>

## 加载状态

设置 `loading` 属性为 `true` 即可让按钮处于加载状态。

<preview path="../demo/Button/Loading.vue" title="加载状态" description="加载中的按钮"></preview>

## 操作按钮

按钮通常用于触发操作，下面是一些实际使用场景示例。

<preview path="../demo/Button/Action.vue" title="操作按钮" description="按钮在实际场景中的使用"></preview>

## Button 属性

| 属性名     | 说明                     | 类型                                                                | 默认值  |
| ---------- | ------------------------ | ------------------------------------------------------------------- | ------- |
| size       | 按钮尺寸                 | `'large'` \| `'default'` \| `'small'`                               | default |
| type       | 按钮类型                 | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'info'` | —       |
| plain      | 是否为朴素按钮           | `boolean`                                                           | false   |
| round      | 是否为圆角按钮           | `boolean`                                                           | false   |
| circle     | 是否为圆形按钮           | `boolean`                                                           | false   |
| loading    | 是否为加载中状态         | `boolean`                                                           | false   |
| disabled   | 是否禁用按钮             | `boolean`                                                           | false   |
| icon       | 图标组件                 | `string`                                                            | —       |
| autofocus  | 是否自动获取焦点         | `boolean`                                                           | false   |
| nativeType | 原生 button 的 type 属性 | `'button'` \| `'submit'` \| `'reset'`                               | button  |

## Button 插槽

| 插槽名 | 说明             |
| ------ | ---------------- |
| —      | 按钮的内容       |
| icon   | 自定义图标的内容 |
