import Vue from 'vue'
import App from './App.vue'
import './plugins';
// Import Bootstrap and BootstrapVue CSS files (order is important)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
