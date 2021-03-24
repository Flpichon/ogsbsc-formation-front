import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || '',
    number: 0
  },
  mutations: {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, { token, userId }) {
        state.status = 'success';
        state.token = token;
        state.userId = userId;
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = '';
        state.token = '';
        state.userId = '';
    },
    nextQ(state) {
      state.number += 1;
    }
  },
  actions: {
    async logout({ commit }) {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const body = {
        userId,
        token
      };
      return axios({
        url: `http://localhost:8002/logout`,
        method: 'POST',
        data: body
      }).then(() => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        commit('logout');
      });
    },
    async login({ commit }, user) {
      return axios({
        url: `http://localhost:8002/login`,
        method: 'POST',
        data: user
      })
      .then((res) => {
        let user = res.data;
        if (user) {
          const userId = user.user.userId;
          const token = user.authToken.token;
          localStorage.setItem('userId', userId);
          localStorage.setItem('token', token);
          console.log(localStorage);
          commit('auth_success', { token, userId });
        }
      })
      .catch(e => {
        commit('auth_error');
        localStorage.removeItem('token');
      });
    }
  },
  modules: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
