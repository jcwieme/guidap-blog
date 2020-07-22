import Vue from "vue";
import Vuex from "vuex";

import axios from "@/axios/axios-auth";
import axiosAPI from "@/axios/axios-api";
import router from "@/router/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    inputs: {
      username: null,
      password: null,
    },
    tokenId: null,
    posts: null,
  },
  mutations: {
    TYPE_INPUT: (state, data) => {
      state.inputs[data.name] = data.input;
    },
    TOKEN_STATE: (state, token) => {
      state.tokenId = token;
    },
    RESET_INPUTS: (state, inputs) => {
      inputs.forEach((name) => {
        state.inputs[name] = null;
      });
    },
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    // login({ commit }, authData) {
    login({ commit, state, dispatch }) {
      axios
        .post("/authentication_token", {
          username: state.inputs.username,
          password: state.inputs.password,
        })
        .then((res) => {
          console.log(res);
          commit("TOKEN_STATE", res.data.token);
          commit("RESET_INPUTS", ["username", "password"]);
          dispatch("getPosts");
        })
        .catch((err) => console.log(err));
    },
    getPosts({ state, commit }) {
      axiosAPI
        .get("/posts?page=1", {
          headers: {
            Authorization: "Bearer " + state.tokenId,
            accept: "application/json",
          },
        })
        .then((res) => {
          commit("SET_POSTS", res.data);
          router.replace("/admin");
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});

export default store;
