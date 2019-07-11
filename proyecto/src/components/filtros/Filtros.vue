<template>
  <div>
    <h2>Filtros</h2>
    <p>Nombre: {{nombre}}</p>
    <p>Nombre: {{nombre | titlecase}}</p>
    <p>Nombre: {{nombre | titlecase | reverse}}</p>
    <p>Precio: {{precio | doble(2) | conSimbolo('€') }}</p>
    <p>Precio: {{precio | conSimbolo }}</p>
    <p>{{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repudiandae quis nesciunt iure rerum est possimus mollitia inventore ut in labore aliquam laudantium aut, laboriosam suscipit veritatis vero, quae tempora?' | hide(['lorem', 'tempora'])}}</p>
    <p>{{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repudiandae quis nesciunt iure rerum est possimus mollitia inventore ut in labore aliquam laudantium aut, laboriosam suscipit veritatis vero, quae tempora?' | hide(['lorem', 'tempora'], '🤬')}}</p>

    <input type="text" placeholder="Nuevo item" @change="addItem($event.target.value)">
    <input type="text" placeholder="Filtro" @input="filtro = $event.target.value">
    <ul>
      <li v-for="item in itemsFiltrados" :key="item">{{item}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'ángel josé',
      precio: 3,
      items: [
        'Item 1',
        'Item 2'
      ],
      filtro: '1'
    }
  },
  computed: {
    itemsFiltrados() {
      return this.items.filter(item => item.includes(this.filtro));
    }
  },
  methods: {
    addItem(item) {
      this.items.push(item);
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
