<template>
<div class="div">
  <!-- <componentes></componentes> -->
  <!-- <directivas></directivas> -->
  <!-- <computed-watchers></computed-watchers> -->
  <!-- <propiedades></propiedades> -->
  <generador-memes></generador-memes>
</div>
</template>

<script>
import Componentes from './components/componentes/Componentes';
import Directivas from './components/directivas/Directivas';
import ComputedWatchers from './components/computed-y-watchers/ComputedWatchers';
import Propiedades from './components/propiedades-y-eventos/Propiedades';
import Generador from './components/generador-memes/Generador';

export default {
  components: {
    componentes: Componentes,
    directivas: Directivas,
    computedWatchers: ComputedWatchers,
    propiedades: Propiedades,
    generadorMemes: Generador
  }
}
</script>
