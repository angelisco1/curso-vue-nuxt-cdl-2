<template>
  <div>
    <h2>Propiedades</h2>
    <darth-vader></darth-vader>
    <card v-for="framework in frameworksJs" :key="framework.id" :datos="framework"></card>
    <card :datos="frameworksJs[0]"></card>
    <card></card>
  </div>
</template>

<script>
import Card from './Card';
import DarthVader from './DarthVader';

export default {
  components: {
    card: Card,
    darthVader: DarthVader,
  },
  data() {
    return {
      frameworksJs: [
        { id: 0, nombre: 'Vue', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis vero corporis tempore veniam asperiores consequatur eos tenetur praesentium quam reprehenderit earum, aliquam molestias distinctio nesciunt. Officia rerum praesentium vel?', logo: 'https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png' },
        { id: 1, nombre: 'React', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis vero corporis tempore veniam asperiores consequatur eos tenetur praesentium quam reprehenderit earum, aliquam molestias distinctio nesciunt. Officia rerum praesentium vel?', logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
        { id: 2, nombre: 'Angular', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis vero corporis tempore veniam asperiores consequatur eos tenetur praesentium quam reprehenderit earum, aliquam molestias distinctio nesciunt. Officia rerum praesentium vel?', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png' },
      ]
    }
  }
}
</script>
