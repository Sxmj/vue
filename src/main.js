//引入vue
import Vue from 'vue'
//引入APP

import App from './App.vue'
//引入router
import router from './router'
Vue.prototype.$bus=new Vue()
//引入mock.serve.js
import './veeValidate'
import './mock/mock.server.js'
//引入store状态管理仓库
// import store from './store'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource)
// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router, //注册路由器
  // store//注册store仓库
})