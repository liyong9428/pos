import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 引入getters、mutations、actions模块
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

//定义state
const state = {
   tableData: [],
   oftenGoods: [],
   typeGoods: [],
   totalCount: 0,
   totalPrice: 0
}

// 实例化store
export default new Vuex.Store({
   state,
   getters,
   mutations,
   actions
})
