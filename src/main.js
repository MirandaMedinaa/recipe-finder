import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
