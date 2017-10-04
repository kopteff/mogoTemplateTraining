<template>
  <div id="app">
    <app-header></app-header>
    <app-about-us></app-about-us>
    <app-service-list></app-service-list>
    <app-design-template></app-design-template>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import aboutUs from './components/aboutUs.vue';
import serviceList from './components/serviceList.vue';
import designTemplate from './components/designTemplate.vue';


export default {
  components: {
    'app-header': Header,
    'app-about-us': aboutUs,
    'app-service-list': serviceList,
    'app-design-template': designTemplate
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
