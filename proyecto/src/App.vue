<template>
<div class="div">
  <!-- <componentes></componentes> -->
  <!-- <directivas></directivas> -->
  <!-- <computed-watchers></computed-watchers> -->
  <!-- <propiedades></propiedades> -->
  <!-- <generador-memes></generador-memes> -->
  <!-- <slots></slots> -->
  <filtros></filtros>
</div>
</template>

<script>
import Componentes from './components/componentes/Componentes';
import Directivas from './components/directivas/Directivas';
import ComputedWatchers from './components/computed-y-watchers/ComputedWatchers';
import Propiedades from './components/propiedades-y-eventos/Propiedades';
import Generador from './components/generador-memes/Generador';
import Slots from './components/slots/Slots';
import Filtros from './components/filtros/Filtros';

export default {
  components: {
    componentes: Componentes,
    directivas: Directivas,
    computedWatchers: ComputedWatchers,
    propiedades: Propiedades,
    generadorMemes: Generador,
    slots: Slots,
    filtros: Filtros
  }
}
</script>
