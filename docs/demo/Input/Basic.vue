<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'

const input1 = ref('')
const input2 = ref('默认值')
const input3 = ref('')
</script>
<template>
  <div class="demo-container">
    <Input v-model="input1" placeholder="请输入内容" class="demo-input" />
    <Input v-model="input2" placeholder="请输入内容" class="demo-input" />
    <Input placeholder="只读状态" readonly class="demo-input" />
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
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