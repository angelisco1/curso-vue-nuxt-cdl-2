<template>
  <nav>
    <ul>
      <li>
        <nuxt-link :to="{name: 'index'}">Inicio</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'nuevo-usuario'}">Nuevo usuario</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/usuarios">Usuarios</nuxt-link>
      </li>
      <li>
        <button type="button" @click="login">Login</button>
      </li>
      <li>
        <button type="button" @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    login() {
      console.log(this)
      this.$auth.setMiToken(Math.random())
    },
    logout() {
      this.$auth.deleteMiToken()
      this.$router.push('/');
    }
  }
}
</script>
