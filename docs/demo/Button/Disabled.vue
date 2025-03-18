<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="demo-button">
    <div class="row">
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="info" disabled>信息按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>危险按钮</Button>
    </div>
    
    <div class="row">
      <Button plain disabled>朴素按钮</Button>
      <Button type="primary" plain disabled>主要按钮</Button>
      <Button type="success" plain disabled>成功按钮</Button>
      <Button type="info" plain disabled>信息按钮</Button>
      <Button type="warning" plain disabled>警告按钮</Button>
      <Button type="danger" plain disabled>危险按钮</Button>
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