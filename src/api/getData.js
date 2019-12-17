import axiosRequest from './$axios';
import {router} from '@/router';
// import { Message } from 'element-ui';
// import storage from '@/utils/storage';
// import store from '@/store/index';

// 检查是否还有登录表示，是否手动去删除了储存的信息

/**
 * 不做鉴权的接口
 * @type {string[]}
 * 从左至右依次为
 * 获取验证码、注册、登录、忘记密码保存
 */
const authInterface = ['api/currency/verificationcode', 'api/register', 'api/login', 'api/forgetPassword'];

// 统一接口处理
// 目前 只处理 登录超时 跳转到首页
let getData = (url, params, type = 'GET', opt = {}) => {

  let result = axiosRequest(url, params, type, opt);
  result.then((res) => {
    // 登录、退出、验证码接口不做校验
    if (authInterface.indexOf(url) >= 0) return res;
    // 设置登陆状态
    if (res.code === 0) {
      // storage.setItem('isLogin', storage.getItem('isLogin'), 2); // 登录成功添加登录标识 设置localStorage 2小时
    }
    // 提示重复请求
    // if (res.code === -102) {
    //   Message({ showClose: true, message: res.msg, type: 'warning' });
    // }
    // 未登陆状态、登录状态信息过期 清除用户信息，跳转到登录页
    if (res.code === -101) {
      // 如果cooke 储存的登录标识还在，就不提示，以免弹出多个消息框提示登录失效
      // if (storage.getItem('isLogin')) {
      //   Message({ showClose: true, message: '登录状态信息失效,请重新登录', type: 'error' });
      // }
      // 判断是否有存取用户名
      // if (store.state.saveName == '') {
      //   sessionStorage.clear(); // 清空sessionStorage
      //   localStorage.clear(); // 清空localStorage
      // } else {
      //   let name = store.state.saveName;
      //   sessionStorage.clear(); // 清空sessionStorage
      //   localStorage.clear(); // 清空localStorage
      //   store.commit('saveName',name);
      // }
      router.push('/'); // 跳转到登录页
    }
    return res;
  }).catch(error => {
    // Message({ message: error.msg || error.message || '未知错误！', type: 'error' });
    return error;
  });
  return result;
};

export { getData };
