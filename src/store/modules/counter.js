
export default {
  namespaced: true,
  state: {
    num: 0
  },
  actions: {
    add({ commit }, data) {
      commit('updateNum', data);
    },
    reduce({ commit }, data) {
      commit('updateNum', data);
    },
  },
  mutations: {
    updateNum(state, data) {
      state.num += data;
    }
  }
}
