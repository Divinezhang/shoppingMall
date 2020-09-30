import axios from 'axios'

export function request (config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 8000
  })

  // 2.添加拦截器
  /* instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log('请求拦截失败', err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log('响应拦截失败', err)
  }) */

  // 3.发送网络请求
  return new Promise((resolve, reject) => {
    instance(config)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}