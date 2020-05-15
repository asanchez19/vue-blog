import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { firestorePlugin } from 'vuefire'
import CKEditor from '@ckeditor/ckeditor5-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(firestorePlugin)

Vue.use(CKEditor)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
