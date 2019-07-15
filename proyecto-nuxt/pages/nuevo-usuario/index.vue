<template>
  <div>
    <titulo titulo="Nuevo usuario" />
    <button type="button" @click="guardar">Guardar</button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  methods: {
    guardar() {
      // this.$router.push('/usuarios')
      this.$router.push({name: 'usuarios'})
    }
  }
}
</script>
