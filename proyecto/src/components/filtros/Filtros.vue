<template>
  <div>
    <h2>Filtros</h2>
    <p>Nombre: {{nombre}}</p>
    <p>Nombre: {{nombre | titlecase}}</p>
    <p>Nombre: {{nombre | titlecase | reverse}}</p>
    <p>Precio: {{precio | doble(2) | conSimbolo('€') }}</p>
    <p>Precio: {{precio | conSimbolo }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'ángel josé',
      precio: 3
    }
  },
  filters: {
    doble(value, suma) {
      let res = value * 2;
      if (suma) {
        res += suma;
      }
      return res;
    },
    titlecase(value) {
      // console.log(value);
      const palabras = value.split(' ');

      for (let pos in palabras) {
        palabras[pos] = palabras[pos][0].toUpperCase() + palabras[pos].substr(1, palabras[pos].length);
      }

      return palabras.join(' ');
    }
  }
}
</script>
