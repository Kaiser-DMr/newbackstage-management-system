import { reqGetCategory1List, reqGetCategory2List, reqGetCategory3List } from '@/api/product/category'

const state = {
  // 分类id 是根据分类id再去获取子分类
  category1Id: '',
  category2Id: '',
  category3Id: '',
  // 三个数组 分别用来存储对应的分类列表
  category1List: [],
  category2List: [],
  category3List: []
}
const actions = {
  // actions当中不能直接操作state中的数据 mutations中才可以直接操作actions中的数据
  // actions当中一般做一直异步的操作 比如发送ajax请求 设置个定时器...
  // 1. 获取一级导航数据
  async getCategory1List({ commit }) {
    const result = await reqGetCategory1List()
    if (result.code === 200) {
      commit('SAVE_CATEGORY1_LIST', result.data)
    }
  },
  // 2. 获取二级导航数据
  // 原理:在触发事件的时候，如果没有参数，则事件处理程序可以不用写小括号，默认会有第一个参数 一般是事件对象
  // 但是在当前这个三级导航示例当中的@change这个事件，是和:value一并使用的，相当于是v-model双向数组绑定的功能，所以在此示例中虽然@change="getCategory2List"没有参数，但是默认也会有一个参数，就是选中的下拉框选项中的value
  async getCategory2List({ commit }, category1Id) {
    // console.log(category1Id)
    const result = await reqGetCategory2List(category1Id)
    if (result.code === 200) {
      // commit('SAVE_CATEGORY2_LIST', result.data, category1Id)
      commit('SAVE_CATEGORY2_LIST', { category2List: result.data, category1Id })
    }
  },
  // 3. 获取三级导航数据
  async getCategory3List({ commit }, category2Id) {
    const result = await reqGetCategory3List(category2Id)
    if (result.code === 200) {
      commit('SAVE_CATEGORY3_LIST', { category3List: result.data, category2Id })
    }
  }
}
const mutations = {
  // 1. 存储一级导航数据
  SAVE_CATEGORY1_LIST(state, category1List) {
    state.category1List = category1List
  },
  // 2. 存储二级导航数据
  SAVE_CATEGORY2_LIST(state, { category2List, category1Id }) {
    state.category2List = category2List
    state.category1Id = category1Id

    // 清空category2Id category3Id
    state.category2Id = ''
    state.category3Id = ''

    // 清掉三级数组中的数据
    state.category3List = []
  },
  // SAVE_CATEGORY3_LIST(state, payload) {
  //   state.category3List = payload.category3List
  //   state.category2Id = payload.category2Id
  // }
  // 3. 存储三级导航数据
  SAVE_CATEGORY3_LIST(state, { category3List, category2Id }) {
    state.category3List = category3List
    state.category2Id = category2Id

    // 清掉category3Id中的值
    state.category3Id = ''
  },
  // 4. 设置category3Id  当没有异步操作的时候，可以在其它组件当中，直接调用 mutations中的方法
  SET_CATEGORY3ID(state, category3Id) {
    state.category3Id = category3Id
  },
  // 5. 重置State中的数据
  RESET(state) {
    state.category1Id = ''
    state.category2Id = ''
    state.category3Id = ''
    state.category2List = []
    state.category3List = []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
