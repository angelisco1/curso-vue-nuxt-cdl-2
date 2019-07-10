<template>
  <div class="contenedor">
    <form-meme :color="color" :imagen="imagen" :texto1="texto1" :texto2="texto2" @cambiarMeme="actualizarDatosMeme"></form-meme>
    <meme :color="color" :imagen="imagen" :texto1="texto1" :texto2="texto2"></meme>
  </div>
</template>

<script>
import Meme from './Meme';
import Form from './Form';

export default {
  components: {
    meme: Meme,
    formMeme: Form
  },
  data() {
    return {
      texto1: 'Texto 1',
      texto2: 'Texto 2',
      imagen: 'https://i.imgflip.com/26am.jpg',
      color: '#ffffff'
    }
  },
  methods: {
    actualizarDatosMeme(cambios) {
      this[cambios[0]] = cambios[1];
    }
  }
}
</script>

<style scoped>
  div.contenedor {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
