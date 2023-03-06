export const state = () => ({
  singleUser: {},
})

export const mutations = {
  setSingleUser: (state, singleUser) => {
    state.singleUser = singleUser
  },
}

export const actions = {
  async getSingleUser({ commit }) {
    const token = localStorage.getItem('authToken')
    try {
      const res = await this.$axios.get('/user/me', {
        headers: { authorization: `Bearer ${token}` },
      })
      console.log(res.data)
      commit('setSingleUser', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
