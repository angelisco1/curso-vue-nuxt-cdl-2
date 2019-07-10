<template>
  <div>
    <div>
      <label for="texto1">Texto arriba:</label>
      <input type="text" id="texto1" name="texto1" :value="texto1" @input="cambiarMeme">
    </div>
    <div>
      <label for="texto2">Texto abajo:</label>
      <input type="text" id="texto2" name="texto2" :value="texto2" @input="cambiarMeme">
    </div>
    <div>
      <label for="imagen">Imagen:</label>
      <input type="text" id="imagen" name="imagen" :value="imagen" @input="cambiarMeme">
    </div>
    <div>
      <label for="color">Color:</label>
      <input type="color" id="color" name="color" :value="color" @change="cambiarMeme">
    </div>
  </div>
</template>

<script>
// import {EventBus} from '../../main';

export default {
  props: ['texto1', 'texto2', 'color', 'imagen'],
  // data() {
  //   return {
  //     texto1: '',
  //     texto2: '',
  //     color: '',
  //     imagen: ''
  //   }
  // },
  methods: {
    cambiarMeme(event) {
      this.$emit('cambiarMeme', [event.target.name, event.target.value]);
      // EventBus.avisarCambioMeme([event.target.name, event.target.value])
    }
  },
  // created() {
    // EventBus.$on('inicializarFormMeme', (datos) => {
    //   console.log(datos);
    //   this.texto1 = datos.texto1;
    //   this.texto2 = datos.texto2;
    //   this.color = datos.color;
    //   this.imagen = datos.imagen;
    // })
  // }
}
</script>
