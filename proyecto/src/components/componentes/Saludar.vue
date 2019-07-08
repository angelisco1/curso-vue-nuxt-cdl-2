<template>
  <div>
    <p>Hola {{nombre}}</p>
    <despedir v-if="pintarDespedir"></despedir>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Ángel',
      pintarDespedir: false
    }
  }
}
</script>

<style scoped>
  p {
    color: blue;
  }
</style>
