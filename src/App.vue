<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

import Test from './components/test.tsx'
const oncclick=()=>{
  console.log(123)
}

const confirm = () => {
  console.log('confirm !!!!');
}

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />


  <Test @click="oncclick">
    <template #default>
      默认插槽
    </template>
    <template #title>
      title插槽
    </template>
  </Test>

  <!-- 1、primary,secondary,text
  2、尺寸size
  3、disabled
  4、块级block
  5、iconbutton -->
  
  <div>
    <SButton type="primary">确定</SButton>
    <SButton type="secondary">取消</SButton>
    <SButton type="text">文本</SButton>
  </div>
  <div>
    <SButton type="primary" size="small">small</SButton>
    <SButton type="primary" size="medium">medium</SButton>
    <SButton type="primary" size="large">large</SButton>
  </div>
  <div>
    <SButton type="secondary" size="small">small</SButton>
    <SButton type="secondary" size="medium">medium</SButton>
    <SButton type="secondary" size="large">large</SButton>
  </div>
  <div>
    <SButton type="primary" @click="confirm">确定</SButton>
    <SButton type="primary" disabled @click="confirm">disabled</SButton>
  </div>
  <div>
    <SButton type="text" >确定</SButton>
    <SButton type="text" disabled>disabled</SButton>
  </div>
  <div>
    <SButton type="primary" block>Confirm</SButton>
    <SButton type="secondary" block>Cancel</SButton>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
