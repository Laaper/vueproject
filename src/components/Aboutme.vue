<template>
  <h1>拉肥不肥の奇幻冒险</h1>
<el-breadcrumb separator="/" >
    <el-breadcrumb-item :to="{ path: '/welcome' }">龙眼</el-breadcrumb-item>
    <el-breadcrumb-item>关于我</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="collapse">
    <el-card style="position: absolute;left: 12%;height: 330px;width: 400px">
    <el-collapse v-model="activeName" accordion
    style="width:330px;position: absolute;left: 10%;">
      <el-collapse-item title="昵称" name="1" >
        <div>
          拉肥不肥
        </div>
      </el-collapse-item>
      <el-collapse-item title="服务器" name="2">
        <div>
          豆豆柴@伊修加德
        </div>
      </el-collapse-item>
      <el-collapse-item title="主职" name="3">
        <div>
          黑魔法师
        </div>
      </el-collapse-item>
      <el-collapse-item title="导师" name="4">
        <div>
          Vilas@紫水栈桥
        </div>
      </el-collapse-item>
      <el-collapse-item title="梦想" name="5">
        <div>
          以太步害死我导
        </div>
      </el-collapse-item>
    </el-collapse>
      </el-card>

    <el-row style="position: absolute;left: 23.5%;top:66%;height: 180px;width: 500px">
    <el-col
      v-for="(o, index) in 1"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="../assets/valis.png"
          class="image"
          style="height: 180px"
        />
        <div style="padding: 5px">
          <span>出事请找冷酷灭神の我导</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">——Valis</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>


    <el-carousel height="675px" :interval="3000" arrow="hover"
     style="width: 70%;position: absolute;left:30%">
      <el-carousel-item v-for="(item,index) in urls" :key="item" >
        <img :src="item" alt="" style="height: 100%;width:90%">
<!--        <img v-lazy="item"  style="height: 100%;width:90%">-->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import {inject,ref} from "vue";
const currentDate = ref(new Date())
const hideeye=()=>{
  var redsty=inject("redstyle")
  redsty.width=0
  redsty.height=0
  var bluesty=inject("bluestyle")
  bluesty.width=0
  bluesty.height=0
}
hideeye()
const handleChange = (val) => {
  console.log(val)
}
const urls=[
    require('../assets/about1.png'),
    require('../assets/about2.png'),
    require('../assets/about3.png'),
    require('../assets/about4.png'),
    require('../assets/about5.png'),
    require('../assets/about6.png'),
    require('../assets/about7.png'),
    require('../assets/about8.png'),
    require('../assets/about9.png'),
     require('../assets/about10.png'),


]
</script>

<style scoped>
.el-breadcrumb{
  padding: 33px;
}
.time {
  font-size: 12px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.collapse{
  display: flex;
}
</style>