import request from './axios.config.js'

/**
* 聊天
* @param data
*/
export function sendUsingPOST (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'POST',
    params: data
  })
}
/**
* 获取sessonId
* @param data
*/
export function startUsingPOST (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'POST',
    params: data
  })
}
/**
* 停掉sessonId
* @param data
*/
export function stopUsingPOST (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'POST',
    params: data
  })
}
