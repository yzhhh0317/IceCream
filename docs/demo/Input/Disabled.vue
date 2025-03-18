<script setup>
import Input from '@/components/Input/Input.vue'
</script>
<template>
  <div class="demo-input">
    <div class="row">
      <Input placeholder="禁用状态的输入框" disabled />
    </div>
    
    <div class="row">
      <Input type="textarea" placeholder="禁用状态的文本域" disabled />
    </div>
  </div>
</template>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

:deep(.yu-input__wrapper),
:deep(.yu-textarea__wrapper) {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>