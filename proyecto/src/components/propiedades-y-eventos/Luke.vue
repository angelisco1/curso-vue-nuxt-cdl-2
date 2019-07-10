<template>
<div>
  <h3>CMP Luke</h3>
  <p>Me llamo: {{miNombre}}</p>
  <input type="text" :value="miNombre" @change="avisarCambio($event.target.value)">
  <p>Mi hermana es: {{nombreHermana}}</p>
</div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  props: ['miNombre'],
  data() {
    return {
      nombreHermana: 'Leia'
    }
  },
  methods: {
    avisarCambio(nuevoNombre) {
      console.log(nuevoNombre);
      // this.miNombre = nuevoNombre;
      this.$emit('nombreLukeCambiado', nuevoNombre);
    }
  },
  created() {
    EventBus.$on('nombreLeiaCambiado', (event) => {
      this.nombreHermana = event;
    })
  },
  beforeDestroy() {
    EventBus.$off('nombreLeiaCambiado');
  }
}
</script>
