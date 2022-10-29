<template>
  <el-breadcrumb separator="/" style="position: absolute;top:22%;left: 11%">
    <el-breadcrumb-item :to="{ path: '/welcome' }"
      >骑神托尔丹</el-breadcrumb-item
    >
    <el-breadcrumb-item>苍穹之阵：雷枪 Ⅱ</el-breadcrumb-item>
  </el-breadcrumb>
  <router-link to="/1">
     <img src="../assets/ict1.jpg" :style="ict1style">
  <img src="../assets/ict2.jpg" :style="ict2style">
  </router-link>
    <router-link to="/2">
      <img src="../assets/ict3.jpg" :style="ict3style">
  <img src="../assets/ict4.jpg" :style="ict4style">
    </router-link>
<router-view></router-view>
</template>

<script setup>
import {inject, provide, reactive, watch} from "vue";
import router from "@/router";
const hideeye=()=>{
  var redsty=inject("redstyle")
  // redsty.left=60+'%';
  // redsty.top=80+'%';
  redsty.width=0
  redsty.height=0
  var bluesty=inject("bluestyle")
  // bluesty.left=25+'%';
  // bluesty.top=15+'%';
  bluesty.width=0
  bluesty.height=0
}
var ict1style=reactive({
  width:400+'px',
  height:400+'px',
 position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
  left:33+'%',
  top:16+'%',
  borderRadius:10+'px',
    display:'flex',
    zIndex:50,
})
var ict2style=reactive({
  width:400+'px',
  height:400+'px',
 position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
  left:57+'%',
  top:16+'%',
  borderRadius:10+'px',
    display:'flex',
  zIndex:50,

})
var ict3style=reactive({
  width:400+'px',
  height:400+'px',
 position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
  left:33+'%',
  top:59+'%',
  borderRadius:10+'px',

})
var ict4style=reactive({
  width:400+'px',
  height:400+'px',
 position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
  left:57+'%',
  top:59+'%',
  borderRadius:10+'px'
})
provide("ict1style",ict1style)
provide("ict2style",ict2style)
provide("ict3style",ict3style)
provide("ict4style",ict4style)
hideeye()
watch(router.currentRoute, (newp, oldp) => {
  if (newp.path == '/ict') {
    ict3style.width = 400 + 'px'
    ict3style.height = 400 + 'px'
    ict3style.top = 59 + '%'
    ict3style.left = 33 + '%'
    ict3style.borderRadius = 10 + 'px'
    ict4style.width = 400 + 'px'
    ict4style.height = 400 + 'px'
    ict4style.top = 59 + '%'
    ict4style.left = 57 + '%'
    ict4style.borderRadius = 10 + 'px'
    ict1style.top = 16 + '%'
    ict1style.left = 33 + '%'
    ict1style.width = 400 + 'px'
    ict1style.height = 400 + 'px'
  ict1style.borderRadius=10+'px'
   ict2style.top=16+'%'
  ict2style.left=57+'%'
  ict2style.width=400+'px'
  ict2style.height=400+'px'
  ict2style.borderRadius=10+'px'
  }
})



</script>

<style scoped>

</style>