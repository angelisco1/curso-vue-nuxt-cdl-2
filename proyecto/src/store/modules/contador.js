import axios from 'axios';

const URL = 'https://ejemplos-dc1c1.firebaseio.com/contador/angel.json';

const state = {
  cuenta: 0
}

const getters = {
  cuenta(state) {
    return state.cuenta;
  },
  nextCuenta(state) {
    return state.cuenta + 1;
  },
}

const mutations = {
  incrementar(state, payload) {
    state.cuenta += payload
  },
  decrementar(state) {
    state.cuenta -= 1
  },
  inicializarEstado(state, payload) {
    state.cuenta = payload;
  }
}

const actions = {
  incrementar(context) {
    axios.post(URL, {cuenta: 1})
      .then((resp) => {
        console.log(resp)
        if (resp.status === 200) {
          context.commit('incrementar', 1)
        }
      });
    // setTimeout(() => {
      // context.commit('incrementar', 1)
    // }, 3000)
  },
  decrementar(context) {
    axios.post(URL, {cuenta: -1})
      .then(resp => {
        if (resp.status === 200) {
          context.commit('decrementar', 1)
        }
      })
  },
  incrementarEnNum(context, payload) {
    axios.post(URL, {cuenta: payload})
      .then(resp => {
        if (resp.status === 200) {
          context.commit('incrementar', payload)
        }
      })
  },
  inicializarEstado(context) {
    axios.get(URL)
      .then(({data, status}) => {
        if (status === 200) {
          // console.log(data);
          let cuentas = [];
          for (let id in data) {
            cuentas.push(data[id].cuenta)
          }
          console.log(cuentas);
          let cuentaTotal = cuentas.reduce((acc, num) => {
            return acc += num;
          }, 0)

          context.commit('inicializarEstado', cuentaTotal);

        }
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}