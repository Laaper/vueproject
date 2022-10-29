<template>
  <router-link to="/ict">
      <button class="buttonsty" style="background-color:darkgray;">Back</button>
  </router-link>
<button class="buttonsty" style="background-color:rgba(13,148,136);" @click="enlarge">Enlarge</button>
<button class="buttonsty" style="background-color:rgba(13,148,136);" @click="init">Reset</button>
<p :style="pstyle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p :style="pstyle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


</template>

<script setup>
import {inject, reactive} from "vue";
var pstyle1=reactive({
  width:400+'px',
  height:200+'px',
  position:'absolute',
  left:50+'%',
  top:25+'%',
  fontSize:20+'px',
  display:'flex',
   transitionProperty: 'all',
  transitionDuration:1+'s',
})
var pstyle2=reactive({
  width:400+'px',
  height:200+'px',
  position:'absolute',
  left:38+'%',
  top:62+'%',
  fontSize:20+'px',
   display:'flex',
   transitionProperty: 'all',
  transitionDuration:1+'s',
})
var ict1style=inject("ict1style")
var ict2style=inject("ict2style")
var ict3style=inject("ict3style")
var ict4style=inject("ict4style")
const init=()=>{
  ict3style.width=0+'px'
  ict3style.height=0+'px'
  ict4style.width=0+'px'
  ict4style.height=0+'px'
  ict1style.top=25+'%'
  ict1style.left=35+'%'
  ict1style.width=250+'px'
  ict1style.height=250+'px'
  ict1style.borderRadius=50+'%'
   ict2style.top=62+'%'
  ict2style.left=61+'%'
  ict2style.width=250+'px'
  ict2style.height=250+'px'
  ict2style.borderRadius=50+'%'
  pstyle1.width=400+'px'
  pstyle1.height=200+'px'
  pstyle1.left=50+'%'
  pstyle1.top=25+'%'
  pstyle2.width=400+'px'
  pstyle2.height=200+'px'
  pstyle2.left=38+'%'
  pstyle2.top=62+'%'
}
init()

const enlarge=()=>{
  if(Number(ict1style.width.toString().substring(0,3))==570){
    init()
    return;
  }
    else if(Number(ict1style.width.toString().substring(0,3))==490){
          ict2style.top=Number(ict2style.top.toString().substring(0,2))+3+'%';
              pstyle1.width=Number(pstyle1.width.toString().substring(0,3))+25+'px';
    }
   ict1style.width=Number(ict1style.width.toString().substring(0,3))+40+'px';
   ict1style.height=Number(ict1style.height.toString().substring(0,3))+40+'px';
    pstyle1.height=Number(pstyle1.height.toString().substring(0,3))+30+'px';
    pstyle1.width=Number(pstyle1.width.toString().substring(0,3))-30+'px';
    pstyle1.left=Number(pstyle1.left.toString().substring(0,2))+2.5+'%';
    ict2style.width=Number(ict2style.width.toString().substring(0,3))+40+'px';
   ict2style.height=Number(ict2style.height.toString().substring(0,3))+40+'px';
    ict2style.top=Number(ict2style.top.toString().substring(0,2))+2.8+'%';
    pstyle2.height=Number(pstyle2.height.toString().substring(0,3))+30+'px';
    pstyle2.width=Number(pstyle2.width.toString().substring(0,3))-30+'px';
    pstyle2.top=Number(pstyle2.top.toString().substring(0,2))+2.8+'%';


}
</script>

<style scoped>
.buttonsty{
  cursor: pointer;
  margin:10px 5px;
  font-size: large;
border:none;width:80px;height:40px;border-radius: 10px;
  color:white;
}
</style>