import Vue from 'vue';
import Vuex from 'vuex';
import contador from './modules/contador';

Vue.use(Vuex);

const store = new Vuex.Store({
  // state: {
  //   cuenta: 0
  // },
  // getters: {
  //   cuenta(state) {
  //     return state.cuenta;
  //   },
  //   nextCuenta(state) {
  //     return state.cuenta + 1;
  //   },
  // },
  // mutations: {
  //   incrementar(state, payload) {
  //     state.cuenta += payload
  //   },
  //   decrementar(state) {
  //     state.cuenta -= 1
  //   },
  // },
  // actions: {
  //   incrementar(context) {
  //     setTimeout(() => {
  //       context.commit('incrementar', 1)
  //     }, 3000)
  //   },
  //   decrementar(context) {
  //     context.commit('decrementar', 1)
  //   },
  //   incrementarEnNum(context, payload) {
  //     context.commit('incrementar', payload)
  //   }
  // }
  modules: [
    contador
  ]
})

export default store;