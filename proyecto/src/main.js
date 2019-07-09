import Vue from 'vue'
import App from './App.vue'
import Despedir from './components/componentes/Despedir';

Vue.config.productionTip = false


Vue.component('despedir', Despedir);
Vue.directive('blink', {
  bind: function(el, binding) {
    let colorMarcado = binding.value || 'yellow';
    let colorPorDefecto = 'white';

    let id = setInterval(() => {
      console.log('Pasa por la directiva global');
      el.style.backgroundColor = (el.style.backgroundColor === colorMarcado ? colorPorDefecto : colorMarcado);
    }, 300);

    el.dataset.intervalId = id;
  },
  unbind(el) {
    // console.log(el.dataset);
    clearInterval(el.dataset.intervalId);
  }
});

new Vue({
  // el: '#app',
  render: h => h(App)
}).$mount('#app');