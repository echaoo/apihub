import request from './axios.config.js'

/**
* 查询语法模板
* @param data
*/
export function findTemplateListUsingPOST (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'POST',
    params: data
  })
}
/**
* 获取领域列表
* @param data
*/
export function getDomainListUsingGET (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'GET',
    params: data
  })
}
/**
* 语法模板匹配
* @param data
*/
export function templateValidUsingPOST (data) {
  return request({
    url: '/web/mall/mall-server-product-oss-v1/oss/product/get_specifications',
    method: 'POST',
    params: data
  })
}
