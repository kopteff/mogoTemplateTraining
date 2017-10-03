import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      navigation: ['about', 'service', 'work', 'blog', 'contact'],
      navigationBar: ['intro', 'work', 'about', 'contacts'],
      headings: {
        what: 'What we do',
        with: 'We work with',
        for: 'For all devices',
        service: 'Service',
        who: 'Who we are',
        clients: 'Happy Clients',
        stories: 'Our stories'
      }
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});
