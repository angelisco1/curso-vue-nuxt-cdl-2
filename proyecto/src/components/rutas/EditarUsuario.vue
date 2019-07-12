<template>
  <div>
    <h3>Editar usuario {{id}}</h3>
    <button type="button" @click="datosGuardados = !datosGuardados">Datos guardados: {{datosGuardados ? 'Si' : 'No'}}</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      datosGuardados: false
    }
  },
  beforeRouteLeave(to, from, next) {
    let salir = this.datosGuardados ? true : confirm('Seguro que quieres salir sin guardar los datos??');
    next(salir);
  }
}
</script>
