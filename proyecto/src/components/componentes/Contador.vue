<template>
  <div @click="mostrarMsg('un DIV', $event)">
    <button type="button" v-on:click="decrementar"  @click="mostrarMsg('un BUTTON', $event)">-</button>
    <!-- <span
      v-bind:id="idSpan"
      :style="{color: (cuenta < 0 ? 'red' : 'green'), backgroundColor: 'blue'}"
      >Cuenta: {{cuenta}}</span> -->
    <span
      v-bind:id="idSpan"
      :class="{letraRoja: rojo, letraAzul: azul, letraVerde: verde}"
      >Cuenta: {{cuenta}}</span>
    <button type="button" @click="incrementar">+</button>
    <input type="text" :placeholder="cuenta" v-model="cuenta">

    <input type="text" @input="cambiarCuenta" :value="cuenta" >
    <a @click="irAGoogle" href="http://www.google.es">Ir a google</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cuenta: 0,
      idSpan: 'mi-cuenta',
      rojo: true,
      azul: false,
      verde: false
    }
  },
  methods: {
    cambiarCuenta(event) {
      this.cuenta = Number(event.target.value)
    },
    mostrarMsg(texto, event) {
      event.stopPropagation();
      // console.log('Has pulsado sobre ' + event.target.tagName);
      console.log('Has pulsado sobre ' + texto);
    },
    irAGoogle(event) {
      event.preventDefault();
      console.log('Realizamos la comprobacion antes de cambiar a la otra pagina');
      window.open(event.target.href, '_blank');
    },
    cambiarColorLetra() {
      if (this.cuenta > 0) {
        this.verde = true;
        this.rojo = false;
        this.azul = false;
      } else if (this.cuenta < 0) {
        this.verde = false;
        this.rojo = true;
        this.azul = false;
      } else {
        this.verde = false;
        this.rojo = false;
        this.azul = true;
      }
    },
    incrementar(event) {
      console.log(event);
      this.cuenta += 1
      this.cambiarColorLetra();
    },
    decrementar(event) {
      console.log(event);
      this.cuenta -= 1
      this.cambiarColorLetra();
    }
  }
}
</script>

<style scoped>
  .letraRoja {
    color: red;
  }
  .letraAzul {
    color: blue;
  }
  .letraVerde {
    color: green;
  }
</style>
