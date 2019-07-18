<template>
  <footer>
    <p>Creado por Ángel Villalba Fdez-Paniagua | {{new Date() | year}}</p>
  </footer>
</template>

<style scoped>
  footer {
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffca6a;
    /* text-align: center; */
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
