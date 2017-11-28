<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <add-bookmark/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AddBookmark from './components/AddBookmark'

export default {
  name: 'app',
  components: {
    HelloWorld,
    AddBookmark
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
