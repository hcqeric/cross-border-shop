import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css';
import VueI18n from 'vue-i18n'
import messages from "./utils/language";
import '@/styles/normalize-V5.css'; // 与iview同款
import './styles/common.less'

Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
});

Vue.use(Vant, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
