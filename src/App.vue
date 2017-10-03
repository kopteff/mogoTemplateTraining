<template>
  <div id="app">
    <app-header></app-header>
    <app-about-us></app-about-us>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import aboutUs from './components/aboutUs.vue';

export default {
  components: {
    'app-header': Header,
    'app-about-us': aboutUs
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
html {
  font-size: 16px;
}
body, ul {
  margin: 0;
  padding: 0;
  list-style: none;
  color: white;
}
</style>
