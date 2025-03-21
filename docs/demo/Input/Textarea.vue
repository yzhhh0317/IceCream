<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'

const textarea1 = ref('')
const textarea2 = ref('')
const textarea3 = ref('')
</script>
<template>
  <div class="demo-input">
    <h3 class="section-title">文本域</h3>
    <p class="section-description">通过 <code>type="textarea"</code> 属性将输入框转换为文本域</p>
    
    <div class="textarea-container">
      <div class="textarea-section">
        <div class="input-label">基础文本域：</div>
        <div class="input-wrapper">
          <Input 
            v-model="textarea1" 
            type="textarea" 
            placeholder="请输入内容"
            class="textarea-field"
          />
        </div>
      </div>
      
      <div class="textarea-section">
        <div class="input-label">指定行数：</div>
        <div class="input-wrapper">
          <Input 
            v-model="textarea2" 
            type="textarea" 
            :rows="4"
            placeholder="请输入内容"
            class="textarea-field"
          />
        </div>
      </div>

      <div class="textarea-section">
        <div class="input-label">自适应高度：</div>
        <div class="input-wrapper">
          <Input 
            v-model="textarea3" 
            type="textarea" 
            autosize
            placeholder="输入内容会自动调整高度"
            class="textarea-field"
          />
        </div>
      </div>

      <div class="textarea-section">
        <div class="input-label">限制高度范围：</div>
        <div class="input-wrapper">
          <Input 
            type="textarea" 
            :autosize="{ minRows: 2, maxRows: 6 }"
            placeholder="最小显示2行，最多显示6行"
            class="textarea-field"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.section-title {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: var(--yu-text-color-primary);
}

.section-description {
  margin: 0 0 20px 0;
  color: var(--yu-text-color-secondary);
}

code {
  background-color: var(--yu-fill-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  color: var(--yu-text-color-primary);
}

.textarea-container {
  padding: 20px;
  border-radius: 6px;
}

.textarea-section {
  margin-bottom: 24px;
}

.input-label {
  font-weight: 500;
  color: var(--yu-text-color-regular);
  margin-bottom: 8px;
}

.input-wrapper {
  width: 100%;
}

.textarea-field {
  width: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: white;
}

:deep(.yu-input) {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>