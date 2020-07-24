import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/axios/axios-auth'
import axiosAPI from '@/axios/axios-api'
import router from '@/router/index'
import types from './types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputs: {
      username: null,
      password: null,
      title: null,
      text: null,
    },
    tokenId: null,
    posts: null,
    err: null,
    isEditing: false,
    idEditing: null,
    currentPage: 1,
  },
  mutations: {
    TYPE_INPUT: (state, data) => {
      if (data.input === '') {
        state.inputs[data.name] = null
      } else {
        state.inputs[data.name] = data.input
      }
    },
    SET_TOKEN: (state, token) => {
      if (token) {
        localStorage.setItem('token', token)
      }
      state.tokenId = token
    },
    RESET_INPUTS: (state, inputs) => {
      inputs.forEach(name => {
        state.inputs[name] = null
      })
    },
    SET_OPTION: (state, payload) => {
      state[payload.name] = payload.data
    },
    INC_PAGE: state => {
      state.currentPage++
    },
    DEC_PAGE: state => {
      state.currentPage--
    },
  },
  actions: {
    login({ commit, state, dispatch }) {
      commit(types.SET_OPTION, { name: 'err', data: null })
      axios
        .post('/authentication_token', {
          username: state.inputs.username,
          password: state.inputs.password,
        })
        .then(res => {
          //Set Token
          commit(types.SET_TOKEN, res.data.token)

          // Reset inputs
          commit(types.RESET_INPUTS, ['username', 'password'])

          // Set expiration date
          const now = new Date()
          const expirationDate = new Date(now.getTime() + 900000)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('setLogoutTimer')

          // Get posts
          dispatch('getPosts')

          // Redirect to admin and avoid Error
          router.push('/admin').catch(() => {})
        })
        .catch(err => {
          commit(types.SET_OPTION, { name: 'err', data: err.response.status })
        })
    },
    logout({ commit }) {
      // Clear localstorage
      localStorage.removeItem('token')
      localStorage.removeItem('expirationDate')

      // Clear token
      commit(types.SET_TOKEN, null)

      // Redirect
      router.replace('/')
    },
    tryAutoLogin({ commit }) {
      // Check if token already exist
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }

      // Check if expiration is done
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationDate')
        return
      }

      // Set token
      commit(types.SET_TOKEN, token)

      // Redirect to admin and avoid Error
      router.push('/admin').catch(() => {})

      // Get posts
      this.dispatch('getPosts')
    },
    setLogoutTimer() {
      setTimeout(() => {
        this.dispatch('logout')
      }, 900000)
    },
    getPosts({ state, commit }) {
      axiosAPI
        .get('/posts', {
          headers: {
            Authorization: 'Bearer ' + state.tokenId,
            accept: 'application/json',
          },
        })
        .then(res => {
          commit(types.SET_OPTION, { name: 'posts', data: res.data })
        })
        .catch(err => console.log(err))
    },
    addPost({ state, commit }) {
      axiosAPI
        .post(
          '/posts',
          {
            title: state.inputs.title,
            body: state.inputs.text,
          },
          {
            headers: {
              Authorization: 'Bearer ' + state.tokenId,
              accept: 'application/json',
            },
          },
        )
        .then(() => {
          // Reset Posts to update
          commit(types.SET_OPTION, { name: 'posts', data: null })
          commit(types.SET_OPTION, { name: 'isEditing', data: false })
          commit(types.RESET_INPUTS, ['title', 'text'])

          // Get new posts
          this.dispatch('getPosts')
        })
        .catch(err => console.log(err))
    },
    editPost({ state, commit }, id) {
      axiosAPI
        .put(
          `/posts/${id}`,
          {
            title: state.inputs.title,
            body: state.inputs.text,
          },
          {
            headers: {
              Authorization: 'Bearer ' + state.tokenId,
              accept: 'application/json',
            },
          },
        )
        .then(() => {
          // Reset Posts to update
          commit(types.SET_OPTION, { name: 'posts', data: null })
          commit(types.SET_OPTION, { name: 'isEditing', data: false })
          commit(types.RESET_INPUTS, ['title', 'text'])
          commit(types.SET_OPTION, { name: 'idEditing', data: null })

          // Get updated posts
          this.dispatch('getPosts')
        })
        .catch(err => console.log(err))
    },
  },
  modules: {},
})

export default store
