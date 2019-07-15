<template>
  <div>
    <titulo :titulo="tituloPagina" />
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
  beforeRouteEnter(to, from, next) {
    console.log('Pasa')
    if (process.server) {
      next(true);
    } else {
      next(confirm('Estas logueado??'));
    }
  }
}
</script>
