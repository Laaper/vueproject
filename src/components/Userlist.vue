<template>
<h1>用户列表</h1>
<el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/welcome' }">骑神托尔丹</el-breadcrumb-item>
    <el-breadcrumb-item>苍穹之阵：雷枪Ⅰ</el-breadcrumb-item>
  </el-breadcrumb>

<!--  卡片-->
  <el-card >
<!--          表单-->
          <el-input placeholder="请输入搜索账号名"
          style="width: 25%;margin-bottom: 25px;position:relative;left:2.5%;display:flex"
          v-model="findusername" clearable @clear="initlist">
          <template #append>
           <el-button @click="selectuser" style="background-color: deepskyblue"><el-icon><Search /></el-icon></el-button>
          </template>
          </el-input>

         <el-table :data="datalist" border style="display:flex;width: 95%;margin: 0 auto">
        <el-table-column align="center"  label="账号" prop="username"  />
        <el-table-column label="用户名" prop="name" />
        <el-table-column label="性别" prop="sex">
         <template v-slot="scope">
          <el-tag type="danger" v-if="scope.row.sex==1">女</el-tag>
         <el-tag  v-else>男</el-tag>
         </template>

        </el-table-column>
           <el-table-column label="年龄"  prop="age" />
           <el-table-column label="手机号" prop="tel" />
           <el-table-column label="学校" prop="school" />
           <el-table-column label="地址" prop="address" />
          <el-table-column label="操作" width="200">
            <template v-slot="scope">
             <el-button size="small" type="primary" :icon="Edit" @click="editdata(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" :icon="Delete" @click="deldata(scope.row)">删除
            </el-button>
            </template>
        </el-table-column>
        </el-table>
<!--    分页-->
    <el-pagination
      v-model:current-page="listInfo.start"
      v-model:page-size="listInfo.limit"
      :page-sizes="[ 5, 10, 20]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="margin-top:25px"
    />

  </el-card>

<!--对话框编辑用户信息-->
  <el-dialog
    v-model="dialogVisible"
    title="修改用户信息"
    width="30%"
  >
<!--编辑信息表单-->
  <div style="margin: 20px" />
  <el-form
    label-position="right"
    label-width="100px"
    :model="currentform"
    style="max-width: 460px"
  >
    <el-form-item label="账号" prop="username" >
      <el-input v-model="currentform.username" disabled></el-input>
    </el-form-item>
   <el-form-item label="用户名" prop="name" >
      <el-input v-model="currentform.name" ></el-input>
    </el-form-item>
    <el-form-item label="性别" >
      <el-select v-model="currentform.sex" style="width: 100%" :placeholder="currentform.sex==1?'女':'男'">
        <el-option label="女" value="1" />
        <el-option label="男" value="0" />
      </el-select>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="currentform.age" ></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="tel">
      <el-input v-model="currentform.tel" ></el-input>
    </el-form-item>
    <el-form-item label="学校" prop="school">
      <el-input v-model="currentform.school" ></el-input>
    </el-form-item>
    <el-form-item label="地址" prop="address">
      <el-input v-model="currentform.address" ></el-input>
    </el-form-item>


  </el-form>
<!--    对话框脚部-->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="updateform">
          提交</el-button>

      </span>
    </template>
  </el-dialog>


<!--脚部-->
<!--  <Footer></Footer>-->
</template>

<script setup>
import {
  Edit,Delete,Search
} from '@element-plus/icons-vue'
import Footer from'../components/Footer.vue'
import {dolist,dodel,doupdate} from "@/request/userlist";
import {inject, reactive, ref, watch} from "vue";
var datalist=ref([])
var total=ref(0);  //页面总条数
var dbtotal;  //数据库总数据条数
var findusername=ref('');
var listInfo=reactive({
  start:1,
  limit:5
})
var dialogVisible=ref(false)
var currentform=reactive({
    username:"",
    name:"",
    sex:"",
    age:"",
    tel:"",
    school:"",
    address:"",
    avatar:"",
    userId:"",
});
var redsty=inject("redstyle")
// redsty.transitionDuration=3+'s'
redsty.left=60+'%';
redsty.top=80+'%';
var bluesty=inject("bluestyle")
// bluesty.transitionDuration=3+'s'
bluesty.left=25+'%';
bluesty.top=15+'%';


// 初始化数据渲染页面
function getlist(){
  var req=dolist(listInfo)
req.then(res=>{
  // console.log(res);
  let {list,totalRow}=res.data.data;
  total.value=totalRow;
  datalist.value=list;
  dbtotal=totalRow;
})
}
getlist();
// 分页钩子函数
function handleSizeChange(){
 var req=dolist(listInfo)
  req.then(res=>{
  // console.log(res);
  let {list,totalRow}=res.data.data;
  total.value=totalRow;
  datalist.value=list;
})
}
function handleCurrentChange(){
// console.log(listInfo.start)
  var req=dolist(listInfo)
  req.then(res=>{
  // console.log(res);
  let {list,totalRow}=res.data.data;
  total.value=totalRow;
  datalist.value=list;
})
}
// 更新用户信息
function updateform(){
  doupdate(currentform).then(res=>{
    console.log(res);
  })
  getlist();
  dialogVisible.value=false;

}

function editdata(item){
  console.log(item)
  dialogVisible.value=true;
  currentform.name=item.name;
  currentform.username=item.username;
  currentform.age=item.age;
  currentform.school=item.school;
  currentform.address=item.address;
  currentform.tel=item.tel;
  currentform.sex=item.sex;
  currentform.avatar=item.avatar;
  currentform.userId=item.userId;
  console.log(currentform.sex)
// currentform=item;
// console.log(currentform);
}
// 删除用户信息
function deldata(item){
  ElMessageBox.confirm(
    '此操作将删除用户信息',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    var deldata;
    var req=dodel(item.userId);
    console.log("要删除的userid",item.userId)
    req.then(res=>{
      var {data}=res
      deldata=data;
      if(deldata.code=='success')  return ElMessage({
        type: 'success',
        message: '删除成功',
      });
       else ElMessage({
        type: 'error',
        message: '删除失败',
      });
    });
    })
    .catch(() => {
      console.log("取消")
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
function initlist(){
  listInfo.limit=5;
  getlist()
}
function selectuser(){
  let datalist2=[];
  if(findusername.value=='') return;
  var req=dolist({start:1,
  limit:dbtotal});
  req.then(res=> {
  let {list} = res.data.data;
  datalist2 = list;
   var currentnum=0;
  for(let i=0;i<dbtotal;i++){
    if(datalist2[currentnum].username!=findusername.value){
            datalist2.splice(currentnum,1)
    }
    else {
      currentnum++;
    }
  }
  total.value=datalist2.length;
  listInfo.limit=datalist2.length;
  datalist.value=datalist2;

  // console.log("筛选后的用户列表为",datalist.value);
});

}

</script>

<style scoped>
.el-card{
}
.el-breadcrumb{
  padding: 33px;
}
</style>