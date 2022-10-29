<template>
  <div class="bac">
<img src="../assets/diangun.gif" :style="style1" :class="[rotate1?'go':'still']" @mouseenter="rotate1=!rotate1">
  <img src="../assets/diangun.gif" :style="style2" :class="[rotate2?'go':'still']" @mouseenter="rotate2=!rotate2">
<img src="../assets/diangun.gif"  :style="style3" :class="[rotate3?'go':'still']" @mouseenter="rotate3=!rotate3">
  <img src="../assets/diangun.gif" :style="style4" :class="[rotate4?'go':'still']" @mouseenter="rotate4=!rotate4">
      <p style="font-weight: bolder;font-size: x-large;color: white">金碟游乐场</p>

    <ul v-infinite-scroll="load" class="infinite-list"
        style="overflow: auto;" >
    <li v-for="i in count" :key="i" class="infinite-list-item">
      <img src="../assets/p5.jpg"></li>
  </ul>
    <el-button :type="count<102?'primary':'danger'" style="margin:10px;width: 150px;height:80px;
    font-size: larger" @click="dialogVisible = count<102?false:true">
      {{(count<102)?count-2:100}}%<el-icon class="el-icon--right"><Medal /></el-icon>
    </el-button>

  <el-dialog
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span >今天能过本么？？？？</span><br>
    <span>今天能过本么？？？？</span><br>
    <span>今天能过本么？？？？</span>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">卜太行</el-button>
        <el-button type="primary" @click="handleClose">
          韩真行
        </el-button>
      </span>
    </template>
  </el-dialog>


  </div>
</template>

<script setup>
import {
  Medal
} from '@element-plus/icons-vue'
import {inject, reactive, ref} from 'vue'
const count = ref(0)
const dialogVisible = ref(false)
const hideeye=()=>{
  var redsty=inject("redstyle")
  redsty.width=0
  redsty.height=0
  var bluesty=inject("bluestyle")
  bluesty.width=0
  bluesty.height=0
}
hideeye()
function print(){
}
var satu=1;
var invert=0;
var hug=0;
var rotate1=ref(false);
var rotate2=ref(false);
var rotate3=ref(false);
var rotate4=ref(false);

var style1=reactive({
  width:100+'px',
  height:100+'px',
 // position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
    left:485+'px',
  zIndex:100,
top:12.8+'%',
  filter:'hue-rotate('+hug+'deg)'
})
var style2=reactive({
  width:100+'px',
  height:100+'px',
 // position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
    left:585+'px',
  zIndex:100,
top:12.8+'%',
  filter:'invert('+invert+'%)'
})
var style3=reactive({
  width:100+'px',
  height:100+'px',
 // position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
    left:685+'px',
  zIndex:100,
    top:12.8+'%',
  filter:''
})
var style4=reactive({
  width:100+'px',
  height:100+'px',
 // position:'absolute',
  transitionProperty: 'all',
  transitionDuration:1+'s',
    left:785+'px',
  zIndex:100,
  top:12.8+'%',
  filter:'saturate('+satu+')'
})
const load = () => {
  count.value += 2;
  if(count.value<30){
    style1.width=Number(style1.width.toString().substring(0,3))+20+'px';
  style2.width=Number(style2.width.toString().substring(0,3))+20+'px';
  style3.width=Number(style3.width.toString().substring(0,3))+20+'px';
  style4.width=Number(style4.width.toString().substring(0,3))+20+'px';
  }
  else if(count.value>=30&&count.value<60){
    style1.height=Number(style1.height.toString().substring(0,3))+20+'px';
  style2.height=Number(style2.height.toString().substring(0,3))+20+'px';
  style3.height=Number(style3.height.toString().substring(0,3))+20+'px';
  style4.height=Number(style4.height.toString().substring(0,3))+20+'px';
  }
  else if(count.value>=60&&count.value<=100){
  satu+=2;
  style4.filter='saturate('+satu+')';
  invert+=10;
  style2.filter='invert('+invert+'%)';
  hug+=20;
  style1.filter='hue-rotate('+hug+'deg)'
  }



}

const handleClose = () => {
  ElMessageBox.confirm('想逃?')
    .then(() => {
      handleClose()
    })
    .catch(() => {
      handleClose()
    })
}
</script>

<style scoped>
.infinite-list {
  height: 330px;
  padding: 0;
  margin: 0;
  list-style: none;
  margin:0 auto;
  width: 700px;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
 .still{
        transition: all 2s;
    }
  .go{
      transform:rotate(900deg);
      transition: all 2s;
  }
.bac{
  background:url("../assets/play.png");
width:100%;
height:100%;
position:absolute;
background-size:100% 100%;
}

</style>