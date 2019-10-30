import Vue from 'vue'
import App from './App.vue'
import router from './router'
//const fb = require('./firebaseConfig.js')
import './assets/scss/app.scss'



	new Vue({
	  el: '#app',
	  router,
	  render: h => h(App)
	})