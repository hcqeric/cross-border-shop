const UserPage = () => import('../views/user');
const CartPage = () => import('../views/cart');
const GoodsPage = () => import('../views/goods');

export default [
  {
    path: '/',
    redirect: '/goods'
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
  }
];