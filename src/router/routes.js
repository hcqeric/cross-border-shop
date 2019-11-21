const UserPage = () => import('../views/user');
const CartPage = () => import('../views/cart');
const GoodsPage = () => import('../views/goods');
const LoginPage = () => import('../views/login');

export default [
  {
    path: '/',
    redirect: '/login'
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
    path: '/goods',
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
  }
];