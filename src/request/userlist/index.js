import {instance} from "../index"
 function dolist(data){
    return  instance({
        method:"post",
        url:"test/user/list",
        // url:"test/user/list?id="+tt;有的请求需要拼接
        data
    });
 }

 function dodel(data){
    return  instance({
        method:"get",
        url:"test/user/del",
        data
    });
 }

 function doupdate(data){
    return  instance({
        method:"post",
        url:"test/user/updateUserInfo",
        data
    });
 }

export{
    dolist,
    dodel,
    doupdate

 }