import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
      path: '/top',
      name: 'top',
      // Dynamic importにより、初期描画の負荷を低減
      component() { 
        return import(/* webpackChunkName: "top" */ './views/Top.vue')
      }
    },
    {
      path: '/command',
      name: 'command',
      // Dynamic importにより、初期描画の負荷を低減
      component() { 
        return import(/* webpackChunkName: "command" */ './views/Command.vue')
      }
    },
  ]
})