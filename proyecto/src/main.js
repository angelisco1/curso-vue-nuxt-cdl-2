import Vue from 'vue'
import App from './App.vue'
import Despedir from './components/componentes/Despedir';

Vue.config.productionTip = false


Vue.component('despedir', Despedir);

new Vue({
  // el: '#app',
  render: h => h(App)
}).$mount('#app');