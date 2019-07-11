<template>
  <div>
    <h2>Modificadores</h2>
    <input type="text" @keyup.enter="mostrarMsg('Has pulsado INTRO')" @keyup.a="mostrarMsg('Has pulsado la a')" @keyup.down.left.right.up="mostrarMsg('Has pulsado '+$event.code)">
    <input type="number" v-model.number="numero" @blur="mostrarMsg()">
    <input type="text" v-model.trim.lazy="texto" @blur="mostrarMsg(texto)">
    <p>{{texto}}</p>x
    <input type="email" @v-model.native="texto">
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: 0,
      texto: ''
    }
  },
  methods: {
    mostrarMsg(val) {
      if (val) {
        console.log(val);
      } else {
        console.log(this.numero, typeof(this.numero))
      }
    }
  }
}
</script>