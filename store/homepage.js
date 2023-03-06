export const state = () => ({
  homepage: {},
})

export const mutations = {
  setHomepage: (state, homepage) => {
    state.homepage = homepage
  },
}

export const actions = {
  getHomepage: async ({ commit }) => {
    // const res = this.$axios.get();

    try {
      const res = {}
      res.data = {
        homePageIntro: {
          first: 'Start shopping with confidence',
          second: 'asdlkfj lsadkfj safaklsdj aasdfl',
          third: 'alsdkjflskd sdlkajf salkdf jsdlaf',
        },
        homePageCategories: {
          title: 'Categories',
        },
        homePageNewProducts: {
          title: 'New products',
        },
      }

      commit('setHomepage', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
