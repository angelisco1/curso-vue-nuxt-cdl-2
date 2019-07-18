import Vue from 'vue';

Vue.filter('year', (value) => {
  return value.getFullYear();
})

Vue.filter('uppercase', (value) => {
  if (!value) {
    return '';
  }
  return value.toUpperCase();
})