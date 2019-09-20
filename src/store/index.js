
//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from "vuex"

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
//生命使用vuex
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})