import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/global.css"
// import lazyPlugin from "vue3-lazy";

router.beforeEach=(to,from,next)=>{
}
// localeUse(lang)

createApp(App).use(store).use(router)
.mount('#app')
//.use(lazyPlugin,{error:require('@/assets/error1.png'),attempt:5})