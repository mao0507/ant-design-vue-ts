import axios from 'axios'

/**
 * 把axios做封裝，目前有增、刪、改、查方法
 * Header有帶JWT token
 */
const service = axios.create({
  baseURL: import.meta.env.NODE_ENV === 'development' ? import.meta.env.VUE_APP_RESOURCE_API : '/',
  timeout: 90000,
})

/**
 * 如果有JWT的token，就帶在header
 * 沒有就代表尚未登入
 */
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      const { headers } = config
      headers.Authorization = `Bearer ${token}`
      return config
    } else {
      return config
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      console.error(error)
      return
    }
    switch (error.response.status) {
      case 400: {
        console.log('400')
        break
      }
      case 401:
        console.log('401')
        break
      case 403: {
        console.log('403')
        break
      }
      case 404:
        console.log('404')
        break
      default:
        break
    }
    return Promise.reject(error)
  },
)

/**
 * API method Get
 * @param { string } url API 位置
 * @returns
 */
const get = (url: string) =>
  service({
    url,
    method: 'get',
  })

/**
 * API method Post
 * @param { string } url API 位置
 * @param { any } data 依照API需求傳入對應項目
 * @returns
 */
const post = (url: string, data: any) =>
  service({
    url,
    method: 'post',
    data,
  })

/**
 * API method Put
 * @param { string } url API 位置
 * @param { any } data 依照API需求傳入對應項目
 * @returns
 */
const put = (url: string, data: any) =>
  service({
    url,
    method: 'put',
    data,
  })

/**
 * API method Delete
 * @param { string } url API 位置
 * @returns
 */
const remove = (url: string) =>
  service({
    url,
    method: 'delete',
  })

export default {
  get,
  post,
  put,
  remove,
}
