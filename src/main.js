import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/styles.css'


// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
