<template>
  <header>
    <h1>Mis Mms</h1>
    <Nav />
  </header>
</template>

<script>
import Nav from '~/components/Nav';

export default {
  components: {
    Nav
  }
}
</script>

<style scoped>
  header {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 0 40px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  header > h1 {
    color: #ffca6a;
  }
</style>
