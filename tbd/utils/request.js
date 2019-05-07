import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'

/* 默认请求参数 */
// const defaultConfig = {
//   timestamp: new Date().getTime()
// }

/* 创建axios实例 */
const service = axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: 'http://139.129.236.203:4010/',
  timeout: 5000 // 请求超时时间
  // interceptors: true, // 是否开启response拦截器 默认true
  // noAssign: false // 请求体是否带defaultConfig 默认false
  // timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  if (config.method.toUpperCase() == 'POST') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

/* respone拦截器 */
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    Message({
      message: '连接服务器失败',
      type: 'error',
      duration: 5000
    })
    return Promise.reject(error)
  }
)

export default service
