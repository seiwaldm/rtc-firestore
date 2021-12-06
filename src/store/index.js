import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db } from "@/main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: []
  },

  mutations: vuexfireMutations,

  actions: {
    bindMessages: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('messages', db.collection('messages').orderBy("timestamp"));
    }),
  }
});
