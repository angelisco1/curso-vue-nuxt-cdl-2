import Vue from 'vue';

Vue.filter('conSimbolo', (value, simbolo) => {
  console.log(value);
  return simbolo ? value+simbolo : value+'$';
})

Vue.filter('reverse', (value) => {
  return value.split('').reverse().join('');
})