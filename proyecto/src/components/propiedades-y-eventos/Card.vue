<template>
  <div>
    <h3>{{datos.nombre}}</h3>
    <img width="150px" :src="datos.logo" :alt="imgAlt">
    <p>{{datos.descripcion}}</p>
  </div>
</template>

<script>
export default {
  // props: ['datos'],
  props: {
    datos: {
      type: Object,
      // required: true,
      default: () => ({
        id: -1,
        nombre: 'Nombre',
        descripcion: 'Descripción...',
        logo: '...'
      }),
      validator(value) {
        return ['Vue', 'React', 'Angular', 'Polymer', 'Nombre'].includes(value.nombre);
      }
    }
  },
  computed: {
    imgAlt() {
      return 'Logo de ' + this.datos.nombre;
    }
  }
}
</script>
