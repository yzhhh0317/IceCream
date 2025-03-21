<script setup>
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSpinner, 
  faCog, 
  faSync, 
  faCircleNotch, 
  faHeart,
  faBell,
  faExclamation,
  faStar
} from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(
  faSpinner, 
  faCog, 
  faSync, 
  faCircleNotch, 
  faHeart,
  faBell,
  faExclamation,
  faStar
)
</script>
<template>
  <div class="icon-animation-demo">
    <p class="section-description">Icon 组件提供了多种动画效果，可以让图标更加生动。</p>
    
    <div class="animation-section">
      <h4 class="animation-title">旋转动画</h4>
      <p class="animation-description">通过 <code>spin</code> 属性可以让图标持续旋转，常用于加载状态。</p>
      <div class="animation-grid">
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="spinner" spin size="2x" />
          </div>
          <div class="animation-label">spinner</div>
          <div class="animation-type">spin</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="cog" spin size="2x" />
          </div>
          <div class="animation-label">cog</div>
          <div class="animation-type">spin</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="sync" spin size="2x" />
          </div>
          <div class="animation-label">sync</div>
          <div class="animation-type">spin</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="circle-notch" spin size="2x" />
          </div>
          <div class="animation-label">circle-notch</div>
          <div class="animation-type">spin</div>
        </div>
      </div>
    </div>
    
    <div class="animation-section">
      <h4 class="animation-title">其他动画效果</h4>
      <p class="animation-description">各种动画效果可以组合使用，呈现丰富的视觉体验。</p>
      <div class="animation-grid">
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="heart" beat size="2x" type="danger" />
          </div>
          <div class="animation-label">heart</div>
          <div class="animation-type">beat</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="bell" shake size="2x" type="warning" />
          </div>
          <div class="animation-label">bell</div>
          <div class="animation-type">shake</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="exclamation" bounce size="2x" type="primary" />
          </div>
          <div class="animation-label">exclamation</div>
          <div class="animation-type">bounce</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="star" fade size="2x" type="success" />
          </div>
          <div class="animation-label">star</div>
          <div class="animation-type">fade</div>
        </div>
      </div>
    </div>
    
    <div class="animation-section">
      <h4 class="animation-title">组合动画</h4>
      <p class="animation-description">可以组合多种动画属性，创造更丰富的效果。</p>
      <div class="animation-grid">
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="heart" beat fade size="2x" color="#FF1493" />
          </div>
          <div class="animation-label">heart</div>
          <div class="animation-type">beat + fade</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="spinner" spin pulse size="2x" color="#8A2BE2" />
          </div>
          <div class="animation-label">spinner</div>
          <div class="animation-type">spin + pulse</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="cog" spin beat size="2x" color="#00CED1" />
          </div>
          <div class="animation-label">cog</div>
          <div class="animation-type">spin + beat</div>
        </div>
        <div class="animation-item">
          <div class="animation-wrapper">
            <Icon icon="bell" shake beat size="2x" color="#FF8C00" />
          </div>
          <div class="animation-label">bell</div>
          <div class="animation-type">shake + beat</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-animation-demo {
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

.animation-section {
  margin-bottom: 40px;
}

.animation-title {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: var(--yu-text-color-primary);
  font-weight: 500;
}

.animation-description {
  margin: 0 0 16px 0;
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

.animation-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 24px;
  border-radius: 8px;
}

.animation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.animation-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: var(--yu-fill-color-blank);
  margin-bottom: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.animation-label {
  font-size: 14px;
  color: var(--yu-text-color-primary);
  font-weight: 500;
  margin-bottom: 4px;
}

.animation-type {
  font-size: 12px;
  color: var(--yu-text-color-secondary);
  background-color: var(--yu-fill-color);
  padding: 2px 8px;
  border-radius: 12px;
}
</style>