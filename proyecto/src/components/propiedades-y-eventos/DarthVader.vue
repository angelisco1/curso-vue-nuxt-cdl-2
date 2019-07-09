<template>
  <div>
    <h3>CMP Darth Vader</h3>
    <leia :miNombre="nombreLeia"></leia>
    <luke :miNombre="nombreLuke" @nombreLukeCambiado="cambiarNombreLuke"></luke>
  </div>
</template>

<script>
import Leia from './Leia';
import Luke from './Luke';

export default {
  components: {
    leia: Leia,
    luke: Luke
  },
  data() {
    return {
      nombreLeia: 'Leia',
      nombreLuke: 'Luke'
    }
  },
  methods: {
    cambiarNombreLuke(event) {
      this.nombreLuke = event;
    }
  }
}
</script>
