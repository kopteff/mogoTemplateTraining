import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import { store } from './store/store'

Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: Routes,
//   mode: 'history'
// });

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})
