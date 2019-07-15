import Vue from 'vue';

Vue.filter('anyo', (fecha) => {
  return fecha.getFullYear();
});