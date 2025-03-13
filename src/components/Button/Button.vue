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
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
        <span><slot></slot></span>
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

//为了防止都叫button存在重复，所以改个名字
// const __name='ZhButton';
// const ZhButton= defineComponent({
//     name:__name
//     props:buttonProps
// })


</script>

<style scoped>
/* .yu-button{
    /* --main-bg-color:yellow; 也可以通过自定义进行修改 */
    /* background-color: var(--yu-bg-color);
} */ 
</style>