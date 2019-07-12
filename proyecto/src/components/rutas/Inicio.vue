<template>
  <div>
    <h3>Inicio</h3>
    <p>Mis usuarios:</p>
    <ul>
      <li>
        Usuario 1
        <router-link :to="{ name: 'info-usuario', params: { id: 1 }, query: { noid: true } }">Información (noid)</router-link>
        <router-link :to="{ name: 'info-usuario', params: { id: 1 } }">Información</router-link>
        <router-link :to="{ name: 'editar-usuario', params: { id: 1 } }">Editar</router-link>
      </li>
      <li>
        Usuario 2
        <router-link :to="{ name: 'info-usuario', params: { id: 2 } }">Información</router-link>
        <router-link :to="{ name: 'editar-usuario', params: { id: 2 } }">Editar</router-link>
      </li>
      <li>
        Usuario 3
        <router-link :to="{ name: 'info-usuario', params: { id: 3 } }">Información</router-link>
        <router-link :to="{ name: 'editar-usuario', params: { id: 3 } }">Editar</router-link>
      </li>
      <!-- <router-link to="/1">Usuario 1</router-link>
      <router-link to="/2">Usuario 2</router-link>
      <router-link to="/3">Usuario 3</router-link> -->
    </ul>
    <router-view></router-view>
  </div>
</template>
