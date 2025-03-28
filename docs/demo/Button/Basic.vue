<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch, 
  faEdit, 
  faCheck, 
  faBell, 
  faStar,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faSearch, faEdit, faCheck, faBell, faStar, faTrash)
</script>
<template>
  <div class="demo-button">
    <h3 class="section-title">标准按钮</h3>
    <div class="button-section">
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
    
    <h3 class="section-title">朴素按钮</h3>
    <div class="button-section">
      <Button plain>朴素按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="success" plain>成功按钮</Button>
      <Button type="info" plain>信息按钮</Button>
      <Button type="warning" plain>警告按钮</Button>
      <Button type="danger" plain>危险按钮</Button>
    </div>
    
    <h3 class="section-title">圆角按钮</h3>
    <div class="button-section">
      <Button round>圆角按钮</Button>
      <Button type="primary" round>主要按钮</Button>
      <Button type="success" round>成功按钮</Button>
      <Button type="info" round>信息按钮</Button>
      <Button type="warning" round>警告按钮</Button>
      <Button type="danger" round>危险按钮</Button>
    </div>
    
    <h3 class="section-title">图标按钮</h3>
    <div class="button-section">
      <Button circle icon="search"></Button>
      <Button type="primary" circle icon="edit"></Button>
      <Button type="success" circle icon="check"></Button>
      <Button type="info" circle icon="bell"></Button>
      <Button type="warning" circle icon="star"></Button>
      <Button type="danger" circle icon="trash"></Button>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0px;
  width: 100%;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
  margin: 8px 0 8px 0;
}

.button-section {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-bottom: 0;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  min-width: 0; 
  overflow-x: visible;
}

/* 覆盖按钮容器中的默认边距 */
.button-section .yu-button + .yu-button {
  margin-left: 0; /* 覆盖可能存在的默认边距 */
}
</style>