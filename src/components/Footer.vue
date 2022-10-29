<template>
  <el-button class="homebutton" :icon="House" size="large" @click="home" circle />
</template>

<script setup>
import {
  House
} from '@element-plus/icons-vue'
import router from "@/router";
const home=()=>{
  router.push('/welcome')
}
</script>

<style scoped>
.homebutton{
  position: absolute;
  top:92%;
  left:92%;
  width: 50px;
  height: 50px;
}
</style>