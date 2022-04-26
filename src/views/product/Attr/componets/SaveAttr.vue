<template>
  <el-card>
    <el-form ref="form">
      <el-form-item label="属性名">
        <el-input style="width: 220px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-plus">添加属性值</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="attrValueList" border>
      <el-table-column type="index" label="序号" align="center" width="80" />
      <el-table-column prop="attrName" label="属性名称" />
      <el-table-column label="操作">
        <template v-slot="{}">
          <el-button type="warning" size="mini" icon="el-icon-edit" />
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary">确定</el-button>
    <el-button type="default" @click="$emit('setIsShowAttrList',true)">取消</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'SaveAttr',
  data() {
    return {
      attrValueList: []
    }
  }
}
</script>

<style>
</style>
