<template>
  <div id="app">
    <h1>Hello App.vue</h1>
    <button @click="increase">Increase value</button>
    <p>{{ value }}</p>
    <hr>
    <app-hello></app-hello>
  </div>
</template>

<script>

import Hello from './components/Hello.vue';

export default {
  name: 'app',
  data: function() {
    return {
      title: 'Title1',
      value: 0
    }
  },
  methods: {
    increase: function() {
      this.value++;
    }
  },
  components: {
    'app-hello': Hello
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
