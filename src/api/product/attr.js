import request from '@/utils/request'

export function reqGetAttrList({ category1Id, category2Id, category3Id }) {
  return request({
    url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
    method: 'get'
  })
}
export function reqSaveAttrInfo(data) {
  return request({
    url: `/admin/product/saveAttrInfo`,
    method: 'post',
    data
  })
}

export function reqSaveOrUpdateAttrInfo(data) {
  return request({
    url: `/admin/product/saveAttrInfo`,
    method: 'post',
    data
  })
}

