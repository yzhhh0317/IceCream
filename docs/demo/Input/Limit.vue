<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'

const text1 = ref('')
const text2 = ref('')
</script>
<template>
  <div class="demo-input">
    <h3 class="section-title">输入长度限制</h3>
    <p class="section-description">使用 <code>maxlength</code> 和 <code>minlength</code> 属性限制输入长度，<code>show-word-limit</code> 属性显示字数统计</p>
    
    <div class="limit-container">
      <div class="limit-section">
        <div class="input-label">文本框字数限制：</div>
        <div class="input-wrapper">
          <Input 
            v-model="text1"
            maxlength="10"
            placeholder="最多输入10个字符"
            show-word-limit
            class="input-with-border"
          />
        </div>
        <div class="input-tip">已设置最大输入长度为10个字符</div>
      </div>
      
      <div class="limit-section">
        <div class="input-label">文本域字数限制：</div>
        <div class="input-wrapper">
          <Input 
            v-model="text2"
            type="textarea"
            maxlength="100"
            placeholder="最多输入100个字符"
            show-word-limit
            class="input-with-border"
          />
        </div>
        <div class="input-tip">已设置最大输入长度为100个字符</div>
      </div>

      <div class="limit-section">
        <div class="input-label">字数限制和最小输入：</div>
        <div class="input-wrapper">
          <Input 
            type="textarea"
            minlength="5"
            maxlength="50"
            placeholder="最少输入5个字符，最多输入50个字符"
            show-word-limit
            class="input-with-border"
          />
        </div>
        <div class="input-tip">已设置最小输入长度为5个字符，最大输入长度为50个字符</div>
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
  line-height: 1.6;
}

code {
  background-color: var(--yu-fill-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  color: var(--yu-text-color-primary);
}

.limit-container {
  background-color: var(--yu-fill-color-lighter);
  padding: 20px;
  border-radius: 6px;
}

.limit-section {
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

.input-with-border {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: white;
}

.input-tip {
  margin-top: 8px;
  font-size: 12px;
  color: var(--yu-text-color-secondary);
}

:deep(.yu-input) {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>