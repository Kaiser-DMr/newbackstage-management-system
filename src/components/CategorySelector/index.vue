<template>
  <el-form :inline="true" class="demo-form-inline">
    <el-form-item label="一级分类">
      <el-select placeholder="活动区域" value="">
        <el-option label="区域一" value="shanghai" />
        <el-option label="区域二" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="二级分类">
      <el-select placeholder="活动区域" value="">
        <el-option label="区域一" value="shanghai" />
        <el-option label="区域二" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="三级分类">
      <el-select placeholder="活动区域" value="">
        <el-option label="区域一" value="shanghai" />
        <el-option label="区域二" value="beijing" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CategorySelector',
  computed: {
    ...mapState('category', [
      'category1Id',
      'category2Id',
      'category3Id',
      'category1List',
      'category2List',
      'category3List'
    ])
  },
  mounted() {
    this.getCategory1List()
  },
  methods: {
    ...mapActions('category', ['getCategory1List'])
  }
}
</script>

<style>

</style>
