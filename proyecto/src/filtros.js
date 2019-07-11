import Vue from 'vue';

Vue.filter('conSimbolo', (value, simbolo) => {
  // console.log(value);
  return simbolo ? value+simbolo : value+'$';
})

Vue.filter('reverse', (value) => {
  return value.split('').reverse().join('');
})

Vue.filter('hide', (value, palabras, sustituto) => {
  let res = value;

  for (let palabra of palabras) {
    let reg = new RegExp(palabra, 'gi');
    res = res.replace(reg, (sustituto || '*').repeat(palabra.length));
  }

  return res;
})