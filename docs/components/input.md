---
title: Input
description: Input 组件的文档
---

# Input 输入框

通过鼠标或键盘输入字符的基础表单组件。

## 基础用法

<preview path="../demo/Input/Basic.vue" title="基础用法" description="Input 组件的基础用法"></preview>

## 禁用状态

通过 `disabled` 属性指定是否禁用 Input 组件。

<preview path="../demo/Input/Disabled.vue" title="禁用状态" description="禁用状态的输入框"></preview>

## 可清空输入框

使用 `clearable` 属性可以使输入框可清空，清空按钮会在输入框有内容时显示。

<preview path="../demo/Input/Clearable.vue" title="可清空输入框" description="带有清空按钮的输入框"></preview>

## 密码输入框

使用 `show-password` 属性可以得到一个可切换显示隐藏的密码框。

<preview path="../demo/Input/Password.vue" title="密码输入框" description="可切换显示/隐藏的密码输入框"></preview>

## 带图标的输入框

可以通过 `prefix-icon` 和 `suffix-icon` 属性或对应的插槽来添加图标。

<preview path="../demo/Input/WithIcon.vue" title="带图标的输入框" description="可在输入框前后添加图标"></preview>

## 文本域

使用 `type="textarea"` 属性来将 Input 转换为文本域。可通过 `rows` 控制文本域的高度。

<preview path="../demo/Input/Textarea.vue" title="文本域" description="用于输入多行文本"></preview>

## 复合型输入框

可以在输入框前后添加元素，通常是标签或按钮。可以使用 `prepend` 和 `append` 插槽。

<preview path="../demo/Input/Composite.vue" title="复合型输入框" description="可在输入框前后添加元素"></preview>

## 尺寸

使用 `size` 属性改变输入框大小。除了默认大小外，还有另外两个选项：`large` 和 `small`。

<preview path="../demo/Input/Size.vue" title="不同尺寸" description="Large、Default 和 Small 三种尺寸的输入框"></preview>

## 限制输入长度

使用 `maxlength` 和 `minlength` 属性来限制输入框的字符长度。设置 `show-word-limit` 属性可以显示字数统计。

<preview path="../demo/Input/Limit.vue" title="输入长度限制" description="限制输入字符数量并显示字数统计"></preview>

## Input 属性

| 属性名                | 说明                                        | 类型                                                | 默认值  |
| --------------------- | ------------------------------------------- | --------------------------------------------------- | ------- |
| type                  | 输入框类型                                  | `string`                                            | text    |
| model-value / v-model | 绑定值                                      | `string` / `number`                                 | —       |
| maxlength             | 最大输入长度                                | `number`                                            | —       |
| minlength             | 最小输入长度                                | `number`                                            | —       |
| show-word-limit       | 是否显示输入字数统计                        | `boolean`                                           | false   |
| placeholder           | 输入框占位文本                              | `string`                                            | —       |
| clearable             | 是否可清空                                  | `boolean`                                           | false   |
| show-password         | 是否显示切换密码图标                        | `boolean`                                           | false   |
| disabled              | 是否禁用                                    | `boolean`                                           | false   |
| size                  | 输入框尺寸                                  | `'large'` / `'default'` / `'small'`                 | default |
| prefix-icon           | 输入框头部图标                              | `string`                                            | —       |
| suffix-icon           | 输入框尾部图标                              | `string`                                            | —       |
| rows                  | 文本域的行数，只对 `type="textarea"` 有效   | `number`                                            | 2       |
| autosize              | 自适应内容高度，只对 `type="textarea"` 有效 | `boolean` / `{ minRows: number, maxRows: number }`  | false   |
| readonly              | 是否只读                                    | `boolean`                                           | false   |
| max                   | 原生 `max` 属性                             | —                                                   | —       |
| min                   | 原生 `min` 属性                             | —                                                   | —       |
| step                  | 原生 `step` 属性                            | —                                                   | —       |
| resize                | 控制是否能被用户缩放                        | `'none'` / `'both'` / `'horizontal'` / `'vertical'` | —       |
| autofocus             | 原生 `autofocus` 属性                       | `boolean`                                           | false   |
| form                  | 原生 `form` 属性                            | `string`                                            | —       |
| tabindex              | 输入框的 tabindex                           | `string` / `number`                                 | —       |
| validate-event        | 输入时是否触发表单的校验                    | `boolean`                                           | true    |

## Input 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| prefix  | 输入框头部内容 |
| suffix  | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

## Input 事件

| 事件名 | 说明                                          | 回调参数                    |
| ------ | --------------------------------------------- | --------------------------- |
| blur   | 在 Input 失去焦点时触发                       | `(event: FocusEvent)`       |
| focus  | 在 Input 获得焦点时触发                       | `(event: FocusEvent)`       |
| change | 仅在输入框失去焦点或用户按下回车时触发        | `(value: string \| number)` |
| input  | 在 Input 值改变时触发                         | `(value: string \| number)` |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                           |
