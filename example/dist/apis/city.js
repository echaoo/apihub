import request from './axios.config.js'

/**
* 获取城市名
* @param data
*/
export function cityExtractorUsingPOST (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'POST',
    params: data
  })
}
