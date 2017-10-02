<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    'app-header': Header
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
