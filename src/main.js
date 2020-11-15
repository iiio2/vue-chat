import Vue from 'vue'
import App from './App.vue'; 
import router from './router'; 
import VueChatScroll from "vue-chat-scroll"; 

Vue.use(VueChatScroll); 

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
