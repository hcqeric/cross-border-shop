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
  }
};
