export const actions = {
  nuxtServerInit(context) {
    console.log(process.env.URL_AXIOS);
    console.log('PASA POR NUXTSERVERINIT')
    return this.$axios.$get('users')
      .then(usuarios => {
        return {
          usuarios: usuarios
        };
      })
      .then(datos => {
        context.commit('usuarios/initUsuarios', datos.usuarios);
        Promise.resolve();
      })
      .catch(err => {
        console.log('ERROR: ', err.message)
        context.error(err);
      });
    // return fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(resp => resp.json())
    //   .then(usuarios => {
    //     return {
    //       usuarios: usuarios
    //     };
    //   })
    //   .then(datos => {
    //     context.commit('usuarios/initUsuarios', datos.usuarios);
    //     Promise.resolve();
    //   })
    //   .catch(err => {
    //     console.log('ERROR: ', err.message)
    //     context.error(err);
    //   });
  }
}