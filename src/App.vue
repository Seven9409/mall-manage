<template>
  <div id="app">
      <transition name="fade"
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
      HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
</style>
