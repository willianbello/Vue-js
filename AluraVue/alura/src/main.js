import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';

Vue.use(VueResourse);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

//quando os nomes são iguais, pode ser usado um deles somente
// routes:routes
const router = new VueRouter({ 
  routes,
  mode: 'history'
})

new Vue({
  //mesmo caso, pode ser usado somente um deles já que os nomes são iguais router,
  router,
  el: '#app',
  render: h => h(App)
})
