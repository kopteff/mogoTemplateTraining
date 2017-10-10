import Vue from 'vue'
import Vuex from 'vuex'

//import static images for error eluding
import imgGirl from '../assets/images/imgGirl.png';
import imgLaptop from '../assets/images/imgLaptop.png';
import imgTablet from '../assets/images/imgTablet.png';

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
      },
      blogs: [{heading: 'Lorem ipsum dolor sit amet', content: 'Consectetuer adipiscing elit. Aenean commodo ligula ' +
                        'eget dolor. Aenean massa.', date: {month: 'Jan', day: '15'}, views: 542, comments: 17, img: imgGirl},
              {heading: ' Donec pede justo, fringilla vel', content: 'Cum sociis natoque penatibus et magnis dis parturient ' +
              ' montes, nascetur ridiculus mus. ', date: {month: 'Jan', day: '14'}, views: 992, comments: 42, img: imgLaptop},
              {heading: 'Aenean vulputate eleifend tellus', content: 'Etiam sit amet orci eget eros faucibus tincidunt.',
               date: {month: 'Jan', day: '12'}, views: 1560, comments: 98, img: imgTablet}]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});
