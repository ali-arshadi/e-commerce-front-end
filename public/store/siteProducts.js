export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },
}

export const actions = {
  async getProducts({ commit }) {
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/products',
      })
      console.log(res.data)
      commit('setProducts', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
