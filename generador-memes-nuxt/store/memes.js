const state = () => {
  return {
    memes: []
  }
}

const getters = {
  memes(state) {
    return state.memes;
  },
  memesFav(state) {
    return state.memes.filter(m => m.isFav);
  }
}

const mutations = {
  initMemes(state, memes) {
    state.memes = memes;
  },
  guardarMeme(state, meme) {
    state.memes = [...state.memes, meme];
  },
  eliminarMeme(state, memeId) {
    state.memes = state.memes.filter(m => m.id !== memeId);
  },
  cambiarFavMeme(state, memeId) {
    const pos = state.memes.findIndex(m => m.id === memeId);
    const memeACambiar = state.memes[pos];
    const memeCambiado = {...memeACambiar, isFav: !memeACambiar.isFav}
    state.memes.splice(pos, 1, memeCambiado);
    // state.memes = state.memes.filter(m => m.id !== memeId);
  }
}

const actions = {
  guardarMeme(context, meme) {
    return this.$axios.$post('https://ejemplos-dc1c1.firebaseio.com/memes.json', JSON.stringify(meme))
      .then(resp => {
        context.commit('guardarMeme', {
          texto1: meme.textoArriba,
          texto2: meme.texto2,
          color: meme.color,
          imagen: meme.imagenUrl,
          isFav: false,
          id: resp.name
        })
      })
  },
  eliminarMeme(context, memeId) {
    return this.$axios.$delete(`https://ejemplos-dc1c1.firebaseio.com/memes/${memeId}.json`)
      .then(() => {
        context.commit('eliminarMeme', memeId);
      })
  },
  cambiarFavMeme(context, {memeId, isFav}) {
    return this.$axios.$put(`https://ejemplos-dc1c1.firebaseio.com/memes/${memeId}/isFav.json`, isFav)
      .then(() => {
        context.commit('cambiarFavMeme', memeId);
      })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}