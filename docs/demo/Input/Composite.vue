<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faSearch)

const url1 = ref('')
const url2 = ref('')
const search = ref('')
const selectValue = ref('1')

const options = [
  { value: '1', label: 'http://' },
  { value: '2', label: 'https://' },
  { value: '3', label: 'ftp://' }
]
</script>
<template>
  <div class="demo-container">
    <div class="input-group">
      <Input v-model="url1" placeholder="Please input" class="demo-input">
        <template #prepend>
          <div class="prepend-content">Http://</div>
        </template>
      </Input>
    </div>
    
    <div class="input-group">
      <Input v-model="url2" placeholder="Please input" class="demo-input">
        <template #append>
          <div class="append-content">.com</div>
        </template>
      </Input>
    </div>

    <div class="input-group">
      <Input v-model="search" placeholder="Please input" class="demo-input">
        <template #prepend>
          <select v-model="selectValue" class="select-demo">
            <option v-for="item in options" :key="item.value" :value="item.value">
              {{ item.label }}
            </option>
          </select>
        </template>
        <template #append>
          <Button type="primary" class="search-button">
            <Icon icon="search" class="search-icon" />
            搜索
          </Button>
        </template>
      </Input>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 24px;
}

.input-group {
  margin-bottom: 20px;
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
}

.prepend-content, .append-content {
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.select-demo {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  height: 100%;
  min-width: 80px;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
}

.search-button {
  border-radius: 0;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.search-icon {
  margin-right: 4px;
  font-size: 14px;
}
</style>