<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
