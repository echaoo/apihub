import axios from 'axios'
import { Message, Loading } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

/** showFullScreenLoading tryHideFullScreenLoading()要干的事儿就是将同一时刻的请求合并。
 * 声明一个变量needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
 * 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。
 * needLoadingRequestCount为 0 时，结束 loading */
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
let loading
function startLoading() {
  loading = Loading.service({
    lock: true,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.5)'
  })
}
function endLoading() {
  loading.close()
}
/** 到这里，基本功能已经实现了。每发一个请求，都会显示全屏 loading。
 * 同一时刻的多个请求合并为一次 loading，在所有响应都返回后，结束 loading */

// request interceptor
service.interceptors.request.use(
  config => {
    // 修改超时时间设置
    if (config.timeOutUpdate) {
      config.timeout = config.timeOutUpdate
    }
    // 过滤不需要 loading的接口
    if (!config.ignoreLoading) {
      showFullScreenLoading()
    }
    // do something before request is sent
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    const result = response.data
    if (result.returnStatus === 'FAILED') {
      if (result.errorCode === 'SHIRO.1002' || result.errorCode === 'SHIRO.1004' || result.errorCode === 'SHIRO.1006') {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      } else {
        Message({
          showClose: true,
          message: result.errorMessage || 'error',
          type: 'error',
          duration: 5000
        })
      }
      return Promise.reject(result.errorMessage || 'error')
    } else {
      return result
    }
  },
  error => {
    tryHideFullScreenLoading()
    console.log(error.response)

    // 解析错误信息error.response
    if (error.response.status === 400) {
      Message({
        showClose: true,
        message: '请求错误',
        type: 'error',
        duration: 5000
      })
    } else if (error.response.status === 500) {
      Message({
        showClose: true,
        message: '服务器内部错误',
        type: 'error',
        duration: 5000
      })
    } else if (error.response.status === 404) {
      Message({
        showClose: true,
        message: '服务未找到',
        type: 'error',
        duration: 5000
      })
    } else {
      Message({
        showClose: true,
        message: error.response.data.message,
        type: 'error',
        duration: 5000
      })
    }
    return Promise.reject(error)
  }
)

export default service
