<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch, 
  faEdit, 
  faCheck, 
  faUpload, 
  faDownload,
  faShare
} from '@fortawesome/free-solid-svg-icons'

// 注册图标
library.add(faSearch, faEdit, faCheck, faUpload, faDownload, faShare)
</script>
<template>
  <div class="demo-button">
    <div class="row">
      <Button type="primary" icon="search">搜索</Button>
      <Button type="success" icon="edit">编辑</Button>
      <Button type="info" icon="check">确认</Button>
      <Button type="warning" icon="share">分享</Button>
      <Button type="danger" icon="delete">删除</Button>
    </div>
    
    <div class="row">
      <Button icon="search">搜索</Button>
      <Button icon="edit">编辑</Button>
      <Button icon="check">确认</Button>
      <Button icon="share">分享</Button>
      <Button icon="delete">删除</Button>
    </div>
    
    <div class="row">
      <Button type="primary">
        <template #icon>
          <Icon icon="upload" />
        </template>
        上传
      </Button>
      
      <Button type="primary">
        下载
        <template #icon>
          <Icon icon="download" />
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 26px;
  width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  margin-bottom: 0;
  align-items: center;
}
</style>