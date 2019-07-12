<template>
  <div>
    <h2>Vuex</h2>
    <cuenta></cuenta>
    <botones></botones>
  </div>
</template>

<script>
import Cuenta from './Cuenta';
import Botones from './Botones';

export default {
  components: {
    cuenta: Cuenta,
    botones: Botones
  }
}
</script>
