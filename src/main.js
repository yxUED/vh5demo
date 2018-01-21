/*
*这是h5 vue单页应用的入口文件
*创建 vue 对象实例，引入全局插件，挂载根组件，注册路由和全局状态管理
*/
// import Vue from 'vue';
import 'lib-flexible';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import store from './vuex';
import Vue from './vues/vue';

Vue.config.productionTip = false;

// 添加Fastclick移除移动端点击延迟
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
