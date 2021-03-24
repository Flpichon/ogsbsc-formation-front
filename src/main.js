import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$api = 'http://localhost:8002';
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
