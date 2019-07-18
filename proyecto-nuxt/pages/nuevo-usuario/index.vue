<template>
  <div>
    <titulo titulo="Nuevo usuario" />
    <p>{{msg}}</p>
    <button type="button" @click="guardar">Guardar</button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  methods: {
    guardar() {
      // this.$router.push('/usuarios')
      this.$router.push({name: 'usuarios'})
    }
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({msg: 'Mensaje'})
      }, 2000);
    })
      // .then(msg => {
      //   return {msg: msg}
      // });
  }
}
</script>
