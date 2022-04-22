import request from '@/utils/request'

export function reqGetTrademarkList(page,limit) {
  return request({
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: 'get'
  })
}