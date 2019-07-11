<template>
  <div>
    <h3>Nuevo Usuario</h3>
    <button type="button" @click="guardar">Guardar</button>
  </div>
</template>

<script>
export default {
  methods: {
    guardar() {
      console.log('Datos guardados!');
      // this.$router.push('/');
      this.$router.replace({name: 'inicio'});
    }
  }
}
</script>
