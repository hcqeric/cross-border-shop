/**
 * 本地开发用代理转发
 * 线上版本用 baseUrl
 */
let baseUrl = '';
// let baseUrl = 'http://47.254.232.81/';
let imgUrl = 'http://172.16.5.240:8103';
let blockUrl = 'http://172.16.5.240:9012';
const isPrivate = false; // 私有化部署
const brandName = '唐家岭营销平台'; // 私有化产品名称
let prefix = '/woqu/';
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  // baseUrl = 'http://172.16.6.55:8086'; // 龚广田
  // baseUrl = 'http://172.16.6.158:8086'; // 郑云
  // baseUrl = 'http://172.16.6.132:8086'; // 林龙泉
  // baseUrl = 'http://www.zcbaas.com/trace';
  // imgUrl = 'http://www.zcbaas.com/video';
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = process.env.VUE_APP_BASEURL;
} else {
  // 线上环境
  // 线网
  // baseUrl = 'http://www.zcbaas.com/trace';
  // imgUrl = 'http://www.zcbaas.com/video';
}
module.exports = {
  baseUrl,
  prefix,
  imgUrl,
  blockUrl,
  isPrivate,
  brandName
};
