<template>
  <div>
    <!-- <h3>Info usuario {{$route.params.id}}</h3> -->
    <!-- <h3>Info usuario {{id}}</h3> -->
    <h3>Info usuario {{miId}}</h3>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    miId() {
      return this.$route.query.noid ? '****' : this.id;
    }
  },
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   '$route'() {
  //     this.id = this.$route.params.id;
  //   }
  // }
  beforeRouteEnter(to, from, next) {
    let logueado = confirm('Estas logueado??');
    next(logueado);
  },
  beforeRouteUpdate(to, from, next) {
    let logueado = true;
    if (to.params.id !== from.params.id) {
      logueado = confirm('Estas logueado??');
    }
    next(logueado);
  }
}
</script>
