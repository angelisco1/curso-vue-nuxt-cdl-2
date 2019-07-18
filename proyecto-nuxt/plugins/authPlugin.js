import Vue from 'vue';

const auth = new Vue({
  data() {
    return {
      miToken: ''
    }
  },
  methods: {
    setMiToken(val) {
      this.miToken = val;
    },
    deleteMiToken() {
      this.miToken = '';
    }
  }
})

export default (context, inject) => {
  inject('auth', auth)
}

// this.$auth.setMiToken(123)
// this.$auth.deleteMiToken()
// context.$auth.miToken