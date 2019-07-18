<template>
  <div class="con-flex">
    <div class="con-flex">
      <Meme class="meme" :texto1="texto1" :texto2="texto2" :color="color" :imagen="imagen" :showActions="false" />
      <Form class="form" :texto1="texto1" :texto2="texto2" :color="color" :imagen="imagen" @propCambiada="cambiarProp" />
    </div>
    <button class="btn btn-primary" type="button" @click="guardar">Guardar</button>
  </div>
</template>

<script>
import Form from '~/components/Form';
import Meme from '~/components/Meme';
import { mapActions } from 'vuex';

export default {
  components: {Form, Meme},
  data() {
    return {
      texto1: 'T1',
      texto2: 'T2',
      color: '#000000',
      imagen: 'https://i.imgflip.com/1bij.jpg'
    }
  },
  methods: {
    ...mapActions({guardarMeme: 'memes/guardarMeme'}),
    cambiarProp(event) {
      this[event.target.name] = event.target.value;
    },
    guardar() {
      const meme = {
        textoArriba: this.texto1,
        textoAbajo: this.texto2,
        color: this.color,
        imagenUrl: this.imagen,
      }
      this.guardarMeme(meme)
        .then(() => {
          return this.$swal.fire({
            type: 'success',
            text: 'Meme guardado correctamente 😃'
          })
        })
        .then(() => {
          this.$router.push('/lista-memes')
        });
    }
  }
}
</script>

<style scoped>
  div.con-flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .meme {
    width: 50%
  }

  .form {
    width: 40%;
  }
</style>
