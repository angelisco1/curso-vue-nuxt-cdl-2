<template>
<div>
  <h3>CMP Leia</h3>
  <p>Me llamo: {{miNombre}}</p>
  <input type="text" :value="miNombre" @change="avisarCambio($event.target.value)">
</div>
</template>

<script>
export default {
  props: ['miNombre'],
  methods: {
    avisarCambio(nuevoNombre) {
      console.log(nuevoNombre);
    }
  }
}
</script>
