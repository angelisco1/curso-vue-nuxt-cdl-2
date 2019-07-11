<template>
  <div>
    <h2>Slots</h2>

    <card>
      <h1 slot="header">{{datos.nombre}}</h1>
      <template slot="content">
        <img width="150px" :src="datos.logo" alt="">
        <p>{{datos.descripcion}}</p>
      </template>
    </card>

    <card>
      <img slot="header" width="150px" :src="datos.logo" alt="">
      <template slot="content">
        <h1>{{datos.nombre}}</h1>
        <p>{{datos.descripcion}}</p>
      </template>
    </card>

    <card>
      <template slot="content">
        <h1>{{datos.nombre}}</h1>
        <p>{{datos.descripcion}}</p>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: {
    card: Card
  },
  data() {
    return {
      datos: {
        nombre: 'Vue',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ullam incidunt ab est porro quos repellat explicabo quia nemo, laborum eveniet quisquam. Saepe, quibusdam voluptates amet dignissimos molestias repellendus numquam.',
        logo: 'https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png'
      }
    }
  }
}
</script>
