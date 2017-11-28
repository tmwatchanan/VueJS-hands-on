import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes'; // routes.js

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, // or just 'routes' in ES6
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // jump to the saved position, if it is set.  
      return savedPosition;
    }
    if (to.hash) {
      // jump to a selector, if there is one.
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 700
    }; // jump to the coordinate
  }
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})