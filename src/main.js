import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const fb = require('./firebaseConfig.js')
import './assets/scss/app.scss'
//import { rtdbPlugin } from 'vuefire'
//Vue.use(rtdbPlugin)

// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {

		new Vue({
		  el: '#app',
		  router,
		  store,
		  render: function (h) { return h(App) }
		}).$mount('#app')
	}
})