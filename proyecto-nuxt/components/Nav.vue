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
    </ul>
  </nav>
</template>
