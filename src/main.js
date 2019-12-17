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
import { getData } from '@/api/getData';
import axios from '@/api/$axios';
Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
});

Vue.use(Vant, {
  i18n: (key, value) => i18n.t(key, value)
});
Object.defineProperty(Vue.prototype, '$getData', { value: getData }); // 全局挂载请求接口（已二次封装，做了状态拦截操作）:
Object.defineProperty(Vue.prototype, '$axios', { value: axios }); // 全局挂载请求接口（初步封装）:

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
