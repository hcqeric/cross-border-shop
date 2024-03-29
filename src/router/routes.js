const UserPage = () => import('../views/user');
const CartPage = () => import('../views/cart');
const GoodsPage = () => import('../views/goods');
const GoodsList = () => import('../views/goods/list');
const LoginPage = () => import('../views/login/index');
const ForgetPage = () => import('../views/login/forget');
const RegisterPage = () => import('../views/login/register');
const AccountPage = () => import('../views/login/account');
const HomePage = () => import('../views/home/index');
const PaySucc = () => import('../views/payment/paysucc');
const Settlement = () => import('../views/payment');
const Bargain = () => import('../views/bargain/index');
const CutPrice = () => import('../views/bargain/cutprice');


export default [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage,
    meta: {
      title: '会员中心'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/goods/:id',
    name: 'goods',
    component: GoodsPage,
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: ForgetPage,
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/account',
    name: 'acoount',
    component: AccountPage,
    meta: {
      title: '账号设置'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/paysucc',
    name: 'paysucc',
    component: PaySucc,
    meta: {
      title: ''
    }
  },
  {
    path: '/bargain',
    name: 'bargain',
    component: Bargain,
    meta: {
      title: ''
    }
  },
  {
    path: '/cut',
    name: 'cutprice',
    component: CutPrice,
    meta: {
      title: ''
    }
  },
  {
    path: '/list',
    name: 'GoodsList',
    component: GoodsList,
    meta: {
      title: ''
    }
  },
  {
    path: '/settlement',
    name: 'Settlement',
    component: Settlement,
    meta: {
      title: ''
    }
  }
];