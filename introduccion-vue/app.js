const miCmpHola = {
  data: function() {
    return {
      nombre: 'Angel'
    }
  },
  methods: {
    cambiarNombre() {
      this.nombre = 'Pedro';
    }
  },
  template: `
    <h1 v-on:click="cambiarNombre">Hola {{nombre}}</h1>
  `
}
const miCmpAdios = {
  data: function() {
    return {
      nombre: 'Angel'
    }
  },
  template: `
    <h1>Adios {{nombre}}</h1>
  `
}

new Vue({
  el: '#ejemplo1',
  components: {
    'mi-cmp-hola': miCmpHola,
    'mi-cmp-adios': miCmpAdios
  }
});