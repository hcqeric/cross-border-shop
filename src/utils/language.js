import enLocale from 'vant/lib/locale/lang/en-US';
import zhLocale from 'vant/lib/locale/lang/zh-CN'

import enLang from '../assets/lang/en-US'
import zhLang from '../assets/lang/zh-CN'
// import

const messages = {
  en: Object.assign(enLang, enLocale),
  zh: Object.assign(zhLang, zhLocale)
}

export default messages