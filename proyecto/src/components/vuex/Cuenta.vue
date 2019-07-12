<template>
  <div>
    <p>Clicks: {{numclicks}}</p>
    <p>Cuenta: {{cuenta}} (Sig: {{sigCuenta}})</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // computed: {
  //   cuenta() {
  //     // return this.$store.state.cuenta;
  //     return this.$store.getters.cuenta;
  //   }
  // }
  data() {
    return {
      numClicks: 0
    }
  },
  computed: {
    ...mapGetters({
      cuenta: 'cuenta',
      sigCuenta: 'nextCuenta'
    }),
    numclicks() {
      return this.numClicks + ' clicks!'
    }
  }
}
</script>
