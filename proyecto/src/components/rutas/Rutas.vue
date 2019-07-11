<template>
  <div>
    <h2>Rutas</h2>
    <ul>
      <li>
        <router-link :to="{name: 'inicio'}">Inicio</router-link>
      </li>
      <li>
        <router-link to="'/nuevo-usuario'">Nuevo usuario</router-link>
        <!-- <router-link :to="{name: 'nuevo-usuario'}">Nuevo usuario</router-link> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>
