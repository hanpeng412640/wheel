import Vue from 'vue'
import Router from 'vue-router'
const Index  = ()=>import('../components/index');
const Detail  = ()=>import('../components/Detail');
const Color  = ()=>import('../components/Color');
const Img  = ()=>import('../components/Img');
const Type  = ()=>import('../components/Type');
const Quotation  = ()=>import('../components/Quotation');
const login  = ()=>import('../components/login');
Vue.use(Router)

let router= new Router({
  mode:'hash',
  routes: [
    {
       path:'*',
       redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/color',
      component: Color
    },
    {
      path: '/img',
      component: Img
    },
    {
      path: '/Type',
      component: Type
    },
    {
      path: '/quotation',
      component: Quotation
    },
      {
        path: '/login',
        component: login
      }
    
  ]
})


router.beforeEach((to, from ,next)=>{
  let login = window.localStorage.getItem('login');
  if (!login && to.path != '/login'){
      next('/login');
  }
  next();
})

router.afterEach((to, from)=>{
  console.log('路由跳转...');
})
export default router
