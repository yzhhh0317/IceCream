<script setup>
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faHeart)
</script>
<template>
  <div class="icon-color-demo">
    <p class="section-description">Icon 组件提供了多种颜色设置方式，可以使用预设的主题色或自定义颜色。</p>
    
    <div class="color-section">
      <h4 class="color-title">主题色</h4>
      <div class="color-grid">
        <div class="color-item">
          <div class="icon-wrapper primary">
            <Icon icon="heart" type="primary" />
          </div>
          <div class="color-label">primary</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper success">
            <Icon icon="heart" type="success" />
          </div>
          <div class="color-label">success</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper warning">
            <Icon icon="heart" type="warning" />
          </div>
          <div class="color-label">warning</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper danger">
            <Icon icon="heart" type="danger" />
          </div>
          <div class="color-label">danger</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper info">
            <Icon icon="heart" type="info" />
          </div>
          <div class="color-label">info</div>
        </div>
      </div>
    </div>
    
    <div class="color-section">
      <h4 class="color-title">自定义颜色</h4>
      <p class="color-description">可以通过 color 属性直接设置任意颜色值。</p>
      <div class="color-grid">
        <div class="color-item">
          <div class="icon-wrapper">
            <Icon icon="heart" color="#8A2BE2" />
          </div>
          <div class="color-label">#8A2BE2</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper">
            <Icon icon="heart" color="#FF1493" />
          </div>
          <div class="color-label">#FF1493</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper">
            <Icon icon="heart" color="#00CED1" />
          </div>
          <div class="color-label">#00CED1</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper">
            <Icon icon="heart" color="#FF8C00" />
          </div>
          <div class="color-label">#FF8C00</div>
        </div>
        <div class="color-item">
          <div class="icon-wrapper">
            <Icon icon="heart" color="#32CD32" />
          </div>
          <div class="color-label">#32CD32</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-color-demo {
  padding: 24px;
  border-radius: 4px;
}

.section-title {
  margin: 0 0 12px 0;
  font-size: 18px;
  color: var(--yu-text-color-primary);
}

.section-description {
  margin: 0 0 24px 0;
  color: var(--yu-text-color-secondary);
  line-height: 1.6;
}

.color-section {
  margin-bottom: 40px;
}

.color-title {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: var(--yu-text-color-primary);
  font-weight: 500;
}

.color-description {
  margin: 0 0 16px 0;
  color: var(--yu-text-color-secondary);
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  padding: 20px;
  border-radius: 8px;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
}

.color-item:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: var(--yu-fill-color-blank);
  margin-bottom: 12px;
  font-size: 28px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.color-label {
  font-size: 14px;
  color: var(--yu-text-color-regular);
  font-weight: 500;
}

/* 添加不同主题色的背景 */
.primary {
  background-color: rgba(64, 158, 255, 0.1);
}

.success {
  background-color: rgba(103, 194, 58, 0.1);
}

.warning {
  background-color: rgba(230, 162, 60, 0.1);
}

.danger {
  background-color: rgba(245, 108, 108, 0.1);
}

.info {
  background-color: rgba(144, 147, 153, 0.1);
}
</style>