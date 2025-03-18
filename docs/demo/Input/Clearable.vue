<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'

const input1 = ref('可清空的输入框')
const input2 = ref('可清空的文本域')
</script>
<template>
  <div class="demo-container">
    <div class="input-group">
      <Input 
        v-model="input1" 
        placeholder="请输入内容" 
        clearable 
        class="demo-input"
      />
    </div>
    
    <div class="input-group">
      <Input 
        v-model="input2" 
        type="textarea" 
        placeholder="请输入内容" 
        clearable 
        class="demo-input"
      />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  background-color: transparent;
  border: none;
}
.input-group {
  margin-bottom: 16px;
}
.input-group:last-child {
  margin-bottom: 0;
}
.demo-input {
  width: 100%;
}
:deep(.yu-input) {
  width: 100%;
}
:deep(.yu-input__wrapper) {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: white;
}
</style>