import Vue from 'vue'
import VeeValidate from 'vee-validate';
import Router from 'vue-router';
import App from './App.vue'
import Despedir from './components/componentes/Despedir';
import Inicio from './components/rutas/Inicio';
import NuevoUsuario from './components/rutas/NuevoUsuario';
import InfoUsuario from './components/rutas/InfoUsuario';
import EditarUsuario from './components/rutas/EditarUsuario';
import './filtros';

Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(Router);

const routesInicio = [
  { path: ':id/info', component: InfoUsuario },
  { path: ':id/editar', component: EditarUsuario }
];

const routes = [
  { path: '/usuarios', component: Inicio, name: 'inicio', children: routesInicio },
  { path: '/nuevo-usuario', component: NuevoUsuario, name: 'nuevo-usuario' },
  // { path: '/:id', component: InfoUsuario },
  { path: '/', redirect: '/usuarios' },
];

const router = new Router({
  routes: routes,
  mode: 'history'
})


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
  router: router,
  render: h => h(App)
}).$mount('#app');