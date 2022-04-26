import request from '@/utils/request'

export function reqGetAttrList({ category1Id, category2Id, category3Id }) {
  return request({
    url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
    method: 'get'
  })
}
