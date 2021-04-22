import Vue from "vue";
import Vuex from "vuex";
import * as characters from "./modules/events";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    pages: 0,
    perPage: 3,
  },
  mutations: {
    SET_COUNTER(state, counter) {
      state.counter = counter;
    },
    SET_PAGES(state, pages) {
      state.pages = pages;
    },
  },
  actions: {},
  modules: {
    characters,
  },
});
