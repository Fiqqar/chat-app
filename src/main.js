import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeWn_s3wIJ4IFSNp9yqFINMAffniU9Zt8",
  authDomain: "vue-chat-b8522.firebaseapp.com",
  projectId: "vue-chat-b8522",
  storageBucket: "vue-chat-b8522.appspot.com",
  messagingSenderId: "967582934117",
  appId: "1:967582934117:web:d48e145c2fdb350aba528c"
};

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();
// const auth = getAuth(app);

window.db = database;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


