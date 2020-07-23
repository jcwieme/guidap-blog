import Vue from "vue";
import Vuex from "vuex";

import axios from "@/axios/axios-auth";
import axiosAPI from "@/axios/axios-api";
import router from "@/router/index";
import types from "./types";

Vue.use(Vuex);

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
    isClicked: false,
    isEditing: false,
  },
  mutations: {
    TYPE_INPUT: (state, data) => {
      if (data.input === "") {
        state.inputs[data.name] = null;
      } else {
        state.inputs[data.name] = data.input;
      }
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
    SET_BOOL: (state, data) => {
      state[data.name] = data.bool;
    },
    RESET_POSTS: (state) => {
      state.posts = null;
    },
  },
  actions: {
    login({ commit, state, dispatch }) {
      axios
        .post("/authentication_token", {
          username: state.inputs.username,
          password: state.inputs.password,
        })
        .then((res) => {
          console.log(res);
          commit(types.SET_TOKEN, res.data.token);
          commit(types.RESET_INPUTS, ["username", "password"]);
          commit(types.SET_BOOL, { name: "isClicked", bool: false });
          dispatch("getPosts");
          // Avoid Error
          router.push("/admin").catch(() => {});
        })
        .catch((err) => {
          console.log(err);
          commit(types.SET_ERROR, err.response.status);
          commit(types.SET_BOOL, { name: "isClicked", bool: false });
        });
    },
    getPosts({ state, commit }) {
      axiosAPI
        .get("/posts", {
          headers: {
            Authorization: "Bearer " + state.tokenId,
            accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          commit(types.SET_POSTS, res.data);
        })
        .catch((err) => console.log(err));
    },
    addPost({ state, commit }) {
      axiosAPI
        .post(
          "/posts",
          {
            title: state.inputs.title,
            body: state.inputs.text,
          },
          {
            headers: {
              Authorization: "Bearer " + state.tokenId,
              accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          commit(types.RESET_POSTS);
          commit(types.SET_BOOL, { name: "isEditing", bool: false });
          commit(types.SET_BOOL, { name: "isClicked", bool: false });
          this.dispatch("getPosts");
          router.push("/admin").catch(() => {});
        })
        .catch((err) => console.log(err));
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
              Authorization: "Bearer " + state.tokenId,
              accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          commit(types.RESET_POSTS);
          commit(types.SET_BOOL, { name: "isEditing", bool: false });
          commit(types.SET_BOOL, { name: "isClicked", bool: false });
          this.dispatch("getPosts");
          router.push("/admin").catch(() => {});
        })
        .catch((err) => console.log(err));
    },
    deletePost() {},
    checkToken({ commit }) {
      if (sessionStorage.getItem("token")) {
        commit(types.SET_TOKEN, sessionStorage.getItem("token"));
        this.dispatch("getPosts");
      }
    },
  },
  modules: {},
});

export default store;
