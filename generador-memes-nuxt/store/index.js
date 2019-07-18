export const actions = {
  nuxtServerInit(context) {
    return this.$axios.$get('https://ejemplos-dc1c1.firebaseio.com/memes.json')
      .then((data) => {
        // console.log(data);
        const memes = [];
        for (let id in data) {
          const meme = data[id];
          memes.push({
            id: id,
            texto1: meme.textoArriba,
            texto2: meme.textoAbajo,
            color: meme.color || '#000000',
            isFav: meme.isFav,
            imagen: meme.imagenUrl
          });
        }
        // console.log(memes);
        return memes;
      })
      .then(memes => {
        context.commit('memes/initMemes', memes)
      })
  }
}