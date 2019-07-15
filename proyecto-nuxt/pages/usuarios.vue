<template>
  <div>
    <titulo titulo="Usuarios" />
    <nav>
      <ul>
        <li>
          <nuxt-link :to="{name: 'usuarios-id', params: {id: '3'}}">Usuario 3</nuxt-link>
          <!-- <nuxt-link to="/usuarios/3">Usuario 3</nuxt-link> -->
        </li>
        <li>
          <nuxt-link to="/usuarios/91">Usuario 91</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-child></nuxt-child>
  </div>
</template>