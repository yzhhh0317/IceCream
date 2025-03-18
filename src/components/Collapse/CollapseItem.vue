<template>
  <div
    class="yu-collapse-item"
    :class="{
        'is-disabled':disabled
    }"
  >
  <!-- 命名规范，描述样式是同级，用--连接。。如果是下一级用__连接 -->
    <div class="yu-collapse-item__header" 
    :class="{
      'is-disabled':disabled,
      'is-active':isActive
    }"
    :id="`item-header-${name}`" 
    @click="handleClick">
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle"/>
    </div>

    <Transition name="slide" v-on="transitionEvents">
      <div class="yu-collapse-item__wrapper"
      v-show="isActive">
        <div class="yu-collapse-item__content"
        :id="`item-content-${name}`" >
            <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { inject,computed } from 'vue';
import type{CollapseItemProps} from './types'
import { collapseContextKey } from './types';
import Icon from '../Icon/Icon.vue';

defineOptions({
    name:'YuCollapseItem'
})
const props=defineProps<CollapseItemProps>()
const collapseContext=inject(collapseContextKey)
const isActive=computed(()=>collapseContext?.activeNames.value.includes(props.name))
const handleClick=()=>{
  if(props.disabled){return}
  collapseContext?.handleItemClick(props.name)
}
const transitionEvents:Record<string,(el:HTMLElement)=>void>={
  beforeEnter(el){
    el.style.height='0px'
    el.style.overflow='hidden'
  },
  enter(el){
    el.style.height=`${el.scrollHeight}px`
  },
  afterEnter(el){
    el.style.height=''
    el.style.overflow=''
  },
  beforeLeave(el){
    el.style.height=`${el.scrollHeight}px`
    el.style.overflow='hidden'
  },
  leave(el){
    el.style.height='0px'
  },
  afterLeave(el){
    el.style.height=''
    el.style.overflow=''
  }
}

</script>

<style>
.yu-collapse-item__header {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #303133;
  cursor: pointer;
  border-bottom: 1px solid #EBEEF5;
  padding: 12px 20px;
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.yu-collapse-item__header:hover {
  background-color: #F5F7FA;
}

.yu-collapse-item__header.is-active .header-angle {
  transform: rotate(90deg);
}

.yu-collapse-item__header .header-angle {
  font-size: 14px;
  color: #909399;
  transition: transform 0.3s;
}

.yu-collapse-item__content {
  padding: 16px 20px;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
}

.yu-collapse-item__header.is-disabled {
  color: #C0C4CC;
  cursor: not-allowed;
}

.yu-collapse {
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  overflow: hidden;
}
</style>
