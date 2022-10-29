<template>
<div class="picblock">
<!--    <span class="demonstration"-->
<!--      >Switch when indicator is hovered (default)</span>-->
  <div style="height: 15%">
    <h3 style="margin: 10px 0px">絶竜詩戦争</h3>
    <h4 style="text-align:left;margin:0 0;width: 40%;position:relative;left:33%">常言道历史不存在“如果”，但即便如此人们还是会不禁想象历史中存在的另一种可能。</h4>
    <h4 style="text-align:left;margin:0 0;width: 37%;position:relative;left:33%">现在，跨越了末日危机的光之战士开始回顾过去的旅程，与被托付的思念一同被想起的，还有那场龙诗战争。一边聆听异国的诗人编写的诗歌，一边幻想可能存在的另一种未来吧。</h4>
</div>
    <el-carousel height="750px">
      <el-carousel-item v-for="(item,index) in urls" :key="item" >
        <img :src="item" alt="" style="height: 100%;width:70%">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script setup>
import {inject} from "vue";
const urls=[
    require('../assets/pic1.png'),
    require('../assets/pic2.png'),
    require('../assets/pic3.png'),
    require('../assets/pic4.png'),
    require('../assets/pic5.png'),
    require('../assets/pic6.png'),
    require('../assets/pic7.jpg'),

]
var redsty=inject("redstyle")
// redsty.transitionDuration=3+'s'
redsty.left=13+'%';
redsty.top=40+'%'
var bluesty=inject("bluestyle")
// bluesty.transitionDuration=3+'s'
bluesty.left=90+'%';
bluesty.top=60+'%'
// const url= require('../assets/XIV.jpg')



</script>

<style scoped>

.test{
  position: relative;
  top:50%;
}
.picblock{
  width: 100%;
  height: 100%;

}
.demonstration {
  color: var(--el-text-color-secondary);
padding: 10px}
</style>