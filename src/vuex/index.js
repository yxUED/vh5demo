/*
*Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
*它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
*/
// import Vue from 'vue';
// import Vuex from 'vuex';
import Vue from '../vues/vue';
import Vuex from '../vues/vuex';

import base from './modules/base';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    base,
  },
});
