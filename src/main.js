import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCNx505ZCCms1e4agUb5elwS3O__vYwhn8",
      authDomain: "keenetic-9a44f.firebaseapp.com",
      databaseURL: "https://keenetic-9a44f.firebaseio.com",
      projectId: "keenetic-9a44f",
      storageBucket: "keenetic-9a44f.appspot.com",
      messagingSenderId: "714518080477"
    })
  }
})


