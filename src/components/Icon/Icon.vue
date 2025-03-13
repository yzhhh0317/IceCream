<template>
    <i class="yu-icon" 
    :class="{[`yu-icon--${type}`]:type}"
    :style="customStyles" v-bind="$attrs">
        <!-- $props可以拿到所有的属性，但是缺点是只能放在根组件上面，所以要设置取消透传到根组件 -->
        <font-awesome-icon v-bind="filterProps"/>
    </i>
    <!-- object要把一些固定的key过滤出去 -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { omit } from 'lodash-es'
import type { IconProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
    name:'YuIcon',
    inheritAttrs:false
})
const props=defineProps<IconProps>()
// 响应式对象如果要完成某种计算，必须用computed进行包裹
const filterProps=computed(()=>omit(props,['type','color']))
const customStyles=computed(()=>{
    return props.color?{color:props.color}:{}
})
</script>