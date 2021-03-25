import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'

Vue.use(VueProgress, {
  // defaultShape: 'circle',
})

Vue.config.productionTip = false
Vue.prototype.$api = 'http://localhost:8002';
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
