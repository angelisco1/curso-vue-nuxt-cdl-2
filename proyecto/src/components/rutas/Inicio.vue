<template>
  <div>
    <h3>Inicio</h3>
    <p>Mis usuarios:</p>
    <ul>
      <li>
        Usuario 1
        <router-link to="/usuarios/1/info">Información</router-link>
        <router-link to="/usuarios/1/editar">Editar</router-link>
      </li>
      <li>
        Usuario 2
        <router-link to="/usuarios/2/info">Información</router-link>
        <router-link to="/usuarios/2/editar">Editar</router-link>
      </li>
      <li>
        Usuario 3
        <router-link to="/usuarios/3/info">Información</router-link>
        <router-link to="/usuarios/3/editar">Editar</router-link>
      </li>
      <!-- <router-link to="/1">Usuario 1</router-link>
      <router-link to="/2">Usuario 2</router-link>
      <router-link to="/3">Usuario 3</router-link> -->
    </ul>
    <router-view></router-view>
  </div>
</template>
