<script setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

const activeNames = ref(['1'])
</script>
<template>
  <div>
    <Collapse v-model="activeNames">
      <CollapseItem name="1" title="可点击面板">
        <div>
          这是一个正常的可点击面板，用户可以展开或收起该面板。
        </div>
      </CollapseItem>
      <CollapseItem name="2" title="禁用面板" disabled>
        <div>
          这个面板被禁用了，用户无法点击展开或收起该面板。
        </div>
      </CollapseItem>
      <CollapseItem name="3" title="另一个可点击面板">
        <div>
          这是另一个正常的可点击面板，用户可以展开或收起该面板。
        </div>
      </CollapseItem>
      <CollapseItem name="4" title="也被禁用的面板" disabled>
        <div>
          这个面板也被禁用了，用户同样无法点击展开或收起该面板。
        </div>
      </CollapseItem>
    </Collapse>
  </div>
</template>