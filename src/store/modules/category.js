import { reqGetCategory1List, reqGetCategory2List, reqGetCategory3List } from '@/api/product/category'

const state = {
  // 分类id
  category1Id: '',
  category2Id: '',
  category3Id: '',
  // 分类列表
  category1List: [],
  category2List: [],
  category3List: []
}

const mutations = {
  SAVE_CATEGORY1_LIST(state, category1List) {
    state.category1List = category1List
  }
}
const actions = {
  // 1. 获取三级联动中的一级分类数据
  async getCategory1List({ commit }) {
    const result = await reqGetCategory1List()
    // console.log(result);
    if (result.code === 200) {
      commit('SAVE_CATEGORY1_LIST', result.data)
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
