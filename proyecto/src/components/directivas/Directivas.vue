<template>
<div>
  <h2>Directivas</h2>
  <p v-text="parrafo"></p>
  <p>{{parrafo}}</p>
  <div v-html="noticia"></div>

  <h3>Directivas condicionales</h3>
  <button type="button" @click="cambiarMostrar">Cambiar mostrar</button>
  <div v-if="mostrar">Se muestra el div</div>
  <div v-else>Se muestra el otro div</div>

  <p v-if="mascota === 'gato'">Tengo un gato</p>
  <p v-else-if="mascota === 'perro'">Tengo un perro</p>
  <p v-else>Tengo otro animal</p>

  <p v-show="mostrar">Se muestra (con v-show)</p>

  <h3>Directivas de listas (bucles)</h3>
  <ul>
    <li v-for="(serie, pos) in series" :key="pos">{{pos}}: {{serie}}</li>
  </ul>

  <ul>
    <li v-for="(valor, clave, numIt) in sugus" :key="numIt"><strong>{{numIt}}-{{clave}}</strong>: {{valor}}</li>
  </ul>

  <ul>
    <li v-for="n in 3" :key="n">{{n}}</li>
  </ul>

  <h3 v-if="mostrar" v-blink="'orange'">Mis directivas</h3>
  <p v-marcar="'yellow'">Pasa el ratón por encima</p>
  <p v-marcar:conColorPorDefecto="{color: 'yellow', defColor: 'black'}">Pasa el ratón por encima</p>
  <p v-if="mostrar" v-marcar.parpadea>Pasa el ratón por encima</p>

  <input type="text" v-powermode>

</div>
</template>

<script>
export default {
  data() {
    return {
      // yellow: 'red',
      sugus: {
        color: 'azul',
        sabor: 'piña'
      },
      mascota: 'pez',
      parrafo: 'Un párrafo...',
      noticia: '<h3>Una noticia</h3><br><p>Un párrafo muy <b>importante</b></p>',
      mostrar: true,
      series: [
        'The Walking Dead',
        'Juego de tronos',
        'The leftovers'
      ]
    }
  },
  methods: {
    cambiarMostrar() {
      this.mostrar = !this.mostrar;
    }
  },
  directives: {
    marcar: {
      bind(el, binding) {
        let colorMarcado = 'yellowgreen';
        let colorPorDefecto = 'white';

        if (binding.arg === 'conColorPorDefecto') {
          colorMarcado = binding.value.color;
          colorPorDefecto = binding.value.defColor;
          el.style.backgroundColor = colorPorDefecto;
        } else {
          if (binding.value) {
            colorMarcado = binding.value;
          }
        }

        console.log(binding.modifiers)
        let intervalId;

        el.addEventListener('mouseover', () => {
          el.style.backgroundColor = colorMarcado;
          if (binding.modifiers.parpadea) {
            intervalId = setInterval(() => {
              console.log('Pasa por aquí')
              el.style.backgroundColor = (el.style.backgroundColor === colorMarcado ? colorPorDefecto : colorMarcado);
            }, 500);
          }
        })

        el.addEventListener('mouseleave', () => {
          el.style.backgroundColor = colorPorDefecto;
          clearInterval(intervalId);
        })
      }
    },
    powermode: {
      bind(el) {
        function getRandomColor() {
          const r = Math.floor(Math.random()*256);
          const g = Math.floor(Math.random()*256);
          const b = Math.floor(Math.random()*256);
          return `rgb(${r}, ${g}, ${b})`;
        }

        el.addEventListener('input', () => {
          el.style.color = getRandomColor();
          el.style.marginLeft = '10px'
          el.style.marginTop = '10px'
          setTimeout(() => {
            el.style.marginLeft = '0px'
            el.style.marginTop = '0px'
          }, 300)
        })
      }
    }
  }
}
</script>
