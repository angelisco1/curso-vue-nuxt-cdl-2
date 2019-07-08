<template>
<div class="div">
  <!-- <componentes></componentes> -->
  <directivas></directivas>
</div>
</template>

<script>
import Componentes from './components/componentes/Componentes';
import Directivas from './components/directivas/Directivas';

export default {
  components: {
    componentes: Componentes,
    directivas: Directivas,
  }
}
</script>
