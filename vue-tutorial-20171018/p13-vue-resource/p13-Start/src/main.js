import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
// Vue.http.options.root = 'https://bookmarker-vue.firebaseio.com/users.json';
Vue.http.options.root = 'https://bookmarker-vue.firebaseio.com/bookmarks.json';

// // intercepting POST requests and change them to PUT
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == 'POST') {
//     request.method = 'PUT';
//   }
//   next(response => { // this will intercept all reponses
//     console.log(response.body);
//     response.json = () => {
//       return {
//         messages: response.body
//       }
//     } // replace with an object with a key
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
})