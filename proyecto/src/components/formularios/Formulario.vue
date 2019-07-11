<template>
  <div>
    <h2>Formulario</h2>
    <form @submit.prevent="guardar">
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" v-model="datosRegistro.nombre" v-validate="'required|min:3|max:20|esStark'" :class="{error: errors.has('nombre')}">
        <span v-if="errors.has('nombre')">{{errors.first('nombre')}}</span>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="datosRegistro.email" v-validate="'required|email'" :class="{error: errors.has('email')}">
        <span v-if="errors.has('email')">{{errors.first('email')}}</span>
      </div>
      <div>
        <label for="">Género</label>
        <input type="radio" name="genero" value="h" v-model="datosRegistro.genero"> H
        <input type="radio" name="genero" value="m" v-model="datosRegistro.genero"> M
      </div>
      <div>
        <label for="">Hobbies</label>
        <input type="checkbox" name="hobbies" value="cine" v-model="datosRegistro.hobbies"> Cine
        <input type="checkbox" name="hobbies" value="tenis" v-model="datosRegistro.hobbies"> Tenis
        <input type="checkbox" name="hobbies" value="series" v-model="datosRegistro.hobbies"> Series
        <input type="checkbox" name="hobbies" value="futbol" v-model="datosRegistro.hobbies"> Futbol
      </div>
      <div>
        <label for="pais">Pais</label>
        <select name="pais" id="pais" v-model="datosRegistro.pais">
          <option value="es">España</option>
          <option value="it">Italia</option>
          <option value="fr">Francia</option>
        </select>
      </div>
      <button type="submit" :disabled="errors.items.length > 0">Registrame</button>
    </form>
  </div>
</template>

<script>
import { Validator } from 'vee-validate';

Validator.extend('esStark', {
  getMessage() {
    return 'No es un Stark'
  },
  validate(valor) {
    return ['arya', 'robb', 'rickon', 'bran', 'sansa'].includes(valor.toLowerCase());
  }
})

export default {
  data() {
    return {
      datosRegistro: {
        nombre: '',
        email: '',
        genero: 'h',
        hobbies: ['cine'],
        pais: 'fr'
      }
    }
  },
  methods: {
    guardar(event) {
      // event.preventDefault();
      this.$validator.validateAll()
        .then((res) => {
          if (res) {
            console.log('Guardando datos...', this.datosRegistro)
          } else {
            console.log('Algún campo no es correcto...')
          }
        })
    }
  }
}
</script>

<style scoped>
  .error {
    border: 1px solid red;
  }
</style>
