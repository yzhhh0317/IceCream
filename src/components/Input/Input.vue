<template>
  <div
  class="yu-input"
  :class="{
    [`yu-input--${type}`]:type,
    [`yu-input--${size}`]:size,
    'is-disabled':disabled,
    'is-prepend':$slots.prepend,
    'is-append':$slots.append,
    'is-prefix':$slots.prefix,
    'is-suffix':$slots.suffix,
    'is-focus':isFocus
  }">
    <!-- input -->
     <template v-if="type!=='textarea'">
        <!-- prepend slot -->
         <div v-if="$slots.prepend" class="yu-input__prepend">
            <slot name="prepend" />
         </div>
         <div class="yu-input__wrapper">
            <!-- prefix slot -->
             <span v-if="$slots.prefix" class="yu-input__prefix">
                <slot name="prefix"/>
             </span>
             <input
             class="yu-input__inner"
             v-bind="attrs"
             :type="showPassword?(passwordVisiable?'text':'password'):type" 
             ref="inputRef"
             :disabled="disabled"
             :readonly="readonly"
             :autocomplete="autocomplete"
             :placeholder="placeholder"
             :autofocus="autofocus"
             :form="form"
              v-model="innerValue"
              @input="handleInput"
              @change="handleChange"
              @focus="handleFocus"
              @blur="handleBlur">
             <!-- suffix slot -->
            <span v-if="$slots.suffix || showClear ||showPasswordArea" class="yu-input__suffix" @click="keepFocus">
                <slot name="suffix" />
                <Icon
                icon="circle-xmark"
                v-if="showClear"
                class="yu-input__clear"
                @click="clear"
                @mousedown.prevent="NOOP"/>
                <Icon
                icon="eye"
                v-if="showPasswordArea && passwordVisiable"
                class="yu-input__password"
                @click="togglePasswordVisiable"
                />
                <Icon
                icon="eye-slash"
                v-if="showPasswordArea && !passwordVisiable"
                class="yu-input__password"
                @click="togglePasswordVisiable"
                />
            </span>
         </div>
        <!-- append slot -->
         <div v-if="$slots.append" class="yu-input__append">
            <slot name="append" />
         </div>
     </template>
     <!-- textarea -->
      <template v-else>
        <textarea class="yu-textarea__wrapper" 
        v-bind="attrs"
        ref="inputRef"
        :disabled="disabled" 
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput" 
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur">

        </textarea>
      </template>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useAttrs, watch, type Ref } from 'vue';
import type { InputProps, InputEmits } from './types';
import Icon from '../Icon/Icon.vue';

defineOptions({
    name:'YuInput',
    inheritAttrs:false
})
const props = withDefaults(defineProps<InputProps>(), {type:'text', modelValue:'', autocomplete:'off'})
const emits = defineEmits<InputEmits>()
const attrs = useAttrs()
const innerValue = ref(props.modelValue)
const isFocus = ref(false)
const passwordVisiable = ref(false)
const inputRef = ref() as Ref<HTMLInputElement>

//'"清空"图标出现的条件
const showClear = computed(() =>
    props.clearable &&
    !props.disabled && 
    !!innerValue && 
    isFocus.value
)

const showPasswordArea = computed(() =>
    props.showPassword && 
    !props.disabled && 
    !!innerValue.value
)
const togglePasswordVisiable = () => {
    passwordVisiable.value = !passwordVisiable.value
}
const NOOP = () => {}
const keepFocus = async() => {
    await nextTick()
    inputRef.value.focus()
}
const handleInput = () => {
    emits('update:modelValue', innerValue.value)
    emits('input', innerValue.value)
}
const handleChange = () => {
    emits('change', innerValue.value)
}
const handleFocus = (event: FocusEvent) => {
    isFocus.value = true
    emits('focus', event)
}
const handleBlur = (event: FocusEvent) => {
    isFocus.value = false
    emits('blur', event)
}
const clear = () => {
    innerValue.value = ''
    emits('update:modelValue', '')
    emits('clear')
    emits('input', '')
    emits('change', '')
}
watch(() => props.modelValue, (newValue) => {
    innerValue.value = newValue
})

defineExpose({
    ref: inputRef
})
</script>

<style>
.yu-input {
  display: inline-flex; 
}

.yu-input.is-prepend .yu-input__prepend,
.yu-input.is-append .yu-input__append {
  display: inline-flex;
  align-items: center;
}

.yu-input__clear, 
.yu-input__password {
  cursor: pointer;
}

.yu-input__wrapper.is-focus,
.yu-input__wrapper:focus-within {
  box-shadow: 0 0 0 1px var(--yu-input-focus-border-color, var(--yu-color-primary, #409eff)) inset;
}
</style>