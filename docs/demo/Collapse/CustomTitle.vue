<script setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUser, 
  faStar, 
  faShield, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faUser, faStar, faShield, faHeart)

const activeNames = ref(['1'])
</script>
<template>
  <div>
    <Collapse v-model="activeNames">
      <CollapseItem name="1">
        <template #title>
          <div class="custom-title">
            <Icon icon="user" type="primary" />
            <span>用户信息</span>
          </div>
        </template>
        <div class="content-block">
          <p>用户可以在此处管理他们的个人资料、密码设置和通知偏好。</p>
          <p>提供清晰的保存和取消按钮，确保用户可以控制数据的更改。</p>
        </div>
      </CollapseItem>
      
      <CollapseItem name="2">
        <template #title>
          <div class="custom-title">
            <Icon icon="star" type="warning" />
            <span>特色功能</span>
          </div>
        </template>
        <div class="content-block">
          <p>突出展示产品的独特卖点和最受欢迎的功能，帮助用户快速了解产品优势。</p>
        </div>
      </CollapseItem>
      
      <CollapseItem name="3">
        <template #title>
          <div class="custom-title">
            <Icon icon="shield" type="success" />
            <span>隐私设置</span>
          </div>
        </template>
        <div class="content-block">
          <p>用户可以查看和调整他们的隐私设置，控制谁可以看到他们的信息。</p>
          <p>提供详细的解释，帮助用户理解每个设置的影响。</p>
        </div>
      </CollapseItem>
      
      <CollapseItem name="4">
        <template #title>
          <div class="custom-title">
            <Icon icon="heart" type="danger" />
            <span>收藏内容</span>
          </div>
        </template>
        <div class="content-block">
          <p>用户可以查看他们收藏的所有内容，并进行管理。</p>
          <p>提供分类和排序功能，帮助用户更好地组织收藏内容。</p>
        </div>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<style scoped>
.custom-title {
  display: flex;
  align-items: center;
  gap: 8px;
}
.content-block {
  padding: 8px 0;
}
</style>