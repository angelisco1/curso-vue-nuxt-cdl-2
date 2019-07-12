import Vue from 'vue'
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import App from './App.vue'
import Despedir from './components/componentes/Despedir';
import './filtros';

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cuenta: 0
  },
  getters: {
    cuenta(state) {
      return state.cuenta;
    },
    nextCuenta(state) {
      return state.cuenta + 1;
    }
  },
  mutations: {
    incrementar(state, payload) {
      state.cuenta += payload
    },
    decrementar(state) {
      state.cuenta -= 1
    },
  },
  actions: {
    incrementar(context) {
      setTimeout(() => {
        context.commit('incrementar', 1)
      }, 3000)
    },
    decrementar(context) {
      context.commit('decrementar', 1)
    },
    incrementarEnNum(context, payload) {
      context.commit('incrementar', payload)
    }
  }
})

Vue.use(VeeValidate);

export const EventBus = new Vue({
  methods: {
    avisarCambioNombre(nombreEvento, nuevoNombre) {
      this.$emit(nombreEvento, nuevoNombre);
    },
    inicializarFormMeme(datosForm) {
      console.log('Pasa por el main')
      this.$emit('inicializarFormMeme', datosForm)
    },
    avisarCambioMeme(cambios) {
      this.$emit('cambiarMeme', cambios);
    }
  }
})


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
  // router: router,
  store: store,
  render: h => h(App)
}).$mount('#app');