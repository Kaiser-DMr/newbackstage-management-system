import request from '@/utils/request'
export function reqGetTrademarkList(page, limit) {
  return request({
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: 'get'
  })
}

// 2. 添加一个品牌数据
export function reqSaveOneTrademark(data) {
  return request({
    url: `/admin/product/baseTrademark/save`,
    method: 'post',
    data
  })
}

// 3. 删除一条品牌数据
export function reqDeleteOneTrademark(id) {
  return request({
    url: `/admin/product/baseTrademark/remove/${id}`,
    method: 'delete'
  })
}
// 4. 根据id查询要更新的trademark

export function reqGetOneTrademark(id) {
  return request({
    url: `/admin/product/baseTrademark/get/${id}`,
    method: 'get'
  })
}

// 5. 更新一条trademark数据

export function reqUpdateOneTrademark(tmForm) {
  return request({
    url: `/admin/product/baseTrademark/update`,
    method: 'put',
    data: tmForm
  })
}
