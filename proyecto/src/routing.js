import Vue from 'vue'
import Router from 'vue-router';
import Inicio from './components/rutas/Inicio';
import NuevoUsuario from './components/rutas/NuevoUsuario';
import InfoUsuario from './components/rutas/InfoUsuario';
import EditarUsuario from './components/rutas/EditarUsuario';
import Error from './components/rutas/Error';

Vue.use(Router);

const routesInicio = [
  { path: ':id/info', component: InfoUsuario, props: true, name: 'info-usuario' },
  { path: ':id/editar', component: EditarUsuario, props: true, name: 'editar-usuario' }
];

const routes = [
  { path: '/usuarios', component: Inicio, name: 'inicio', children: routesInicio },
  { path: '/nuevo-usuario', component: NuevoUsuario, name: 'nuevo-usuario' },
  // { path: '/:id', component: InfoUsuario },
  { path: '/', redirect: '/usuarios' },
  { path: '*', component: Error }
];

export default new Router({
  routes: routes,
  mode: 'history'
})