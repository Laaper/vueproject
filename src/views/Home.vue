<template >
    <el-container>
      <el-header  >
        <div>
          <img src="../assets/ff14log.jpg" alt=""
        style="position: absolute;left:0;width: 100px;height: 130px">
        <span style="position:absolute;left:7%;top:40px;height:50px;
        color: white;font-size: xx-large;">幻想龙诗绝境战</span>
        </div>
        <div>
<!--          <el-button type="primary" style="position: relative;top:40px">离开</el-button>-->
        <router-link to="/">
          <el-button style="position: relative;top:40px">
                      <el-icon><SwitchButton /></el-icon>
        </el-button>
        </router-link>

          <span style="position:absolute;right:0.5%;top:88px;height:50px;
        color: white;font-size: large;">拉肥不肥</span>
        </div>
      </el-header>
      <el-container >

<!--        左侧菜单栏-->
        <el-aside  width="200px"  >
       <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          mode="vertical"
          text-color="#fff"
          background-color="rgb(51,55,68"
          active-text-color="#409EFF"
          :router="true"
          cp>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><Location /></el-icon>
      <span>苍穹骑士团</span>
    </template>
      <el-menu-item index="adduser">多维空间斩</el-menu-item>
      <el-menu-item index="1-2" disabled>光芒&天火</el-menu-item>
      <el-menu-item index="1-3" disabled>奥尔什方挡抢</el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="2">
    <template #title>
      <el-icon><Location /></el-icon>
      <span>骑神托尔丹</span>
    </template>
      <el-menu-item index="userlist">苍穹之阵：雷枪 Ⅰ</el-menu-item>
      <el-menu-item index="ict">苍穹之阵：雷枪 Ⅱ</el-menu-item>
      <el-menu-item index="2-3" disabled>苍穹之阵：圣杖 Ⅰ</el-menu-item>
      <el-menu-item index="2-4" disabled>苍穹之阵：圣杖 Ⅱ</el-menu-item>
      <el-menu-item index="2-5" disabled>苍穹之阵：圣杖 Ⅲ</el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="3" >
    <template #title>
      <el-icon><Location /></el-icon>
      <span>尼德霍格</span>
    </template>
      <el-menu-item index="p3">堕天龙炎冲Ⅰ</el-menu-item>
      <el-menu-item index="3-2" disabled>堕天龙炎冲Ⅱ</el-menu-item>
      <el-menu-item index="3-3" disabled>4塔4幻影</el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="4">
    <template #title>
      <el-icon><Location /></el-icon>
      <span>龙眼</span>
    </template>
      <el-menu-item index="aboutme">邪龙爪牙</el-menu-item>
      <el-menu-item index="4-2" disabled>幻象冲</el-menu-item>
      <el-menu-item index="4-3" disabled>拯救奥尔什方</el-menu-item>
  </el-sub-menu>
<el-sub-menu index="5" >
    <template #title>
      <el-icon><Location /></el-icon>
      <span>伪・骑神托尔丹</span>
    </template>
      <el-menu-item index="5-1" disabled> 至天之阵：风枪 Ⅰ</el-menu-item>
      <el-menu-item index="5-2" disabled> 至天之阵：风枪 Ⅱ</el-menu-item>
      <el-menu-item index="5-3" disabled> 至天之阵：死刻 Ⅰ</el-menu-item>
      <el-menu-item index="p5" > 至天之阵：死刻 Ⅱ</el-menu-item>
      <el-menu-item index="5-5" disabled> 至天之阵：死刻 Ⅲ</el-menu-item>
  </el-sub-menu>
  <el-menu-item index="6" disabled>
    <el-icon><setting /></el-icon>
    <span>伪・圣邪双龙</span>
  </el-menu-item>
  <el-menu-item index="7" disabled>
    <el-icon><setting /></el-icon>
    <span>伪・龙威骑神托尔丹</span>
  </el-menu-item>
</el-menu>
        </el-aside>

        <el-main style="padding: 0">
          <router-view></router-view>

          <img src="../assets/red.png" :style="redstyle">
          <img src="../assets/blue.png" :style="bluestyle">
          <Footer></Footer>
          <button class="largebutton" @click="belarge">
          <img src="../assets/eye.png" style="display: flex;  width: 150px;
            height: 80px;" >
          </button>

        </el-main>
      </el-container>
    </el-container>

</template>

<script setup>
import {
  SwitchButton,
    Location
} from '@element-plus/icons-vue'
import Footer from'../components/Footer.vue'
import {ref,watch, provide, inject, reactive} from "vue";
var activePath='';
var redstyle=reactive({
  width:100+'px',
  height:100+'px',
 position:'absolute',
  transitionProperty: 'all',
  transitionDuration:3+'s',
    left:13+'%',
  zIndex:100,
top:40+'%'})
var bluestyle=reactive({
  width:100+'px',
  height:100+'px',
 position:'absolute',
  transitionProperty: 'all',
  transitionDuration:3+'s',
    left:90+'%',
  zIndex:100,
top:60+'%'});
provide("redstyle",redstyle)
provide("bluestyle",bluestyle)

const change=(path)=>{
  activePath=path;
  console.log(activePath)
}

const belarge=()=>{
  redstyle.transitionDuration=1.5+'s'
    bluestyle.transitionDuration=1.5+'s'
  if(redstyle.width=='400px'||redstyle.width==0){
    redstyle.width = 100 + 'px';
    redstyle.height=100+'px';
     bluestyle.width = 100 + 'px';
    bluestyle.height=100+'px';

  } else {
   redstyle.width=Number(redstyle.width.toString().substring(0,3))+50+'px';
    redstyle.height=Number(redstyle.height.toString().substring(0,3))+50+'px';
     bluestyle.width=Number(bluestyle.width.toString().substring(0,3))+50+'px';
    bluestyle.height=Number(bluestyle.height.toString().substring(0,3))+50+'px';
  }
}

</script>




<!--css格式-->
<style scoped>
.el-container{
  height: 100%;
}
.el-header{
  background:rgb(0,0,0);
  height: 130px;
  display: flex;
  justify-content:space-between;

}
.el-aside{
  background: rgb(51,55,68);
}

.el-main{
  background: rgb(234,237,241);
}
.largebutton{
  position: absolute;
  top:87%;
  left:11.8%;
  border-radius:50%;
  cursor: pointer;
  /*background-image:url('../assets/eye.png');*/
}


</style>