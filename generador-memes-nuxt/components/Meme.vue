<template>
  <div>
    <div>
      <p class="arriba" :style="{color: color}">{{texto1 | uppercase}}</p>
      <img :src="imagen" alt="Imagen del meme">
      <p class="abajo" :style="{color: color}">{{texto2 | uppercase}}</p>
    </div>
    <div class="actions" v-if="showActions">
      <button type="button" class="btn btn-success" @click="cambiarFavorito">Fav {{isFav ? '❤️' : '💔'}}</button>
      <button type="button" class="btn btn-danger" @click="eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      default: null
    },
    isFav: Boolean,
    texto1: String,
    texto2: String,
    color: String,
    imagen: String,
    showActions: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapActions({
      eliminarMeme: 'memes/eliminarMeme',
      cambiarFavMeme: 'memes/cambiarFavMeme'
    }),
    eliminar() {
      this.eliminarMeme(this.id)
        .then(() => {
          return this.$swal.fire({
            type: 'success',
            text: 'Meme eliminado correctamente 😃'
          })
        })
    },
    cambiarFavorito() {
      this.cambiarFavMeme({memeId: this.id, isFav: !this.isFav})
        .then(() => {
          const msg = this.isFav ? 'El Meme ya no es de los favoritos 😱' : 'El Meme ha sido marcado como uno de los favoritos 😎';
          return this.$swal.fire({
            type: 'success',
            text: msg
          })
        })
        .then(() => {
          this.$router.push('/memes-favoritos');
        })
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    margin: 0 auto;
  }

  img {
    width: 100%;
  }

  p {
    position: relative;
    font-size: 3vw;
    text-align: center;
  }

  p.arriba {
    top: 4vw;
  }

  p.abajo {
    bottom: 4vw;
  }

  div.actions {
    display: flex;
    justify-content: space-evenly;
    bottom: 7vw;
  }
</style>
