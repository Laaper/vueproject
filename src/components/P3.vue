<template>
  <div class="body">
    <el-breadcrumb separator="/" style="position: absolute;top:22%;left: 11%">
    <el-breadcrumb-item :to="{ path: '/welcome' }"
      >尼德霍格</el-breadcrumb-item
    >
    <el-breadcrumb-item>我导的光荣战绩</el-breadcrumb-item>
  </el-breadcrumb>
    <div class="box">
        <div class="eye"></div>
        <div class="eye"></div>
    </div>
      <p style="font-weight: bolder;font-size: x-large;
      position:absolute;top:24%">大师兄荣誉墙</p>
    <el-carousel :interval="4000" type="card" height="600px"
    style="position: absolute;top:33%;left:13%;width: 80%">
    <el-carousel-item v-for="(item,index) in urls" :key="item">
        <img :src="item" alt="" style="height: 100%;width:80%">
<!--             <img v-lazy="item" alt="" style="height: 100%;width:80%">-->
    </el-carousel-item>
  </el-carousel>
  </div>


</template>

<script setup>
import {inject} from "vue";
const hideeye=()=>{
  var redsty=inject("redstyle")
  redsty.width=0
  redsty.height=0
  var bluesty=inject("bluestyle")
  bluesty.width=0
  bluesty.height=0
}
hideeye()
document.querySelector('body').addEventListener('mousemove',eyeball);
  function eyeball(e) {
      const eye=document.querySelectorAll('.eye');
      eye.forEach(function (eye) {
          let x=(eye.getBoundingClientRect().left)+(eye.clientWidth/2);
          let y=(eye.getBoundingClientRect().top)+(eye.clientHeight/2);

          let radian=Math.atan2(e.pageX-x,e.pageY-y);
          let rotation=(radian*(180/Math.PI)*-1)+270;
          eye.style.transform="rotate("+rotation+"deg)"
      })
  }

const urls=[
    require('../assets/p31.png'),
    require('../assets/p32.png'),
    require('../assets/p33.png'),
    require('../assets/p34.png'),


]
</script>

<style scoped>

        .body{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            background: radial-gradient(#f2761e,#ef4921);
        }
        .box{
            display: flex;
        }
        .box .eye{
            position: relative;
          /*top:20%;*/
          /*left:60%;*/
            width: 120px;
            height: 120px;
            display: block;
            background: #fff;
            margin: 0 40px;
            border-radius: 50%;
            box-shadow: 0 5px 45px rgba(0,0,0,0.2),
            inset 0 0 15px #f2761e,
            inset 0 0 25px #f2761e;
        }
        .box .eye::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 35%;
          transform: translate(-50%, -50%);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #000000;
          border: 10px solid #2196f3;
          box-sizing: border-box;
        }

</style>