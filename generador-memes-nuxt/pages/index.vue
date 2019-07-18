<template>
  <div>
    <p>Empieza a generar tus propios memes de una forma rápida y sencilla. Serás la envidia de tus amigos.</p>
    <p>Podrás almacenarlos para poder acceder en un futuro a ellos.</p>
    <p>Incluso podrás marcar como favoritos aquellos que más te gusten para acceder a ellos de una forma mucho más rápida.</p>
    <button type="button" class="btn btn-primary" @click="irAGenerador">Crea tus memes</button>
  </div>
</template>

<script>
export default {
  methods: {
    irAGenerador() {
      this.$router.push('/generador');
    }
  }
}
</script>


<style scoped>
  div {
    width: 60%;
    height: 55vh;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  p {
    text-align: justify;
    font-size: 25px;
    /* margin: 30px; */
    width: 100%;
  }
</style>
