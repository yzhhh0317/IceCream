---
title: Collapse | IceCream-UI
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴效果

每次只能展开一个面板，通过 `accordion` 属性来设置是否以手风琴模式显示

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="手风琴模式"></preview>

## 自定义标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果

<preview path="../demo/Collapse/CustomTitle.vue" title="自定义标题" description="自定义面板标题"></preview>

## 禁用状态

通过 `disabled` 属性禁用某个面板

<preview path="../demo/Collapse/Disabled.vue" title="禁用状态" description="禁用特定面板"></preview>

## Collapse Attributes

| 名称                 | 说明                                                                    | 类型             | 默认值 |
| -------------------- | ----------------------------------------------------------------------- | ---------------- | ------ |
| modelValue / v-model | 当前激活的面板(如果是手风琴模式，绑定值类型需要为 string，否则为 array) | `array / string` | —      |
| accordion            | 是否手风琴模式                                                          | `boolean`        | false  |

## Collapse Events

| 事件名称 | 说明                   | 回调参数                        |
| -------- | ---------------------- | ------------------------------- |
| change   | 当前激活面板改变时触发 | `(activeNames: array / string)` |

## Collapse Item Attributes

| 名称     | 说明             | 类型              | 默认值 |
| -------- | ---------------- | ----------------- | ------ |
| name     | 唯一标志符，必填 | `string / number` | —      |
| title    | 面板标题         | `string`          | —      |
| disabled | 是否禁用         | `boolean`         | false  |

## Collapse Item Slot

| 名称  | 说明                |
| ----- | ------------------- |
| —     | CollapseItem 的内容 |
| title | 面板标题的内容      |
