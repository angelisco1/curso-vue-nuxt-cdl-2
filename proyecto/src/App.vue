<template>
<div class="div">
  <!-- <componentes></componentes> -->
  <!-- <directivas></directivas> -->
  <!-- <computed-watchers></computed-watchers> -->
  <propiedades></propiedades>
</div>
</template>

<script>
import Componentes from './components/componentes/Componentes';
import Directivas from './components/directivas/Directivas';
import ComputedWatchers from './components/computed-y-watchers/ComputedWatchers';
import Propiedades from './components/propiedades-y-eventos/Propiedades';

export default {
  components: {
    componentes: Componentes,
    directivas: Directivas,
    computedWatchers: ComputedWatchers,
    propiedades: Propiedades
  }
}
</script>
