export const state = () => ({
  singleProduct: {},
})

export const mutations = {
  setSingleProduct: (state, singleProduct) => {
    state.singleProduct = singleProduct
  },
}

export const actions = {
  getSingleProduct: async ({ commit }, productId) => {
    const products = [
      {
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'Summer T-shirt',
        price: '$50',
        subCategory: 'Dress',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'Summer chert',
        price: '$20',
        subCategory: 'Dress',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'Summer pert',
        price: '$30',
        subCategory: 'Dress',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'pokh',
        price: '$90',
        subCategory: 'Dress',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'mehraen',
        price: '$0.005',
        subCategory: 'Suits',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'korosh',
        price: '$1',
        subCategory: 'Suits',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'arian',
        price: '$1',
        subCategory: 'Suits',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'gabral',
        price: '$200',
        subCategory: 'Suits',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'gubral',
        price: '$300',
        subCategory: 'Sneakers',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'gabrali',
        price: '$400',
        subCategory: 'Sneakers',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'stive',
        price: '$10',
        subCategory: 'Sneakers',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'tala',
        price: '$500',
        subCategory: 'Sneakers',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'mmd',
        price: '$3',
        subCategory: 'Socks',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'fartioush',
        price: '$1',
        subCategory: 'Socks',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'chalqorod',
        price: '$2',
        subCategory: 'Socks',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'tapale',
        price: '$5',
        subCategory: 'Socks',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'kazem',
        price: '$2',
        subCategory: 'lebas zir',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'kubrenetis',
        price: '$6',
        subCategory: 'lebas zir',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'gubralites',
        price: '$9',
        subCategory: 'lebas zir',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'kutlas',
        price: '$8',
        subCategory: 'lebas zir',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'sald',
        price: '$5',
        subCategory: 'jorab',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'sss',
        price: '$3',
        subCategory: 'manto',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'asdf',
        price: '$3',
        subCategory: 'rosari',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'sdafasd',
        price: '$0',
        subCategory: 'shalvar',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'asdfasdfsa',
        price: '$9',
        subCategory: 'lebas',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'asdflll',
        subCategory: 'kolah',
        price: '$7',
        isFav: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'ssd',
        price: '$2',
        subCategory: 'pirhan',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ]
    const res = products.filter((item) => {
      return item.title === productId
    })
    commit('setSingleProduct', res)
  },
}
