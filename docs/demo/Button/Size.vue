<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faSearch)
</script>
<template>
  <div class="demo-button">
    <h3 class="section-title">按钮尺寸</h3>
    
    <div class="size-container">
      <div class="size-section">
        <h4 class="subsection-title">默认按钮尺寸</h4>
        <div class="button-row">
          <div class="button-group">
            <Button size="large">大型按钮</Button>
            <Button>默认按钮</Button>
            <Button size="small">小型按钮</Button>
          </div>
        </div>
      </div>

      <div class="size-section">
        <h4 class="subsection-title">主要按钮尺寸</h4>
        <div class="button-row">
          <div class="button-group">
            <Button size="large" type="primary">大型按钮</Button>
            <Button type="primary">默认按钮</Button>
            <Button size="small" type="primary">小型按钮</Button>
          </div>
        </div>
      </div>

      <div class="size-section">
        <h4 class="subsection-title">圆角按钮尺寸</h4>
        <div class="button-row">
          <div class="button-group">
            <Button size="large" round>大型按钮</Button>
            <Button round>默认按钮</Button>
            <Button size="small" round>小型按钮</Button>
          </div>
        </div>
      </div>

      <div class="size-section">
        <h4 class="subsection-title">圆形图标按钮尺寸</h4>
        <div class="button-row">
          <div class="button-group">
            <Button size="large" circle icon="search"></Button>
            <Button circle icon="search"></Button>
            <Button size="small" circle icon="search"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 16px 0;
}

.subsection-title {
  font-size: 14px;
  color: #606266;
  margin: 0 0 16px 0;
  font-weight: normal;
}

.size-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.size-section {
  padding: 24px;
  border-radius: 4px;
}

.button-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .button-group {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>