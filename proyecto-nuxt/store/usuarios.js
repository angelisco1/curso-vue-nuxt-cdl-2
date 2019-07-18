const state = () => {
  return {
    usuarios: []
  }
}

const getters = {
  usuarios(state) {
    return state.usuarios;
  }
};

const mutations = {
  initUsuarios(state, usuarios) {
    state.usuarios = usuarios;
  }
};

const actions = {

};

export {state, getters, mutations, actions};