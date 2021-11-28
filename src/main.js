import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueChatScroll from "vue-chat-scroll";
import firebase from "firebase";

Vue.use(VueChatScroll);

firebase.initializeApp({
  apiKey: "AIzaSyB-QQtG8mzcybXY_3zhMLFI1n6IHKQMp_g",
  authDomain: "rtc-26e71.firebaseapp.com",
  projectId: "rtc-26e71",
  storageBucket: "rtc-26e71.appspot.com",
  messagingSenderId: "150939648310",
  appId: "1:150939648310:web:93933a68d22f8d65187397"
});

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
