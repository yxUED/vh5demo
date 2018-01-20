import types from '../mutation-types';

/**
 * 数据存储
 * */
const state = {
  currentPageTitle: '',
};

const actions = {
  setCurrentPageTitle({ commit }, title) {
    commit(types.SET_CURRENT_PAGE_TITLE, title);
  },
};

const getters = {
  currentPageTitle: state => state.currentPageTitle,
};

const mutations = {
  [types.SET_CURRENT_PAGE_TITLE](state, title) {
    state.currentPageTitle = title;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
