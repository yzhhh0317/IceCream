<script setup>
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faStar)
</script>
<template>
  <div class="icon-size-demo">
    <p class="section-description">Icon 组件提供了多种预设尺寸，可以通过 size 属性设置。</p>
    
    <div class="size-section">
      <h4 class="size-title">预设尺寸</h4>
      <div class="icon-group">
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="xs" />
          </div>
          <div class="size-label">xs</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="sm" />
          </div>
          <div class="size-label">sm</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" />
          </div>
          <div class="size-label">默认</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="lg" />
          </div>
          <div class="size-label">lg</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="xl" />
          </div>
          <div class="size-label">xl</div>
        </div>
      </div>
    </div>
    
    <div class="size-section">
      <h4 class="size-title">倍数尺寸</h4>
      <div class="icon-group">
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="1x" />
          </div>
          <div class="size-label">1x</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="2x" />
          </div>
          <div class="size-label">2x</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="3x" />
          </div>
          <div class="size-label">3x</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="4x" />
          </div>
          <div class="size-label">4x</div>
        </div>
        <div class="icon-item">
          <div class="icon-display">
            <Icon icon="star" size="5x" />
          </div>
          <div class="size-label">5x</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-size-demo {
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

.size-section {
  margin-bottom: 40px;
}

.size-title {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: var(--yu-text-color-primary);
  font-weight: 500;
}

.icon-group {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px;
  border-radius: 8px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-display {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: 12px;
}

.size-label {
  font-size: 14px;
  color: var(--yu-text-color-regular);
  font-weight: 500;
}
</style>