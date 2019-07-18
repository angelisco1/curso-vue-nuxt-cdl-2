<template>
  <div id="lista-memes">
    <Meme v-for="meme in memes" :key="meme.id" v-bind="meme" />
  </div>
</template>

<script>
import Meme from '~/components/Meme';
import { mapGetters } from 'vuex';

export default {
  components: {
    Meme
  },
  props: {
    memes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  div#lista-memes {
    width: 70%;
    margin: 0 auto;
    max-width: 600px;
  }
</style>
