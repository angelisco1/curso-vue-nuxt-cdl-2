<template>
  <div>
    <titulo titulo="Usuarios" />
    <nav>
      <ul>
        <!-- <li> -->
          <!-- <nuxt-link :to="{name: 'usuarios-id', params: {id: '3'}}">Usuario 3</nuxt-link> -->
          <!-- <nuxt-link to="/usuarios/3">Usuario 3</nuxt-link> -->
        <!-- </li> -->
        <!-- <li>
          <nuxt-link to="/usuarios/91">Usuario 91</nuxt-link>
        </li> -->
        <li v-for="usuario in usuarios" :key="usuario.id">
          <nuxt-link :to="{name: 'usuarios-id', params: { id: usuario.id+'' }}">{{usuario.name}}</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     usuarios: []
  //   }
  // },
  // asyncData(context) {
  //   return fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(resp => resp.json())
  //     .then(usuarios => {
  //       return {
  //         usuarios: usuarios
  //       };
  //     })
  //     .catch(err => {
  //       console.log('ERROR: ', err.message)
  //       context.error(err);
  //     });
  // },
  computed: {
    ...mapGetters({
      usuarios: 'usuarios/usuarios'
    })
  },
  // fetch(context) {
  //   return fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(resp => resp.json())
  //     .then(usuarios => {
  //       return {
  //         usuarios: usuarios
  //       };
  //     })
  //     .then(datos => {
  //       context.store.commit('usuarios/initUsuarios', datos.usuarios);
  //     })
  //     .catch(err => {
  //       console.log('ERROR: ', err.message)
  //       context.error(err);
  //     });
  // },
  // created() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(resp => resp.json())
  //     .then(usuarios => this.usuarios = usuarios);
  // }
}
</script>
