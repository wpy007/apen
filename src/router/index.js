import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import HelloWorld from '@/components/HelloWorld'
import Caculator from '@/views/Caculator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/Caculator',
      name: 'Caculator',
      component: Caculator,
    },
    {
      path: '/',
      redirect: '/Login',
    },
  ],
})
