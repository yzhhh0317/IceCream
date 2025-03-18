<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import Collapse from './components/Collapse/Collapse.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Icon from './components/Icon/Icon.vue';
import Input from './components/Input/Input.vue';
import type { ButtonInstance } from './components/Button/types';

// 按钮示例相关
const buttonRef = ref<ButtonInstance | null>(null);
const showButtonAlert = () => {
  alert('按钮点击事件触发成功！');
};

// 折叠面板示例相关
const activeNames = ref(['1']);
const handleCollapseChange = (val: string[]) => {
  console.log('当前打开的折叠面板:', val);
};

// 输入框示例相关
const inputValue = ref('');
const passwordValue = ref('');
const textareaValue = ref('');

// 图标大小示例
const iconSize = ref('3x');
onMounted(() => {
  if (buttonRef.value) {
    console.log('buttonRef', buttonRef.value.ref);
  }
});
</script>

<template>
  <div class="container">
    <header class="header">
      <img alt="IceCream UI Logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <h1 class="title">IceCream UI 组件预览</h1>
      <p class="description">一个基于 Vue3 的轻量级 UI 组件库，提供简洁、易用、美观的组件设计系统</p>
    </header>

    <main class="main">
      <!-- 按钮预览部分 -->
      <section class="component-section">
        <h2 class="section-title">Button 按钮</h2>
        <div class="section-description">提供多种类型、状态和尺寸的按钮。</div>
        
        <div class="demo-block">
          <h3 class="demo-title">基础按钮</h3>
          <div class="demo-content">
            <Button>默认按钮</Button>
            <Button type="primary">主要按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="info">信息按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
          </div>
          
          <h3 class="demo-title">朴素按钮</h3>
          <div class="demo-content">
            <Button plain>朴素按钮</Button>
            <Button type="primary" plain>主要按钮</Button>
            <Button type="success" plain>成功按钮</Button>
            <Button type="info" plain>信息按钮</Button>
            <Button type="warning" plain>警告按钮</Button>
            <Button type="danger" plain>危险按钮</Button>
          </div>
          
          <h3 class="demo-title">按钮形状</h3>
          <div class="demo-content">
            <Button>默认按钮</Button>
            <Button round>圆角按钮</Button>
            <Button circle>圆</Button>
          </div>
          
          <h3 class="demo-title">按钮尺寸</h3>
          <div class="demo-content">
            <Button size="large">大按钮</Button>
            <Button>默认按钮</Button>
            <Button size="small">小按钮</Button>
          </div>
          
          <h3 class="demo-title">禁用状态</h3>
          <div class="demo-content">
            <Button disabled>禁用按钮</Button>
            <Button type="primary" disabled>禁用按钮</Button>
          </div>
          
          <h3 class="demo-title">图标和加载状态</h3>
          <div class="demo-content">
            <Button icon="arrow-up">上传</Button>
            <Button loading>加载中</Button>
            <Button ref="buttonRef" @click="showButtonAlert">点击触发事件</Button>
          </div>
        </div>
      </section>
      
      <!-- 输入框预览部分 -->
      <section class="component-section">
        <h2 class="section-title">Input 输入框</h2>
        <div class="section-description">支持各种类型的输入框、文本域和复合型输入框。</div>
        
        <div class="demo-block">
          <h3 class="demo-title">基础输入框</h3>
          <div class="demo-content">
            <Input v-model="inputValue" placeholder="请输入内容"></Input>
          </div>
          
          <h3 class="demo-title">密码输入框</h3>
          <div class="demo-content">
            <Input type="password" v-model="passwordValue" show-password placeholder="请输入密码"></Input>
          </div>
          
          <h3 class="demo-title">文本域</h3>
          <div class="demo-content">
            <Input type="textarea" v-model="textareaValue" placeholder="请输入多行文本"></Input>
          </div>
        </div>
      </section>
      
      <!-- 图标预览部分 -->
      <section class="component-section">
        <h2 class="section-title">Icon 图标</h2>
        <div class="section-description">提供丰富的图标集合，支持自定义颜色和大小。</div>
        
        <div class="demo-block">
          <h3 class="demo-title">基础图标</h3>
          <div class="demo-content icon-demo">
            <div class="icon-item">
              <Icon icon="arrow-up" />
              <span>arrow-up</span>
            </div>
            <div class="icon-item">
              <Icon icon="angle-right" />
              <span>angle-right</span>
            </div>
            <div class="icon-item">
              <Icon icon="spinner" spin />
              <span>spinner (旋转)</span>
            </div>
            <div class="icon-item">
              <Icon icon="circle-xmark" />
              <span>circle-xmark</span>
            </div>
            <div class="icon-item">
              <Icon icon="eye" />
              <span>eye</span>
            </div>
          </div>
          
          <h3 class="demo-title">图标颜色</h3>
          <div class="demo-content">
            <Icon icon="arrow-up" color="#409EFF" />
            <Icon icon="arrow-up" color="#67C23A" />
            <Icon icon="arrow-up" color="#E6A23C" />
            <Icon icon="arrow-up" color="#F56C6C" />
            <Icon icon="arrow-up" color="#909399" />
          </div>
        </div>
      </section>
      
      <!-- 折叠面板预览部分 -->
      <section class="component-section">
        <h2 class="section-title">Collapse 折叠面板</h2>
        <div class="section-description">可以折叠/展开的内容区域，支持手风琴模式。</div>
        
        <div class="demo-block">
          <h3 class="demo-title">基础折叠面板</h3>
          <div class="demo-content">
            <Collapse v-model="activeNames" >
              <CollapseItem name="1" title="折叠面板1">
                <div>这是第一个面板的内容区域，可以包含任何内容，如文字、图片等。</div>
              </CollapseItem>
              <CollapseItem name="2" title="折叠面板2">
                <div>这是第二个面板的内容区域，展开后显示详细信息。</div>
              </CollapseItem>
              <CollapseItem name="3" title="折叠面板3" disabled>
                <div>这是第三个面板的内容区域，此面板被禁用，无法点击展开。</div>
              </CollapseItem>
            </Collapse>
          </div>
        </div>
      </section>
    </main>
    
    <footer class="footer">
      <p>IceCream UI ©2025 - 基于Vue3的轻量级UI组件库</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.logo {
  display: block;
  margin: 0 auto 20px;
}

.title {
  font-size: 2.5rem;
  color: #303133;
  margin-bottom: 10px;
}

.description {
  font-size: 1.2rem;
  color: #606266;
  max-width: 600px;
  margin: 0 auto;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.component-section {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.section-title {
  font-size: 1.8rem;
  color: #303133;
  margin-bottom: 10px;
  position: relative;
  padding-left: 15px;
  border-left: 4px solid #409EFF;
}

.section-description {
  font-size: 1rem;
  color: #606266;
  margin-bottom: 30px;
}

.demo-block {
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  transition: .2s;
}

.demo-block:hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
}

.demo-title {
  font-size: 1.2rem;
  color: #303133;
  font-weight: 500;
  padding: 24px 24px 10px;
  margin: 0;
}

.demo-content {
  padding: 10px 24px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.icon-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.icon-item span {
  font-size: 12px;
  color: #909399;
}

.footer {
  margin-top: 50px;
  text-align: center;
  color: #909399;
  font-size: 14px;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  .component-section {
    padding: 20px;
  }
  
  .demo-content {
    padding: 10px 16px 20px;
  }
}
</style>