<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import Collapse from './components/Collapse/Collapse.vue';
import Item from './components/Collapse/CollapseItem.vue';
import Icon from './components/Icon/Icon.vue';
import type{ ButtonInstance } from './components/Button/types';
const buttonRef=ref<ButtonInstance|null>(null)
const openValue=ref(['a'])
const size=ref<any>('3x')
onMounted(()=>{
  if(buttonRef.value){
    console.log('buttonRef',buttonRef.value.ref);
  }
  setTimeout(() => {
    openValue.value=['a','b']
    size.value='2xl'
  }, 2000);
})
const testClick=()=>{
  alert(123)
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <Icon icon="arrow-up" :size="size" type="danger" color="#ffc03f"/>
  <main>
    <Button ref="buttonRef" @click="testClick">TestButton</Button>
    <Button plain>test</Button>
    <Button round>Round</Button>
    <Button circle>yyy</Button>
    <Button disabled>DDDDDD</Button><br/><br/>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br/><br/>


    <Collapse v-model="openValue">
      <Item name="a" title="Title A">
        <h1>nice nice</h1>
        <div>this is content aaaa</div>
      </Item>
      <Item name="b" title="Title b">
        <div>this is content bbbb</div>
      </Item>
      <Item name="c" title="Title c" disabled>
        <div>this is content cccc</div>
      </Item>
    </Collapse>
    {{ openValue }}
  </main>
  <h1>h111111</h1>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
