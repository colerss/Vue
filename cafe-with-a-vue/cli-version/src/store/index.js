import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurantName: 'Cafe with A Vue',
    simpleMenu: [
      {
        name: 'Crossiant',
        image: {
          source: '/images/crossiant.jpg',
          alt: 'A crossiant'
        },
        inStock: true,
        quantity: 1,
        price: 2.99
      },
      {
        name: 'French Baguette',
        image: {
          source: '/images/french-baguette.jpeg',
          alt: 'Four French Baguettes'
        },
        inStock: true,
        quantity: 1,
        price: 3.99
      },
      {
        name: 'Éclair',
        image: {
          source: '/images/eclair.jpg',
          alt: 'Chocolate Éclair'
        },
        inStock: false,
        quantity: 1,
        price: 4.99
      }
    ],
    shoppingCart: 0,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    copyright() {
      const currentYear = new Date().getFullYear()

      return `Copyright ${this.restaurantName} ${currentYear}`
  }}
})
