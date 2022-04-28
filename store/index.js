import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default ({
  state: {
    guest: true,
    user: {},
    token: ''
  },
  actions: {
    set_guest({ commit }, value) {
      commit('SET_GUEST', value)
    },
    set_token({ commit }, payload) {
      commit('SET_TOKEN', payload)
    }
  },
  mutations: {
    SET_GUEST(state, value) {
      state.guest = value
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    }
  },
  modules: {
  }
})
