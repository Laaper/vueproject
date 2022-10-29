<template>
  <h1 >添加用户</h1>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/welcome' }"
      >苍穹骑士团</el-breadcrumb-item
    >
    <el-breadcrumb-item>多维空间斩</el-breadcrumb-item>
  </el-breadcrumb>

  <el-card style="width: 100%; margin: 0 auto">
    <el-form
      ref="adduserformRef"
      :model="adduserform"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="adduserform.username" />
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <el-input v-model="adduserform.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="adduserform.password" />
      </el-form-item>

      <el-form-item label="性别">
        <el-select v-model="adduserform.sex" style="width: 100%" placeholder="">
          <el-option label="女" value="1" />
          <el-option label="男" value="0" />
        </el-select>
      </el-form-item>
      <!--      <el-input v-model="adduserform.sex" />-->

      <el-form-item label="年龄" prop="age">
        <el-input v-model="adduserform.age" />
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="adduserform.tel" />
      </el-form-item>
      <el-form-item label="学校" prop="school">
        <el-input v-model="adduserform.school" />
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="adduserform.address" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="resetform(adduserformRef)"
          >重置</el-button
        >
        <el-button type="primary" @click="adduser">添加</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {inject, reactive, ref} from "vue";
import { doadd } from "@/request/adduser";
import { dolist } from "@/request/userlist";
var adduserform = reactive({
  username: "",
  password: "",
  name: "",
  age: "",
  sex: "",
  avatar: "",
  school: "",
  address: "",
  tel: "",
});
var adduserformRef = ref();
var redsty=inject("redstyle")
// redsty.transitionDuration=3+'s'
redsty.left=35+'%';
redsty.top=20+'%'
var bluesty=inject("bluestyle")
// bluesty.transitionDuration=3+'s'
bluesty.left=88+'%';
bluesty.top=21+'%'
const rules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  name: [{ required: true, message: "请输入用昵称", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
  sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
  school: [{ required: true, message: "请输入学校", trigger: "blur" }],
  tel: [{ required: true, message: "请输入电话", trigger: "blur" }],
  address: [{ required: true, message: "请输入地址", trigger: "blur" }],
});
function adduser() {
  var req = doadd(adduserform);
  req.then((res) => {
    console.log(res.data.code);
    if (res.data.code == "success")
      return ElMessage({
        type: "success",
        message: "添加成功",
      });
    else
      ElMessage({
        type: "error",
        message: "删除失败",
      });
  });
}

const resetform = (formref) => {
  if (!formref) return;
  formref.resetFields();
};
</script>

<style scoped>
.demo-ruleForm {
  margin: 0 auto;
  width: 550px;
}
.el-breadcrumb {
  padding: 33px;
}
</style>