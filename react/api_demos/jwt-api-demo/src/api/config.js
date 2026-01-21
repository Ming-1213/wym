// 标准的http请求库，vue/react 都用它
import axios from 'axios';
// mock 地址
// axios.default.baseURL = 'http://localhost:5173'
// 线上地址
axios.default.baseURL = 'https://api.github.com/users/_username'
export default axios;