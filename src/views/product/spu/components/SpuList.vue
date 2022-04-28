<template>
  <el-card>
    <el-button type="primary" icon="el-icon-plus">添加SPU</el-button>
    <el-table v-loading="loading" :data="spuList" border>
      <el-table-column type="index" label="序号" align="center" width="80" />
      <el-table-column prop="attrName" label="SPU名称" width="180" />
      <el-table-column label="SPU描述" prop="description" />
      <el-table-column label="操作">
        <template v-slot="{ row }">
          <el-tooltip
            class="item"
            effect="dark"
            content="添加属性"
            placement="top-start"
          >
            <el-button
              type="warning"
              size="mini"
              icon="el-icon-plus"
              @click="editValue(row)"
            />
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="编辑属性"
            placement="top-start"
          >
            <el-button
              type="warning"
              size="mini"
              icon="el-icon-edit"
              @click="editValue(row)"
            />
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="查看属性"
            placement="top-start"
          >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-info"
            />
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="删除属性"
            placement="top-start"
          >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align: center"
      :current-page="currentPage"
      :pager-count="7"
      :page-sizes="[3, 5, 10]"
      :page-size="limit"
      layout="prev, pager, next, jumper,->,total, sizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="getSpuList"
    />
  </el-card>
</template>

<script>
import { mapState } from 'vuex'
import { reqGetSpuList } from '@/api/product/spu'
export default {
  name: 'SpuList',
  data() {
    return {
      loading: false,
      currentPage: 1,
      total: 0,
      limit: 3,
      spuList: [] // 数据列表
    }
  },
  computed: {
    ...mapState('category', ['category3Id'])
  },
  watch: {
    category3Id: {
      async handler() {
        const { currentPage: page, limit, category3Id } = this
        if (!category3Id) {
          this.currentPage = 1
          this.spuList = []
          this.total = 0
          this.limit = 3
          return // 不要向下执行了
        }
        this.getSpuList()
        // const result = await reqGetSpuList({ page, limit, category3Id })
        // if (result.code === 200) {
        //   this.spuList = result.data.records
        //   this.total = result.data.total
        //   this.loading = false
      }
    }
  },

  methods: {
    async getSpuList() {
      const { currentPage: page, limit, category3Id } = this
      this.loading = true
      const result = await reqGetSpuList({ page, limit, category3Id })
      if (result.code === 200) {
        this.spuList = result.data.records
        this.total = result.data.total
        this.loading = false
      }
    },
    handleSizeChange(val) {},
    getTrademarkList() {}
  }
}

</script>

<style>
</style>
