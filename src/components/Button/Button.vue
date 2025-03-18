<template>
    <button
        ref="_ref"
        class="yu-button"
        :class="{
            [`yu-button--${type}`]:type,
            [`yu-button--${size}`]:size,
            'is-plain':plain,
            'is-round':round,
            'is-circle':circle,
            'is-disabled':disabled,
            'is-loading':loading
        }"
        :disabled="disabled||loading"
        :autofocus="autofocus"
        :type="nativeType"
    >
        <span class="yu-button__loading" v-if="loading">
            <Icon icon="spinner" spin />
        </span>
        <span class="yu-button__icon" v-if="icon && !loading">
            <Icon :icon="icon" />
        </span>
        <slot name="icon"></slot>
        <span class="yu-button__text" v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'//意味着我们只是导入类型，而不是实际的代码
import Icon from '../Icon/Icon.vue';

// import { buttonProps } from './types';
defineOptions({
    name:'YuButton'
})
withDefaults (defineProps<ButtonProps>(),{
    nativeType:'button'
})

const _ref=ref<HTMLButtonElement>()

defineExpose({
    ref:_ref
})
</script>

<style>
.yu-button__icon,
.yu-button__loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.yu-button__loading + .yu-button__text,
.yu-button__icon + .yu-button__text {
  margin-left: 6px;
}

.yu-button.is-circle .yu-button__icon,
.yu-button.is-circle .yu-button__loading {
  margin: 0;
}

.yu-button.is-loading {
  position: relative;
  pointer-events: none;
}
</style>