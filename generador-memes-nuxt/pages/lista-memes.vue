<template>
  <section class="lista-memes">
    <ListaMemes :memes="memes" />
  </section>
</template>

<script>
import ListaMemes from '~/components/ListaMemes';
import { mapGetters } from 'vuex';

export default {
  components: {
    ListaMemes
  },
  computed: {
    ...mapGetters({
      memes: 'memes/memes'
    })
  }
}
</script>
