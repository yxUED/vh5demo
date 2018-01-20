import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../pages/tabs/HomeTab'); // 首页
const Mine = () => import('../pages/tabs/MineTab'); // 我的
const Market = () => import('../pages/tabs/MarketTab'); // 卖场

const Setting = () => import('../pages/Setting'); // 卖场

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home,
      meta: { level: 1, title: '首页' },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { level: 1, title: '首页' },
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
      meta: { level: 1, title: '市场' },
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: { level: 1, title: '我的' },
    },
    {
      path: '/mine/setting',
      name: 'setting',
      component: Setting,
      meta: { level: 2, title: '我的设置' },
    },
  ],
});
