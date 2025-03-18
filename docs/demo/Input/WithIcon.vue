<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUser, 
  faLock, 
  faSearch, 
  faEnvelope, 
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faUser, faLock, faSearch, faEnvelope, faCalendarAlt)

const username = ref('')
const password = ref('')
const search = ref('')
const email = ref('')
const date = ref('')
</script>
<template>
  <div class="demo-container">
    <div class="demo-section">
      <div class="section-header">使用属性</div>
      <div class="input-group">
        <Input 
          v-model="username" 
          placeholder="请输入用户名"
          prefix-icon="user"
          class="demo-input"
        />
      </div>
      <div class="input-group">
        <Input 
          v-model="search" 
          placeholder="搜索内容"
          suffix-icon="search"
          class="demo-input"
        />
      </div>
    </div>

    <div class="demo-divider"></div>

    <div class="demo-section">
      <div class="section-header">使用插槽</div>
      <div class="input-group">
        <Input 
          v-model="password" 
          placeholder="请输入密码"
          class="demo-input"
        >
          <template #prefix>
            <Icon icon="lock" />
          </template>
        </Input>
      </div>
      
      <div class="input-group">
        <Input 
          v-model="date" 
          placeholder="选择日期"
          class="demo-input"
        >
          <template #suffix>
            <Icon icon="calendar-alt" />
          </template>
        </Input>
      </div>
      
      <div class="input-group">
        <Input 
          v-model="email" 
          placeholder="请输入邮箱"
          class="demo-input"
        >
          <template #prefix>
            <Icon icon="envelope" />
          </template>
          <template #suffix>
            <Icon icon="search" />
          </template>
        </Input>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  background-color: transparent;
  border: none;
}
.input-group {
  margin-bottom: 16px;
}
.input-group:last-child {
  margin-bottom: 0;
}
.demo-input {
  width: 100%;
}
:deep(.yu-input) {
  width: 100%;
}
:deep(.yu-input__wrapper) {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: white;
}
.section-header {
  font-size: 16px;
  font-weight: 500;
  color: var(--yu-text-color-primary, #303133);
  margin-bottom: 16px;
}

.demo-divider {
  height: 1px;
  background-color: var(--yu-border-color-light, #e4e7ed);
  margin: 20px 0;
}
</style>