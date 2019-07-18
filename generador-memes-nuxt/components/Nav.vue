<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">Inicio</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/generador">Generar meme</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/lista-memes">Todos los memes</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/memes-favoritos">Memes favoritos</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav > ul > li {
    list-style: none;
    display: inline;
    margin: 0 10px;
  }

  nav > ul > li > a {
    padding: 15px;
    text-decoration: none;
    font-size: 20px;
    color: #ffca6a;
  }

  nav > ul > li > a:hover {
    background-color: #ffca6a;
    color: rgba(0, 0, 0, 0.6);
  }

  nav > ul > li > a.nuxt-link-exact-active {
    border: 1px solid #ffca6a;
  }
</style>
