<template>
  <div>
    <h2>Componentes asíncronos y dinámicos</h2>
    <button type="button" @click="mostrar = !mostrar">Cambiar mostrar</button>
    <cmp-perezoso v-if="mostrar"></cmp-perezoso>
  </div>
</template>

<script>
export default {
  components: {
    cmpPerezoso: () => import('./CmpPerezoso')
  },
  data() {
    return {
      mostrar: false
    }
  }
}
</script>
