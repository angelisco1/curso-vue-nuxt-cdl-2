<template>
  <div>
    <h1>Página de administración</h1>
    <mi-nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    miNav: Nav,
  }
}
</script>