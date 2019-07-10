<template>
  <div>
    <p class="arriba" :style="{color: color}">{{texto1}}</p>
    <img :src="imagen" alt="Imagen del meme">
    <p class="abajo" :style="{color: color}">{{texto2}}</p>
  </div>
</template>

<script>
// import {EventBus} from '../../main';

export default {
  props: ['texto1', 'texto2', 'color', 'imagen']
  // data() {
  //   return {
  //     texto1: 'Texto 1',
  //     texto2: 'Texto 2',
  //     imagen: 'https://i.imgflip.com/26am.jpg',
  //     color: '#ffffff'
  //   }
  // },
  // created() {
  //   EventBus.inicializarFormMeme(this.$data);
  //   EventBus.$on('cambiarMeme', (cambios) => {
  //     this[cambios[0]] = cambios[1];
  //   })
  // }
}
</script>

<style scoped>
  img {
    width: 200px;
  }
  p {
    position: relative;
    text-align: center;
  }
  p.arriba {
    top: 40px;
  }
  p.abajo {
    bottom: 40px;
  }
</style>
