import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import('../views/Login.vue')

  },
  {
    path:'/home',
    name:'home',
    component:()=>import('../views/Home.vue'),
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        name:'welcome',
        component:()=>import('../components/Welcome.vue')
      },
      {
        path:'/userlist',
        name:'userlist',
        component:()=>import('../components/Userlist.vue')
      },
      {
        path:'/adduser',
        name:'adduser',
        component:()=>import('../components/Adduser.vue')
      },
        {
        path:'/ict',
        name:'ict',
        component:()=>import('../components/ICT.vue'),
              // redirect:'/2',
          children:[
              {
                path:'/1',
                name:'1',
                component:()=>import('../components/ictshow/1.vue')
              },
              {
                path:'/2',
                name:'2',
                component:()=>import('../components/ictshow/2.vue')
              },
          ]
      },
        {
        path:'/aboutme',
        name:'aboutme',
        component:()=>import('../components/Aboutme.vue')
      },
        {
        path:'/p5',
        name:'p5',
        component:()=>import('../components/P5.vue')
      },
        {
        path:'/p3',
        name:'p3',
        component:()=>import('../components/P3.vue')
      },

    ]
  }

]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), #路由模式
  history:createWebHashHistory(),
  routes
})

export default router
