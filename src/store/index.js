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
    err: null,
    isClicked: false,
  },
  mutations: {
    TYPE_INPUT: (state, data) => {
      state.inputs[data.name] = data.input;
    },
    SET_TOKEN: (state, token) => {
      sessionStorage.setItem("token", token);
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
    SET_ERROR: (state, err) => {
      state.err = err;
    },
    SET_CLICK: (state, bool) => {
      state.isClicked = bool;
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
          commit("SET_TOKEN", res.data.token);
          commit("RESET_INPUTS", ["username", "password"]);
          commit("SET_CLICK", false);
          dispatch("getPosts");
        })
        .catch((err) => {
          console.log(err);
          commit("SET_ERROR", err.response.status);
          commit("SET_CLICK", false);
        });
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

          // Avoid Error
          router.push("/admin").catch(() => {});
        })
        .catch((err) => console.log(err));
    },
    checkToken({ commit }) {
      if (sessionStorage.getItem("token")) {
        commit("SET_TOKEN", sessionStorage.getItem("token"));
        this.dispatch("getPosts");
      }
    },
  },
  modules: {},
});

export default store;
