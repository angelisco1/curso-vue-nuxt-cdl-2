<template>
  <div>
    <!-- <h2>Componentes asíncronos y dinámicos</h2>
    <button type="button" @click="mostrar = !mostrar">Cambiar mostrar</button>
    <cmp-perezoso v-if="mostrar"></cmp-perezoso> -->
    <multi-step-form></multi-step-form>
  </div>
</template>

<script>
import MultiStepForm from './MultiStepForm';

export default {
  components: {
    multiStepForm: MultiStepForm,
    cmpPerezoso: () => import('./CmpPerezoso')
  },
  data() {
    return {
      mostrar: false
    }
  }
}
</script>
