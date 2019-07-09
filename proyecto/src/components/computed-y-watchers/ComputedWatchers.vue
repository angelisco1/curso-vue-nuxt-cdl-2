<template>
  <div>
    <h2>Computed Props y Watchers</h2>
    <p>Nombre: {{nombre}}</p>
    <input type="text" v-model="nombre">
    <span>{{msg}}</span>

    <p>Precio: {{precioConSimbolo}}</p>
    <!-- <p>Precio: {{getPrecio()}}</p> -->

    <p>Precio: {{otroPrecioConSimbolo}}</p>
    <input type="text" v-model="otroPrecioConSimbolo">
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'OnePlus3',
      precio: 3,
      tipoMoneda: '€',
      msg: '...'
    }
  },
  methods: {
    // getPrecio() {
    //   console.log('Metodo');
    //   return this.precio + this.tipoMoneda;
    // }
  },
  computed: {
    precioConSimbolo() {
      console.log('Computed');
      return this.precio + this.tipoMoneda;
    },
    otroPrecioConSimbolo: {
      get() {
        return this.precio + this.tipoMoneda;
      },
      set(val) {
        // console.log(val)
        this.precio = val.substr(0, val.length-1);
        this.tipoMoneda = val.substr(-1, 1);
      }
    }
  },
  watch: {
    nombre(newVal, oldVal) {
      const productosGuardados = ['OnePlus3', 'iPhoneX', 'LG7', 'SamsungS10+'];
      setTimeout(() => {
        if (productosGuardados.includes(newVal)) {
          this.msg = 'Ese producto ya existe';
        } else {
          this.msg = 'Ese producto puedes guardarlo';
        }
      }, 500)
    }
  }
}
</script>
