<template>
  <div class="div">
    <!-- <componentes></componentes> -->
    <!-- <directivas></directivas> -->
    <!-- <computed-watchers></computed-watchers> -->
    <!-- <propiedades></propiedades> -->
    <!-- <generador-memes></generador-memes> -->
    <!-- <slots></slots> -->
    <!-- <filtros></filtros> -->
    <!-- <formulario></formulario> -->
    <!-- <modificadores></modificadores> -->
    <!-- <asincrono-dinamico></asincrono-dinamico> -->
    <rutas></rutas>
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
import Formulario from './components/formularios/Formulario';
import Modificadores from './components/modificadores/Modificadores';
import AsincronoDinamico from './components/asincronos-y-dinamicos/AsincronoDinamico';
import Rutas from './components/rutas/Rutas';

export default {
  components: {
    componentes: Componentes,
    directivas: Directivas,
    computedWatchers: ComputedWatchers,
    propiedades: Propiedades,
    generadorMemes: Generador,
    slots: Slots,
    filtros: Filtros,
    formulario: Formulario,
    modificadores: Modificadores,
    asincronoDinamico: AsincronoDinamico,
    rutas: Rutas,
  }
}
</script>
