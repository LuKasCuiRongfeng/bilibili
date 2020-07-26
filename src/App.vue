<template>
  <div id="app">
    <button @click="ajax">ajax</button>
    <app-nav/>
  </div>
</template>

<script>
import AppNav from './components/App_nav.vue'
export default {
  name: 'app',
  components: {
    "app-nav": AppNav
  },
  methods: {
    ajax() {
      const xhr = new XMLHttpRequest()
      xhr.open("get", "http://127.0.0.1:10000/gettest?id=1")
      xhr.send()
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let response = xhr.response
          alert(response)
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
a.router-link-exact-active {
  color: aqua;
}
</style>
