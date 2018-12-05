import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/login/index'
import Main from '../pages/main/index'
import liushui from '../pages/ls/liushui'
import zhangdan from '../pages/zd/zhangdan'
import mine from '../pages/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/mainpage',
      name: 'Main',
      component: Main
    },
    {
      path: '/liushui',
      name: 'liushui',
      component: liushui
    },
    {
      path: '/zhangdan',
      name: 'zhangdan',
      component: zhangdan
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
