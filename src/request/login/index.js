import {instance} from "../index"
 function dologin(data){
    return  instance({
        method:"post",
        url:"test/user/doLogin",
        // url:"lejuAdmin/index/login",
        data
    });
 }
 export{
    dologin
 }