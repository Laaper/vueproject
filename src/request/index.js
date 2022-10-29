import axios from "axios";
import qs from "qs";
 import 'element-plus/theme-chalk/el-loading.css'
import { ElLoading } from 'element-plus'
import{Loading} from '@element-plus/icons-vue'

var instance=axios.create({
    baseURL:'http://bufantec.com/api/',
    // baseURL:'http://leju.bufan.cloud/',
    timeout:5000
})
var loading;
instance.interceptors.request.use(config=>{
    //处理post参数
    if(config.method=='post') {
        // console.log("更新前",config.data);
        config.data=qs.stringify(config.data);
        // console.log("更新后",config.data)
    }
    loading=ElLoading.service({
    lock:true,
    text:"别急",
        background:"transparent"
    // background:' rgba(0, 0, 0, 0.7)'
})
    config.headers.Authorization=window.sessionStorage.getItem('SESEIONID');
    return config;
},error=>{
    return Promise.reject(error);
})

instance.interceptors.response.use(res=>{
     setTimeout(() => {
        loading.close();
      }, 1000);
    // loading.close();
    return res;
},error=>{
    loading.close();
    return Promise.reject(error)
})

export {
   instance
};
