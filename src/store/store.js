import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      navigation: ['about', 'service', 'work', 'blog', 'contact'],
      navigationBar: ['intro', 'work', 'about', 'contacts']
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});
