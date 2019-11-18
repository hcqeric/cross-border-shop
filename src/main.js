import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import 'amfe-flexible'
import VueI18n from 'vue-i18n'
import messages from "./utils/language";

Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})


// Vue.use(Element, {
//   i18n: (key, value) => i18n.t(key, value)
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
