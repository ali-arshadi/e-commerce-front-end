export const state = () => ({
  admins: {},
})

export const mutations = {
  setAdmins: (state, admins) => {
    state.admins = admins
  },
}

export const actions = {
  async getAdmins({ commit }) {
    const token = localStorage.getItem('authToken')
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/admins',
        headers: { authorization: `Bearer ${token}` },
      })
      console.log(res.data)
      commit('setAdmins', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
