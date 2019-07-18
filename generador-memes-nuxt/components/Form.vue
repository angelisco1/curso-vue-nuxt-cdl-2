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
export default {
  props: ['texto1', 'texto2', 'color', 'imagen'],
  methods: {
    cambiarMeme(event) {
      this.$emit('propCambiada', event);
    }
  },
}
</script>
