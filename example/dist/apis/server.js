import request from './axios.config.js'

/**
* getAllServerInfo
* @param data
*/
export function getAllServerInfoUsingGET (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'GET',
    params: data
  })
}
