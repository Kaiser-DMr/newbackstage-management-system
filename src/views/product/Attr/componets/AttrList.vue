<template>
  <div>
    <el-button type="primary" icon="el-icon-plus">添加属性</el-button>
    <!-- <el-table :data="attrList" border> -->
    <el-table v-loading="loading" :data="attrList" border>
      <el-table-column type="index" label="序号" align="center" width="80" />
      <el-table-column prop="attrName" align="center" label="属性名称" width="180" />
      <el-table-column label="属性值列表">
        <template v-slot="{row}">
          <el-tag v-for="attrValue in row.attrValueList" :key="attrValue.id" style="margin-right:10px">{{ attrValue.valueName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="warning" size="mini" icon="el-icon-edit" />
          <el-button type="danger" size="mini" icon="el-icon-delete" />
        </template>
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
import { reqGetAttrList } from '@/api/product/attr'
import { mapState } from 'vuex'
export default {
  name: 'AttrList',
  data() {
    return {
      loading: true,
      attrList: []
    }
  },
  computed: {
    ...mapState('category', ['category1Id', 'category2Id', 'category3Id'])
  },
  watch: {
    async category3Id() {
      const { category1Id, category2Id, category3Id } = this
      if (!category3Id) {
        this.attrList = [] // 清空不渲染数据
        return // 如果没有值 什么都不做
      }
      this.loading = true
      // 如果有值，则需要发送请求
      const result = await reqGetAttrList({
        category1Id,
        category2Id,
        category3Id
      })
      //  console.log(result);
      if (result.code === 200) {
        this.loading = false
        this.attrList = result.data
      }
    }
  }
}
</script>

<style>
</style>
