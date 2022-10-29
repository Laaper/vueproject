import {instance} from "../index"
function doadd(data){
    return  instance({
        method:"post",
        url:"test/user/save",
        data
    });
 }
 export {
    doadd,
 }