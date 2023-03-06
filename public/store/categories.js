export const state = () => ({
  categories: [],
})

export const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories
  },
}

export const actions = {
  async getCategories({ commit }) {
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/categories',
      })
      console.log(res.data)
      commit('setCategories', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
