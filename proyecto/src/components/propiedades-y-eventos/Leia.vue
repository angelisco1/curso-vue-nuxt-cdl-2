<template>
<div>
  <h3>CMP Leia</h3>
  <p>Me llamo: {{miNombre}}</p>
  <input type="text" :value="miNombre" @change="avisarCambio($event.target.value)">
  <p>Mi hermano es: {{nombreHermano}}</p>
</div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  props: ['miNombre', 'nombreHermano'],
  methods: {
    avisarCambio(nuevoNombre) {
      console.log(nuevoNombre);
      EventBus.avisarCambioNombre('nombreLeiaCambiado', nuevoNombre);
    }
  }
}
</script>
