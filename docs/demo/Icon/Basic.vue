<script setup>
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUser, 
  faHouse, 
  faGear, 
  faBell, 
  faHeart,
  faStar,
  faEnvelope,
  faCalendarAlt,
  faSearch,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(
  faUser, 
  faHouse, 
  faGear, 
  faBell, 
  faHeart,
  faStar,
  faEnvelope,
  faCalendarAlt,
  faSearch,
  faCheck
)
</script>
<template>
  <div class="icon-demo-container">
    <h3 class="icon-title">基础图标</h3>
    <p class="icon-description">IceCream UI 提供了丰富的图标集合，基于Font Awesome实现。</p>
    
    <div class="icon-grid">
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="user" />
        </div>
        <div class="icon-name">user</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="house" />
        </div>
        <div class="icon-name">house</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="gear" />
        </div>
        <div class="icon-name">gear</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="bell" />
        </div>
        <div class="icon-name">bell</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="heart" />
        </div>
        <div class="icon-name">heart</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="star" />
        </div>
        <div class="icon-name">star</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="envelope" />
        </div>
        <div class="icon-name">envelope</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="calendar-alt" />
        </div>
        <div class="icon-name">calendar</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="search" />
        </div>
        <div class="icon-name">search</div>
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <Icon icon="check" />
        </div>
        <div class="icon-name">check</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-demo-container {
  padding: 20px;
}

.icon-title {
  margin: 0 0 12px 0;
  font-size: 18px;
  color: var(--yu-text-color-primary);
}

.icon-description {
  margin: 0 0 32px 0;
  color: var(--yu-text-color-secondary);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
}

.icon-item:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: var(--yu-fill-color-light);
  margin-bottom: 8px;
  font-size: 24px;
  color: var(--yu-text-color-primary);
}

.icon-name {
  font-size: 13px;
  color: var(--yu-text-color-secondary);
}
</style>