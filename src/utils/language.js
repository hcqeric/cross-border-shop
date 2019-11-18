import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import

const messages = {
  en: {
    message: 'hello',
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    message: '你好',
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}

export default messages