<template>
  <div>
    <h2>Componente dinámico: multistep form</h2>
    <button type="button" @click="cambiarStepAnterior">Anterior</button>
    <button type="button" @click="cambiarStepSiguiente">Siguiente</button>
    <component :is="numStep" :datos="datosForm[numStep]" @[eventNumStep]="cambiarDatos"></component>
    <!-- <keep-alive> -->
      <!-- <component :is="numStep" :datos="datosForm[numStep]" @[eventNumStep]="cambiarDatos"></component> -->
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Form1 from './Form1';
import Form2 from './Form2';

export default {
  components: {
    form1: Form1,
    form2: Form2,
  },
  data() {
    return {
      step: 1,
      numStepsTotal: 2,
      datosForm: {
        form1: {
          nombre: 'Angel'
        },
        form2: {
          password: '1'
        }
      }
    }
  },
  computed: {
    numStep() {
      return 'form' + this.step;
    },
    eventNumStep() {
      return 'form' + this.step + 'cambiado'
    }
  },
  methods: {
    cambiarStepAnterior() {
      if (this.step > 1) {
        this.step -= 1;
      }
    },
    cambiarStepSiguiente() {
      if (this.step < this.numStepsTotal) {
        this.step += 1;
      }
    },
    cambiarDatos(event) {
      const clave = 'form'+event.numStep;
      console.log(clave)
      console.log(event)
      this.datosForm[clave] = event[clave];
    }
  }
}
</script>
