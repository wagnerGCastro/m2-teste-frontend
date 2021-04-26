export const state = () => ({
  selected: {
    products: {
      internet: {},
      tel: {},
      tv: {}
    },
    totalCart: '0.00'
  },
  selectedLoading: true
})

export const mutations = {
  'setSelectProduct' (state, p) {
    state.selected.products[p.type] = p.item
  },
  'setSelectRemoveProduct' (state, p) {
    state.selected.products[p.type] = {}
  },
  'setSelectTotalCart' (state, total) {
    state.selected.totalCart = total
  },
  'setSelectedLoading' (state, load) {
    state.selectedLoading = load
  },
}

export const getters = {
  getSelected: state => state.selected,
  getSelectedLoading: state => state.selectedLoading,
}

export const actions = {
  actionSelectProduct({ commit }, payload) {
    commit('setSelectProduct', payload)
  },
  actionSelectRemoveProduct({ commit }, payload) {
    commit('setSelectRemoveProduct', payload)
  },
  actionSelectTotalCart({ commit }, payload) {
    commit('setSelectTotalCart', payload)
  },
  actionSelectedLoading({ commit }, payload) {
    commit('setSelectedLoading', payload)
  }
}
