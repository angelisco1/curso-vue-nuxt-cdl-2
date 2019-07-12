<template>
  <div>
    <h3>Form 1/2</h3>
    <div>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" :value="datos.nombre" ref="inputNombre">
    </div>
  </div>
</template>

<script>
export default {
  props: ['datos'],
  beforeDestroy() {
    const datos = {
      numStep: 1,
      form1: {
        nombre: this.$refs.inputNombre.value
      }
    }
    this.$emit('form1cambiado', datos)
  }
}
</script>
