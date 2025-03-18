<script setup>
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)

const handleClick = (loader) => {
  loader.value = true
  setTimeout(() => {
    loader.value = false
  }, 2000)
}
</script>
<template>
  <div class="demo-button">
    <div class="row">
      <Button loading type="primary">加载中</Button>
      <Button loading>加载中</Button>
      <Button loading type="success">加载中</Button>
      <Button loading type="warning">加载中</Button>
      <Button loading type="danger">加载中</Button>
    </div>
    
    <div class="row">
      <Button :loading="loading1" type="primary" @click="handleClick(loading1)">点击加载</Button>
      <Button :loading="loading2" type="success" @click="handleClick(loading2)">点击加载</Button>
      <Button :loading="loading3" type="info" @click="handleClick(loading3)">点击加载</Button>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}
</style>