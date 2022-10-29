<template>
  <div style="height:100%;background: rgb(43,75,107)">
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="loginform"
  >
          <div style="background: white">
            <img src="../assets/XIV.jpg" alt="">
          </div>
    <div style="margin: 10px">
    <el-form-item label="Account" prop="username">
      <el-input v-model="ruleForm.username" type="text"/>
    </el-form-item>

    <el-form-item label="Password" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
      />
    </el-form-item>

    <el-form-item >
      <div style="position:relative;left:57%">
        <el-button type="primary" @click="submitForm(ruleFormRef)"
        >登录</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </div>


    </el-form-item>
    </div>

  </el-form>
</div>
</template>

<script setup>
import router from "@/router";
import { reactive, ref } from 'vue'
import {dologin as loginApi} from "@/request/login";
const ruleFormRef = ref()
const ruleForm = reactive({
  username: '',
  password: '',
})
const validateAcc = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the username'))
  } else {
    callback()
  }
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password '))
  }else {
    callback()
  }
}
const rules = reactive({
  username: [{ validator: validateAcc, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
})
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
        //请求登录
      const p=loginApi(ruleForm);
      p.then((res)=>{
       console.log(res);
        if(res.data.code="success"){
          console.log("保存sessionid",res.data.sessionId)
          window.localStorage.setItem("SESSIONID",res.data.sessionId);
        }

      });
      router.push({
        path:'/home'
      })

    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style >


.loginform{
  width: 450px;
  border:5px solid red;
  position: absolute;
  top:30%;
  left:40%;
  background: white;
  border-radius: 15px;
}
</style>