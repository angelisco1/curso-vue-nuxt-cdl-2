<template>
<div>
  <h2>Directivas</h2>
  <p v-text="parrafo"></p>
  <p>{{parrafo}}</p>
  <div v-html="noticia"></div>

  <button type="button" @click="cambiarMostrar">Cambiar mostrar</button>
  <div v-if="mostrar">Se muestra el div</div>
  <div v-else>Se muestra el otro div</div>

  <p v-if="mascota === 'gato'">Tengo un gato</p>
  <p v-else-if="mascota === 'perro'">Tengo un perro</p>
  <p v-else>Tengo otro animal</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      mascota: 'pez',
      parrafo: 'Un párrafo...',
      noticia: '<h3>Una noticia</h3><br><p>Un párrafo muy <b>importante</b></p>',
      mostrar: true,
    }
  },
  methods: {
    cambiarMostrar() {
      this.mostrar = !this.mostrar;
    }
  }
}
</script>
