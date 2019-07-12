<template>
  <div>
    <h3>Form 2/2</h3>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" :value="datos.password" ref="inputPass">
    </div>
  </div>
</template>

<script>
export default {
  props: ['datos'],
  beforeDestroy() {
    console.log('Pasa')
    const datos = {
      numStep: 2,
      form2: {
        password: this.$refs.inputPass.value
      }
    }
    this.$emit('form2cambiado', datos)
  }
}
</script>
