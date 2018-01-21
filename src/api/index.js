import axios from './axios.config';

export default {
  /**
   * 获取用户基本信息
  */
  getUser() {
    return axios.get('/user');
  },
};
