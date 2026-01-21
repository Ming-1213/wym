import axios from './config'
axios.defaults.baseURL = 'http://localhost:5173/api'

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || "";
    // if (token) {
    // console.log('///////')
    // let token = localStorage.getItem('token') || "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    config.headers.Authorization = token
    // }
  return config;
})
axios.interceptors.response.use(res => {
  console.log('|||||')

})
export default axios