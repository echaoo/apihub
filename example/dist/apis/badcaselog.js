import request from './axios.config.js'

/**
* 录入badcaselog
* @param data
*/
export function addBadCaseLogUsingGET (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'GET',
    params: data
  })
}
/**
* 根据时间段BadCase列表
* @param data
*/
export function findBadCaseListUsingGET (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'GET',
    params: data
  })
}
