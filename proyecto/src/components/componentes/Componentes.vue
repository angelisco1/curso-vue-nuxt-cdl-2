<template>
  <div>
    <saludar></saludar>
    <despedir></despedir>
    <contador></contador>
  </div>
</template>

<script>
import Saludar from './Saludar';
import Contador from './Contador';

export default {
  components: {
    saludar: Saludar,
    contador: Contador
  }
}
</script>
