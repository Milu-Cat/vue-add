import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Main from '../pages/main'
Vue.use(Router)


// const router =[
//   {
//     path:'',
//     component: Main,
//     name: 'Main'
//   }
// ]

export default new Router({
  routes:[
    {
      path:'/',
      component: Login,
      name: 'Login'
    },
    {
      path:'/main',
      component: Main,
      name: 'Main'
    }
  ]
})
