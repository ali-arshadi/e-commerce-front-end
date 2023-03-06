export const state = () => ({
  category: {},
  subCategories: [],
})

export const mutations = {
  setCategory: (state, category) => {
    state.category = category
  },
  setSubCategories: (state, subCategories) => {
    state.subCategories = subCategories
  },
}

export const actions = {
  getSubCategory: async ({ commit }, categoryId) => {
    const subCategories = [
      {
        image: {
          url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'Dress',
        category: 'Men',
      },
      {
        image: {
          url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'Suits',
        category: 'Men',
      },
      {
        image: {
          url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'Sneakers',
        category: 'Men',
      },
      {
        image: {
          url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'Socks',
        category: 'Men',
      },
      {
        image: {
          url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'lebas zir',
        category: 'Women',
      },
      {
        image: {
          url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'jorab',
        category: 'Women',
      },
      {
        image: {
          url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'manto',
        category: 'Women',
      },
      {
        image: {
          url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'rosari',
        category: 'Women',
      },
      {
        image: {
          url: '/3f81d737885523ad36664901be9c965f.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'shalvar',
        category: 'Kids',
      },
      {
        image: {
          url: '/3f81d737885523ad36664901be9c965f.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'lebas',
        category: 'Kids',
      },
      {
        image: {
          url: '/3f81d737885523ad36664901be9c965f.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'kolah',
        category: 'Kids',
      },
      {
        image: {
          url: '/3f81d737885523ad36664901be9c965f.jpg',
          alt: 'alskjdhlkf',
        },
        title: 'pirhan',
        category: 'Kids',
      },
    ]
    const result = subCategories.filter((item) => {
      return item.category === categoryId
    })
    commit('setSubCategories', result)
  },
  getCategory: async ({ commit }, categoryId) => {
    try {
      // const res = this.$axios.get(`/category/${categoryId}`);
      const data = {
        Men: {
          title: 'Men',
          description: 'lsadkfjsd',
        },
        Women: {
          title: 'Women',
          description: 'laskdfj',
        },
        Kids: {
          title: 'Kids',
          description: 'alskdfjsdf',
        },
      }

      const res = {}
      res.data = data[categoryId]

      commit('setCategory', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
