export const state = () => ({
  singleAdmin: {},
})

export const mutations = {
  setSingleAdmin: (state, singleAdmin) => {
    state.singleAdmin = singleAdmin
  },
}

export const actions = {
  async getSingleAdmin({ commit }) {
    const token = localStorage.getItem('authToken')
    try {
      const res = await this.$axios.get('/admin/me', {
        headers: { authorization: `Bearer ${token}` },
      })
      console.log(res.data)
      commit('setSingleAdmin', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
