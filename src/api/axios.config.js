// axios配置
// import axios from '../vues/axios';
import axios from 'axios';

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.headers['x-app-version'] = '1.0'; // 应用版本
axios.defaults.headers['x-client'] = 'H5'; // 客户端类型
axios.defaults.headers['x-access-token'] = ''; // 认证令牌

export default axios;
