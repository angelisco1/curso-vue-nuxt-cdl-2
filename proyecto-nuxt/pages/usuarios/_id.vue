<template>
  <div>
    <titulo :titulo="tituloPagina" />
    <p>Nombre: {{usuario.name}}</p>
    <p>{{new Date() | anyo}}</p>
  </div>
</template>

<script>
export default {
  validate(context) {
    // console.log(context.params.id.match(/^\d+$/))
    return context.params.id.match(/^\d+$/);

    // return axios.get('firebase.com/usuarios/3.json')
    //   .then(resp => {
    //     if (resp.status === 200) {
    //       return resp.data.usuario !== null;
    //     }
    //   })
  },
  computed: {
    tituloPagina() {
      return 'Usuario ' + this.$route.params.id;
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log('Pasa')
  //   if (process.server) {
  //     next(true);
  //   } else {
  //     next(confirm('Estas logueado??'));
  //   }
  // },
  asyncData(context) {
    // console.log(context.params)
    return fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
      .then(resp => resp.json())
      .then(usuario => {
        return {
          usuario: usuario
        }
      })
  },
  middleware: 'log',
  head() {
    return {
      title: 'Usuario 2'
    }
  }
}
</script>
