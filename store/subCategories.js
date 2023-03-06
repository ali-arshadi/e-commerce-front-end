export const state = () => ({
  subCategories: [],
})

export const mutations = {
  setSubCategories: (state, subCategories) => {
    state.subCategories = subCategories
  },
}

export const actions = {
  async getSubCategories({ commit }) {
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/subcategory',
      })
      console.log(res.data)
      commit('setSubCategories', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
