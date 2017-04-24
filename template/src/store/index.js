import Vue from 'vue'
import Vuex from 'vuex'
import VueRes from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueRes)
Vue.http.options.emulateJSON = true;

//
// ============= Состояние ============== //
const state = {
  hello: "Hello Uzu!!"
}


//
// ============= Геттеры ============== //
const getters = {}


//
// ============= Действия ============== //
const actions = {}


//
// ============= Мутации ============== //
const mutations = {}


const store = new Vuex.Store({
  state,
  modules: {},
  getters,
  actions,
  mutations
})

export default store;