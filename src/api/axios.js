// 导入axios
import axios from 'axios'
import { Promise } from 'q'
const instance = axios.create({
  // 配置基准路径
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0'

})
// 请求拦截器,在发送请求前认证token
instance.interceptors.request.use(function (config) {
  // token认证
  const user = window.sessionStorage.getItem('bhhl')
  if (user) {
    config.headers = {
      Authorization: 'Bearer' + JSON.parse(user).token
    }
  }
  console.log(config)
  // 返回配置项
  return config
}, function (error) {
  // 返回一定错误的promise对象
  return Promise.reject(error)
})
// 响应拦截器，拦截状态码401,返回登录页
instance.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    location.hash('/login')
  }
  return Promise.reject(error)
})
export default instance
