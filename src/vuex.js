import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    decrement: (state) => state.counter -= 10,
    increment: (state, [p1, p2]) => state.counter += p1 * p2,
  },
  getters: {
    counter: (state) => state.counter,
  },
  actions: {
    decrement: ({ commit }) => commit('decrement'),
    increment: ({ commit }) => commit('increment', [3, 2])
  }
});

export { store };