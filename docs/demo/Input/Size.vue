<script setup>
import Input from '@/components/Input/Input.vue'
</script>
<template>
  <div class="demo-input">
    <h3 class="section-title">输入框尺寸</h3>
    <p class="section-description">Input 组件提供了三种不同的尺寸：large、default 和 small</p>
    
    <div class="size-container">
      <div class="size-section">
        <div class="input-row">
          <div class="input-label">大型输入框：</div>
          <div class="input-wrapper">
            <Input size="large" placeholder="大型输入框" class="input-with-border" />
          </div>
        </div>
        
        <div class="input-row">
          <div class="input-label">默认尺寸：</div>
          <div class="input-wrapper">
            <Input placeholder="默认尺寸输入框" class="input-with-border" />
          </div>
        </div>

        <div class="input-row">
          <div class="input-label">小型输入框：</div>
          <div class="input-wrapper">
            <Input size="small" placeholder="小型输入框" class="input-with-border" />
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="size-section">
        <h4 class="subsection-title">带前置/后置内容的输入框</h4>
        
        <div class="input-row">
          <div class="input-label">大型：</div>
          <div class="input-wrapper">
            <Input size="large" placeholder="大型输入框" class="input-with-border">
              <template #prepend>
                <div class="prepend-content">Http://</div>
              </template>
            </Input>
          </div>
        </div>
        
        <div class="input-row">
          <div class="input-label">默认：</div>
          <div class="input-wrapper">
            <Input placeholder="默认尺寸" class="input-with-border">
              <template #prepend>
                <div class="prepend-content">Http://</div>
              </template>
            </Input>
          </div>
        </div>
        
        <div class="input-row">
          <div class="input-label">小型：</div>
          <div class="input-wrapper">
            <Input size="small" placeholder="小型输入框" class="input-with-border">
              <template #prepend>
                <div class="prepend-content">Http://</div>
              </template>
            </Input>
          </div>
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

.size-container {
  padding: 20px;
  border-radius: 6px;
}

.size-section {
  margin-bottom: 20px;
}

.subsection-title {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--yu-text-color-primary);
  font-weight: 500;
}

.input-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.input-label {
  min-width: 100px;
  font-weight: 500;
  color: var(--yu-text-color-regular);
}

.input-wrapper {
  width: 300px;
}

.divider {
  height: 1px;
  background-color: var(--yu-border-color-light);
  margin: 24px 0;
}

.prepend-content {
  height: 100%;
  display: flex;
  align-items: center;
}

/* 重置demo中可能影响布局的样式 */
:deep(.yu-input) {
  width: 100%;
}

:deep(.yu-input__wrapper) {
  border: 1px solid #dcdfe6;
}
</style>