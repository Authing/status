import Vue from 'vue'
import Router from 'vue-router'
import Status from '../components/status'
import Header from '../components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'statusPage',
      component: Status
    }
  ]
})
