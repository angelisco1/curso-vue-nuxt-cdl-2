<template>
  <div>
    <input type="number">
    <button type="button" @click="decrementar">-</button>
    <button type="button" @click="incrementar">+</button>
    <input type="number" @change="incrementarEnNum(Number($event.target.value))">
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    // incrementarEnNum(event) {
    //   const num = Number(event.target.value)
    //   this.$store.dispatch('incrementarEnNum', num)
    // },
    ...mapActions(['incrementar', 'decrementar', 'incrementarEnNum']),
    // ...mapMutations(['incrementar', 'decrementar']),
    // ...mapMutations({
    //   incrementar: 'incrementar',
    //   decrementar: 'decrementar'
    // }),
    // incrementar() {
    //   this.$store.commit('incrementar');
    // },
    // decrementar() {
    //   this.$store.commit('decrementar');
    // }
  }
}
</script>
