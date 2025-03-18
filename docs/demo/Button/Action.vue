<script setup>
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
  }
}

const reset = () => {
  count.value = 0
}
</script>
<template>
  <div class="demo-button-action">
    <div class="counter-display">
      <h3>计数器: {{ count }}</h3>
    </div>
    
    <div class="action-buttons">
      <Button type="primary" @click="increment">增加</Button>
      <Button type="warning" @click="decrement" :disabled="count <= 0">减少</Button>
      <Button type="danger" @click="reset" :disabled="count === 0">重置</Button>
    </div>
    
    <div class="action-row">
      <p>内联按钮组:</p>
      <div class="inline-buttons">
        <Button type="primary">上一页</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button type="primary">下一页</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-button-action {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 10px;
}
.counter-display {
  text-align: center;
  margin-bottom: 12px;
}
.counter-display h3 {
  margin: 0;
  font-size: 24px;
}
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.action-row {
  margin-top: 12px;
}
.action-row > p {
  margin: 0 0 8px 0;
  font-weight: 500;
}
.inline-buttons {
  display: flex;
  gap: 8px;
}
</style>