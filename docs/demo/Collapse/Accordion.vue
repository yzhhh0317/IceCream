<script setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

const activeName = ref('1')
</script>
<template>
  <div>
    <Collapse v-model="activeName" accordion>
      <CollapseItem name="1" title="设计原则">
        <div>
          <p>1. 直接：帮助用户快速做出决定，减少决策过程中的摩擦。</p>
          <p>2. 明确：使用清晰、一致的语言和视觉元素，避免歧义。</p>
          <p>3. 可控：让用户感觉他们可以随时掌控体验，能够轻松撤销决定。</p>
        </div>
      </CollapseItem>
      <CollapseItem name="2" title="布局规则">
        <div>
          <p>遵循一致的网格系统，确保界面元素对齐，视觉上更加整洁。</p>
          <p>主要内容区域使用足够的留白，提高可读性和内容层次感。</p>
          <p>在小屏幕设备上，优先展示核心功能，次要内容可以折叠或移至二级页面。</p>
        </div>
      </CollapseItem>
      <CollapseItem name="3" title="交互反馈">
        <div>
          <p>所有可交互元素都应提供明确的悬停和点击状态反馈。</p>
          <p>操作完成后应该提供及时的成功或失败反馈。</p>
          <p>对于耗时操作，使用进度指示器让用户了解当前状态。</p>
        </div>
      </CollapseItem>
    </Collapse>
  </div>
</template>