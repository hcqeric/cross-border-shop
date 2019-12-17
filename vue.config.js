const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      less: {
        // 修改 vant 默认主题色
        modifyVars: {
          green: '#000000',
          '@blue': '#d2d2d2'
        }
      }
    }
  },
  devServer: {
    // proxy: 'http://47.254.232.81/'
    // open: false,        // 是否自动打开浏览器页面
    // host: '0.0.0.0',    // 指定使用一个 host，默认是 localhost
    // port: 8080,         // 端口地址
    // https: false,       // 使用https提供服务
    // // 设置代理，此处应该配置为开发服务器的后台地址
    proxy: {
      '/api': {
        target: 'http://47.93.130.102:8080/',
        // secure: true,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        // pathRewrite: {
        //   '^/woqu': '/'
        //   //这里的配置是正则表达式，以/api开头的将会被用用‘/api’替换掉，假如后台文档的接口是 /api/list/xxx
        //   //前端api接口写：axios.get('/api/list/xxx') ， 被处理之后实际访问的是：http://news.baidu.com/api/list/xxx
        // }
      }
    }
  }
};
